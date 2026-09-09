---
name: "CoreClaw API Directory"
repoUrl: "https://github.com/cporter202/coreclaw-api-directory"
oneLiner: "Một danh mục gom 118 API cào dữ liệu web (sản phẩm, giá, review, profile mạng xã hội, lead) theo từng nhóm việc, để dân agency/ecom biết có sẵn API nào cho nhu cầu của mình."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/cporter202/coreclaw-api-directory/main/assets/coreclaw-api-directory-banner.svg"
    caption: "Banner directory: 118 API dữ liệu web chia theo 11 nhóm việc và 29 nguồn."

vertical: ["agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 119
  forks: 31
  note: "~7 ngày tuổi, ~17 sao/ngày"
  starsPerDay: 17
  ageDays: 7
  pushedAt: 2026-07-29T06:08:39Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "README gom 118 'Worker' của CoreClaw thành 11 nhóm việc (ecom, social, search/SEO, jobs, lead gen, research...) và 29 nguồn dữ liệu, mỗi mục có mô tả và link chạy trực tiếp."
  - "Có sẵn ví dụ curl gọi endpoint Store (discover) và endpoint chạy Worker qua REST, cùng nhắc tới lớp tích hợp MCP."
  - "Danh sách trải rộng các nguồn quen với dân ecom/agency: Amazon, eBay, Google Maps, Google SERP, LinkedIn, Instagram, YouTube..."
  - "Đây là awesome-list/thư mục tra cứu, KHÔNG phải một tool tự chạy: bản thân repo chỉ là index, việc cào thực tế chạy trên hạ tầng trả phí của CoreClaw."
signalSources:
  - label: "GitHub"
    url: "https://github.com/cporter202/coreclaw-api-directory"

useCases:
  - "Tra nhanh xem có API sẵn cho một nguồn cụ thể (giá Amazon, review, profile Instagram, công ty LinkedIn) thay vì tự viết scraper từ đầu."
  - "Lập danh sách nguồn dữ liệu cho một dự án lead-gen hoặc price-monitoring của agency/ecom trước khi quyết định mua dịch vụ nào."
  - "Xem cấu trúc input/output và ví dụ gọi API để ước lượng độ khó tích hợp vào workflow n8n/automation."
  - "Dùng như bản đồ thị trường 'có thể cào được gì' để tư vấn khách, dù cuối cùng có thể chọn nhà cung cấp khác."

workflowStepReplaced: "Khâu tự đi tìm và tự viết scraper cho từng nguồn (Amazon, Google Maps, LinkedIn...) khi cần dữ liệu web cho lead-gen hoặc theo dõi giá."
timeOrCostSaved: "Tiết kiệm thời gian tra cứu 'có API nào cho nguồn X không', nhưng KHÔNG miễn phí: chạy Worker thật cần API key và trả phí theo mức dùng của CoreClaw."
localProblem: "Nhiều agency và shop ecom ở Việt Nam cần dữ liệu web đều đặn — giá đối thủ trên sàn, review sản phẩm, danh sách công ty/decision-maker để bán hàng — nhưng đội nhỏ không có người tự viết và bảo trì scraper, nên loay hoay giữa tự làm và mua dịch vụ."
localEvidence: "Nhu cầu theo dõi giá sàn (Shopee/Lazada/Amazon), cào review và tìm lead B2B là việc quen thuộc của team ecom/agency Việt. Directory này đáng chú ý ở chỗ liệt kê sẵn nhiều nguồn, nhưng cần lưu ý: mọi link đều gắn mã affiliate và nguồn Việt (Shopee/Lazada/TikTok Shop) gần như không có — phần lớn là Amazon/eBay và mạng xã hội quốc tế."

vnMarket:
  insight: "Ở Việt Nam, dữ liệu web cho ecom/agency hiện được lấy bằng ba cách: thuê freelancer viết scraper theo lần, mua tool giám sát giá/nguồn có sẵn, hoặc dùng các dịch vụ scraping-API nước ngoài (Apify, Bright Data, ScraperAPI...). CoreClaw đi vào đúng nhóm thứ ba, và directory này là cửa ngõ tra cứu cho nhóm đó."
  seoKeywords: ["API cào dữ liệu", "scraping API", "cào giá Amazon", "cào dữ liệu web", "tool tìm lead B2B", "cào review sản phẩm", "web scraping cho ecom"]
  notes: "Từ khóa dựa trên cách người làm ecom/agency Việt mô tả nhu cầu lấy dữ liệu web. Chưa kiểm chứng cộng đồng Việt cho riêng CoreClaw; repo mới 7 ngày tuổi nên tín hiệu còn rất sớm."

usabilityRisk: "Đây chỉ là thư mục link, không phải tool cài được: muốn chạy thật phải đăng ký tài khoản CoreClaw và trả phí theo mức dùng. Mọi link trong repo đều gắn mã affiliate (fpr=chris69), README có badge 'Affiliate Links Enabled', nên nên đọc như một danh mục có động cơ thương mại, không phải đánh giá trung lập. Ngoài ra phần lớn nguồn là quốc tế (Amazon/eBay/LinkedIn/Instagram), gần như không phủ sàn Việt."

practitionerGuide:
  outcome: "Bạn nắm được có những nhóm API dữ liệu web nào cho nhu cầu ecom/agency của mình, và tự đánh giá được nên dùng CoreClaw hay một nhà cung cấp khác."
  prerequisites:
    - "Xác định rõ cần dữ liệu gì (giá sàn, review, lead B2B, SERP...) và nguồn nào trước khi tra directory."
    - "Nếu muốn chạy thử thật: một tài khoản CoreClaw và API key (dịch vụ trả phí, có tính credit theo lần chạy)."
    - "Hiểu rằng cào dữ liệu Amazon/LinkedIn/Instagram nằm ở vùng xám điều khoản; cân nhắc pháp lý và mục đích sử dụng trước khi triển khai cho khách."
  steps:
    - "Mở README, xác định nhóm việc cần (ví dụ E-Commerce hoặc Lead Generation) và xem các Worker liệt kê trong nhóm đó."
    - "Đọc mô tả input/output của Worker định dùng để xem có khớp dữ liệu bạn cần không."
    - "So sánh với ít nhất một nhà cung cấp khác (Apify, Bright Data...) về giá, độ ổn định và mức phủ nguồn Việt trước khi cam kết."
    - "Nếu quyết định thử CoreClaw, chạy một Worker nhỏ với input tối thiểu để kiểm tra chất lượng và chi phí thực tế."
    - "Ghi lại độ chính xác, tỷ lệ lỗi và chi phí mỗi lần chạy để quyết định có đưa vào workflow lặp lại hay không."
  expectedResult: "Bạn có một shortlist nguồn dữ liệu và một phép thử nhỏ đủ để biết CoreClaw có đáng dùng cho use-case của mình không, thay vì tin vào con số marketing trong README."
  commonPitfalls:
    - "Nhầm directory là tool miễn phí tự chạy, trong khi việc cào thật đều phải trả phí qua CoreClaw."
    - "Bỏ qua yếu tố affiliate và coi danh sách như đánh giá khách quan."
    - "Kỳ vọng có nguồn Việt (Shopee/Lazada/TikTok Shop) trong khi directory nghiêng hẳn về nguồn quốc tế."
    - "Triển khai cào dữ liệu mạng xã hội/sàn cho khách mà chưa cân nhắc điều khoản dịch vụ và rủi ro pháp lý."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: bản đồ 'cào được dữ liệu gì cho ecom/agency', kèm cảnh báo thẳng đây là directory affiliate của một dịch vụ trả phí và gần như không phủ sàn Việt."
paidToolReplaced: "Cạnh tranh cùng nhóm scraping-API trả phí như Apify, Bright Data, ScraperAPI — nhưng bản thân repo dẫn tới CoreClaw (cũng trả phí), không phải giải pháp miễn phí"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê các dịch vụ scraping-API, nhưng phần giá trị thực dụng ở đây là cảnh báo về động cơ affiliate, mức phủ nguồn Việt yếu và vùng xám pháp lý — thứ người đọc cần được nhắc, không tự rút ra khi chỉ nhìn README."

scoreBreakdown:
  useCaseFit: 15
  projectHealth: 18
  costAdvantage: 6
  deployment: 8
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-29
nextReviewDueAt: 2026-10-27

tags: ["web-scraping", "scraping-api", "lead-generation", "ecommerce", "automation", "awesome-list", "mcp"]
publishedAt: 2026-07-29
week: "2026-W31"
draft: true
---

Draft foundation. LƯU Ý cho Luan trước khi cân nhắc publish:
- Đây là awesome-list/directory gắn affiliate (fpr=chris69) trỏ tới dịch vụ scraping trả phí CoreClaw, không phải open-source tool tự chạy. Đã set greyHatFlag = borderline vì cả yếu tố affiliate lẫn việc cào Amazon/LinkedIn/Instagram nằm trong vùng xám điều khoản.
- Repo mới 7 ngày tuổi, chưa có tín hiệu HN/Reddit → confidence low, evidenceLevel C.
- Gần như không phủ nguồn Việt (Shopee/Lazada/TikTok Shop). Nếu publish, nên giữ khung "bản đồ tham khảo + cảnh báo", không quảng bá.
