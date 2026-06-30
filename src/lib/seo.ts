/**
 * SEO technical helpers — nguồn sự thật cho title/description hợp chuẩn SERP.
 * Gate `scripts/check-seo.mjs` enforce các ngưỡng này khi build (GTM dựa vào SEO).
 */

/** Ngưỡng cứng dùng chung giữa helper và gate. */
export const SEO_LIMITS = {
  titleMax: 62,
  descMin: 70,
  descMax: 160,
} as const;

/**
 * Ghép title ≤ titleMax. Ưu tiên giữ brand "| AltStack"; nếu quá dài thì bỏ brand;
 * nếu vẫn quá dài (tên sản phẩm dài) thì cắt ở ranh giới từ + "…".
 */
export function pageTitle(core: string, brand = 'AltStack', max = SEO_LIMITS.titleMax): string {
  const c = (core || '').trim().replace(/\s+/g, ' ');
  const withBrand = `${c} | ${brand}`;
  if (withBrand.length <= max) return withBrand;
  if (c.length <= max) return c;
  const cut = c.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 30 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

/** Cắt meta description về ≤ descMax ở ranh giới từ (không cắt giữa chữ). */
export function clampDescription(text: string, max = SEO_LIMITS.descMax - 2): string {
  const t = (text || '').trim().replace(/\s+/g, ' ');
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
