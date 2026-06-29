---
name: "Claude SEO"
repoUrl: "https://github.com/AgriciDaniel/claude-seo"
oneLiner: "Claude SEO giúp bạn dùng Claude Code để audit SEO sâu hơn: kiểm tra kỹ thuật, schema, GEO/AEO, local SEO, ecommerce SEO và gom lại thành danh sách việc cần làm."
media: []

vertical: ["agency", "ecom", "seo"]

maturity: "pre-viral"
repoStats:
  stars: 9851
  forks: 1414
  note: "~139 ngày tuổi, ~70.9 sao/ngày"
standoutFeatures:
  - "Bao phủ nhiều mảng SEO trong một skill: technical, content quality, schema, GEO/AEO, local, ecommerce và international SEO."
  - "Dùng nhiều sub-agent chuyên biệt để chạy audit song song và trả về action plan ưu tiên."
  - "Nhấn mạnh khuyến nghị có căn cứ theo tài liệu nguồn của Google."
  - "Có optional extension như DataForSEO, Firecrawl và báo cáo PDF/Excel."
signalSources:
  - label: "GitHub"
    url: "https://github.com/AgriciDaniel/claude-seo"

useCases:
  - "Chạy audit SEO kỹ thuật cho một site khách hàng rồi lấy danh sách lỗi ưu tiên để giao dev xử lý."
  - "Kiểm tra schema, E-E-A-T và nội dung trước khi đẩy một cụm bài SEO lên production."
  - "Soi cơ hội GEO/AEO để trang dễ được AI Overview, ChatGPT hoặc Perplexity trích dẫn hơn."
  - "Tạo báo cáo SEO có action item rõ ràng cho agency gửi khách thay vì chỉ xuất checklist chung chung."

workflowStepReplaced: "Khâu audit SEO thủ công và gom khuyến nghị từ nhiều checklist rời rạc."
timeOrCostSaved: "Có thể rút ngắn vòng audit ban đầu và viết report, nhưng vẫn cần SEO lead kiểm lại dữ liệu, mức ưu tiên và độ đúng."
localProblem: "SEO agency và team ecom Việt đang phải xử lý thêm GEO/AEO bên cạnh SEO truyền thống. Claude SEO hợp để chuẩn hóa audit và biến kết quả thành việc cụ thể cho dev/content."
localEvidence: "Nhu cầu SEO kỹ thuật, schema, entity, AEO/GEO và báo cáo SEO ở Việt Nam có thật. Riêng mức độ người Việt đang bàn về Claude SEO vẫn cần kiểm thêm."

vnMarket:
  insight: "Claude SEO đáng đưa cho nhóm agency/ecom đã dùng Claude Code hoặc agent workflow. Góc Việt mạnh nhất là biến audit thành việc cụ thể cho dev/content, nhất là phần schema và GEO/AEO đang mới nhưng dễ bị nói mơ hồ."
  seoKeywords: ["AI audit SEO", "Claude Code SEO", "GEO SEO", "AEO SEO", "technical SEO audit", "schema SEO", "SEO ecommerce"]
  notes: "Suy luận từ README và nhu cầu SEO agency/ecom. Cần kiểm Google/YouTube tiếng Việt quanh Claude SEO và GEO/AEO trước khi publish."

usabilityRisk: "Claude SEO không thay SEO lead. Nếu thiếu dữ liệu thật từ site, Search Console, GA hoặc crawl, khuyến nghị vẫn cần kiểm chứng; người dùng cũng phải quen làm việc trong Claude Code."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một backlog audit SEO đầu cho một site, đủ để giao việc tiếp cho dev hoặc content."
  prerequisites:
    - "Một website thật có thể crawl được, tốt nhất là site của khách hoặc dự án nội bộ."
    - "Dữ liệu nền như sitemap, Search Console, GA hoặc file crawl nếu bạn có."
    - "Claude Code và quyền chạy repo trong môi trường có thể đọc dữ liệu site."
  steps:
    - "Chọn một site hoặc một thư mục nội dung cụ thể cần audit trước, đừng quét cả hệ thống lớn ngay vòng đầu."
    - "Chuẩn bị URL, sitemap và các dữ liệu SEO sẵn có như Search Console export, crawl lỗi kỹ thuật hoặc nhóm trang cần ưu tiên."
    - "Cài hoặc nạp Claude SEO vào Claude Code rồi chạy audit theo đúng bài toán bạn cần: technical, schema, GEO/AEO hay ecommerce SEO."
    - "Đọc phần action plan trước, sau đó mở ngược lại các bằng chứng quan trọng để xem repo đang kết luận dựa trên dữ liệu nào."
    - "Tách kết quả thành ba cột: sửa ngay, cần dev kiểm, cần SEO lead xác minh rồi mới đưa vào backlog chính thức."
  expectedResult: "Bạn có một danh sách lỗi và cơ hội SEO được ưu tiên rõ, không chỉ là checklist dài mà không biết bắt đầu từ đâu."
  commonPitfalls:
    - "Thiếu dữ liệu crawl hoặc Search Console nên audit nghe tổng quát nhưng khó ra việc."
    - "Gộp technical SEO, content và GEO/AEO vào một lượt quá rộng làm người đọc bị loãng."
    - "Tin thẳng mọi khuyến nghị về schema, entity hoặc AEO mà không kiểm lại trên trang thật."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: dùng Claude SEO để biến audit GEO/AEO + technical SEO thành backlog rõ việc cho dev/content."
paidToolReplaced: "Một phần việc của Screaming Frog / Sitebulb / Surfer / checklist audit thủ công"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả repo, nhưng góc thực dụng cho SEO agency Việt đang chuyển từ checklist sang backlog GEO/AEO cần biên tập theo ngữ cảnh."

tags: ["seo", "agency", "ecom", "geo", "aeo", "claude-code"]
publishedAt: 2026-06-26
week: "2026-W26"
draft: false
---

Record nháp foundation. Cần kiểm thử trên một site thật trước khi publish để tránh nói quá về chất lượng audit.
