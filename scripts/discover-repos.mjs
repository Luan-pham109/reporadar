#!/usr/bin/env node
/**
 * discover-repos.mjs — khâu AUTO-DISCOVERY nguồn repo cho RepoRadar VN.
 *
 * Vai trò (PRD §4.1 + §7): thay vì Luan quét tay GitHub Trending + Show HN +
 * subreddit, lệnh này nhả ra DANH SÁCH REPO ỨNG VIÊN (owner/repo) để đưa thẳng
 * vào skill `repo-radar-hunt`. KHÔNG chấm điểm sâu, KHÔNG insight VN — chỉ phát
 * hiện & loại trùng. Tín hiệu sâu cho 1 repo → `fetch-signals.mjs`.
 *
 * Đúng tinh thần PRD §6: đây là TRỢ LÝ ON-DEMAND (chạy tay), không phải crawler
 * nền / cron. Dùng `fetch` thuần Node 18+ — KHÔNG thêm dependency.
 *
 * Nguồn (free, không cần token):
 *   1. GitHub Search API — repo mới + nhiều sao theo chủ đề 4 ngách (proxy cho "trending").
 *   2. Hacker News (Algolia) — story điểm cao trỏ tới github.com (bắt Show HN / pre-viral).
 *   3. Reddit — subreddit 4 ngách, lọc post trỏ github.com (hay bị 403 → degrade link tay).
 *
 * Tự loại các repo ĐÃ có record trong src/content/repos.
 *
 * Cách dùng:
 *   node scripts/discover-repos.mjs                  # tất cả nguồn, ~7 ngày gần nhất
 *   node scripts/discover-repos.mjs --days 14        # nới cửa sổ thời gian
 *   node scripts/discover-repos.mjs --source github  # chỉ 1 nguồn (github|hn|reddit)
 *   node scripts/discover-repos.mjs --vertical seo    # chỉ truy vấn 1 ngành
 *   node scripts/discover-repos.mjs --limit 30 --json # in JSON cho máy đọc
 *
 * Đặt GITHUB_TOKEN trong env để nâng rate-limit search (khuyến nghị).
 */

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const UA = 'RepoRadarVN/0.1 (manual discovery tool)';
const REPOS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'repos');

// Truy vấn GitHub theo 4 ngách (PRD §2bis lăng kính). Mỗi ngách vài keyword/topic
// đại diện — cố ý hẹp để tiết kiệm rate-limit search (10 req/phút khi chưa có token).
const GITHUB_QUERIES = {
  creative: ['topic:image-generation', 'topic:comfyui', 'topic:text-to-video', 'topic:ai-art'],
  agency: ['topic:social-media topic:automation', 'topic:marketing-automation', 'topic:content-generation'],
  ecom: ['topic:ecommerce topic:ai', 'topic:product-photography', 'topic:shopify topic:ai'],
  seo: ['topic:seo topic:ai', 'GEO AEO llm', 'topic:llm topic:seo'],
};

// Subreddit nơi tool 4 ngách hay nổi lên (PRD §4.1). r/SaaS/marketing/ecommerce + SideProject.
const SUBREDDITS = ['SaaS', 'marketing', 'ecommerce', 'SideProject', 'selfhosted'];

// Đoán ngành từ text (title/desc/topics) — gợi ý thô để Luan duyệt, không phải kết luận.
const VERTICAL_HINTS = {
  creative: /image|video|comfyui|diffusion|art|render|photo|design|audio|tts|voice|dub/i,
  agency: /social|marketing|campaign|content|schedule|post|ads?\b|automation/i,
  ecom: /ecommerce|e-commerce|shop|product|sku|catalog|store|shopify|woocommerce/i,
  seo: /\bseo\b|serp|keyword|rank|geo|aeo|search engine|backlink/i,
};

function parseArgs(argv) {
  const args = { days: 7, limit: 40, json: false, source: 'all', vertical: 'all' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--json') args.json = true;
    else if (a === '--days') args.days = Number(argv[++i]);
    else if (a === '--limit') args.limit = Number(argv[++i]);
    else if (a === '--source') args.source = argv[++i];
    else if (a === '--vertical') args.vertical = argv[++i];
  }
  return args;
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

function ghHeaders() {
  return process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
}

// owner/repo từ bất kỳ URL github.com nào (bỏ path con như /tree, /issues).
function repoKeyFromUrl(url) {
  const m = String(url).match(/github\.com\/([^/\s]+)\/([^/\s?#]+)/i);
  if (!m) return null;
  const owner = m[1];
  const repo = m[2].replace(/\.git$/, '');
  // Bỏ các path không phải repo gốc.
  if (['sponsors', 'orgs', 'topics', 'collections', 'marketplace', 'features'].includes(owner.toLowerCase())) return null;
  return `${owner}/${repo}`.toLowerCase();
}

function guessVertical(text) {
  const hits = [];
  for (const [v, re] of Object.entries(VERTICAL_HINTS)) if (re.test(text)) hits.push(v);
  return hits;
}

// Đọc record đã có để loại trùng.
async function existingRepoKeys() {
  const keys = new Set();
  let files = [];
  try {
    files = await readdir(REPOS_DIR);
  } catch {
    return keys;
  }
  for (const f of files) {
    if (!f.endsWith('.md') || f.startsWith('_')) continue;
    try {
      const txt = await readFile(join(REPOS_DIR, f), 'utf8');
      const m = txt.match(/repoUrl:\s*["']?(https?:\/\/github\.com\/[^"'\s]+)/i);
      if (m) {
        const k = repoKeyFromUrl(m[1]);
        if (k) keys.add(k);
      }
    } catch {
      /* bỏ qua file lỗi */
    }
  }
  return keys;
}

async function fromGitHub({ days, verticalFilter }) {
  const sinceDate = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
  const out = [];
  for (const [vertical, queries] of Object.entries(GITHUB_QUERIES)) {
    if (verticalFilter !== 'all' && verticalFilter !== vertical) continue;
    for (const q of queries) {
      const full = `${q} created:>=${sinceDate} stars:>30`;
      const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(full)}&sort=stars&order=desc&per_page=8`;
      try {
        const data = await getJson(url, ghHeaders());
        for (const r of data.items ?? []) {
          out.push({
            key: r.full_name.toLowerCase(),
            fullName: r.full_name,
            url: r.html_url,
            description: r.description ?? '',
            stars: r.stargazers_count,
            createdAt: r.created_at,
            source: 'github-search',
            signal: `⭐ ${r.stargazers_count}`,
            queryVertical: vertical,
            topics: r.topics ?? [],
          });
        }
      } catch (e) {
        console.error(`! GitHub search lỗi (${q}): ${e.message}`);
      }
    }
  }
  return out;
}

async function fromHN({ days }) {
  const sinceTs = Math.floor((Date.now() - days * 86400000) / 1000);
  // Story điểm cao trỏ tới github.com trong cửa sổ thời gian (bao gồm Show HN).
  const url =
    `https://hn.algolia.com/api/v1/search?tags=story&query=github.com` +
    `&numericFilters=created_at_i>${sinceTs},points>20&hitsPerPage=40`;
  const out = [];
  try {
    const data = await getJson(url);
    for (const h of data.hits ?? []) {
      const link = h.url ?? '';
      if (!/github\.com/i.test(link)) continue;
      const key = repoKeyFromUrl(link);
      if (!key) continue;
      out.push({
        key,
        fullName: key,
        url: `https://github.com/${key}`,
        description: h.title ?? '',
        source: 'hacker-news',
        signal: `${h.points ?? 0}▲ ${h.num_comments ?? 0}💬`,
        points: h.points ?? 0,
        signalUrl: `https://news.ycombinator.com/item?id=${h.objectID}`,
        createdAt: h.created_at,
      });
    }
  } catch (e) {
    console.error(`! HN lỗi: ${e.message}`);
  }
  return out;
}

async function fromReddit({ days }) {
  const out = [];
  const sinceTs = (Date.now() - days * 86400000) / 1000;
  for (const sub of SUBREDDITS) {
    const manualUrl = `https://www.reddit.com/r/${sub}/search/?q=github.com&restrict_sr=1&sort=new`;
    try {
      const url = `https://old.reddit.com/r/${sub}/search.json?q=github.com&restrict_sr=1&sort=new&limit=25`;
      const data = await getJson(url, { Accept: 'application/json' });
      for (const child of data?.data?.children ?? []) {
        const p = child.data;
        if (p.created_utc < sinceTs) continue;
        const link = p.url ?? '';
        const key = repoKeyFromUrl(link);
        if (!key) continue;
        out.push({
          key,
          fullName: key,
          url: `https://github.com/${key}`,
          description: p.title ?? '',
          source: `reddit:${sub}`,
          signal: `${p.score ?? 0}▲ ${p.num_comments ?? 0}💬`,
          points: p.score ?? 0,
          signalUrl: `https://www.reddit.com${p.permalink}`,
          createdAt: new Date(p.created_utc * 1000).toISOString(),
        });
      }
    } catch (e) {
      out.push({ source: `reddit:${sub}`, error: String(e.message ?? e), manualUrl });
    }
  }
  return out;
}

// Gộp các ứng viên trùng key từ nhiều nguồn thành 1 hàng, gom nguồn + tín hiệu.
function merge(rows) {
  const map = new Map();
  for (const r of rows) {
    if (r.error || !r.key) continue;
    const cur = map.get(r.key);
    if (!cur) {
      map.set(r.key, {
        key: r.key,
        fullName: r.fullName,
        url: r.url,
        description: r.description,
        stars: r.stars,
        sources: [r.source],
        signals: [r.signal].filter(Boolean),
        signalUrls: [r.signalUrl].filter(Boolean),
        points: r.points ?? 0,
        verticals: new Set([
          ...(r.queryVertical ? [r.queryVertical] : []),
          ...guessVertical(`${r.description} ${(r.topics ?? []).join(' ')}`),
        ]),
      });
    } else {
      if (!cur.sources.includes(r.source)) cur.sources.push(r.source);
      if (r.signal) cur.signals.push(r.signal);
      if (r.signalUrl) cur.signalUrls.push(r.signalUrl);
      if (r.stars != null && cur.stars == null) cur.stars = r.stars;
      cur.points = Math.max(cur.points, r.points ?? 0);
      if (r.queryVertical) cur.verticals.add(r.queryVertical);
      for (const v of guessVertical(r.description ?? '')) cur.verticals.add(v);
      if (!cur.description && r.description) cur.description = r.description;
    }
  }
  return [...map.values()].map((r) => ({ ...r, verticals: [...r.verticals] }));
}

// Xếp hạng: nhiều nguồn trước (cross-source = tín hiệu mạnh), rồi sao, rồi điểm HN/Reddit.
function rank(a, b) {
  return b.sources.length - a.sources.length || (b.stars ?? 0) - (a.stars ?? 0) || b.points - a.points;
}

function printHuman(rows, redditErrors, args) {
  const line = (s = '') => console.log(s);
  line(`\n=== Repo ứng viên (discovery) — cửa sổ ${args.days} ngày ===`);
  line(`Nguồn: ${args.source}  |  Ngành: ${args.vertical}  |  ${rows.length} repo (đã loại trùng record)`);
  if (rows.length === 0) line('\n(Không thấy ứng viên mới — thử nới --days hoặc đổi --source)');
  rows.forEach((r, i) => {
    line(`\n${String(i + 1).padStart(2)}. ${r.fullName}  [${r.sources.join(', ')}]`);
    if (r.description) line(`    ${r.description.slice(0, 110)}`);
    const meta = [r.stars != null ? `⭐ ${r.stars}` : null, r.verticals.length ? `ngành?: ${r.verticals.join('/')}` : null]
      .filter(Boolean)
      .join('  |  ');
    if (meta) line(`    ${meta}`);
    if (r.signals.length) line(`    tín hiệu: ${r.signals.join('  ')}`);
    line(`    ${r.url}`);
    for (const u of r.signalUrls) line(`    ↳ ${u}`);
  });
  if (redditErrors.length) {
    line(`\nReddit bị chặn (tìm tay):`);
    for (const e of redditErrors) line(`  ! ${e.source}: ${e.manualUrl}`);
  }
  line(`\n→ Bước tiếp: chọn repo đáng chú ý rồi chạy hunt:`);
  if (rows[0]) line(`   node scripts/fetch-signals.mjs ${rows[0].fullName} --json`);
  line(`   (hoặc đưa link cho skill repo-radar-hunt để lập hồ sơ đầy đủ)\n`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const existing = await existingRepoKeys();

  const tasks = [];
  if (args.source === 'all' || args.source === 'github') tasks.push(fromGitHub({ days: args.days, verticalFilter: args.vertical }));
  if (args.source === 'all' || args.source === 'hn') tasks.push(fromHN({ days: args.days }));
  if (args.source === 'all' || args.source === 'reddit') tasks.push(fromReddit({ days: args.days }));

  const raw = (await Promise.all(tasks)).flat();
  const redditErrors = raw.filter((r) => r.error);

  let rows = merge(raw)
    .filter((r) => !existing.has(r.key))
    .filter((r) => args.vertical === 'all' || r.verticals.includes(args.vertical) || r.verticals.length === 0)
    .sort(rank)
    .slice(0, args.limit);

  if (args.json) {
    console.log(JSON.stringify({ window: { days: args.days }, count: rows.length, candidates: rows, redditErrors }, null, 2));
  } else {
    printHuman(rows, redditErrors, args);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
