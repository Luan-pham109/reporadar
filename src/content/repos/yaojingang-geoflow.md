---
name: "GEOFlow"
repoUrl: "https://github.com/yaojingang/GEOFlow"
oneLiner: "GEOFlow là hệ thống mã nguồn mở giúp một team quản lý kho tài liệu, để AI viết bài, duyệt rồi tự đăng lên nhiều website cùng lúc — tất cả tối ưu cho việc được các công cụ AI trích dẫn (GEO)."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/yaojingang/GEOFlow/main/docs/images/screenshots/analytics.png"
    caption: "Trang phân tích dữ liệu: tổng quan hệ thống, vận hành nội dung và nhận diện AI crawler."
  - type: "image"
    url: "https://raw.githubusercontent.com/yaojingang/GEOFlow/main/docs/images/screenshots/task-management.png"
    caption: "Quản lý task tạo bài tự động theo hàng đợi."

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 3124
  forks: 719
  note: "~114 ngày tuổi, ~27.4 sao/ngày"
  starsPerDay: 27.4
  ageDays: 114
  pushedAt: "2026-08-02"
  archived: false
  openIssues: 2
standoutFeatures:
  - "Nối cả chuỗi: kho tri thức → AI sinh nội dung → duyệt → đăng, rồi phân phối ra nhiều site qua GEOFlow Agent, WordPress REST và HTTP API."
  - "Có RAG với cắt (chunk) theo quy tắc và tuỳ chọn quy hoạch ngữ nghĩa bằng LLM, truy hồi tài liệu liên quan khi sinh bài."
  - "Sinh sẵn gói site đích (PHP Agent) kèm trang chủ, trang chi tiết, sitemap, llms.txt và Schema để thân thiện với AI crawler."
  - "Tương thích API kiểu OpenAI và Gemini native; có phân tích dữ liệu, nhận diện AI crawler và triển khai bằng Docker Compose."

signalSources:
  - label: "GitHub"
    url: "https://github.com/yaojingang/GEOFlow"

useCases:
  - "Gom tài liệu sản phẩm, FAQ, case study của một brand thành kho tri thức, rồi để AI viết bài đều đặn cho một site GEO/tin tức riêng."
  - "Quản lý nhiều site hoặc nhiều chuyên mục bằng một hệ thống, đổi template và phân phối nội dung theo chuẩn thay vì làm thủ công từng nơi."
  - "Đẩy bài đã duyệt sang site WordPress hoặc site tĩnh qua Agent, kèm sitemap, llms.txt và Schema để dễ được AI trích dẫn."
  - "Theo dõi lượt truy cập, top nội dung và hành vi của AI crawler trong một trang phân tích tập trung."

workflowStepReplaced: "Khâu viết bài hàng loạt và đăng thủ công lên nhiều site trong quy trình content/GEO của agency."
timeOrCostSaved: "Có thể giảm công viết và đăng lặp lại khi vận hành nhiều site, nhưng phải trừ thời gian dựng hạ tầng (Docker, Postgres, Redis) và công biên tập/kiểm chứng nội dung. Chưa có số đo thực tế."
localProblem: "Agency và team SEO/GEO Việt đang phải quản lý nhiều site vệ tinh, nhiều chuyên mục và viết bài đều đặn bằng tay hoặc bằng nhiều tool rời. GEOFlow gom kho tri thức, sinh bài và phân phối vào một chỗ."
localEvidence: "Nhu cầu content automation và phân phối đa site ở Việt Nam có thật (nhiều team đang dùng WordPress + tool viết AI rời rạc). Riêng mức độ người Việt bàn về GEOFlow thì chưa kiểm chứng được."

vnMarket:
  insight: "GEOFlow hợp với team có sẵn kỹ thuật, đã vận hành nhiều WordPress/site vệ tinh và muốn chuẩn hoá quy trình content. Điểm nhạy cảm: rất dễ bị dùng để làm content farm — README của chính dự án cũng cảnh báo không dùng để tạo nhiễu thông tin. Góc Việt an toàn là dùng cho kho tri thức thật của brand, không phải để đẻ trang rác."
  seoKeywords: ["GEO SEO", "content automation", "tự động viết bài WordPress", "phân phối nội dung đa site", "llms.txt", "tối ưu AI Overview", "quản lý nội dung SEO"]
  notes: "Suy luận từ README (tiếng Trung, rất chi tiết) và nhu cầu vận hành đa site. Cần kiểm cộng đồng VN và thử thật một lần trước khi publish."

usabilityRisk: "Cần kỹ thuật thật: PHP 8.3+, PostgreSQL (pgvector), Redis, các queue worker và Docker để chạy production ổn. README gốc chủ yếu tiếng Trung. Quan trọng nhất: đây là công cụ dễ bị lạm dụng để sản xuất nội dung hàng loạt — chất lượng và độ thật của kho tri thức quyết định tất cả."

practitionerGuide:
  outcome: "Chạy xong guide, bạn có một bản GEOFlow chạy local, một kho tri thức nhỏ và một vài bài draft do AI sinh để đánh giá chất lượng trước khi tính chuyện phân phối."
  prerequisites:
    - "Máy/VPS chạy được Docker Compose (hoặc PHP 8.3+, PostgreSQL có pgvector, Redis nếu cài tay)."
    - "Một API key cho model chat kiểu OpenAI hoặc Gemini; thêm một embedding model nếu muốn dùng RAG."
    - "Một bộ tài liệu thật của brand (sản phẩm, FAQ, case study) để làm kho tri thức đầu tiên."
  steps:
    - "Clone repo, copy .env.example và chỉnh DB/Redis/APP_URL, rồi chạy docker compose build và up -d để khởi động bản dev."
    - "Đăng nhập admin, làm theo 'ba bước bắt đầu': cấu hình API model, dựng kho tư liệu (kho tri thức, kho tiêu đề, keyword, ảnh, tác giả)."
    - "Nạp tài liệu thật vào kho tri thức và chọn chiến lược cắt chunk; thêm embedding model nếu cần truy hồi tài liệu."
    - "Tạo một task với số lượng bài nhỏ, để nó chạy vào draft/duyệt trước — CHƯA bật auto-publish hay phân phối đa site."
    - "Đọc kỹ vài bài draft: kiểm độ đúng, độ trùng lặp và giọng; chỉ khi chất lượng ổn mới tính tới đăng và phân phối."
  expectedResult: "Vài bài draft bám theo kho tri thức thật, đủ để bạn đánh giá liệu quy trình này tạo ra nội dung dùng được hay chỉ ra chữ cho có."
  commonPitfalls:
    - "Nhảy thẳng vào bật auto-publish và phân phối đa site khi kho tri thức còn mỏng — dễ đẻ ra nội dung rác."
    - "Bỏ qua bước dựng hạ tầng đúng (pgvector, queue worker) khiến RAG hoặc job sinh bài không chạy."
    - "Tin thẳng bài AI viết mà không có người biên tập kiểm chứng số liệu và độ thật."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: dùng GEOFlow như một 'content ops nội bộ' cho brand có kho tri thức thật, tối ưu llms.txt/Schema để được AI trích dẫn — KHÔNG phải để làm site vệ tinh rác."
paidToolReplaced: "Một phần các SaaS content automation + quản lý phân phối đa site (kiểu Byword / SurferSEO auto-write + WordPress content ops trả phí)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được tính năng repo, nhưng ranh giới dùng sạch/dùng grey-hat và cách áp cho agency Việt vận hành đa site cần biên tập theo ngữ cảnh và kèm cảnh báo."

tags: ["seo", "agency", "geo", "content-automation", "rag", "wordpress", "php"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 21
  costAdvantage: 14
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-05
nextReviewDueAt: 2026-11-03
publishedAt: 2026-08-05
week: "2026-W32"
draft: true
---

Record nháp foundation (daily pipeline). Cần Luan kiểm: (1) mức grey-hat/borderline và câu chữ cảnh báo content farm, (2) media hotlink có đúng đường dẫn ảnh trên branch main không, (3) thử dựng thật một lần trước khi publish. README gốc chủ yếu tiếng Trung.
