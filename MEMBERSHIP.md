# Membership runbook

RepoRadar membership chạy trên:

- Astro static build trong `dist/`
- Cloudflare Pages Functions trong `functions/`
- Cloudflare KV cho `AUTH_KV` và `ANALYTICS_KV`
- Google OAuth cho đăng nhập member

## Những gì đang có

- Chỉ giữ luồng đăng nhập Google.
- Session lưu trong `AUTH_KV`, token chỉ lưu dạng hash.
- `/api/auth/me`, `/api/auth/logout`, `/api/auth/google/start`, `/api/auth/google/callback` là các endpoint auth đang dùng.
- `/feed.json` là member feed JSON đã được gate theo session.
- `/api/member/repos/:slug` trả guide theo repo cho member và được trang repo dùng để mở khóa `Member insight`.
- Header và `/account` phản ánh trạng thái đăng nhập ở client side.

## Biến môi trường và secrets

Local `.dev.vars`:

```dotenv
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
AUTH_SESSION_TTL_SECONDS=2592000
```

Production secrets trên Cloudflare Pages:

```powershell
npx wrangler pages secret put GOOGLE_CLIENT_ID
npx wrangler pages secret put GOOGLE_CLIENT_SECRET
npx wrangler pages secret put AUTH_SESSION_TTL_SECONDS
```

Giá trị `AUTH_SESSION_TTL_SECONDS` khuyến nghị: `2592000` (30 ngày).

## KV bindings

Repo cần 2 KV bindings trong `wrangler.jsonc`:

- `AUTH_KV`: user + email index + google index + session + auth rate limit
- `ANALYTICS_KV`: analytics events + event rate limit

Tạo namespace nếu cần:

```powershell
npx wrangler kv namespace create AUTH_KV
npx wrangler kv namespace create AUTH_KV --preview
npx wrangler kv namespace create ANALYTICS_KV
npx wrangler kv namespace create ANALYTICS_KV --preview
```

Sau đó dán `id` và `preview_id` vào `wrangler.jsonc`.

## Google OAuth setup

Tạo OAuth client loại `Web application` trong Google Cloud Console và thêm:

- Local redirect URI: `http://localhost:8788/api/auth/google/callback`
- Production redirect URI: `https://<domain>/api/auth/google/callback`

Scopes cần bật:

- `openid`
- `email`
- `profile`

Nếu consent screen còn ở chế độ `Testing`, nhớ thêm test users cho người QA.

## Local development

### UI tĩnh

```powershell
npm run dev
```

- Chạy trên `http://localhost:4321`
- Chỉ phù hợp để kiểm tra layout/static content
- Auth thật sẽ không chạy ở đây

### Runtime có auth thật

```powershell
npm run dev:functions
```

Lệnh này sẽ:

1. Build Astro + export member feed
2. Chạy `wrangler pages dev dist`
3. Phục vụ app ở `http://localhost:8788`

Endpoint quick checks:

- `GET /api/auth/me` guest => `{"ok":true,"user":null}`
- `GET /feed.json` guest => `401` + `loginUrl` về `/account`
- `GET /api/member/repos/postiz-app` guest => `401` + `loginUrl` về trang repo
- `POST /api/auth/login` => `404` hoặc `405` (đều cho thấy password flow không còn khả dụng)

## Test và QA

Unit test auth helpers:

```powershell
npm run test:auth
```

Hoặc chạy toàn bộ test:

```powershell
npm test
```

Smoke test Functions:

```powershell
$env:SMOKE_BASE_URL="http://localhost:8788"
npm run smoke:auth
```

Checklist QA tay:

1. Mở `/login?returnTo=/account`.
2. Đăng nhập bằng Google và xác nhận quay về `/account`.
3. Kiểm tra header đổi từ `Đăng nhập` sang tên/avatar + `Đăng xuất`.
4. Kiểm tra `/api/auth/me` trả `providers: ["google"]`.
5. Mở một trang repo bất kỳ và xác nhận `Member insight` tự mở guide thật sau khi đã login.
6. Kiểm tra `/feed.json` trả `access: "member"` nếu cần xác minh JSON feed.
7. Bấm CTA member từ trạng thái guest, đăng nhập, và xác nhận quay về đúng repo.
8. Đăng xuất từ header và từ `/account`, sau đó xác nhận `/api/auth/me` quay lại `user: null`.

## Deploy

Build:

```powershell
npm run build
```

Deploy Pages:

```powershell
npx wrangler pages deploy dist
```

Trước khi deploy production, xác nhận:

- Secrets production đã set
- Redirect URI production đã được thêm trong Google Cloud Console
- `wrangler.jsonc` đang trỏ đúng KV ids
- Smoke test local và QA tay đã pass

## Rollback

Nếu rollout membership có vấn đề:

1. Revert commit gây lỗi.
2. Redeploy bản `dist/` trước đó hoặc redeploy commit stable gần nhất.
3. Nếu cần, xóa các session keys mới khỏi `AUTH_KV`:

```powershell
npx wrangler kv key list --binding AUTH_KV
```

4. Nếu lỗi do Google OAuth, kiểm tra lại redirect URI và secrets trước khi mở traffic lại.

Rollback không cần xóa toàn bộ user keys trừ khi dữ liệu account bị sai cấu trúc.
