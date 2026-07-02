---
name: "Codex SEO"
repoUrl: "https://github.com/AgriciDaniel/codex-seo"
oneLiner: "Codex SEO là bộ skill SEO chạy trong Codex để audit kỹ thuật, GEO/AEO, Core Web Vitals, schema, backlink, local SEO và tạo báo cáo có cấu trúc."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/AgriciDaniel/codex-seo/v1.9.6-codex.5/screenshots/cover-image.webp"
    caption: "Cover README mô tả Codex SEO như một suite audit SEO cho Codex."

vertical: ["agency", "ecom", "seo"]

maturity: "rising"
repoStats:
  stars: 345
  forks: 50
  note: "~64 ngày tuổi, ~5.4 sao/ngày"
  starsPerDay: 5.4
  ageDays: 64
  pushedAt: 2026-06-22T14:35:00Z
  archived: false
  openIssues: 17
standoutFeatures:
  - "README mô tả 1 orchestrator skill, 26 workflow chuyên môn và 24 TOML agent profile cho nhiều nhánh SEO."
  - "Nhắm trực tiếp vào Codex-first SEO, có tích hợp DataForSEO, Gemini, Google, Firecrawl, GEO/AEO, Core Web Vitals, schema, backlink và local/maps."
  - "Có headless runners và hướng premium audit report, tức không chỉ là prompt pack mà còn có hướng chạy báo cáo lặp lại."
signalSources:
  - label: "GitHub"
    url: "https://github.com/AgriciDaniel/codex-seo"

useCases:
  - "Audit một website khách hàng theo nhiều lớp: kỹ thuật, nội dung, schema, Core Web Vitals, backlink và AI search."
  - "Chuẩn hóa checklist SEO cho agency để mỗi dự án không phụ thuộc hoàn toàn vào một senior tự nhớ việc cần kiểm tra."
  - "Tạo báo cáo SEO có cấu trúc cho e-commerce hoặc local business trước buổi tư vấn với khách."
  - "Thử nhánh GEO/AEO trong Codex để xem website có đủ dữ liệu cho ChatGPT, Gemini hoặc AI Overview hiểu và trích dẫn không."

workflowStepReplaced: "Khâu gom prompt, checklist, crawler/API và mẫu báo cáo SEO rời rạc thành một quy trình chạy trong Codex."
timeOrCostSaved: "Có thể giảm thời gian dựng khung audit và báo cáo ban đầu cho agency; phần dữ liệu trả phí vẫn phụ thuộc DataForSEO, Gemini, Google hoặc Firecrawl nếu workflow cần."
localProblem: "Agency SEO Việt đang phải bán thêm AI SEO, GEO, AEO và audit kỹ thuật trong khi quy trình nội bộ thường rời rạc giữa Screaming Frog, GSC, PageSpeed, sheet và prompt ChatGPT. Codex SEO đáng thử cho nhóm đã dùng Codex và muốn đóng gói cách audit thành skill."
localEvidence: "Các từ khóa như AI SEO, AEO, GEO SEO, tối ưu AI Overview, audit SEO kỹ thuật và schema đã có nhu cầu tiếng Việt. Repo này chưa trùng với Claude SEO đã có trong thư viện vì trọng tâm là Codex-first và nhiều workflow audit hơn."

vnMarket:
  insight: "Người làm SEO Việt đang chuyển từ tối ưu Google truyền thống sang câu hỏi website có được AI search đọc, hiểu và trích dẫn hay không. Agency cần quy trình có thể lặp lại để audit, chứ không chỉ vài prompt rời rạc. Một skill suite cho Codex có giá trị nếu team đã dùng Codex như môi trường làm việc chính."
  seoKeywords: ["Codex SEO", "AI SEO", "AEO", "GEO SEO", "audit SEO kỹ thuật", "Core Web Vitals", "schema SEO", "tối ưu AI Overview"]
  notes: "Từ khóa dựa trên nhu cầu SEO Việt quanh AI search và audit kỹ thuật. Chưa verify độ phổ biến riêng của tên Codex SEO trong cộng đồng Việt."

usabilityRisk: "Codex SEO phù hợp hơn với team đã biết Codex, API key và quy trình SEO kỹ thuật. Nếu agency chỉ cần checklist thủ công hoặc chưa có dữ liệu từ GSC/DataForSEO/Firecrawl, bộ skill có thể tạo cảm giác nặng hơn nhu cầu."

practitionerGuide:
  outcome: "Bạn có một báo cáo audit SEO/AEO đầu tiên từ Codex SEO và biết workflow nào đáng đưa vào quy trình agency."
  prerequisites:
    - "Codex chạy được trên máy, repo Codex SEO được cài theo README."
    - "URL website cần audit và quyền truy cập dữ liệu nếu muốn dùng GSC, DataForSEO, Google hoặc Firecrawl."
    - "Một mục tiêu rõ: audit kỹ thuật, GEO/AEO, content, backlink hay local SEO."
  steps:
    - "Cài skill suite theo hướng dẫn README và kiểm tra danh sách workflow có sẵn."
    - "Chọn một website nhỏ hoặc một nhóm URL để chạy thử, tránh bắt đầu bằng toàn bộ site lớn."
    - "Chạy workflow phù hợp với mục tiêu, ví dụ GEO/AEO hoặc Core Web Vitals trước."
    - "Đọc báo cáo, tách lỗi thành ba nhóm: sửa ngay, cần dev hỗ trợ, cần dữ liệu ngoài xác nhận."
    - "Lưu lại template prompt/report tốt nhất để dùng lại cho khách hàng sau."
  expectedResult: "Kết quả tốt là một báo cáo có checklist, phát hiện ưu tiên và bước sửa rõ, đủ để agency đem vào buổi tư vấn hoặc ticket nội bộ."
  commonPitfalls:
    - "Chạy quá nhiều workflow cùng lúc khi chưa có dữ liệu đầu vào sạch."
    - "Nhầm kết luận của AI thành bằng chứng cuối cùng, đặc biệt với backlink, ranking và citation."
    - "Không ghi rõ API key/datasource nào đã dùng nên báo cáo khó tái lập."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: bộ skill Codex-first để agency SEO Việt đóng gói audit AI SEO/GEO thành quy trình có thể lặp lại."
paidToolReplaced: "Giảm một phần nhu cầu dùng các nền tảng SEO audit/report trả phí ở vòng audit ban đầu, nhưng không thay dữ liệu chuyên sâu của Ahrefs, Semrush hoặc DataForSEO"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể nêu checklist SEO chung, nhưng góc hữu ích là cách đặt Codex SEO vào quy trình agency Việt, chi phí API và bước kiểm chứng dữ liệu."

scoreBreakdown:
  useCaseFit: 25
  projectHealth: 18
  costAdvantage: 14
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-30
nextReviewDueAt: 2026-09-28

tags: ["seo", "codex", "aeo", "geo", "core-web-vitals", "agency"]
publishedAt: 2026-06-30
week: "2026-W27"
draft: true
---

Draft foundation. Cần Luan so sánh tay với record AgriciDaniel Claude SEO để tránh trùng góc và kiểm tra một site Việt thật trước khi nâng lên bài public.
