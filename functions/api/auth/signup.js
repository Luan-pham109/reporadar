import {
  cleanName,
  createSession,
  fail,
  getAuthKv,
  hashPassword,
  isValidEmail,
  json,
  normalizeEmail,
  putUser,
  readJson,
  safeUser,
} from '../../_lib/auth.js';
import { recordEvent } from '../../_lib/analytics.js';

export async function onRequestPost(context) {
  try {
    const body = await readJson(context.request);
    const email = normalizeEmail(body.email);
    const password = String(body.password || '');
    const name = cleanName(body.name);

    if (!isValidEmail(email)) return fail(400, 'Email không hợp lệ.', 'invalid_email');
    if (password.length < 8) return fail(400, 'Mật khẩu cần ít nhất 8 ký tự.', 'weak_password');

    const kv = getAuthKv(context.env);
    const existingUserId = await kv.get(`email:${email}`);
    if (existingUserId) return fail(409, 'Email này đã có tài khoản. Hãy đăng nhập.', 'email_exists');

    const now = new Date().toISOString();
    const user = {
      id: `usr_${crypto.randomUUID()}`,
      email,
      name,
      avatarUrl: '',
      role: 'member',
      providers: { password: { enabled: true } },
      passwordHash: await hashPassword(password),
      createdAt: now,
      updatedAt: now,
    };

    await putUser(kv, user);
    const session = await createSession(context, user);
    context.waitUntil?.(
      recordEvent(context, {
        name: 'membership_signup_success',
        properties: { method: 'password', surface: 'auth_api' },
      }).catch((error) => console.log('[analytics_error]', error.message)),
    );

    return json(
      { ok: true, user: safeUser(user), expiresAt: session.expiresAt },
      { headers: { 'Set-Cookie': session.cookie } },
    );
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không tạo được tài khoản.', 'signup_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
