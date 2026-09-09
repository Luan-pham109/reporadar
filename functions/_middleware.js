import { getSession } from './_lib/auth.js';
import { draftSlugs } from './_generated/draft-slugs.js';

/**
 * Chặn nội dung chưa publish sau cổng đăng nhập.
 *
 * Site build ra static nên draft nằm sẵn trong dist; gate phải ở edge chứ
 * không thể ở build time. Hai nhóm route được bảo vệ:
 *   - /review            → màn hình duyệt draft
 *   - /repos/<draft-slug> → trang chi tiết của record chưa publish
 *
 * Record đã publish, trang chủ, feed và sitemap không đi qua nhánh này.
 */
export function needsMember(pathname) {
  // Pages phục vụ asset không phân biệt hoa thường, nên /Repos/... vẫn ra đúng
  // file. Chuẩn hoá về chữ thường trước khi so, nếu không sẽ có đường vòng.
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (path === '/review') return true;

  const match = /^\/repos\/([a-z0-9][a-z0-9-]*)$/.exec(path);
  return Boolean(match && draftSlugs.has(match[1]));
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (!needsMember(url.pathname)) return context.next();

  let user = null;
  try {
    user = (await getSession(context))?.user || null;
  } catch {
    user = null;
  }

  if (user) {
    const response = await context.next();
    const headers = new Headers(response.headers);
    // Nội dung sau gate không được cache ở CDN hay trình duyệt chung.
    headers.set('Cache-Control', 'private, no-store');
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, { status: response.status, headers });
  }

  const returnTo = url.pathname + url.search;
  return Response.redirect(new URL(`/login?returnTo=${encodeURIComponent(returnTo)}`, url), 302);
}
