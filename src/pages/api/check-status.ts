import type { APIRoute } from 'astro';
import { checkChargeStatus } from '../../lib/gopay';

export const GET: APIRoute = async ({ url }) => {
	try {
		const chargeId = url.searchParams.get('id');

		if (!chargeId) {
			return new Response(JSON.stringify({ error: 'id parameter is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const charge = await checkChargeStatus(chargeId);

		return new Response(JSON.stringify(charge), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err: any) {
		console.error('Check status error:', err);
		return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
