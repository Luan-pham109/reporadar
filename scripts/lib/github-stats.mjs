/**
 * github-stats.mjs — NGUỒN SỰ THẬT cho việc kéo số liệu GitHub của 1 repo.
 *
 * Dùng chung bởi:
 *   - fetch-signals.mjs   (Hunt: tín hiệu on-demand)
 *   - refresh-stats.mjs   (cập nhật repoStats hàng tuần)
 *
 * fetch thuần Node 18+ — KHÔNG thêm dependency. Đặt GITHUB_TOKEN để nâng rate-limit.
 */

const UA = 'RepoRadarVN/0.1 (repo stats)';

/** Tách { owner, repo } từ URL github hoặc chuỗi "owner/repo". Trả null nếu không khớp. */
export function parseRepoRef(arg) {
  if (!arg) return null;
  const m = arg.match(/github\.com\/([^/]+)\/([^/?#]+)/i) || arg.match(/^([^/\s]+)\/([^/\s]+)$/);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/, '') };
}

/**
 * Kéo số liệu khách quan của repo. Lỗi HTTP ném Error kèm `.status` để caller
 * phân biệt 404 (repo đổi tên/xoá) với lỗi rate-limit/mạng.
 */
export async function fetchGitHubStats({ owner, repo }, { token = process.env.GITHUB_TOKEN, userAgent = UA } = {}) {
  const headers = { 'User-Agent': userAgent };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
  if (!res.ok) {
    const err = new Error(`GitHub ${res.status} ${res.statusText} — ${owner}/${repo}`);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();
  const ageDays = Math.round((Date.now() - new Date(data.created_at)) / 86400000);
  const starsPerDay = ageDays > 0 ? +(data.stargazers_count / ageDays).toFixed(1) : data.stargazers_count;
  return {
    fullName: data.full_name,
    description: data.description,
    stars: data.stargazers_count,
    forks: data.forks_count,
    createdAt: data.created_at,
    ageDays,
    starsPerDay,
    pushedAt: data.pushed_at,
    archived: data.archived ?? false,
    openIssues: data.open_issues_count ?? 0,
    topics: data.topics ?? [],
    homepage: data.homepage,
    language: data.language,
  };
}

/** Gợi ý điểm sức khoẻ 0-25 (liveness + adoption + momentum). Chỉ để tham khảo cho người. */
export function healthScore(gh) {
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
