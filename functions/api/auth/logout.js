import { clearCookie, destroySession, fail, json, sessionCookieName } from '../../_lib/auth.js';

export async function onRequestPost(context) {
  try {
    await destroySession(context);
    return json(
      { ok: true },
      { headers: { 'Set-Cookie': clearCookie(sessionCookieName(), context.request) } },
    );
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đăng xuất được.', 'logout_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
