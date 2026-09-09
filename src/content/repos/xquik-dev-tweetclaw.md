---
name: "TweetClaw"
repoUrl: "https://github.com/Xquik-dev/tweetclaw"
oneLiner: "TweetClaw là plugin cho OpenClaw giúp agent AI tìm tweet, tìm reply, đăng bài, export follower, quản lý media và theo dõi X/Twitter thông qua dịch vụ Xquik."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 84
  forks: 6
  note: "~115 ngày tuổi, ~0.7 sao/ngày"
  starsPerDay: 0.7
  ageDays: 115
  pushedAt: 2026-07-04T22:33:28Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Là plugin/MCP server cho OpenClaw, cho phép agent AI thao tác X/Twitter: tìm tweet, tìm reply, đăng bài, gửi DM, export follower, quản lý media."
  - "Có sẵn tính năng chuyên biệt cho làm marketing như monitor X/Twitter và bốc thăm giveaway."
  - "README gắn nhiều điểm phân phối (npm @xquik/tweetclaw, Smithery, Apify actor, Context7, Skills.sh) và chạy theo mô hình pay-per-use qua Xquik."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Xquik-dev/tweetclaw"
  - label: "npm"
    url: "https://registry.npmjs.org/@xquik%2ftweetclaw"
  - label: "Xquik"
    url: "https://xquik.com"

useCases:
  - "Cho agent AI tự động theo dõi tweet/keyword về thương hiệu và tổng hợp lại thay vì mở X canh tay."
  - "Export danh sách follower và quản lý media của một tài khoản X để phục vụ báo cáo hoặc chiến dịch."
  - "Đăng và trả lời tweet theo kịch bản có sẵn từ trong workflow agent."
  - "Chạy bốc thăm giveaway trên X một cách có quy trình thay vì làm thủ công."

workflowStepReplaced: "Khâu mở X/Twitter canh tay để theo dõi từ khoá, gom follower, đăng và bốc thăm giveaway thủ công."
timeOrCostSaved: "Có thể gom nhiều thao tác X lặp lại (monitor, export, đăng, bốc thăm) vào một agent; đổi lại là chi phí pay-per-use qua Xquik và rủi ro chính sách của X."
localProblem: "Agency social và team quản trị fanpage/X ở Việt Nam thường phải canh tay để theo dõi từ khoá, gom follower và chạy minigame giveaway. TweetClaw hướng tới việc giao những việc lặp này cho agent, nhưng chỉ hợp với team đã dùng OpenClaw và chấp nhận rủi ro tự động hoá X."
localEvidence: "Nhu cầu monitor X/Twitter, export follower và chạy giveaway là việc quen thuộc của agency social Việt; còn hệ sinh thái OpenClaw plugin thì gần như chưa có nội dung tiếng Việt."

vnMarket:
  insight: "Tự động hoá X/Twitter cho marketing ở Việt Nam lâu nay chủ yếu qua tool scraping hoặc dịch vụ trả phí. Một plugin agent theo mô hình pay-per-use như TweetClaw là hướng mới, nhưng thị trường Việt còn dùng Facebook/TikTok nhiều hơn X, nên đây là ngách hẹp cho team làm nội dung/crypto/global trên X."
  seoKeywords: ["tự động hoá Twitter", "công cụ quản lý X Twitter", "export follower Twitter", "monitor Twitter", "OpenClaw plugin", "twitter automation"]
  notes: "Quan sát: X ít phổ biến với brand nội địa Việt hơn Facebook/TikTok, nhưng có nhóm crypto/SaaS/global dùng mạnh. Độ chắc chắn thấp, cần Luan xác nhận tệp người dùng thực."

usabilityRisk: "Phụ thuộc hệ OpenClaw và dịch vụ Xquik trả phí theo lượt dùng, không phải tool đứng một mình. Repo nhỏ (~84 sao), chưa có cộng đồng Việt. Quan trọng: tự động đăng bài, gửi DM và export dữ liệu trên X có thể vi phạm điều khoản của X và dẫn tới khoá tài khoản — cần cân nhắc kỹ trước khi dùng cho tài khoản thật của khách."

practitionerGuide:
  outcome: "Bạn thử được một agent OpenClaw thực hiện một thao tác X an toàn (ví dụ tìm tweet theo từ khoá) để đánh giá xem có đáng đưa vào quy trình không."
  prerequisites:
    - "Môi trường chạy OpenClaw và biết cách cài plugin/MCP."
    - "Tài khoản Xquik và hiểu mô hình tính phí pay-per-use."
    - "Một tài khoản X phụ để test, tránh dùng tài khoản chính của khách."
  steps:
    - "Cài @xquik/tweetclaw vào môi trường OpenClaw theo README."
    - "Kết nối Xquik và cấu hình quyền truy cập ở mức tối thiểu cần thiết."
    - "Bắt đầu bằng một thao tác chỉ-đọc như tìm tweet hoặc monitor từ khoá."
    - "Kiểm tra kết quả và chi phí mỗi lượt trước khi bật các thao tác ghi (đăng bài, DM)."
    - "Chỉ mở rộng sang tài khoản thật sau khi đã hiểu rõ rủi ro chính sách của X."
  expectedResult: "Kết quả đúng là agent trả về đúng dữ liệu X yêu cầu với chi phí rõ ràng, và bạn nắm được thao tác nào an toàn để tự động hoá."
  commonPitfalls:
    - "Bật tự động đăng bài/DM trên tài khoản chính rồi bị X giới hạn hoặc khoá."
    - "Không theo dõi chi phí pay-per-use nên tốn hơn dự tính khi chạy khối lượng lớn."
    - "Coi đây là tool độc lập, trong khi nó cần cả OpenClaw lẫn dịch vụ Xquik để chạy."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: cẩn trọng — giới thiệu khả năng agent hoá thao tác X cho team social, nhưng nói thẳng rủi ro ToS và pay-per-use, không cổ vũ spam."
paidToolReplaced: "Một phần nhu cầu dùng tool quản lý/scraping X-Twitter trả phí cho việc monitor và export"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả tự động hoá Twitter chung chung, nhưng đánh giá TweetClaw trong hệ OpenClaw, mô hình pay-per-use Xquik và rủi ro ToS cho agency Việt cần lớp tổng hợp và cảnh báo riêng."

scoreBreakdown:
  useCaseFit: 17
  projectHealth: 14
  costAdvantage: 9
  deployment: 10
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-06
nextReviewDueAt: 2026-10-04

tags: ["agency", "twitter", "x", "automation", "openclaw", "mcp"]
publishedAt: 2026-07-06
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue. greyHatFlag=borderline vì tự động hoá X/Twitter có thể vi phạm ToS. Cần Luan quyết định có hợp kỷ luật IN/OUT của RepoRadar không, và xác nhận tệp người dùng Việt (X ít phổ biến hơn Facebook/TikTok) trước khi publish.
