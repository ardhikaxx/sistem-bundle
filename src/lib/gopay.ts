const GATEWAY_URL = process.env.GATEWAY_URL || 'http://localhost:3000';
const GATEWAY_API_KEY = process.env.GATEWAY_API_KEY || '';

export interface CreateQRISParams {
	amount: number;
}

export interface QRISResponse {
	success: boolean;
	data?: {
		qris_id: string;
		trx_id: string;
		qris_url: string;
		qris_code: string;
		amount: number;
		expires_at: string;
		expires_in: string;
	};
	message?: string;
}

export interface PaymentCheckResponse {
	success: boolean;
	paid: boolean;
	transaction?: {
		transaction_id: string;
		order_id: string;
		amount: number;
		payer_issuer: string;
		payment_type: string;
		transaction_time: string;
	};
	message?: string;
}

export async function createQRIS(amount: number): Promise<QRISResponse> {
	const res = await fetch(
		`${GATEWAY_URL}/create-qris?amount=${amount}&api_key=${GATEWAY_API_KEY}`
	);

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Create QRIS failed: ${res.status} ${err}`);
	}

	return res.json();
}

export async function checkPayment(
	amount: number,
	trxId: string
): Promise<PaymentCheckResponse> {
	const res = await fetch(
		`${GATEWAY_URL}/check-payment?amount=${amount}&trx_id=${trxId}&api_key=${GATEWAY_API_KEY}`
	);

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Check payment failed: ${res.status} ${err}`);
	}

	return res.json();
}

export async function getQRStatus(qrisId: string) {
	const res = await fetch(`${GATEWAY_URL}/api/qr-status/${qrisId}`);

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Get QR status failed: ${res.status} ${err}`);
	}

	return res.json();
}

export async function getTokenStatus() {
	const res = await fetch(
		`${GATEWAY_URL}/token-status?api_key=${GATEWAY_API_KEY}`
	);

	if (!res.ok) {
		const err = await res.text();
		throw new Error(`Token status failed: ${res.status} ${err}`);
	}

	return res.json();
}
