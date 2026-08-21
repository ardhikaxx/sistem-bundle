import type { APIRoute } from 'astro';
import { createQRIS } from '../../lib/gopay';

export const POST: APIRoute = async ({ request }) => {
	try {
		const { amount } = await request.json();

		if (!amount) {
			return new Response(JSON.stringify({ error: 'amount is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const result = await createQRIS(amount);

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err: any) {
		console.error('Create QRIS error:', err);
		return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
