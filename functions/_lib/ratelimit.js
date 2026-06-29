import { fail } from './auth.js';

export async function consumeRateLimit(context, options) {
  const scope = String(options.scope || 'default');
  const limit = Number(options.limit || 0);
  const windowSeconds = Math.max(1, Number(options.windowSeconds || 60));
  const kv = getRateLimitKv(context.env, options.kvBinding);
  const retryAfter = getRetryAfter(windowSeconds);

  if (!kv || !limit) {
    return { ok: true, remaining: limit, retryAfter };
  }

  const ipHash = await hashRequestIp(context.request);
  if (!ipHash) {
    return { ok: true, remaining: limit, retryAfter };
  }

  const bucket = Math.floor(Date.now() / 1000 / windowSeconds);
  const key = `rl:${scope}:${ipHash}:${bucket}`;
  const used = Number(await kv.get(key)) || 0;
  const next = used + 1;

  await kv.put(key, String(next), { expirationTtl: windowSeconds + 10 });

  return {
    ok: next <= limit,
    remaining: Math.max(limit - next, 0),
    retryAfter,
  };
}

export function rateLimited(message, details) {
  return fail(429, message, 'rate_limited', {
    headers: {
      'Retry-After': String(details.retryAfter),
      'X-RateLimit-Remaining': String(details.remaining),
    },
  });
}

function getRateLimitKv(env, kvBinding = 'AUTH_KV') {
  const bindings = Array.isArray(kvBinding) ? kvBinding : [kvBinding];
  for (const name of bindings) {
    if (name && env?.[name]) return env[name];
  }
  return null;
}

function getRetryAfter(windowSeconds) {
  const nowSeconds = Math.floor(Date.now() / 1000);
  return Math.max(1, windowSeconds - (nowSeconds % windowSeconds));
}

async function hashRequestIp(request) {
  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '';
  if (!ip) return '';

  const salt = String(request.headers.get('host') || 'altstack');
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
