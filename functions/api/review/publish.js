import { fail, getSession, json, normalizeEmail } from '../../_lib/auth.js';
import { updateDraftFrontmatter } from '../../../scripts/lib/draft-frontmatter.mjs';

/**
 * Đổi trạng thái draft/publish của một record ngay từ /review trên production.
 *
 * Trước đây thao tác này chỉ sống trong Vite dev middleware, nên muốn publish
 * là phải mở máy chạy `npm run dev`. Ở đây ta ghi thẳng vào GitHub qua Contents
 * API; nếu Pages đã nối với repo thì commit đó tự kích hoạt build và deploy.
 *
 * Yêu cầu cấu hình (Pages → Settings → Environment variables):
 *   REVIEW_ADMIN_EMAILS  danh sách email được publish, phân tách bằng dấu phẩy
 *   GITHUB_CONTENT_REPO  dạng "owner/repo"
 *   GITHUB_CONTENT_TOKEN fine-grained PAT, quyền Contents: read and write
 *   GITHUB_CONTENT_BRANCH  nhánh đích, mặc định "main"
 */
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;
const API = 'https://api.github.com';

function isAdmin(user, env) {
  const allowed = String(env.REVIEW_ADMIN_EMAILS || '')
    .split(',')
    .map((entry) => normalizeEmail(entry))
    .filter(Boolean);

  if (allowed.length === 0) return false;
  return allowed.includes(normalizeEmail(user.email));
}

function ghHeaders(env) {
  return {
    Authorization: `Bearer ${env.GITHUB_CONTENT_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    // GitHub từ chối request không có User-Agent.
    'User-Agent': 'altstack-review-publish',
  };
}

export async function onRequestPost(context) {
  const { env } = context;

  let user = null;
  try {
    user = (await getSession(context))?.user || null;
  } catch {
    return fail(500, 'Không đọc được phiên đăng nhập.', 'session_failed');
  }

  if (!user) return fail(401, 'Cần đăng nhập.', 'unauthenticated');
  if (!isAdmin(user, env)) return fail(403, 'Tài khoản này không có quyền publish.', 'forbidden');

  if (!env.GITHUB_CONTENT_TOKEN || !env.GITHUB_CONTENT_REPO) {
    return fail(500, 'Thiếu GITHUB_CONTENT_TOKEN hoặc GITHUB_CONTENT_REPO.', 'not_configured');
  }

  let body = {};
  try {
    body = await context.request.json();
  } catch {
    return fail(400, 'Body không phải JSON hợp lệ.', 'bad_request');
  }

  const slug = String(body.slug || '');
  const draft = Boolean(body.draft);
  if (!SLUG_RE.test(slug)) return fail(400, 'Slug không hợp lệ.', 'bad_slug');

  const repo = env.GITHUB_CONTENT_REPO;
  const branch = env.GITHUB_CONTENT_BRANCH || 'main';
  const filePath = `src/content/repos/${slug}.md`;
  const contentsUrl = `${API}/repos/${repo}/contents/${filePath}`;

  const current = await fetch(`${contentsUrl}?ref=${encodeURIComponent(branch)}`, {
    headers: ghHeaders(env),
  });
  if (current.status === 404) return fail(404, `Không tìm thấy ${filePath}.`, 'not_found');
  if (!current.ok) {
    return fail(502, `GitHub trả về ${current.status} khi đọc file.`, 'github_read_failed');
  }

  const meta = await current.json();
  const source = decodeBase64(meta.content || '');
  const next = updateDraftFrontmatter(source, draft);

  if (next === source) {
    return json({ ok: true, slug, draft, changed: false, message: 'Trạng thái đã đúng, không cần commit.' });
  }

  const action = draft ? 'đưa về draft' : 'publish';
  const commit = await fetch(contentsUrl, {
    method: 'PUT',
    headers: { ...ghHeaders(env), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `content: ${action} ${slug}\n\nThao tác từ /review bởi ${user.email}.`,
      content: encodeBase64(next),
      sha: meta.sha,
      branch,
    }),
  });

  if (!commit.ok) {
    const detail = await commit.text();
    return fail(502, `GitHub trả về ${commit.status} khi ghi file. ${detail.slice(0, 200)}`, 'github_write_failed');
  }

  const result = await commit.json();
  return json({
    ok: true,
    slug,
    draft,
    changed: true,
    commit: result.commit?.sha || '',
    message: `Đã ${action} ${slug}. Site cập nhật sau khi Cloudflare build xong commit này.`,
  });
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}

function decodeBase64(value) {
  const binary = atob(String(value).replace(/\s/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function encodeBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
