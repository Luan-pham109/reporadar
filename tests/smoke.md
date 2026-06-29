# Auth smoke test

Auth smoke test này dành cho runtime Cloudflare Pages Functions ở local.

## Cách chạy

1. Điền Google credentials vào `.dev.vars`.
2. Chạy `npm run dev:functions`.
3. Ở terminal khác, chạy smoke script:

```powershell
$env:SMOKE_BASE_URL="http://localhost:8788"
npm run smoke:auth
```

## Kỳ vọng tự động

- `GET /api/auth/me` trả `200` với `user: null` cho guest.
- `GET /feed.json` trả `401` với `loginUrl` chứa `returnTo=%2Faccount`.
- `POST /api/events` trả `ok: true`.
- `POST /api/auth/login` trả `404` hoặc `405` vì password flow đã bị gỡ khỏi runtime.
- `GET /api/member/repos/postiz-app` trả `401` với `loginUrl` quay về trang repo.

## Kỳ vọng manual cho Google login

1. Mở `http://localhost:8788/login?returnTo=/account`.
2. Bấm `Tiếp tục với Google`.
3. Hoàn tất consent screen.
4. Xác nhận quay về `/account`.
5. Mở một trang repo bất kỳ, xác nhận khối `Member insight` hiện guide thật thay vì nút đăng nhập.
6. Kiểm tra `http://localhost:8788/api/auth/me` trả `user.email` và `providers` chứa `google`.
7. Kiểm tra `http://localhost:8788/feed.json` trả `access: "member"` nếu cần test JSON feed.
8. Bấm `Đăng xuất` ở header hoặc `/account`, rồi xác nhận `/api/auth/me` quay lại `user: null`.
