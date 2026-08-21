const GOPAY_BASE_URL =
	process.env.GOPAY_ENV === 'production'
		? 'https://api.gopay.co.id'
		: 'https://api.sandbox.gopay.co.id';

let accessToken: string | null = null;
let tokenExpiry = 0;

async function getAccessToken(): Promise<string> {
	if (accessToken && Date.now() < tokenExpiry) {
		return accessToken;
	}

	const clientId = process.env.GOPAY_CLIENT_ID;
	const clientSecret = process.env.GOPAY_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		throw new Error('GOPAY_CLIENT_ID and GOPAY_CLIENT_SECRET must be set');
	}

	const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

	const res = await fetch(`${GOPAY_BASE_URL}/v1/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${credentials}`,
		},
		body: JSON.stringify({
			grant_type: 'client_credentials',
		}),
	});

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`GoPay auth failed: ${res.status} ${err}`);
	}

	const data = await res.json();
	accessToken = data.access_token;
	tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
	return accessToken!;
}

export interface CreateChargeParams {
	amount: number;
		phone: string;
	name: string;
}

export interface ChargeResponse {
	id: string;
	status: string;
	amount: { value: number; currency: string };
	merchant_code: string;
	external_id: string;
	payment?: {
		type: string;
		qr_code?: string;
	};
}

export async function createCharge(params: CreateChargeParams): Promise<ChargeResponse> {
	const token = await getAccessToken();
	const merchantCode = process.env.GOPAY_MERCHANT_CODE || '';
	const externalId = `BUNDLE-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

	const res = await fetch(`${GOPAY_BASE_URL}/v1/charges`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			merchant_code: merchantCode,
			external_id: externalId,
			type: 'PAYMENT_QRIS',
			amount: { value: params.amount, currency: 'IDR' },
			customer: {
				name: params.name,
				phone: params.phone,
			},
			callback_url: process.env.GOPAY_CALLBACK_URL || undefined,
		}),
	});

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Create charge failed: ${res.status} ${err}`);
	}

	return res.json();
}

export async function checkChargeStatus(chargeId: string): Promise<ChargeResponse> {
	const token = await getAccessToken();

	const res = await fetch(`${GOPAY_BASE_URL}/v1/charges/${chargeId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Check status failed: ${res.status} ${err}`);
	}

	return res.json();
}
