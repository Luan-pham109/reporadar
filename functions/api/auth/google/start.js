import {
  fail,
  makeCookie,
  oauthReturnCookieName,
  oauthStateCookieName,
  randomToken,
  safeReturnTo,
} from '../../../_lib/auth.js';

export function onRequestGet(context) {
  const clientId = context.env.GOOGLE_CLIENT_ID;
  if (!clientId) return fail(500, 'Thiếu GOOGLE_CLIENT_ID.', 'google_not_configured');

  const requestUrl = new URL(context.request.url);
  const state = randomToken(24);
  const returnTo = safeReturnTo(requestUrl.searchParams.get('returnTo'), '/feed.json');
  const redirectUri = new URL('/api/auth/google/callback', requestUrl.origin).href;

  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'openid email profile');
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('prompt', 'select_account');

  const headers = new Headers({ Location: authUrl.href });
  headers.append('Set-Cookie', makeCookie(oauthStateCookieName(), state, context.request, { maxAge: 600 }));
  headers.append('Set-Cookie', makeCookie(oauthReturnCookieName(), returnTo, context.request, { maxAge: 600 }));

  return new Response(null, { status: 302, headers });
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
