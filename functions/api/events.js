import { analyticsOk, recordEvent } from '../_lib/analytics.js';
import { consumeRateLimit } from '../_lib/ratelimit.js';

export async function onRequestPost(context) {
  try {
    const limit = await consumeRateLimit(context, {
      scope: 'events',
      limit: 120,
      windowSeconds: 60,
      kvBinding: ['ANALYTICS_KV', 'EVENTS_KV'],
    });
    if (!limit.ok) {
      return analyticsOk({ queued: false, rateLimited: true });
    }

    const contentType = context.request.headers.get('content-type') || '';
    const body = contentType.includes('application/json') ? await context.request.json() : {};
    const event = await recordEvent(context, body);
    return analyticsOk({ event: event.name });
  } catch (error) {
    console.log('[analytics_error]', error instanceof Error ? error.message : String(error));
    return analyticsOk({ queued: false });
  }
}

export function onRequest() {
  return new Response(JSON.stringify({ ok: false, code: 'method_not_allowed' }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
