import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { includeDraft } from '../lib/drafts';

export async function GET(context: APIContext) {
  const entries = (await getCollection('repos', ({ data }) => includeDraft(data))).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: 'AltStack',
    description: 'Mỗi tuần chọn lọc công cụ AI/open-source đáng thử cho creative, agency, ecommerce và SEO team Việt Nam.',
    site: context.site ?? 'https://altstack.vn',
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
