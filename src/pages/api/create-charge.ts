import type { APIRoute } from 'astro';
import { createCharge } from '../../lib/gopay';

export const POST: APIRoute = async ({ request }) => {
	try {
		const { amount, phone, name } = await request.json();

		if (!amount || !phone || !name) {
			return new Response(JSON.stringify({ error: 'amount, phone, and name are required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const charge = await createCharge({ amount, phone, name });

		return new Response(JSON.stringify(charge), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err: any) {
		console.error('Create charge error:', err);
		return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
