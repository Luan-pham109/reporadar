---
name: "Nitter"
repoUrl: "https://github.com/zedeus/nitter"
oneLiner: "Nitter là bản giao diện Twitter/X thay thế, tự host, cho phép xem trang và dòng tweet công khai mà không cần đăng nhập và không dính JavaScript theo dõi."
media: []

vertical: ["agency", "seo"]

maturity: "established"
repoStats:
  stars: 14049
  forks: 1211
  note: "~2627 ngày tuổi, ~5.3 sao/ngày. Repo đã ARCHIVED và nhận thư cease & desist từ X Corp (24/08/2026)."
  starsPerDay: 5.3
  ageDays: 2627
  pushedAt: "2026-08-26"
  archived: true
  openIssues: 156
standoutFeatures:
  - "Xem trang/tweet công khai của Twitter/X không cần tài khoản, không JavaScript, không quảng cáo (theo README)."
  - "Có RSS feed cho từng tài khoản — hữu ích cho theo dõi/monitor nội dung."
  - "Nhẹ hơn nhiều so với twitter.com (README nêu trung bình nhẹ ~15 lần, trang load nhanh 2-4 lần)."
  - "Nguồn tín hiệu là bài HN về việc dự án nhận cease & desist, không phải vì tính năng mới."
signalSources:
  - label: "Hacker News (cease & desist)"
    url: "https://news.ycombinator.com/item?id=49437283"
  - label: "GitHub"
    url: "https://github.com/zedeus/nitter"

useCases:
  - "Đọc nhanh dòng tweet của một tài khoản công khai mà không cần đăng nhập (khi cần tra cứu content đối thủ/nhân vật)."
  - "Lấy RSS feed từ một tài khoản để đưa vào công cụ theo dõi nội dung nội bộ."
  - "Giảm tracking khi lướt Twitter/X cho mục đích research."

workflowStepReplaced: "Khâu phải đăng nhập X và bị tracking khi đọc/nghiên cứu nội dung công khai."
timeOrCostSaved: "Không có số liệu đo thực tế; giá trị chủ yếu là quyền riêng tư và tránh đăng nhập, không phải tiết kiệm chi phí trực tiếp."
localProblem: "Team agency/SEO Việt đôi khi cần theo dõi tweet của brand/đối thủ hoặc lấy RSS mà không muốn đăng nhập tài khoản riêng. Nhưng đây là nhu cầu ngách, và cách làm này đang gặp rào cản pháp lý."
localEvidence: "Quan sát chung: dân social/agency có tìm cách xem/scrape Twitter không cần login. Chưa thấy nội dung tiếng Việt bám repo này; và bối cảnh 08/2026 là dự án bị X Corp yêu cầu gỡ."

vnMarket:
  insight: "Nitter từng phổ biến trong giới privacy/self-hosted để xem Twitter không cần login. Tuy nhiên ở thời điểm quét (08/2026), dự án đã archived và nhận thư cease & desist từ X Corp yêu cầu gỡ toàn bộ instance lẫn repo. Nghĩa là hướng dùng này đang chết dần và có rủi ro pháp lý — không nên khuyến nghị như một công cụ đáng đầu tư cho team VN."
  seoKeywords: ["nitter là gì", "xem twitter không cần đăng nhập", "thay thế twitter frontend", "rss twitter"]
  notes: "Dựa trên README + tín hiệu HN. Bối cảnh pháp lý (C&D từ X Corp) là điểm quyết định. Độ chắc chắn về việc KHÔNG nên publish: cao."

usabilityRisk: "RỦI RO CAO: repo đã archived (không còn maintain) và nhận thư cease & desist từ X Corp (24/08/2026) yêu cầu gỡ instance lẫn repo — các instance công cộng đang lần lượt sập. Chạy được phải tự host (Nim + Redis/Valkey + reverse proxy), dùng API không chính thức của Twitter nên dễ hỏng bất cứ lúc nào. Không có cộng đồng hỗ trợ VN. Đây là công cụ đang bị khai tử, không phải lựa chọn ổn định."

practitionerGuide:
  outcome: "Hiểu được Nitter là gì và vì sao KHÔNG nên dựa vào nó ở thời điểm hiện tại."
  prerequisites:
    - "Nếu vẫn muốn thử cho mục đích học/nghiên cứu: VPS, Nim toolchain, Redis/Valkey, reverse proxy (Nginx/Apache)."
    - "Chấp nhận rằng dự án đã archived và có rủi ro pháp lý."
  steps:
    - "Đọc README để hiểu kiến trúc và lý do dự án ra đời (privacy)."
    - "Không nên dựng instance public — bối cảnh C&D khiến việc này rủi ro."
    - "Nếu cần theo dõi X cho công việc, cân nhắc API/công cụ chính thống thay vì Nitter."
  expectedResult: "Nắm bối cảnh và tránh đầu tư thời gian vào một công cụ đang bị khai tử."
  commonPitfalls:
    - "Dựng instance public → dính rủi ro pháp lý và bị chặn."
    - "Xây quy trình phụ thuộc Nitter → gãy khi instance sập hoặc API Twitter đổi."

greyHatFlag: "out"

suggestedAngle: "Nếu viết, chỉ nên ở góc 'chuyện Nitter bị X Corp gỡ' như một case study về rủi ro phụ thuộc công cụ scrape — KHÔNG hướng dẫn dùng."
paidToolReplaced: "Về lý thuyết thay một phần nhu cầu theo dõi Twitter/X, nhưng đang bị khai tử nên không phải lựa chọn thực tế."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Nitter là gì, nhưng phán đoán 'không nên publish vì đã archived + C&D 08/2026 + grey-hat' là lớp biên tập/kỷ luật cần con người quyết."

scoreBreakdown:
  useCaseFit: 6
  projectHealth: 3
  costAdvantage: 4
  deployment: 3
  documentation: 8
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"

tags: ["twitter", "privacy", "self-hosted", "social"]
publishedAt: 2026-08-29
week: "2026-W35"
draft: true
---

Draft foundation (auto). CẢNH BÁO CHO LUAN: đề xuất KHÔNG publish. Repo đã `archived: true` và nhận thư cease & desist từ X Corp (24/08/2026) yêu cầu gỡ toàn bộ instance lẫn repo — nguồn tín hiệu HN chính là bài về vụ C&D, không phải tính năng. Cách dùng (scrape Twitter qua API không chính thức) là grey-hat và đang bị khai tử. Đã set `greyHatFlag: "out"`. Chỉ nên khai thác ở góc case study về rủi ro phụ thuộc công cụ scrape nếu muốn.
