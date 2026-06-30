const baseUrl = process.env.SMOKE_BASE_URL || process.argv[2] || 'http://localhost:8788';

async function main() {
  console.log(`Running auth smoke checks against ${baseUrl}`);

  await checkGuestMe();
  await checkGuestFeed();
  await checkEventsEndpoint();
  await checkPasswordRouteRemoved();
  await checkMemberRepoRequiresAuth();
  await checkSavedReposRequireAuth();

  console.log('Auth smoke checks passed.');
}

async function checkGuestMe() {
  const response = await fetch(`${baseUrl}/api/auth/me`);
  const payload = await response.json();

  assert(response.ok, `/api/auth/me should return 200, got ${response.status}`);
  assert(payload.ok === true, '/api/auth/me should return ok: true');
  assert(payload.user === null, '/api/auth/me should return user: null for guests');
}

async function checkGuestFeed() {
  const response = await fetch(`${baseUrl}/feed.json`);
  const payload = await response.json();

  assert(response.status === 401, `/feed.json should return 401 for guests, got ${response.status}`);
  assert(payload.access === 'auth_required', '/feed.json should require auth for guests');
  assert(
    typeof payload.loginUrl === 'string' && payload.loginUrl.includes('returnTo=%2Faccount'),
    '/feed.json should include a loginUrl with returnTo=/account',
  );
}

async function checkEventsEndpoint() {
  const response = await fetch(`${baseUrl}/api/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'smoke_test',
      path: '/smoke',
      properties: { surface: 'script' },
    }),
  });
  const payload = await response.json();

  assert(response.ok, `/api/events should return 200, got ${response.status}`);
  assert(payload.ok === true, '/api/events should return ok: true');
}

async function checkPasswordRouteRemoved() {
  const response = await fetch(`${baseUrl}/api/auth/login`, { method: 'POST' });
  assert(
    response.status === 404 || response.status === 405,
    `/api/auth/login should be unavailable (404/405), got ${response.status}`,
  );
}

async function checkMemberRepoRequiresAuth() {
  const response = await fetch(`${baseUrl}/api/member/repos/postiz-app`);
  const payload = await response.json();

  assert(response.status === 401, `/api/member/repos/postiz-app should return 401 for guests, got ${response.status}`);
  assert(payload.code === 'auth_required', '/api/member/repos/postiz-app should require auth for guests');
  assert(
    typeof payload.loginUrl === 'string' && payload.loginUrl.includes('returnTo=%2Frepos%2Fpostiz-app%2F'),
    '/api/member/repos/postiz-app should return a repo detail loginUrl',
  );
}

async function checkSavedReposRequireAuth() {
  const listResponse = await fetch(`${baseUrl}/api/member/saved-repos`);
  const listPayload = await listResponse.json();

  assert(listResponse.status === 401, `/api/member/saved-repos should return 401 for guests, got ${listResponse.status}`);
  assert(listPayload.code === 'auth_required', '/api/member/saved-repos should require auth for guests');

  const itemResponse = await fetch(`${baseUrl}/api/member/saved-repos/postiz-app`);
  const itemPayload = await itemResponse.json();

  assert(
    itemResponse.status === 401,
    `/api/member/saved-repos/postiz-app should return 401 for guests, got ${itemResponse.status}`,
  );
  assert(itemPayload.code === 'auth_required', '/api/member/saved-repos/postiz-app should require auth for guests');
  assert(
    typeof itemPayload.loginUrl === 'string' && itemPayload.loginUrl.includes('returnTo=%2Frepos%2Fpostiz-app%2F'),
    '/api/member/saved-repos/postiz-app should return a repo detail loginUrl',
  );
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
