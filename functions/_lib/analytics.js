const MAX_EVENT_NAME_LENGTH = 80;
const MAX_PROPERTY_KEYS = 24;
const MAX_PROPERTY_VALUE_LENGTH = 300;

export async function recordEvent(context, event) {
  const payload = await normalizeEvent(context, event);
  const kv = context.env?.ANALYTICS_KV || context.env?.EVENTS_KV;

  if (kv) {
    const day = payload.timestamp.slice(0, 10);
    const key = `event:${day}:${Date.now()}:${crypto.randomUUID()}`;
    await kv.put(key, JSON.stringify(payload), { expirationTtl: 60 * 60 * 24 * 180 });
  } else {
    console.log('[analytics]', JSON.stringify(payload));
  }

  return payload;
}

export async function normalizeEvent(context, event) {
  const request = context.request;
  const url = new URL(request.url);
  const body = event && typeof event === 'object' ? event : {};
  const name = cleanString(body.name || body.event || 'unknown_event', MAX_EVENT_NAME_LENGTH);

  return {
    name,
    timestamp: new Date().toISOString(),
    path: cleanString(body.path || url.pathname, 240),
    referrer: cleanString(body.referrer || request.headers.get('referer') || '', 500),
    anonymousId: cleanString(body.anonymousId || '', 120),
    sessionId: cleanString(body.sessionId || '', 120),
    userAgent: cleanString(request.headers.get('user-agent') || '', 500),
    country: cleanString(request.cf?.country || '', 8),
    ipHash: await hashIp(request),
    properties: cleanProperties(body.properties),
  };
}

export function analyticsOk(data = {}) {
  return new Response(JSON.stringify({ ok: true, ...data }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function cleanProperties(input) {
  const source = input && typeof input === 'object' ? input : {};
  const entries = Object.entries(source).slice(0, MAX_PROPERTY_KEYS);
  return Object.fromEntries(
    entries
      .filter(([key]) => /^[a-zA-Z0-9_.:-]{1,80}$/.test(key))
      .map(([key, value]) => [key, cleanPropertyValue(value)]),
  );
}

function cleanPropertyValue(value) {
  if (value == null) return '';
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  if (Array.isArray(value)) return value.slice(0, 12).map((item) => cleanString(item, 80));
  return cleanString(value, MAX_PROPERTY_VALUE_LENGTH);
}

function cleanString(value, maxLength) {
  const text = String(value || '').trim();
  return text.length > maxLength ? text.slice(0, maxLength) : text;
}

async function hashIp(request) {
  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '';
  if (!ip) return '';
  const salt = String(request.headers.get('host') || 'altstack');
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
