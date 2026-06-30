import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_SAVED_REPO_STATUS,
  SAVED_REPO_STATUSES,
  applySavedRepoMutation,
  cleanSavedRepoNote,
  listSavedRepoItems,
  normalizeSavedReposDocument,
} from '../functions/_lib/member-saves.js';
import { createSession, putUser, sessionCookieName } from '../functions/_lib/auth.js';
import { onRequestGet as onSavedReposGet } from '../functions/api/member/saved-repos.js';
import {
  onRequestDelete as onSavedRepoDelete,
  onRequestGet as onSavedRepoGet,
  onRequestPatch as onSavedRepoPatch,
  onRequestPut as onSavedRepoPut,
} from '../functions/api/member/saved-repos/[slug].js';

test('cleanSavedRepoNote trims whitespace and caps long notes', () => {
  assert.equal(cleanSavedRepoNote('  hello shortlist  '), 'hello shortlist');
  assert.equal(cleanSavedRepoNote(` ${'a'.repeat(1205)} `).length, 1000);
});

test('normalizeSavedReposDocument keeps only valid saved repo items', () => {
  const document = normalizeSavedReposDocument({
    updatedAt: '2026-06-30T09:00:00.000Z',
    items: {
      'postiz-app': {
        slug: 'postiz-app',
        status: 'testing',
        note: 'keep me',
        createdAt: '2026-06-29T09:00:00.000Z',
        updatedAt: '2026-06-30T09:00:00.000Z',
      },
      'broken-item': {
        slug: 'broken-item',
        status: 'unknown-status',
      },
      '': {
        slug: '',
        status: 'testing',
      },
    },
  });

  assert.deepEqual(Object.keys(document.items), ['postiz-app']);
  assert.equal(document.items['postiz-app'].status, 'testing');
});

test('applySavedRepoMutation defaults first save to want_to_try and preserves createdAt', () => {
  const now = '2026-06-30T10:00:00.000Z';
  const first = applySavedRepoMutation(normalizeSavedReposDocument(null), {
    slug: 'postiz-app',
  }, now);

  assert.equal(first.item.status, DEFAULT_SAVED_REPO_STATUS);
  assert.equal(first.item.createdAt, now);

  const second = applySavedRepoMutation(first.document, {
    slug: 'postiz-app',
    status: 'testing',
  }, '2026-06-30T11:00:00.000Z');

  assert.equal(second.item.status, 'testing');
  assert.equal(second.item.createdAt, now);
});

test('listSavedRepoItems sorts newest first and tolerates missing repo metadata', () => {
  const document = normalizeSavedReposDocument({
    items: {
      'missing-repo': {
        slug: 'missing-repo',
        status: DEFAULT_SAVED_REPO_STATUS,
        note: '',
        createdAt: '2026-06-30T08:00:00.000Z',
        updatedAt: '2026-06-30T08:00:00.000Z',
      },
      'postiz-app': {
        slug: 'postiz-app',
        status: 'testing',
        note: 'top pick',
        createdAt: '2026-06-30T09:00:00.000Z',
        updatedAt: '2026-06-30T09:00:00.000Z',
      },
    },
  });

  const items = listSavedRepoItems(document);

  assert.equal(items[0].slug, 'postiz-app');
  assert.equal(items[0].repo.name, 'Postiz');
  assert.equal(items[1].available, false);
});

test('saved repo routes require auth for guests', async () => {
  const context = {
    env: { AUTH_KV: new MemoryKv() },
    request: new Request('https://altstack.vn/api/member/saved-repos'),
  };

  const response = await onSavedReposGet(context);
  const payload = await response.json();

  assert.equal(response.status, 401);
  assert.equal(payload.code, 'auth_required');
});

test('saved repo routes support save, patch, list, and delete for members', async () => {
  const kv = new MemoryKv();

  const putResponse = await onSavedRepoPut(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos/postiz-app',
    method: 'PUT',
    params: { slug: 'postiz-app' },
    body: {},
  }));
  const putPayload = await putResponse.json();
  assert.equal(putResponse.status, 200);
  assert.equal(putPayload.item.status, DEFAULT_SAVED_REPO_STATUS);

  const patchResponse = await onSavedRepoPatch(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos/postiz-app',
    method: 'PATCH',
    params: { slug: 'postiz-app' },
    body: { status: 'testing', note: '  pilot for client A  ' },
  }));
  const patchPayload = await patchResponse.json();
  assert.equal(patchPayload.item.status, 'testing');
  assert.equal(patchPayload.item.note, 'pilot for client A');

  const getResponse = await onSavedRepoGet(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos/postiz-app',
    params: { slug: 'postiz-app' },
  }));
  const getPayload = await getResponse.json();
  assert.equal(getPayload.saved, true);
  assert.equal(getPayload.item.repo.slug, 'postiz-app');

  const listResponse = await onSavedReposGet(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos',
  }));
  const listPayload = await listResponse.json();
  assert.equal(listPayload.count, 1);
  assert.equal(listPayload.items[0].status, 'testing');

  const deleteResponse = await onSavedRepoDelete(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos/postiz-app',
    method: 'DELETE',
    params: { slug: 'postiz-app' },
  }));
  const deletePayload = await deleteResponse.json();
  assert.equal(deletePayload.removed, true);

  const afterDeleteResponse = await onSavedRepoGet(await makeAuthedContext(kv, {
    path: 'https://altstack.vn/api/member/saved-repos/postiz-app',
    params: { slug: 'postiz-app' },
  }));
  const afterDeletePayload = await afterDeleteResponse.json();
  assert.equal(afterDeletePayload.saved, false);
});

test('saved repo statuses stay on the supported shortlist states', () => {
  assert.deepEqual(SAVED_REPO_STATUSES, [
    'want_to_try',
    'testing',
    'watching',
    'skipped',
    'using',
  ]);
});

class MemoryKv {
  constructor() {
    this.store = new Map();
  }

  async get(key, options = {}) {
    if (!this.store.has(key)) return null;
    const value = this.store.get(key);
    if (options.type === 'json') return JSON.parse(value);
    return value;
  }

  async put(key, value) {
    this.store.set(key, String(value));
  }

  async delete(key) {
    this.store.delete(key);
  }
}

async function makeAuthedContext(kv, { path, method = 'GET', params = {}, body } = {}) {
  const env = { AUTH_KV: kv };
  const user = {
    id: 'user_saved_repo_test',
    email: 'member@example.com',
    name: 'Saved Repo Tester',
    avatarUrl: '',
    role: 'member',
    providers: { google: { sub: 'google-user-123' } },
    createdAt: '2026-06-30T08:00:00.000Z',
  };

  await putUser(kv, user);

  const seedContext = {
    env,
    request: new Request(path, { method: 'GET' }),
  };
  const session = await createSession(seedContext, user);

  const headers = new Headers();
  headers.set('cookie', `${sessionCookieName()}=${session.token}`);
  if (body !== undefined) headers.set('content-type', 'application/json');

  return {
    env,
    params,
    request: new Request(path, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),
  };
}
