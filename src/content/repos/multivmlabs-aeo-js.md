---
name: "aeo.js"
repoUrl: "https://github.com/multivmlabs/aeo.js"
oneLiner: "aeo.js là thư viện mã nguồn mở giúp website của bạn dễ được ChatGPT, Claude, Perplexity và các công cụ tìm kiếm AI đọc và trích dẫn — tự sinh llms.txt, robots.txt, sitemap và JSON-LD."
media: []

vertical: ["seo"]

maturity: "rising"
repoStats:
  stars: 103
  forks: 14
  note: "~136 ngày tuổi, ~0.8 sao/ngày"
  starsPerDay: 0.8
  ageDays: 136
  pushedAt: 2026-06-20T10:12:53Z
  archived: false
  openIssues: 8
standoutFeatures:
  - "Tập trung vào Answer Engine Optimization: đo và cải thiện khả năng site được các AI answer engine crawl, hiểu và cite chứ không chỉ SEO Google truyền thống."
  - "Có lệnh check nhanh không cần cài đặt (npx aeo.js check <domain>) trả về điểm sẵn sàng GEO 0-100 và ma trận truy cập cho nhiều AI crawler."
  - "Tự sinh các artefact kỹ thuật quen thuộc: llms.txt, robots.txt, sitemap, JSON-LD/structured data; README liệt kê hỗ trợ Next.js, Nuxt, Astro, Vite bằng TypeScript."
signalSources:
  - label: "GitHub"
    url: "https://github.com/multivmlabs/aeo.js"
  - label: "npm"
    url: "https://www.npmjs.com/package/aeo.js"
  - label: "Documentation"
    url: "https://aeojs.org"

useCases:
  - "Kiểm tra nhanh một website xem có bao nhiêu AI crawler đang được phép truy cập và điểm sẵn sàng GEO là bao nhiêu, chỉ với một lệnh npx."
  - "Tự sinh llms.txt, robots.txt, sitemap và JSON-LD cho dự án Next.js, Nuxt, Astro hoặc Vite thay vì viết tay từng file."
  - "Đưa vào pipeline build để mỗi lần deploy đều tái tạo các file giúp AI search hiểu cấu trúc nội dung."
  - "Tạo baseline điểm số trước/sau khi tối ưu để chứng minh với khách rằng site đã dễ được AI trích dẫn hơn."

workflowStepReplaced: "Khâu viết tay và bảo trì llms.txt, robots.txt, sitemap, structured data rồi tự đoán liệu AI search có đọc được nội dung không."
timeOrCostSaved: "Rút khâu tạo và cập nhật các file cho AI crawler từ chỉnh tay từng dự án xuống một lệnh, kèm điểm số để ưu tiên; phần xác nhận được cite thật vẫn cần kiểm tra định kỳ."
localProblem: "SEO team và agency Việt bắt đầu nhận yêu cầu 'làm sao ChatGPT/Perplexity nhắc tới thương hiệu' nhưng phần lớn vẫn tối ưu thủ công và không có cách đo. aeo.js cho một điểm số cụ thể và bộ file chuẩn để bắt đầu, thay vì bàn AEO bằng cảm tính."
localEvidence: "Các cụm như AEO, GEO, llms.txt, tối ưu AI Overview đã xuất hiện trong nội dung SEO Việt gần đây, nhưng công cụ cụ thể như aeo.js gần như chưa được viết bằng tiếng Việt."

vnMarket:
  insight: "SEO Việt đang chuyển từ 'lên top Google' sang 'có được AI answer engine lấy làm nguồn không'. Một npm package free tự sinh llms.txt/robots/sitemap/JSON-LD và chấm điểm GEO có thể thành bước khởi động rẻ cho agency muốn chào dịch vụ AEO mà chưa muốn đầu tư nền tảng trả phí."
  seoKeywords: ["AEO", "GEO SEO", "llms.txt", "tối ưu AI Overview", "ChatGPT trích dẫn website", "answer engine optimization", "structured data cho AI"]
  notes: "Kiểm tra truy vấn tiếng Việt quanh AEO, GEO, llms.txt và tối ưu AI Overview: từ khoá ngành có tín hiệu tăng, còn tool aeo.js chưa thấy nội dung tiếng Việt. Độ chắc chắn trung bình."

usabilityRisk: "Là thư viện JS/TypeScript nên cần người biết chạy npm/CLI và tích hợp vào codebase (Next.js, Nuxt, Astro, Vite). Repo còn nhỏ (~103 sao, ~0.8 sao/ngày), chưa có cộng đồng Việt. Điểm GEO là chỉ báo kỹ thuật, không phải cam kết được AI trích dẫn — vẫn phải kiểm chứng bằng truy vấn thật."

practitionerGuide:
  outcome: "Bạn có điểm sẵn sàng GEO đầu tiên cho một site và bộ file llms.txt/robots/sitemap/JSON-LD được sinh tự động để bắt đầu tối ưu."
  prerequisites:
    - "Node.js/npm trên máy để chạy npx và cài package."
    - "Một website cần audit và quyền chỉnh file cấu hình hoặc thư mục public."
    - "Danh sách vài truy vấn thật mà khách hàng sẽ hỏi AI search về ngành/thương hiệu."
  steps:
    - "Chạy npx aeo.js check <domain> để lấy điểm GEO và xem crawler nào đang bị chặn."
    - "Cài aeo.js vào dự án và cấu hình theo framework đang dùng (Next.js, Nuxt, Astro hoặc Vite)."
    - "Sinh llms.txt, robots.txt, sitemap và JSON-LD, rồi deploy các file này lên site."
    - "Chạy lại lệnh check để so sánh điểm trước/sau và lưu làm baseline."
    - "Kiểm tra bằng truy vấn thật trên ChatGPT/Perplexity xem thương hiệu có được nhắc/cite không."
  expectedResult: "Kết quả đúng là điểm GEO tăng lên sau khi thêm file, cùng một ma trận crawler cho thấy các AI engine chính được phép truy cập nội dung."
  commonPitfalls:
    - "Xem điểm GEO như cam kết được AI trích dẫn, trong khi citation còn phụ thuộc uy tín thương hiệu và nguồn ngoài."
    - "Thêm llms.txt nhưng bỏ qua chất lượng nội dung và khả năng crawl thực tế."
    - "Không lưu baseline trước/sau nên không chứng minh được tác dụng của việc tối ưu."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: hướng dẫn dùng một lệnh npx để chấm điểm AEO website Việt, kèm cách sinh llms.txt cho Next.js/Astro."
paidToolReplaced: "Một phần nhu cầu dùng nền tảng GEO/AEO audit trả phí ở vòng kiểm tra và tạo file ban đầu"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể giải thích AEO và llms.txt, nhưng việc chọn đúng tool free này, bộ từ khoá Việt và cách đưa nó vào quy trình audit của agency SEO Việt cần lớp tổng hợp riêng."

scoreBreakdown:
  useCaseFit: 20
  projectHealth: 14
  costAdvantage: 13
  deployment: 13
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-07-06
nextReviewDueAt: 2026-10-04

tags: ["seo", "aeo", "geo", "llms-txt", "ai-search"]
publishedAt: 2026-07-06
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue. Repo còn nhỏ (~103 sao). Cần Luan chạy thử `npx aeo.js check` trên một site Việt thật và xác nhận các file sinh ra đúng trước khi nâng confidence hoặc publish.
