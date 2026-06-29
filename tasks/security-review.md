# Security review - Membership (Google-only)

Ngày rà soát: 2026-06-29

## Checklist

- [x] `rr_session` là cookie `HttpOnly`, `SameSite=Lax`, có `Secure` khi chạy HTTPS, và `Max-Age` lấy từ `AUTH_SESSION_TTL_SECONDS` với sàn an toàn 1 giờ.
- [x] OAuth `state` được tạo ngẫu nhiên, lưu bằng cookie riêng, kiểm tra ở callback, rồi bị clear sau khi hoàn tất.
- [x] `safeReturnTo` chặn open redirect bằng cách chỉ cho path bắt đầu bằng `/`, chặn `//`, chặn newline, và giới hạn độ dài.
- [x] Session token chỉ lưu dạng SHA-256 hash trong KV. Token thô chỉ nằm trong cookie phía client.
- [x] Không có log cho `GOOGLE_CLIENT_SECRET`, Google access token, hoặc session token.
- [x] Google callback yêu cầu `email_verified === true` trước khi tạo/link user.
- [x] OAuth start/callback đã có rate limit theo IP hash trên KV để giảm spam tạo phiên.
- [x] `/api/events` có rate limit và sẽ drop mềm khi vượt ngưỡng thay vì làm nóng KV vô hạn.

## Ghi chú

- Rate limit hiện tại:
  - `oauth_start`: 20 request / 10 phút / IP
  - `oauth_callback`: 30 request / 10 phút / IP
  - `events`: 120 request / phút / IP
- Phần Google OAuth production vẫn cần Luan xác nhận redirect URI prod và secret đã được set trên Pages trước khi ship.
