import type { APIRoute } from 'astro';
import { checkPayment } from '../../lib/gopay';

export const GET: APIRoute = async ({ url }) => {
	try {
		const amount = Number(url.searchParams.get('amount'));
		const trxId = url.searchParams.get('trx_id');

		if (!amount || !trxId) {
			return new Response(JSON.stringify({ error: 'amount and trx_id are required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const result = await checkPayment(amount, trxId);

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err: any) {
		console.error('Check payment error:', err);
		return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
