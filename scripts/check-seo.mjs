/**
 * SEO technical quality gate — chạy sau `astro build` (xem package.json `build`).
 *
 * GTM của AltStack dựa vào SEO, nên mỗi trang public build ra PHẢI đạt các bất biến
 * kỹ thuật dưới đây. Vi phạm "hard" → exit 1 → fail build. Đây là enforce, không phải gợi ý.
 *
 * Bất biến (per public page):
 *   - có <title>, độ dài ≤ titleMax
 *   - có meta description, độ dài trong [descMin, descMax]
 *   - có <link rel=canonical>
 *   - đúng 1 <h1>
 *   - có og:title
 *   - có ≥1 JSON-LD
 * Toàn site:
 *   - title KHÔNG trùng, description KHÔNG trùng
 *   - sitemap-index.xml tồn tại
 *   - mọi trang public indexable có mặt trong sitemap (không mồ côi)
 *   - trang noindex KHÔNG được nằm trong sitemap (rò rỉ)
 *
 * Trang "private" (login/account/review/alt-preview) và trang noindex/404 được loại khỏi gate.
 */
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const LIMITS = { titleMax: 62, descMin: 70, descMax: 160 };
const PRIVATE_PREFIXES = ['/login', '/account', '/review', '/alt-preview'];
const SITEMAP_OPTIONAL = new Set(['/404']);

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function routeOf(file) {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  return '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
}

function firstMatch(html, re) {
  return (html.match(re)?.[1] || '').trim();
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

const files = await htmlFiles(DIST);
const hardErrors = [];
const titleSeen = new Map();
const descSeen = new Map();
const sitemapRoutes = new Set();

if (await exists(path.join(DIST, 'sitemap-0.xml'))) {
  const sm = await readFile(path.join(DIST, 'sitemap-0.xml'), 'utf8');
  for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      sitemapRoutes.add(new URL(m[1]).pathname);
    } catch {
      /* ignore */
    }
  }
}

if (!(await exists(path.join(DIST, 'sitemap-index.xml')))) {
  hardErrors.push('GLOBAL → thiếu sitemap-index.xml');
}

for (const file of files) {
  const route = routeOf(file);
  const html = await readFile(file, 'utf8');
  const noindex = /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);
  const isPrivate = PRIVATE_PREFIXES.some((p) => route === p || route.startsWith(p + '/') || route === p + '/');
  const inSitemap = sitemapRoutes.has(route) || sitemapRoutes.has(route.endsWith('/') ? route : route + '/');

  // Rò rỉ: noindex nhưng vẫn nằm trong sitemap.
  if (noindex && inSitemap) hardErrors.push(`${route} → noindex nhưng có trong sitemap (rò rỉ)`);

  if (isPrivate || noindex) continue;

  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/);
  const desc = firstMatch(html, /<meta name="description" content="([\s\S]*?)"/);
  const hasCanonical = /<link rel="canonical"/.test(html);
  const h1 = (html.match(/<h1[^>]*>/g) || []).length;
  const hasOg = /<meta property="og:title"/.test(html);
  const jsonld = (html.match(/application\/ld\+json/g) || []).length;

  if (!title) hardErrors.push(`${route} → thiếu <title>`);
  else if (title.length > LIMITS.titleMax) hardErrors.push(`${route} → title ${title.length}>${LIMITS.titleMax}`);
  if (!desc) hardErrors.push(`${route} → thiếu meta description`);
  else if (desc.length < LIMITS.descMin || desc.length > LIMITS.descMax)
    hardErrors.push(`${route} → description ${desc.length} ngoài [${LIMITS.descMin},${LIMITS.descMax}]`);
  if (!hasCanonical) hardErrors.push(`${route} → thiếu canonical`);
  if (h1 !== 1) hardErrors.push(`${route} → có ${h1} thẻ <h1> (cần đúng 1)`);
  if (!hasOg) hardErrors.push(`${route} → thiếu og:title`);
  if (jsonld === 0) hardErrors.push(`${route} → thiếu JSON-LD structured data`);
  if (!inSitemap && !SITEMAP_OPTIONAL.has(route)) hardErrors.push(`${route} → indexable nhưng vắng trong sitemap (mồ côi)`);

  if (title) titleSeen.set(title, [...(titleSeen.get(title) || []), route]);
  if (desc) descSeen.set(desc, [...(descSeen.get(desc) || []), route]);
}

for (const [title, routes] of titleSeen) {
  if (routes.length > 1) hardErrors.push(`TRÙNG title (${routes.length}x): "${title.slice(0, 50)}" → ${routes.join(', ')}`);
}
for (const [desc, routes] of descSeen) {
  if (routes.length > 1) hardErrors.push(`TRÙNG description (${routes.length}x) → ${routes.join(', ')}`);
}

const auditedPublic = files.length;
if (hardErrors.length) {
  console.error(`\n✗ SEO gate FAIL — ${hardErrors.length} vi phạm (đã quét ${auditedPublic} trang):`);
  for (const e of hardErrors) console.error('  - ' + e);
  console.error('');
  process.exit(1);
}

console.log(`✓ SEO gate PASS — ${auditedPublic} trang đạt chuẩn technical SEO.`);
