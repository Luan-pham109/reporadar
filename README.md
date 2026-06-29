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
npm run dev:publish  # duyệt draft local; xác nhận 1 lần rồi Publish sẽ build + deploy production
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
4. Luan duyệt → đổi `draft: false`. Có thể chạy `npm run build` để kiểm tra schema thủ công, hoặc dùng `npm run dev:publish` để xác nhận ngay trong `/review` rồi nút Publish tự build + deploy production.

## Deploy (Cloudflare Pages)

Static site. Build command `npm run build`, output `dist/`. Nối Git repo vào Cloudflare Pages, hoặc:

```bash
npx wrangler pages deploy dist
```

Luồng nhanh hằng ngày:

```powershell
$env:REPO_RADAR_PAGES_PROJECT="your-cloudflare-pages-project"
npm run dev:publish
```

### Quick publish flow

1. Set `REPO_RADAR_PAGES_PROJECT`.
2. Chạy `npm run dev:publish`.
3. Mở `/review`.
4. Bấm `Publish` trên repo draft muốn lên live.
5. Xác nhận hộp thoại cuối cùng.
6. Hệ thống sẽ tự đổi `draft: false`, chạy production build, rồi deploy lên Cloudflare Pages.

Ghi nhớ:

- `npm run dev:publish` = nút trong `/review` có thể deploy production.
- `npm run dev` = nút trong `/review` chỉ đổi file local, không deploy production.
- Bấm `Về draft` trong `npm run dev:publish` cũng sẽ rebuild + redeploy để gỡ repo đó khỏi production.

Trong `/review`, bấm `Publish`, xác nhận live deploy, rồi flow sẽ đổi `draft: false`, chạy production build và deploy `dist/` lên Cloudflare Pages bằng Wrangler trong cùng một action. Nếu muốn deploy thủ công không qua review UI:

```powershell
$env:REPO_RADAR_PAGES_PROJECT="your-cloudflare-pages-project"
npm run publish:prod
```

Lệnh CLI sẽ yêu cầu xác nhận trước khi deploy. Nếu đã review xong và muốn bỏ qua prompt, dùng:

```powershell
npm run publish:prod -- --yes
```

Nhớ đổi `site` trong `astro.config.mjs` sang domain thật để RSS/JSON feed có URL tuyệt đối.

## Auth & membership runtime

Membership chạy bằng Cloudflare Pages Functions với luồng **Google-only**:

- KV binding bắt buộc: `AUTH_KV` để lưu user và session, `ANALYTICS_KV` để lưu analytics/event + rate-limit buckets.
- Secrets/local vars: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_SESSION_TTL_SECONDS`.
- Google OAuth redirect URI local phải là `http://localhost:8788/api/auth/google/callback`.
- Redirect URI production phải là `https://<domain>/api/auth/google/callback` hoặc `https://<project>.pages.dev/api/auth/google/callback`.
- `npm run build` sẽ xuất dữ liệu member feed vào `functions/_generated/member-feed.js`; `/feed.json` chỉ trả feed đầy đủ khi cookie session hợp lệ.

### Local dev với auth thật

1. Copy `.dev.vars.example` thành `.dev.vars` rồi điền Google credentials thật.
2. Chạy `npm run dev:functions`.
3. Mở [http://localhost:8788](http://localhost:8788).

Lưu ý:

- `npm run dev` dùng `astro dev` trên port `4321`, chỉ phù hợp để xem UI tĩnh.
- `npm run dev:functions` build site rồi chạy `wrangler pages dev dist` trên port `8788`, đây mới là runtime có auth/KV thật.
- Endpoint membership hiện dùng: `/api/auth/google/start`, `/api/auth/google/callback`, `/api/auth/logout`, `/api/auth/me`.

Chi tiết vận hành, QA và rollback xem thêm [MEMBERSHIP.md](./MEMBERSHIP.md).
