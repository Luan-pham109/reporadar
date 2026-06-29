import {
  createSession,
  fail,
  getAuthKv,
  getUserByEmail,
  isValidEmail,
  json,
  normalizeEmail,
  readJson,
  safeUser,
  verifyPassword,
} from '../../_lib/auth.js';
import { recordEvent } from '../../_lib/analytics.js';

export async function onRequestPost(context) {
  try {
    const body = await readJson(context.request);
    const email = normalizeEmail(body.email);
    const password = String(body.password || '');

    if (!isValidEmail(email) || !password) return fail(400, 'Email hoặc mật khẩu không hợp lệ.', 'invalid_login');

    const kv = getAuthKv(context.env);
    const user = await getUserByEmail(kv, email);
    if (!user?.passwordHash) return fail(401, 'Email hoặc mật khẩu không đúng.', 'bad_credentials');

    const passwordOk = await verifyPassword(password, user.passwordHash);
    if (!passwordOk) return fail(401, 'Email hoặc mật khẩu không đúng.', 'bad_credentials');

    const session = await createSession(context, user);
    context.waitUntil?.(
      recordEvent(context, {
        name: 'membership_login_success',
        properties: { method: 'password', surface: 'auth_api' },
      }).catch((error) => console.log('[analytics_error]', error.message)),
    );
    return json(
      { ok: true, user: safeUser(user), expiresAt: session.expiresAt },
      { headers: { 'Set-Cookie': session.cookie } },
    );
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đăng nhập được.', 'login_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
