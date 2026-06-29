#!/usr/bin/env node
/**
 * fetch-signals.mjs — kéo tín hiệu PRE-VIRAL deterministic cho 1 repo.
 *
 * Vai trò (PRD §6): "trợ lý phân tích on-demand", không phải hệ thống luôn-bật.
 * Phần này lo tín hiệu MÁY-ĐỌC-ĐƯỢC (GitHub + HN + Reddit) cho tầng Hunt. Phần
 * keyword fan-out + insight VN → do skill `repo-radar-synthesize` xử lý.
 *
 * Dùng `fetch` thuần của Node 18+ — KHÔNG thêm dependency.
 *
 * Cách dùng:
 *   node scripts/fetch-signals.mjs https://github.com/makeplane/plane
 *   node scripts/fetch-signals.mjs makeplane/plane
 *   node scripts/fetch-signals.mjs makeplane/plane --json   # in JSON cho máy đọc
 *
 * Đặt GITHUB_TOKEN trong env để nâng rate-limit (tuỳ chọn).
 */

const SUBREDDITS = ['selfhosted', 'opensource', 'SideProject'];
const UA = 'RepoRadarVN/0.1 (manual research tool)';

function parseRepoArg(arg) {
  if (!arg) return null;
  const m = arg.match(/github\.com\/([^/]+)\/([^/?#]+)/i) || arg.match(/^([^/\s]+)\/([^/\s]+)$/);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/, '') };
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

async function fetchGitHub({ owner, repo }) {
  const headers = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};
  const data = await getJson(`https://api.github.com/repos/${owner}/${repo}`, headers);
  const createdDays = Math.round((Date.now() - new Date(data.created_at)) / 86400000);
  const starsPerDay = createdDays > 0 ? +(data.stargazers_count / createdDays).toFixed(1) : data.stargazers_count;
  const gh = {
    fullName: data.full_name,
    description: data.description,
    stars: data.stargazers_count,
    forks: data.forks_count,
    createdAt: data.created_at,
    ageDays: createdDays,
    starsPerDay,
    pushedAt: data.pushed_at,
    archived: data.archived ?? false,
    openIssues: data.open_issues_count ?? 0,
    topics: data.topics ?? [],
    homepage: data.homepage,
    language: data.language,
  };
  gh.suggestedHealthScore = healthScore(gh);
  return gh;
}

function healthScore(gh) {
  if (!gh) return 0;
  if (gh.archived) return 3;
  const daysSincePush = gh.pushedAt
    ? Math.round((Date.now() - new Date(gh.pushedAt)) / 86400000)
    : 999;
  const liveness =
    daysSincePush <= 30 ? 12 : daysSincePush <= 90 ? 9 : daysSincePush <= 180 ? 6 : daysSincePush <= 365 ? 3 : 0;
  const adoption =
    gh.stars >= 20000 ? 8 : gh.stars >= 5000 ? 6 : gh.stars >= 1000 ? 4 : gh.stars >= 200 ? 2 : 1;
  const momentum =
    gh.starsPerDay >= 20 ? 5 : gh.starsPerDay >= 5 ? 4 : gh.starsPerDay >= 1 ? 2 : 1;
  return Math.min(25, liveness + adoption + momentum);
}

async function fetchHN({ owner, repo }) {
  // HN Algolia. Tên repo generic (vd "plane") dễ dính false positive (planet/airplane),
  // nên ưu tiên thread trỏ ĐÚNG tới github.com/owner/repo; chỉ khớp title theo
  // word-boundary và phải kèm dấu hiệu repo (owner hoặc "show hn").
  const q = encodeURIComponent(`${owner} ${repo}`);
  const data = await getJson(`https://hn.algolia.com/api/v1/search?query=${q}&tags=story&hitsPerPage=20`);
  const repoUrlFrag = `github.com/${owner}/${repo}`.toLowerCase();
  const wordRe = new RegExp(`\\b${repo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

  const scored = (data.hits ?? []).map((h) => {
    const url = (h.url ?? '').toLowerCase();
    const title = h.title ?? '';
    const urlMatch = url.includes(repoUrlFrag);
    const strongTitle = wordRe.test(title) && (title.toLowerCase().includes(owner.toLowerCase()) || /show hn/i.test(title));
    return { h, relevant: urlMatch || strongTitle, urlMatch };
  });

  return scored
    .filter((s) => s.relevant)
    .sort((a, b) => Number(b.urlMatch) - Number(a.urlMatch) || (b.h.points ?? 0) - (a.h.points ?? 0))
    .slice(0, 5)
    .map(({ h }) => ({
      title: h.title,
      points: h.points,
      comments: h.num_comments,
      createdAt: h.created_at,
      hnUrl: `https://news.ycombinator.com/item?id=${h.objectID}`,
    }));
}

async function fetchReddit({ repo }) {
  // Reddit chặn JSON tự động khá gắt (403). Thử old.reddit.com; nếu vẫn chặn thì trả về
  // link search thủ công để Luan/skill tự bấm xem (nguồn thủ công — đúng tinh thần MVP).
  const out = [];
  for (const sub of SUBREDDITS) {
    const manualUrl = `https://www.reddit.com/r/${sub}/search/?q=${encodeURIComponent(repo)}&restrict_sr=1&sort=new`;
    try {
      const url = `https://old.reddit.com/r/${sub}/search.json?q=${encodeURIComponent(repo)}&restrict_sr=1&sort=new&limit=5`;
      const data = await getJson(url, { Accept: 'application/json' });
      for (const child of data?.data?.children ?? []) {
        const p = child.data;
        out.push({
          subreddit: sub,
          title: p.title,
          score: p.score,
          comments: p.num_comments,
          createdAt: new Date(p.created_utc * 1000).toISOString(),
          url: `https://www.reddit.com${p.permalink}`,
        });
      }
    } catch (e) {
      out.push({ subreddit: sub, error: String(e.message ?? e), manualUrl });
    }
  }
  return out;
}

function maturityHeuristic(gh, hn, reddit) {
  // Mềm, không hứa "chắc chắn viral" (PRD R3). Gợi ý độ chín, KHÔNG phải kết luận.
  const discussed = hn.length > 0 || reddit.some((r) => !r.error && r.score > 0);
  const young = gh && gh.ageDays < 540; // ~18 tháng
  const notYetHuge = gh && gh.stars < 20000;
  const fastGrowth = gh && gh.starsPerDay > 5;
  const preViral = discussed && notYetHuge && (young || fastGrowth);

  // Đã kiểm chứng: nhiều sao + đủ tuổi → tool đã nổi (tệp rộng vẫn đáng đưa, input Luan vòng 3).
  const established = gh && gh.stars >= 8000;
  let maturity = 'rising';
  if (preViral) maturity = 'pre-viral';
  else if (established) maturity = 'established';

  return {
    maturitySuggestion: maturity,
    reasons: [
      discussed ? 'Đang được bàn ở HN/Reddit' : 'Chưa thấy bàn ở HN/Reddit (nguồn thủ công có thể bỏ sót)',
      gh
        ? `${gh.stars} sao, ${gh.forks ?? '?'} fork, ~${gh.starsPerDay} sao/ngày, ${gh.ageDays} ngày tuổi`
        : 'Không lấy được dữ liệu GitHub',
    ],
  };
}

function printHuman(repo, gh, hn, reddit, heur) {
  const line = (s = '') => console.log(s);
  line(`\n=== Tín hiệu pre-viral: ${repo.owner}/${repo.repo} ===`);
  if (gh) {
    line(`\nGitHub:`);
    line(`  ${gh.fullName} — ${gh.description ?? '(no description)'}`);
    line(`  ⭐ ${gh.stars}  |  🍴 ${gh.forks ?? '?'}  |  ~${gh.starsPerDay} sao/ngày  |  ${gh.ageDays} ngày tuổi  |  ${gh.language ?? '?'}`);
    line(`  pushedAt: ${gh.pushedAt ?? '?'}  |  archived: ${gh.archived}  |  openIssues: ${gh.openIssues}`);
    line(`  suggestedHealthScore: ${gh.suggestedHealthScore}/25`);
    if (gh.topics.length) line(`  topics: ${gh.topics.join(', ')}`);
    if (gh.homepage) line(`  homepage: ${gh.homepage}`);
  } else {
    line(`\nGitHub: (không lấy được)`);
  }

  line(`\nHacker News (${hn.length} thread khớp):`);
  if (hn.length === 0) line('  (không có thread khớp tên repo)');
  for (const h of hn) line(`  • [${h.points ?? 0}▲ ${h.comments ?? 0}💬] ${h.title}\n    ${h.hnUrl}`);

  line(`\nReddit:`);
  const real = reddit.filter((r) => !r.error);
  if (real.length === 0) line('  (không có post khớp)');
  for (const r of real) line(`  • r/${r.subreddit} [${r.score}▲ ${r.comments}💬] ${r.title}\n    ${r.url}`);
  for (const r of reddit.filter((x) => x.error)) {
    line(`  ! r/${r.subreddit}: bị chặn — tìm tay: ${r.manualUrl}`);
  }

  const matLabel = { 'pre-viral': 'pre-viral ⚡ (đáng đi trước)', rising: 'rising (đang lên)', established: 'established ⭐ (đã kiểm chứng)' };
  line(`\n→ Gợi ý độ chín (maturity): ${matLabel[heur.maturitySuggestion] ?? heur.maturitySuggestion}`);
  for (const r of heur.reasons) line(`   - ${r}`);
  line(`\nNhắc: đây chỉ là tín hiệu máy (Hunt). Keyword fan-out + insight VN → skill repo-radar-synthesize.\n`);
}

async function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes('--json');
  const repoArg = args.find((a) => !a.startsWith('--'));
  const repo = parseRepoArg(repoArg);

  if (!repo) {
    console.error('Dùng: node scripts/fetch-signals.mjs <owner/repo | github url> [--json]');
    process.exit(1);
  }

  let gh = null;
  try {
    gh = await fetchGitHub(repo);
  } catch (e) {
    console.error(`Cảnh báo: không lấy được GitHub (${e.message})`);
  }
  const [hn, reddit] = await Promise.all([
    fetchHN(repo).catch((e) => {
      console.error(`Cảnh báo HN: ${e.message}`);
      return [];
    }),
    fetchReddit(repo),
  ]);
  const heur = maturityHeuristic(gh, hn, reddit);

  if (asJson) {
    console.log(JSON.stringify({ repo, github: gh, hackerNews: hn, reddit, heuristic: heur }, null, 2));
  } else {
    printHuman(repo, gh, hn, reddit, heur);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
