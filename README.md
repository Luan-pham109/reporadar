# RepoRadar VN

> Radar công cụ AI/open-source cho dân creative / agency / ecom / SEO Việt: mỗi tuần chỉ ra vài tool
> đáng đưa vào việc *ngay bây giờ*, nói bằng ngôn ngữ "cắt khâu nào — tiết kiệm gì — thay tool nào",
> kèm insight thực tế ngành tại VN mà GitHub Trending và AI đều không cho được.

Lean MVP (Phase 1) — xem `PRD_RepoRadar_VN.md`. Sản phẩm **cố tình thủ công**: không crawler, không tự
động hoá, không Trust layer (tất cả Phase 2).

## Cấu trúc

- `src/content/config.ts` — **schema "bản tình báo tool"** (nguồn sự thật, structured-first).
- `src/content/repos/*.md` — mỗi tool = 1 record. `_template.md` là mẫu để copy.
- `src/lib/industries.ts` — 4 ngành (pillar): creative / agency / ecom / seo.
- `src/pages/` — Feed (`index`), chi tiết (`repos/[slug]`), pillar (`nganh/[vertical]`),
  newsletter tuần (`tuan/[week]`), `feed.json` (hạt giống API Phase 2), `rss.xml`.
- `scripts/fetch-signals.mjs` — kéo số liệu + tín hiệu (GitHub sao/fork + HN + Reddit) cho 1 repo.
- `.claude/skills/` — pipeline 3 tầng: **`repo-radar-hunt`** (hồ sơ khách quan) →
  **`repo-radar-synthesize`** (keyword + insight VN) → **`repo-radar-edit`** (viết reader-first).

## Lệnh

```bash
npm install
npm run dev          # xem feed ở http://localhost:4321
npm run build        # build dist/ — Zod validate toàn bộ record, sai schema sẽ fail
npm run signals -- makeplane/plane        # kéo tín hiệu pre-viral cho 1 repo
```

## GitHub Token

`scripts/fetch-signals.mjs` và `scripts/discover-repos.mjs` đều đọc `GITHUB_TOKEN`.

PowerShell:

```powershell
$env:GITHUB_TOKEN="YOUR_GITHUB_TOKEN"
node scripts/discover-repos.mjs --source github --vertical seo
```

Nếu muốn set lâu hơn cho máy:

```powershell
setx GITHUB_TOKEN "YOUR_GITHUB_TOKEN"
```

Mở terminal mới sau khi `setx` để biến môi trường có hiệu lực.

## Thêm một bản tình báo tool (pipeline 3 tầng)

1. **Hunt:** *"hunt repo <url> cho RepoRadar"* → `repo-radar-hunt` tạo nháp khách quan (sao/fork, đặc điểm,
   độ chín, media) ở `src/content/repos/<slug>.md` (`draft: true`).
2. **Synthesize:** *"synthesize repo này"* → `repo-radar-synthesize` nghiên cứu từ khoá + insight ngành VN.
3. **Edit:** *"viết nội dung reader-first"* → `repo-radar-edit` viết `useCases` + tầng đọc.
4. Luan duyệt → đổi `draft: false`. `npm run build` để chắc schema hợp lệ.

## Deploy (Cloudflare Pages)

Static site. Build command `npm run build`, output `dist/`. Nối Git repo vào Cloudflare Pages, hoặc:

```bash
npx wrangler pages deploy dist
```

Nhớ đổi `site` trong `astro.config.mjs` sang domain thật để RSS/JSON feed có URL tuyệt đối.
