import { memberFeed } from '../_generated/member-feed.js';

export const SAVED_REPO_STATUSES = [
  'want_to_try',
  'testing',
  'watching',
  'skipped',
  'using',
];
export const DEFAULT_SAVED_REPO_STATUS = 'want_to_try';
export const MAX_SAVED_REPO_NOTE_LENGTH = 1000;

const SAVED_REPO_STATUS_SET = new Set(SAVED_REPO_STATUSES);
const MEMBER_SAVED_REPOS_VERSION = 1;
const REPO_SUMMARY_INDEX = new Map(memberFeed.items.map((item) => [item.slug, summarizeRepo(item)]));

export function savedReposKey(userId) {
  return `member:${String(userId || '').trim()}:savedRepos:v1`;
}

export function isValidSavedRepoStatus(value) {
  return SAVED_REPO_STATUS_SET.has(String(value || '').trim());
}

export function isKnownRepoSlug(slug) {
  return REPO_SUMMARY_INDEX.has(String(slug || '').trim());
}

export function cleanSavedRepoNote(value) {
  const note = String(value || '').trim();
  return note.length > MAX_SAVED_REPO_NOTE_LENGTH ? note.slice(0, MAX_SAVED_REPO_NOTE_LENGTH) : note;
}

export function normalizeSavedReposDocument(value) {
  const source = value && typeof value === 'object' ? value : {};
  const items = {};

  if (source.items && typeof source.items === 'object') {
    for (const [slug, item] of Object.entries(source.items)) {
      const normalized = normalizeSavedRepoItem({ ...(item || {}), slug });
      if (!normalized) continue;
      items[normalized.slug] = normalized;
    }
  }

  return {
    version: MEMBER_SAVED_REPOS_VERSION,
    updatedAt: normalizeIsoTimestamp(source.updatedAt),
    items,
  };
}

export function applySavedRepoMutation(document, input, now = new Date().toISOString()) {
  const nextDocument = normalizeSavedReposDocument(document);
  const slug = normalizeSlug(input?.slug);
  const existing = nextDocument.items[slug];
  const item = {
    slug,
    status: isValidSavedRepoStatus(input?.status)
      ? String(input.status).trim()
      : existing?.status || DEFAULT_SAVED_REPO_STATUS,
    note: input?.note === undefined ? existing?.note || '' : cleanSavedRepoNote(input.note),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };

  nextDocument.items[slug] = item;
  nextDocument.updatedAt = now;
  return { document: nextDocument, item };
}

export function removeSavedRepo(document, slug, now = new Date().toISOString()) {
  const nextDocument = normalizeSavedReposDocument(document);
  const normalizedSlug = normalizeSlug(slug);
  const removed = Boolean(nextDocument.items[normalizedSlug]);
  if (removed) {
    delete nextDocument.items[normalizedSlug];
    nextDocument.updatedAt = now;
  }
  return { document: nextDocument, removed };
}

export function listSavedRepoItems(document) {
  const normalized = normalizeSavedReposDocument(document);
  return Object.values(normalized.items)
    .map((item) => enrichSavedRepoItem(item))
    .sort((a, b) => {
      const aTime = Date.parse(a.updatedAt || a.createdAt || '') || 0;
      const bTime = Date.parse(b.updatedAt || b.createdAt || '') || 0;
      return bTime - aTime;
    });
}

export function getSavedRepo(slug, document) {
  const normalized = normalizeSavedReposDocument(document);
  const item = normalized.items[normalizeSlug(slug)];
  return item ? enrichSavedRepoItem(item) : null;
}

export async function loadSavedRepos(kv, userId) {
  const raw = await kv.get(savedReposKey(userId), { type: 'json' });
  return normalizeSavedReposDocument(raw);
}

export async function storeSavedRepos(kv, userId, document) {
  await kv.put(savedReposKey(userId), JSON.stringify(normalizeSavedReposDocument(document)));
}

export function buildSavedRepoResponse(item) {
  if (!item) return { saved: false, item: null, repo: null };
  return { saved: true, item, repo: item.repo };
}

function normalizeSavedRepoItem(value) {
  const slug = normalizeSlug(value?.slug);
  if (!slug || !isValidSavedRepoStatus(value?.status)) return null;

  const createdAt = normalizeIsoTimestamp(value?.createdAt);
  const updatedAt = normalizeIsoTimestamp(value?.updatedAt);

  return {
    slug,
    status: String(value.status).trim(),
    note: cleanSavedRepoNote(value.note),
    createdAt: createdAt || updatedAt || '',
    updatedAt: updatedAt || createdAt || '',
  };
}

function enrichSavedRepoItem(item) {
  const repo = REPO_SUMMARY_INDEX.get(item.slug) || {
    slug: item.slug,
    url: `/repos/${item.slug}`,
    name: item.slug,
    oneLiner: 'Repo này không còn trong member feed hiện tại.',
    vertical: [],
    tags: [],
    evidenceLevel: null,
    confidence: null,
    publishedAt: null,
    repoStats: null,
    week: '',
  };

  return {
    ...item,
    available: REPO_SUMMARY_INDEX.has(item.slug),
    repo,
  };
}

function summarizeRepo(item) {
  return {
    slug: item.slug,
    url: item.url,
    name: item.name,
    oneLiner: item.oneLiner,
    vertical: item.vertical || [],
    tags: item.tags || [],
    evidenceLevel: item.evidenceLevel || null,
    confidence: item.confidence || null,
    publishedAt: item.publishedAt || null,
    repoStats: item.repoStats || null,
    week: item.week || '',
  };
}

function normalizeSlug(value) {
  return String(value || '').trim();
}

function normalizeIsoTimestamp(value) {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}
