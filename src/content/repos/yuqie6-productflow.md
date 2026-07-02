---
name: "ProductFlow"
repoUrl: "https://github.com/yuqie6/ProductFlow"
oneLiner: "ProductFlow là workbench tự host để một người hoặc team nhỏ quản lý sản phẩm, viết copy AI, dựng poster/ảnh AI và chạy nhiều vòng sinh ảnh liên tục cho một sản phẩm, tất cả trên một node canvas kéo-thả."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/yuqie6/ProductFlow/main/images/preview1.png"
    caption: "Danh sách sản phẩm dạng thẻ, có phân trang."
  - type: "image"
    url: "https://raw.githubusercontent.com/yuqie6/ProductFlow/main/images/preview2.png"
    caption: "Node canvas của workbench sản phẩm: ảnh tham chiếu, node copy và node sinh ảnh."
  - type: "image"
    url: "https://raw.githubusercontent.com/yuqie6/ProductFlow/main/images/preview4.png"
    caption: "Panel tạo ảnh trong phiên sinh ảnh liên tục."

vertical: ["ecom", "creative", "agency"]

maturity: "rising"
repoStats:
  stars: 280
  forks: 61
  note: "~71 ngày tuổi, ~3.9 sao/ngày"
  starsPerDay: 3.9
  ageDays: 71
  pushedAt: "2026-06-27"
  archived: false
  openIssues: 0
standoutFeatures:
  - "Node canvas kéo-thả để tổ chức tư liệu sản phẩm, ảnh tham chiếu, node văn bản và node sinh ảnh — hỗ trợ cả desktop (zoom, đa chọn) lẫn mobile (chạm, kéo, vẽ nối)."
  - "Phiên sinh ảnh liên tục (multi-turn) giữ lịch sử nhánh/candidate, có thể chọn ảnh đã ra làm ảnh gốc cho vòng tiếp theo — không phải sinh một lần rồi thôi."
  - "Có chế độ demo hoàn toàn miễn phí (provider mock + poster template) không cần API key thật, rồi mới nâng cấp sang OpenAI/DashScope/Volcengine khi cần chất lượng thật."
  - "Tự host bằng Docker Compose một lệnh, có health-check endpoint, và gallery lưu lại toàn bộ ảnh đã sinh kèm prompt và model đã dùng."
signalSources:
  - label: "GitHub"
    url: "https://github.com/yuqie6/ProductFlow"

useCases:
  - "Tạo copy sản phẩm và poster AI cho một mặt hàng ngay trên cùng một canvas, khỏi nhảy qua lại giữa ChatGPT, Canva và app xoá phông."
  - "Chạy nhiều vòng sinh ảnh liên tục cho một sản phẩm, chọn ảnh ưng nhất mỗi vòng làm ảnh gốc cho vòng sau — thay vì tạo lại từ đầu mỗi lần chưa ưng."
  - "Test miễn phí toàn bộ luồng bằng chế độ demo (mock) trước khi quyết định trả API key thật cho OpenAI/DashScope/Volcengine."
  - "Lưu lại toàn bộ ảnh đã tạo trong gallery kèm prompt và model đã dùng, để tra lại 'ảnh này ra từ prompt nào' khi cần dựng lại."
  - "Tự host trên VPS riêng bằng một lệnh Docker Compose để không phụ thuộc tài khoản SaaS bên thứ ba cho dữ liệu sản phẩm."

workflowStepReplaced: "Khâu rời rạc viết copy sản phẩm - tạo ảnh/poster - lưu trữ phiên bản cho một sản phẩm ecom, vốn đang phải nhảy qua nhiều app khác nhau (ChatGPT, Canva, Photoroom)."
timeOrCostSaved: "Thay được một phần chi phí các gói Canva Pro/Photoroom trả theo tháng cho khâu ảnh/poster, cộng thời gian gom kết quả từ nhiều app vào một chỗ; mức tiết kiệm cụ thể phụ thuộc số sản phẩm và tần suất tạo ảnh của bạn."
localProblem: "Shop nhỏ và freelancer thiết kế cho ecom ở VN thường trả phí nhiều app (Canva, Photoroom, Remove.bg...) cộng lại chỉ để ra một bộ ảnh + poster cho một sản phẩm, và không có chỗ lưu lại lịch sử các phiên bản đã thử. ProductFlow gom việc quản lý sản phẩm, viết copy, tạo poster và sinh ảnh liên tục vào một chỗ tự host, xem lại được toàn bộ lịch sử ảnh đã tạo."
localEvidence: "Nhu cầu 'tạo ảnh sản phẩm AI', 'poster quảng cáo AI' cho shop VN đã rất rõ (nhiều bài liệt kê tool như Canva, Midjourney, Flair AI cho shop nhỏ trên các trang như Penci, AI Academy), nhưng chưa có nội dung tiếng Việt nào nhắc tới ProductFlow — repo còn khá mới (71 ngày) và tài liệu chính bằng tiếng Trung."

vnMarket:
  insight: "Ngành ecom VN đã quen trả tiền cho nhiều app rời (Canva cho poster, Photoroom/Remove.bg cho ảnh sản phẩm, ChatGPT cho copy) — mỗi app một tài khoản, không đồng bộ, không lưu lịch sử phiên bản. ProductFlow nhắm đúng khoảng trống 'một chỗ tự host duy nhất' cho luồng đó, và điểm hay nhất là có provider mock để dùng thử miễn phí trước khi trả tiền model thật. Rào cản lớn nhất là tự host: cần biết Docker Compose, PostgreSQL, Redis — không hợp non-technical shop owner tự làm một mình, hợp hơn với agency/freelancer kỹ thuật làm dịch vụ cho nhiều shop, hoặc dev nội bộ của một chuỗi ecom."
  seoKeywords: ["tạo ảnh sản phẩm AI tự host", "công cụ làm poster sản phẩm AI", "workbench AI cho ecommerce", "tự host AI tạo ảnh quảng cáo", "AI viết copy sản phẩm và tạo ảnh"]
  notes: "Verify qua WebSearch 2026-07-02: nhu cầu tạo ảnh sản phẩm/poster AI cho shop VN có thật và nhiều bài so sánh tool (Canva, Midjourney, Flair AI...), nhưng chưa thấy ai nhắc riêng ProductFlow bằng tiếng Việt. Cần Luan kiểm thêm nhóm ecom/thiết kế VN trước khi publish."

usabilityRisk: "Không phải app bấm chạy ngay — tự host cần Docker Compose, PostgreSQL, Redis và một domain/HTTPS nếu dùng thật cho khách. Chế độ demo (mock provider) miễn phí nhưng ảnh không phải chất lượng thật; muốn ảnh dùng được cho ecom phải trả API key OpenAI/DashScope/Volcengine. Hiện tại chỉ có một tài khoản quản trị (chưa multi-tenant), nên không hợp để bán ngay như dịch vụ SaaS nhiều khách."

practitionerGuide:
  outcome: "Sau guide này bạn có một sản phẩm với bộ ảnh + copy + poster do AI tạo, chạy hết vòng từ tạo sản phẩm tới xuất ảnh trong ProductFlow tự host."
  prerequisites:
    - "Máy/VPS có Docker và Docker Compose."
    - "Ảnh sản phẩm gốc thật để làm ảnh tham chiếu."
    - "Tuỳ chọn: API key OpenAI/DashScope/Volcengine nếu muốn ảnh chất lượng thật thay vì chế độ demo mock."
  steps:
    - "Copy `.env.example` thành `.env`, đổi các khoá đăng nhập/mật khẩu mặc định, rồi chạy `docker compose up -d --build`."
    - "Đăng nhập bằng `ADMIN_ACCESS_KEY`, tạo một sản phẩm mới và tải ảnh gốc + ảnh tham chiếu lên node canvas."
    - "Chạy node văn bản để AI viết copy sản phẩm, xác nhận bản copy trước khi cho node sinh ảnh đọc vào."
    - "Chạy node sinh ảnh hoặc mở phiên sinh ảnh liên tục để thử nhiều phiên bản poster/ảnh, chọn ảnh ưng nhất làm ảnh gốc cho vòng kế tiếp."
    - "Vào `/gallery` xem lại toàn bộ ảnh đã tạo kèm prompt, tải về hoặc gắn lại làm ảnh tham chiếu sản phẩm."
  expectedResult: "Bạn có ít nhất một bộ copy + ảnh/poster cho một sản phẩm thật, cộng lịch sử các phiên bản đã thử để so sánh trước khi chọn bản final."
  commonPitfalls:
    - "Tưởng chế độ demo (mock) ra ảnh chất lượng thật — thực ra cần cấu hình provider thật mới dùng được cho khách."
    - "Bỏ qua bước đổi `ADMIN_ACCESS_KEY`/`SETTINGS_ACCESS_TOKEN`/`SESSION_SECRET` mặc định khi deploy thật, dễ lộ quyền quản trị."
    - "Không có ai biết Docker trong team thì việc tự host sẽ tốn thời gian hơn dự tính."

greyHatFlag: "in"

suggestedAngle: "Góc creator: 'Tự host một workbench AI tạo ảnh + copy sản phẩm free (bản demo) trước khi trả tiền model thật' — quay demo từ lúc tạo sản phẩm tới lúc có ảnh/poster hoàn chỉnh."
paidToolReplaced: "Canva Pro / Photoroom / các SaaS tạo ảnh sản phẩm-poster trả phí theo tháng"
alternativeTo:
  - name: "Canva"
    slug: "canva"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI/Trending nói được 'có tool tự host tạo ảnh sản phẩm bằng AI', nhưng việc nó có đáng tự host so với trả Canva/Photoroom hàng tháng, ai nên làm (agency kỹ thuật hay shop tự làm), và rủi ro bảo mật khi deploy là phần cần biên tập theo ngữ cảnh VN."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 14
  deployment: 6
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-07-02
nextReviewDueAt: 2026-09-30

tags: ["ecom", "creative", "agency", "ai-image", "product-photo", "self-hosted"]
publishedAt: 2026-07-02
week: "2026-W27"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-07-02 (nguồn: github-search, 280 sao). Đã gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) xác nhận media hiển thị đúng (ảnh preview lấy từ nhánh `main`), (2) độ bão hoà nội dung tiếng Việt cho ProductFlow, (3) đánh giá lại rủi ro bảo mật khi hướng dẫn người đọc tự host (đặc biệt phần đổi secret mặc định).
