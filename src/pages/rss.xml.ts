import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { includeDraft } from '../lib/drafts';

// RSS cho newsletter — kênh phân phối nhẹ, độc giả/creator subscribe được.
export async function GET(context: APIContext) {
  const entries = (await getCollection('repos', ({ data }) => includeDraft(data))).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: 'RepoRadar VN',
    description: 'Mỗi tuần chọn lọc công cụ AI và repo đáng dùng cho creative, agency, ecom và SEO Việt.',
    site: context.site ?? 'https://reporadar.vn',
    items: entries.map((e) => ({
      title: e.data.name,
      pubDate: e.data.publishedAt,
      description: e.data.oneLiner,
      link: `/repos/${e.id}`,
      categories: e.data.tags,
    })),
    customData: '<language>vi</language>',
  });
}
