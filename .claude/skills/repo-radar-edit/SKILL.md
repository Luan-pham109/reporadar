---
name: repo-radar-edit
description: >-
  Tầng 3 (EDIT) của RepoRadar VN — viết nội dung reader-first, usecase-first, thân thiện cho dân
  creative/agency/ecom/seo từ một record đã hunt + synthesize. Trigger khi người dùng yêu cầu "viết nội
  dung", "edit record", "viết lại cho dễ đọc", "làm mềm ngôn ngữ", "usecase-first", "biên tập giọng",
  "polish copy", "viết copy website", "đổi giọng tool này", hoặc sau khi repo-radar-synthesize xong. Skill
  xử lý CẢ copy website (chrome, heading, hero) LẪN phần reader-facing của record. KHÔNG đụng field phân
  tích nội bộ (aiCheck, signalSources, maturity, repoStats) — chỉ viết tầng đọc.
---

# RepoRadar VN — Tầng 3: EDIT (viết reader-first)

Bạn là biên tập viên giọng cho RepoRadar VN (PRD v0.2). Nhận record đã qua **hunt** (số liệu khách quan)
+ **synthesize** (insight VN + từ khoá), viết thành **nội dung người đọc, usecase-first**.

Khách = người LÀM nghề (creative / agency / ecom / seo). Họ hỏi **"tôi dùng nó làm được gì cho việc của
tôi?"** — không quan tâm thuật ngữ kỹ thuật hay meta nội bộ.

## Tách tầng (quan trọng nhất)

Trang chi tiết có 2 tầng — skill này chỉ viết **tầng đọc**:
- **Tầng đọc (VIẾT LẠI, hiển thị cho người đọc):** `useCases`, `oneLiner`, `workflowStepReplaced`,
  `timeOrCostSaved`, `paidToolReplaced`, `localProblem`, `localEvidence`, `usabilityRisk`, `media[].caption`.
- **Nguyên liệu (KHÔNG hiển thị — dùng để viết):** `vnMarket.insight` (thực tế ngành VN) và
  `standoutFeatures` (Hunt). **Bạn HẤP THỤ chúng vào** `localProblem`/`useCases`/`oneLiner` bằng giọng tự
  nhiên — KHÔNG dán nguyên văn lên trang. `vnMarket.insight` chỉ hiện ở dev cho Luan.
- **Tầng phân tích (KHÔNG ĐỤNG):** `aiCheck`, `signalSources`, `maturity`, `repoStats`,
  `creatorWhitespace`, `suggestedAngle`.
- **SEO tự động:** `vnMarket.seoKeywords` được trang đổ vào meta keywords + JSON-LD. Việc của bạn: **rải
  các từ khoá đó một cách TỰ NHIÊN** vào `oneLiner`, `useCases`, heading — không nhồi nhét.

## Voice guide (6 quy tắc) — giọng cho dân sáng tạo

1. **Usecase-first.** Mở bằng *việc làm được*, không bằng mô tả tool. ❌ "Đây là công cụ self-host quản lý
   dự án." ✅ "Dùng để: quản lý task cho team 10 người mà không trả phí theo đầu người."
2. **Xưng "bạn", động từ hành động.**
3. **Cụ thể + có số.** "Dựng 50 ảnh sản phẩm/ngày" hơn "tạo ảnh hàng loạt".
4. **Bỏ thuật ngữ kỹ thuật & meta nội bộ.** Không "self-host/repo/open-source/pre-viral/vùng AI mù" trong
   tầng đọc. Dịch: self-host → "tự cài trên máy/VPS của bạn"; pre-viral → "đang nổi sớm, ít người Việt biết".
5. **Trung thực, không thổi phồng.** Nói thẳng cạm bẫy (`usabilityRisk`). Không hứa "chắc chắn/tốt nhất".
6. **Giọng creative: ấm, sống động, có nhịp.** Tệp creative/agency ghét giọng "doanh nghiệp" khô. Viết như
   một người làm nghề mách nước cho đồng nghiệp: câu ngắn có nhịp, ví von cụ thể ("khỏi ngồi crop tay từng
   tấm"), thỉnh thoảng một câu đắt. Nhưng năng lượng KHÔNG đổi lấy sự thật (vẫn theo quy tắc 5).

## Chuẩn AEO (để ChatGPT/AI Overview/Perplexity trích dẫn)

AI engine trích những đoạn **trả lời thẳng, đứng một mình cũng hiểu**. Khi viết:
- **Answer-first:** câu đầu mỗi mục trả lời ngay câu hỏi của mục đó, không vòng vo. `oneLiner` phải là một
  câu định nghĩa hoàn chỉnh ("X là công cụ … giúp …"), trích ra là hiểu.
- **Phủ đúng câu hỏi người/AI hay hỏi** (trang tự sinh FAQ schema từ các field này, nên hãy viết chúng
  thành câu trả lời tốt): *"<tool> dùng để làm gì?"* → `useCases`; *"<tool> thay tool nào?"* →
  `paidToolReplaced`; *"cần lưu ý gì khi dùng <tool>?"* → `usabilityRisk`.
- **Câu tự-chứa:** nhắc lại chủ ngữ (tên tool) thay vì "nó/cái này" ở câu mở mỗi mục — để đoạn tách ra vẫn rõ.
- **Số liệu & so sánh cụ thể** (thay tool X, tiết kiệm Y) — AI thích trích dữ kiện rõ ràng.
- Rải `seoKeywords` tự nhiên (xem trên).

## Quy trình

### A. Viết nội dung một record
1. Đọc record (đã có số liệu + insight VN + đặc điểm khách quan).
2. Viết `useCases`: 3-5 câu **hành động trực tiếp** (động từ đầu câu, KHÔNG prefix "Dùng để:" — vì heading
   trang đã là câu hỏi "<tool> dùng để làm gì?"). Chuyển `standoutFeatures` (khách quan) thành việc người
   dùng làm được theo lăng kính `vertical`. VD: "Lên lịch một lần, đăng cùng lúc lên 5 nền — khỏi dán tay."
3. Làm mềm các field tầng đọc còn lại theo 6 quy tắc. Giữ ý + bằng chứng, chỉ đổi giọng. KHÔNG bịa số mới.
4. KHÔNG đổi field tầng phân tích.
5. Đặt `draft: false` nếu Luan duyệt; ghi đè file. Chạy `npm run build`.

### B. Viết copy website (chrome/heading/hero)
Áp 6 quy tắc cho hero index, blurb/question pillar (`src/lib/industries.ts`), heading section, nav, footer.
Giữ thông điệp định vị (PRD §1.3) nhưng nói bằng giọng người đọc.

## Tự kiểm trước khi xong
- [ ] Mỗi `useCase` bắt đầu bằng việc làm được, không phải mô tả tool?
- [ ] Còn thuật ngữ kỹ thuật/meta nội bộ trong tầng đọc không?
- [ ] Có thổi phồng / hứa chắc chắn không? Cạm bẫy có nói thẳng không?
- [ ] Field tầng phân tích còn nguyên không?
- [ ] `npm run build` sạch?
