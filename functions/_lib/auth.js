const SESSION_COOKIE = 'rr_session';
const OAUTH_STATE_COOKIE = 'rr_oauth_state';
const OAUTH_RETURN_COOKIE = 'rr_oauth_return';

const DEFAULT_SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;
const PASSWORD_ITERATIONS = 210000;
const PASSWORD_SALT_BYTES = 16;
const PASSWORD_HASH_BYTES = 32;

const encoder = new TextEncoder();

export function json(data, init = {}) {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'no-store');
  return new Response(JSON.stringify(data, null, 2), { ...init, headers });
}

export function fail(status, message, code = 'error') {
  return json({ ok: false, code, message }, { status });
}

export function getAuthKv(env) {
  if (!env.AUTH_KV) {
    throw new Error('Missing AUTH_KV binding. Add a Cloudflare Pages KV binding named AUTH_KV.');
  }
  return env.AUTH_KV;
}

export async function readJson(request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) return {};
  return request.json();
}

export function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function cleanName(value) {
  const name = String(value || '').trim();
  return name.length > 80 ? name.slice(0, 80) : name;
}

export function safeUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name || '',
    avatarUrl: user.avatarUrl || '',
    role: user.role || 'member',
    providers: Object.keys(user.providers || {}),
    createdAt: user.createdAt,
  };
}

export function safeReturnTo(value, fallback = '/') {
  const returnTo = String(value || '').trim();
  if (!returnTo || returnTo.length > 512) return fallback;
  if (!returnTo.startsWith('/') || returnTo.startsWith('//')) return fallback;
  if (/[\r\n]/.test(returnTo)) return fallback;
  return returnTo;
}

export function getCookie(request, name) {
  const cookie = request.headers.get('cookie') || '';
  const parts = cookie.split(';');
  for (const part of parts) {
    const [rawKey, ...rawValue] = part.trim().split('=');
    if (rawKey === name) return decodeURIComponent(rawValue.join('='));
  }
  return '';
}

export function makeCookie(name, value, request, options = {}) {
  const url = new URL(request.url);
  const secure = url.protocol === 'https:';
  const maxAge = options.maxAge ?? DEFAULT_SESSION_TTL_SECONDS;
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${maxAge}`,
  ];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

export function clearCookie(name, request) {
  return makeCookie(name, '', request, { maxAge: 0 });
}

export function getSessionTtl(env) {
  const configured = Number(env.AUTH_SESSION_TTL_SECONDS || DEFAULT_SESSION_TTL_SECONDS);
  if (!Number.isFinite(configured) || configured < 3600) return DEFAULT_SESSION_TTL_SECONDS;
  return Math.floor(configured);
}

export async function hashPassword(password) {
  const salt = randomBytes(PASSWORD_SALT_BYTES);
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PASSWORD_ITERATIONS },
    key,
    PASSWORD_HASH_BYTES * 8,
  );
  return `pbkdf2:sha256:${PASSWORD_ITERATIONS}:${base64Url(salt)}:${base64Url(new Uint8Array(bits))}`;
}

export async function verifyPassword(password, encodedHash) {
  const parts = String(encodedHash || '').split(':');
  if (parts.length !== 5 || parts[0] !== 'pbkdf2' || parts[1] !== 'sha256') return false;
  const iterations = Number(parts[2]);
  if (!Number.isInteger(iterations) || iterations < 100000) return false;

  const salt = fromBase64Url(parts[3]);
  const expected = fromBase64Url(parts[4]);
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
    key,
    expected.byteLength * 8,
  );
  return constantTimeEqual(new Uint8Array(bits), expected);
}

export async function getUserByEmail(kv, email) {
  const userId = await kv.get(`email:${email}`);
  if (!userId) return null;
  return getUserById(kv, userId);
}

export async function getUserById(kv, userId) {
  return kv.get(`user:${userId}`, { type: 'json' });
}

export async function putUser(kv, user) {
  await kv.put(`user:${user.id}`, JSON.stringify(user));
  await kv.put(`email:${user.email}`, user.id);
  if (user.providers?.google?.sub) {
    await kv.put(`google:${user.providers.google.sub}`, user.id);
  }
}

export async function createSession(context, user) {
  const kv = getAuthKv(context.env);
  const ttl = getSessionTtl(context.env);
  const token = base64Url(randomBytes(32));
  const tokenHash = await sha256Hex(token);
  const expiresAt = new Date(Date.now() + ttl * 1000).toISOString();

  await kv.put(
    `session:${tokenHash}`,
    JSON.stringify({
      userId: user.id,
      email: user.email,
      role: user.role || 'member',
      createdAt: new Date().toISOString(),
      expiresAt,
    }),
    { expirationTtl: ttl },
  );

  return {
    token,
    cookie: makeCookie(SESSION_COOKIE, token, context.request, { maxAge: ttl }),
    expiresAt,
  };
}

export async function getSession(context) {
  const token = getCookie(context.request, SESSION_COOKIE);
  if (!token) return null;

  const kv = getAuthKv(context.env);
  const tokenHash = await sha256Hex(token);
  const session = await kv.get(`session:${tokenHash}`, { type: 'json' });
  if (!session) return null;
  if (session.expiresAt && Date.parse(session.expiresAt) <= Date.now()) {
    await kv.delete(`session:${tokenHash}`);
    return null;
  }

  const user = await getUserById(kv, session.userId);
  if (!user) {
    await kv.delete(`session:${tokenHash}`);
    return null;
  }

  return { tokenHash, session, user };
}

export async function requireUser(context) {
  const current = await getSession(context);
  return current?.user || null;
}

export async function destroySession(context) {
  const token = getCookie(context.request, SESSION_COOKIE);
  if (token) {
    const kv = getAuthKv(context.env);
    await kv.delete(`session:${await sha256Hex(token)}`);
  }
}

export function sessionCookieName() {
  return SESSION_COOKIE;
}

export function oauthStateCookieName() {
  return OAUTH_STATE_COOKIE;
}

export function oauthReturnCookieName() {
  return OAUTH_RETURN_COOKIE;
}

export function randomToken(byteLength = 32) {
  return base64Url(randomBytes(byteLength));
}

export async function sha256Hex(value) {
  const hash = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function randomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function base64Url(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value) {
  const base64 = String(value).replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function constantTimeEqual(a, b) {
  const max = Math.max(a.byteLength, b.byteLength);
  let diff = a.byteLength ^ b.byteLength;
  for (let i = 0; i < max; i += 1) {
    diff |= (a[i] || 0) ^ (b[i] || 0);
  }
  return diff === 0;
}
