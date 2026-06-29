import test from 'node:test';
import assert from 'node:assert/strict';

import {
  base64Url,
  fromBase64Url,
  getCookie,
  isValidEmail,
  makeCookie,
  normalizeEmail,
  safeBrowserReturnTo,
  safeReturnTo,
  sha256Hex,
} from '../functions/_lib/auth.js';

test('safeReturnTo keeps valid relative paths', () => {
  assert.equal(safeReturnTo('/account'), '/account');
});

test('safeReturnTo rejects protocol-relative URLs', () => {
  assert.equal(safeReturnTo('//evil.example', '/feed.json'), '/feed.json');
});

test('safeReturnTo rejects absolute URLs', () => {
  assert.equal(safeReturnTo('https://evil.example/x', '/feed.json'), '/feed.json');
});

test('safeReturnTo rejects newline payloads', () => {
  assert.equal(safeReturnTo('/feed.json\nSet-Cookie:x', '/feed.json'), '/feed.json');
});

test('safeBrowserReturnTo rejects machine-readable pages', () => {
  assert.equal(safeBrowserReturnTo('/feed.json', '/account'), '/account');
  assert.equal(safeBrowserReturnTo('/rss.xml', '/account'), '/account');
});

test('safeBrowserReturnTo keeps normal content pages', () => {
  assert.equal(safeBrowserReturnTo('/repos/postiz-app/', '/account'), '/repos/postiz-app/');
});

test('normalizeEmail trims and lowercases', () => {
  assert.equal(normalizeEmail('  Team@Example.COM '), 'team@example.com');
});

test('isValidEmail accepts a simple valid address', () => {
  assert.equal(isValidEmail('hello@example.com'), true);
});

test('isValidEmail rejects malformed addresses', () => {
  assert.equal(isValidEmail('not-an-email'), false);
});

test('getCookie returns decoded cookie values', () => {
  const request = new Request('https://altstack.vn/login', {
    headers: {
      cookie: 'foo=bar; rr_oauth_return=%2Faccount%3Ftab%3Dprofile',
    },
  });

  assert.equal(getCookie(request, 'rr_oauth_return'), '/account?tab=profile');
});

test('makeCookie includes secure flags for https requests', () => {
  const request = new Request('https://altstack.vn/login');
  const cookie = makeCookie('rr_session', 'token', request, { maxAge: 60 });

  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Max-Age=60/);
  assert.match(cookie, /Secure/);
});

test('makeCookie omits secure for local http requests', () => {
  const request = new Request('http://localhost:8788/login');
  const cookie = makeCookie('rr_session', 'token', request, { maxAge: 60 });

  assert.doesNotMatch(cookie, /Secure/);
});

test('sha256Hex is stable for known input', async () => {
  assert.equal(
    await sha256Hex('AltStack'),
    '4f0182847fde15a760d02f3c4d58372c38743d590d11245f5b6e49179a3ebc06',
  );
});

test('base64Url round-trips bytes through fromBase64Url', () => {
  const input = new Uint8Array([0, 1, 2, 3, 127, 128, 250, 251, 252, 253, 254, 255]);
  const encoded = base64Url(input);
  const decoded = fromBase64Url(encoded);

  assert.deepEqual(Array.from(decoded), Array.from(input));
});
