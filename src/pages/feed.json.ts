import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { includeDraft } from '../lib/drafts';

/**
 * Public JSON feed = chỉ xuất lớp discovery tối thiểu.
 *
 * Full schema có vnMarket, signalSources, aiCheck, suggestedAngle... là lớp intelligence
 * của RepoRadar; không expose ở endpoint public khi chưa có auth/runtime.
 */
export const GET: APIRoute = async ({ site }) => {
  const entries = (await getCollection('repos', ({ data }) => includeDraft(data))).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  const items = entries.map((e) => {
    const r = e.data;
    return {
      id: e.id,
      url: site ? new URL(`/repos/${e.id}`, site).href : `/repos/${e.id}`,
      name: r.name,
      repoUrl: r.repoUrl,
      oneLiner: r.oneLiner,
      vertical: r.vertical,
      maturity: r.maturity,
      repoStats: r.repoStats
        ? {
            stars: r.repoStats.stars,
            forks: r.repoStats.forks,
          }
        : undefined,
      tags: r.tags,
      publishedAt: r.publishedAt,
      week: r.week,
      lang: r.lang,
    };
  });

  return new Response(
    JSON.stringify(
      {
        title: 'RepoRadar VN',
        description:
          'Public discovery feed của RepoRadar VN: bản rút gọn để theo dõi tool mới, không gồm lớp phân tích thành viên.',
        version: '0.2',
        access: 'public-summary',
        fullAccessNote: 'Full intelligence feed sẽ cần đăng nhập khi RepoRadar có auth/runtime.',
        generatedAt: new Date().toISOString(),
        count: items.length,
        items,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
};
