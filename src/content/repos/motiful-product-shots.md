---
name: "product-shots"
repoUrl: "https://github.com/motiful/product-shots"
oneLiner: "product-shots là bộ Claude Code skills mã nguồn mở biến MỘT ảnh sản phẩm thành cả dàn ảnh e-commerce: ảnh chính chuẩn Amazon, trang A+ detail, bộ ảnh model nhiều góc, ad creative và bài social — chạy ngay trong terminal, không khoá SaaS."
media: []

vertical: ["ecom", "creative", "agency"]

maturity: "rising"
repoStats:
  stars: 35
  forks: 6
  note: "~85 ngày tuổi, ~0.4 sao/ngày. Push gần nhất 08/06/2026 (đã ~2.5 tháng không cập nhật), trạng thái tự nhận 'alpha'."
  starsPerDay: 0.4
  ageDays: 85
  pushedAt: "2026-06-08"
  archived: false
  openIssues: 0
standoutFeatures:
  - "7 skill chia theo việc: main-image (chuẩn 9 quy tắc ảnh chính Amazon), detail-page (A+ content), multi-angle (bộ ảnh model nhiều góc, khoá 14 'identity anchor'), ad-creative (native theo nền tảng), social-post, image-gen engine và một intent router."
  - "Encode sẵn quy tắc ảnh chính Amazon (nền trắng, lấp ≥85% khung, không chữ/logo) vào prompt — quyết định compliance TRƯỚC khi render, không vá sau."
  - "Chạy như Agent Skills mở (Claude Code, Codex, Cursor, Windsurf, Copilot) qua `npx skills add motiful/product-shots` — file output do người dùng sở hữu, không đẩy asset lên SaaS."
  - "Engine image-gen dùng chung, tương thích nhiều backend (gpt-image-2, gemini-3-pro-image-preview, Flux) qua một biến môi trường."
signalSources:
  - label: "GitHub"
    url: "https://github.com/motiful/product-shots"

useCases:
  - "Từ 1 ảnh SKU dựng bộ ảnh listing Amazon (ảnh chính + phụ) đúng chuẩn nền trắng, không phải chỉnh tay từng cái."
  - "Tạo bộ ảnh model nhiều góc cho một mẫu quần áo (front / 3-4 / side / back / detail / lifestyle) giữ nguyên nhận diện model và outfit."
  - "Sinh ad creative theo từng nền tảng (Meta, TikTok, Google, YouTube...) đúng tỷ lệ, giữ nguyên copy người dùng nhập."
  - "Dựng bài social (feed / story / reel / carousel) theo 'DNA' ngành hàng, tiết kiệm khâu prompt thủ công."

workflowStepReplaced: "Khâu chụp/dựng ảnh sản phẩm e-commerce đa kênh — thay việc thuê studio hoặc ngồi tinh chỉnh prompt Midjourney tay."
timeOrCostSaved: "Về lý thuyết cắt khâu thuê studio/SaaS cho ảnh listing + ad; chưa có số liệu đo thực tế, và vẫn tốn chi phí gọi API image-gen."
localProblem: "Seller cross-border Việt (Amazon, Shopify, TikTok Shop) và ekip creative phải dựng nhiều ảnh cho một SKU: ảnh chính chuẩn Amazon, A+ page, ảnh model nhiều góc, ad và social — làm tay thì lâu, thuê studio thì đắt và chậm, mà giữ cho ảnh 'cùng một sản phẩm' rất khó."
localEvidence: "Quan sát chung: cộng đồng bán cross-border Việt bàn nhiều về ảnh listing chuẩn Amazon và ảnh model AI cho thời trang. Nhu cầu 'dựng bộ ảnh SP bằng AI, giữ nhất quán' là thực. Chưa thấy nội dung tiếng Việt bám riêng repo này — cần Luan kiểm chứng."

vnMarket:
  insight: "Ekip ecom/creative Việt đang dùng Midjourney, các SaaS chụp ảnh sản phẩm AI (SellerPic, ProductScope...) hoặc thuê studio để làm ảnh listing và ảnh model. product-shots hấp dẫn ở chỗ đóng gói quy trình đó thành skill mã nguồn mở chạy local, giữ file, không khoá SaaS — nhưng đổi lại cần biết setup Agent Skills + API key image-gen và tự chịu chi phí gọi model. Hợp với team đã quen workflow AI-first hơn là người mới hoàn toàn."
  seoKeywords: ["ảnh sản phẩm ai", "chụp ảnh sản phẩm bằng ai", "ảnh chính amazon chuẩn", "ảnh model ai thời trang", "tạo ad creative bằng ai", "claude code skills ecommerce"]
  notes: "Dựa trên README (gallery + mô tả 7 skill) + số liệu GitHub. Repo alpha, ít sao, ~2.5 tháng không push. Độ chắc chắn về chất lượng output: thấp (chưa lab-test)."

usabilityRisk: "Cần biết setup Agent Skills (Claude Code/Codex/Cursor...) và một API key image-gen (OMNIMAAS/gpt-image-2/gemini) — vẫn TỐN chi phí gọi model dù skill là mã nguồn mở. Dự án còn 'alpha', chỉ 35★/6 fork, push gần nhất 08/06/2026 (đã ~2.5 tháng, có thể chững). Chất lượng ảnh phụ thuộc model backend và ảnh reference đầu vào; multi-angle mạnh nhất ở fashion-on-model, sản phẩm khác giảm độ chính xác. Chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Từ 1 ảnh sản phẩm, tạo được bộ ảnh listing hoặc bộ ảnh model nhiều góc đầu tiên để đánh giá chất lượng."
  prerequisites:
    - "Một harness Agent Skills (Claude Code, Codex, Cursor, Windsurf hoặc Copilot)."
    - "Một API key image-gen tương thích (OMNIMAAS / gpt-image-2 / gemini) và chấp nhận chi phí gọi model."
    - "Một ảnh reference sản phẩm rõ nét (với thời trang: ảnh model + outfit)."
  steps:
    - "Cài skills: `npx skills add motiful/product-shots`."
    - "Cấu hình backend image-gen qua biến môi trường (ví dụ OMNIMAAS_API_KEY)."
    - "Đưa ảnh reference vào và mô tả yêu cầu (ví dụ 'ảnh chính Amazon + 6 ảnh phụ' hoặc 'bộ 9 góc cho mẫu váy này')."
    - "Trả lời các câu hỏi làm rõ của intent router (ngành hàng, thị trường, brand voice)."
    - "Xem output theo từng skill, đánh giá độ nhất quán của SKU/model."
  expectedResult: "Bộ ảnh (ví dụ ảnh chính nền trắng lấp ≥85% khung + ảnh phụ, hoặc bộ nhiều góc giữ nguyên model) đủ tốt để quyết định có dùng cho listing thật không."
  commonPitfalls:
    - "Quên rằng vẫn tốn phí gọi API image-gen — dựng số lượng lớn sẽ tốn kém."
    - "Kỳ vọng multi-angle chuẩn cho mọi loại SP — mạnh nhất là fashion-on-model, hàng khác giảm độ nhất quán."
    - "Ảnh reference mờ/xấu → output kém; chất lượng đầu vào quyết định đầu ra."
    - "Bỏ qua kiểm tra compliance thực tế của sàn trước khi upload dù skill đã cố tuân quy tắc."

greyHatFlag: "in"

suggestedAngle: "Góc cho seller/ekip ecom Việt: 'dựng bộ ảnh listing + ảnh model bằng Claude Code skills, giữ file của mình thay vì khoá SaaS' — kèm cảnh báo chi phí API và trạng thái alpha."
paidToolReplaced: "Một phần vai trò của SaaS chụp ảnh sản phẩm AI (SellerPic, ProductScope...) và tinh chỉnh prompt Midjourney tay; không thay được chi phí model image-gen."
alternativeTo:
  - name: "Midjourney"
    slug: "midjourney"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được repo, nhưng đánh giá độ phù hợp thực tế cho seller cross-border Việt, cảnh báo trạng thái alpha + chi phí API + giới hạn multi-angle cần practitioner thử và có lớp biên tập địa phương."

scoreBreakdown:
  useCaseFit: 19
  projectHealth: 11
  costAdvantage: 12
  deployment: 10
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"

tags: ["ai", "ecommerce", "product-photography", "claude-code", "agent-skills", "image-generation"]
publishedAt: 2026-08-29
week: "2026-W35"
draft: false
---

Draft foundation (auto). LƯU Ý CHO LUAN: ứng viên "tool thật" thú vị nhất lượt này cho ecom/creative cross-border. Điểm mạnh: đóng gói pipeline ảnh e-commerce thành Agent Skills mã nguồn mở, encode sẵn quy tắc ảnh chính Amazon. Điểm cần cân nhắc trước khi publish: repo mới alpha (35★, 6 fork), push gần nhất 08/06/2026 (~2.5 tháng không cập nhật, cần check còn sống không), và cần API key image-gen (tốn phí). README nhiều ảnh gallery nhưng mình chưa xác minh đường dẫn raw nên để `media: []` — Luan có thể bổ sung ảnh hero từ repo nếu muốn.
