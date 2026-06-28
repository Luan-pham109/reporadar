import { fail, getSession, json, safeUser } from '../../_lib/auth.js';

export async function onRequestGet(context) {
  try {
    const current = await getSession(context);
    return json({ ok: true, user: safeUser(current?.user) });
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đọc được phiên đăng nhập.', 'me_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
