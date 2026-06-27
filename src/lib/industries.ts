import type { CollectionEntry } from 'astro:content';

/**
 * Trụ ngành (pillar) — xương sống IA + SEO topical-authority (PRD §2bis, KR#6).
 * Mỗi ngành = 1 pillar page; mỗi tool = cluster trỏ lên pillar + trỏ ngang tool liên quan.
 * Slug khớp enum `vertical` trong content/config.ts.
 */
export interface Industry {
  slug: 'creative' | 'agency' | 'ecom' | 'seo';
  short: string; // nhãn ngắn trên badge/chip
  label: string; // tên đầy đủ trên pillar
  icon: string;
  question: string; // câu hỏi lăng kính (PRD §2bis) — mỗi record phải trả lời
  blurb: string; // mô tả ngành (cho pillar page, tránh trang mỏng)
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'creative',
    short: 'Creative',
    label: 'Creative / Media',
    icon: '🎨',
    question: 'Công cụ này giúp ekip bớt khâu nào, và tiết kiệm được bao nhiêu thời gian?',
    blurb:
      'Công cụ AI cho dân sản xuất nội dung: tạo ảnh, video, lồng tiếng, hậu kỳ và giữ hình ảnh thương hiệu nhất quán khi phải ra nhiều asset.',
  },
  {
    slug: 'agency',
    short: 'Agency',
    label: 'Agency / Marketing',
    icon: '📈',
    question: 'Giảm được bao nhiêu giờ việc lặp lại trên mỗi client?',
    blurb:
      'Công cụ cho agency và marketing team: lên lịch nội dung, biến một ý tưởng thành nhiều định dạng, làm báo cáo, quản lý nhiều client và chuẩn bị brief nhanh hơn.',
  },
  {
    slug: 'ecom',
    short: 'Ecom',
    label: 'Ecommerce',
    icon: '🛒',
    question: 'Công cụ này giúp tăng chuyển đổi hoặc giảm công xử lý nhiều SKU ra sao?',
    blurb:
      'Công cụ cho người bán online: ảnh sản phẩm AI, thử đồ ảo, mô tả listing đa sàn, phân tích review và chatbot hỗ trợ chốt đơn.',
  },
  {
    slug: 'seo',
    short: 'SEO',
    label: 'SEO & GEO/AEO',
    icon: '🔎',
    question: 'Công cụ này giúp rank thêm URL nào, hoặc giảm bao nhiêu giờ research?',
    blurb:
      'Công cụ cho SEO và GEO/AEO: nghiên cứu từ khoá, viết brief, audit kỹ thuật và tối ưu nội dung để có cơ hội được AI Overview hoặc ChatGPT trích dẫn.',
  },
];

export const INDUSTRY_BY_SLUG: Record<string, Industry> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, i]),
);

/** Nhãn ngắn an toàn cho 1 slug vertical bất kỳ. */
export function industryShort(slug: string): string {
  return INDUSTRY_BY_SLUG[slug]?.short ?? slug;
}

/** Lọc record theo ngành (đã loại draft ở production). */
export function entriesInIndustry(
  entries: CollectionEntry<'repos'>[],
  slug: string,
): CollectionEntry<'repos'>[] {
  return entries.filter((e) => e.data.vertical.includes(slug as Industry['slug']));
}
