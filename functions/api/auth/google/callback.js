import {
  cleanName,
  clearCookie,
  createSession,
  fail,
  getAuthKv,
  getCookie,
  getUserByEmail,
  getUserById,
  json,
  oauthReturnCookieName,
  oauthStateCookieName,
  putUser,
  safeReturnTo,
} from '../../../_lib/auth.js';
import { recordEvent } from '../../../_lib/analytics.js';

export async function onRequestGet(context) {
  try {
    const requestUrl = new URL(context.request.url);
    const state = requestUrl.searchParams.get('state') || '';
    const expectedState = getCookie(context.request, oauthStateCookieName());
    if (!state || !expectedState || state !== expectedState) {
      return fail(400, 'Phiên đăng nhập Google đã hết hạn. Hãy thử lại.', 'bad_oauth_state');
    }

    const code = requestUrl.searchParams.get('code');
    if (!code) return fail(400, 'Google không trả về mã xác thực.', 'missing_oauth_code');

    const googleProfile = await fetchGoogleProfile(context, code, requestUrl.origin);
    if (!googleProfile.email || !googleProfile.email_verified) {
      return fail(403, 'Google account cần email đã xác minh.', 'email_not_verified');
    }

    const kv = getAuthKv(context.env);
    const email = googleProfile.email.toLowerCase();
    const now = new Date().toISOString();

    let user = null;
    let isNewUser = false;
    const googleUserId = await kv.get(`google:${googleProfile.sub}`);
    if (googleUserId) user = await getUserById(kv, googleUserId);
    if (!user) user = await getUserByEmail(kv, email);

    if (user) {
      user.providers = {
        ...(user.providers || {}),
        google: { sub: googleProfile.sub, linkedAt: user.providers?.google?.linkedAt || now },
      };
      user.name = user.name || cleanName(googleProfile.name);
      user.avatarUrl = user.avatarUrl || googleProfile.picture || '';
      user.updatedAt = now;
    } else {
      isNewUser = true;
      user = {
        id: `usr_${crypto.randomUUID()}`,
        email,
        name: cleanName(googleProfile.name),
        avatarUrl: googleProfile.picture || '',
        role: 'member',
        providers: { google: { sub: googleProfile.sub, linkedAt: now } },
        createdAt: now,
        updatedAt: now,
      };
    }

    await putUser(kv, user);
    const session = await createSession(context, user);
    const returnTo = safeReturnTo(getCookie(context.request, oauthReturnCookieName()), '/feed.json');
    context.waitUntil?.(
      recordEvent(context, {
        name: isNewUser ? 'membership_signup_success' : 'membership_login_success',
        properties: { method: 'google', surface: 'google_callback', created: isNewUser },
      }).catch((error) => console.log('[analytics_error]', error.message)),
    );

    const headers = new Headers({ Location: returnTo });
    headers.append('Set-Cookie', session.cookie);
    headers.append('Set-Cookie', clearCookie(oauthStateCookieName(), context.request));
    headers.append('Set-Cookie', clearCookie(oauthReturnCookieName(), context.request));
    return new Response(null, { status: 302, headers });
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đăng nhập Google được.', 'google_login_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}

async function fetchGoogleProfile(context, code, origin) {
  const clientId = context.env.GOOGLE_CLIENT_ID;
  const clientSecret = context.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('Thiếu GOOGLE_CLIENT_ID hoặc GOOGLE_CLIENT_SECRET.');

  const redirectUri = new URL('/api/auth/google/callback', origin).href;
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  if (!tokenResponse.ok) throw new Error('Google token exchange thất bại.');
  const token = await tokenResponse.json();
  if (!token.access_token) throw new Error('Google không trả về access token.');

  const profileResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!profileResponse.ok) throw new Error('Không đọc được hồ sơ Google.');
  return profileResponse.json();
}
