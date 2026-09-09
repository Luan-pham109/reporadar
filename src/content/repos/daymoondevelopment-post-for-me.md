---
name: "Post for Me"
repoUrl: "https://github.com/DayMoonDevelopment/post-for-me"
oneLiner: "Post for Me là nền tảng đăng/hẹn lịch bài lên nhiều mạng xã hội qua một API duy nhất (Twitter/X, Bluesky, Instagram, LinkedIn, TikTok, YouTube, Threads, Facebook, Pinterest), xây trên NestJS + Supabase + Trigger.dev, để dev cắm tính năng social vào app của mình."
media: []

vertical: ["agency"]

maturity: "pre-viral"
repoStats:
  stars: 58
  forks: 17
  note: "~330 ngày tuổi, ~0.2 sao/ngày"
  starsPerDay: 0.2
  ageDays: 330
  pushedAt: 2026-07-08T02:25:28Z
  archived: false
  openIssues: 12
standoutFeatures:
  - "Một API để đăng/hẹn lịch bài lên nhiều nền tảng cùng lúc: X, Bluesky, Instagram, LinkedIn, TikTok, YouTube, Threads, Facebook, Pinterest."
  - "Kiến trúc rõ ràng theo 'dumb monorepo': tách api (NestJS), trigger (Trigger.dev background jobs), dashboard và marketing thành các surface độc lập."
  - "Quản lý API key qua Unkey và có sẵn hạ tầng background job để xử lý đăng bài không đồng bộ."
  - "Có bản SaaS hosted tại postforme.dev cho ai không muốn tự dựng stack."
signalSources:
  - label: "GitHub"
    url: "https://github.com/DayMoonDevelopment/post-for-me"

useCases:
  - "Cắm khả năng đăng/hẹn lịch bài đa nền tảng vào một app/dashboard có sẵn thay vì tự viết integration cho từng mạng xã hội."
  - "Đánh giá kiến trúc của một social publishing API (NestJS + Supabase + Trigger.dev) trước khi build tính năng schedule nội bộ."
  - "Cân nhắc phương án self-host thay cho API trả phí như Ayrshare khi muốn giữ dữ liệu và cấu hình trong hạ tầng của mình."

workflowStepReplaced: "Khâu tự viết và bảo trì integration đăng bài cho từng nền tảng mạng xã hội riêng lẻ."
timeOrCostSaved: "Một API gộp nhiều nền tảng có thể tiết kiệm nhiều tuần công viết integration cho X/IG/LinkedIn/TikTok/YouTube... — nhưng con số thực phụ thuộc bạn tự host hay dùng bản SaaS, README không nêu benchmark cụ thể."
localProblem: "Agency và team làm tool ở Việt Nam khi build sản phẩm social (dashboard quản lý fanpage, tool lên lịch content cho khách) thường phải tự đấu nối API từng nền tảng — vừa tốn công vừa dễ vỡ mỗi lần nền tảng đổi API. Một lớp API gộp sẵn nhiều kênh giải đúng nỗi đau đó."
localEvidence: "Nhu cầu 'tool lên lịch đăng bài đa nền tảng', 'API đăng bài mạng xã hội', 'self-host Buffer/Ayrshare' xuất hiện đều trong nhóm dev và agency VN. Cái thiếu thường là một backend publishing gọn để không phải nuôi integration cho từng mạng."

vnMarket:
  insight: "Team VN muốn tự chủ tính năng social publishing thường đứng giữa hai lựa chọn: trả phí Ayrshare/Buffer API (đơn giản nhưng phụ thuộc bên thứ ba, tính phí theo profile) hoặc tự dựng. Post for Me nằm ở giữa: có repo để tham khảo/tự host và có bản SaaS. Lưu ý quan trọng: license repo ghi rõ thuộc sở hữu hoàn toàn của Day Moon Development LLC, KHÔNG phải open-source tự do, nên cần đọc kỹ điều khoản trước khi dựa vào cho production."
  seoKeywords: ["API đăng bài mạng xã hội", "tool lên lịch đăng bài đa nền tảng", "self-host social scheduler", "Ayrshare thay thế", "social media publishing API", "Post for Me"]
  notes: "Dựa trên README (repo layout + tech stack) và trang postforme.dev. Chưa thấy tín hiệu HN/Reddit. Điểm cần Luan xác minh: tình trạng license/quyền dùng lại vì đây không phải OSS chuẩn."

usabilityRisk: "Rủi ro lớn nhất là license: README nói dự án thuộc sở hữu hoàn toàn của Day Moon Development LLC — đây không phải open-source dùng lại tự do, cần đọc kỹ package.json và điều khoản trước khi tự host cho production. Về kỹ thuật, self-host là stack nặng (NestJS + Supabase + Trigger.dev + React Router, dùng Bun 1.3.3+), không phải cài một lệnh. Repo còn nhỏ (58 sao) và chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Sau guide này bạn xác định được nên tự host Post for Me, dùng bản SaaS postforme.dev, hay chọn giải pháp khác cho nhu cầu publishing của team."
  prerequisites:
    - "Đọc và xác nhận license/điều khoản dùng lại của repo trước tiên (không phải OSS tự do)."
    - "Nếu tự host: môi trường Bun 1.3.3+, Supabase CLI, tài khoản Trigger.dev và app/dev quen NestJS + React Router."
    - "App/dashboard đích cần cắm tính năng đăng bài, và API key/quyền của các nền tảng mạng xã hội bạn muốn hỗ trợ."
  steps:
    - "Đọc phần license trong các package.json để chốt phạm vi được phép dùng."
    - "Nếu chỉ cần dùng nhanh, thử bản SaaS tại postforme.dev trước khi bỏ công tự host."
    - "Nếu tự host, cd vào từng sibling (api, trigger, dashboard) và chạy bun install + script riêng của nó — không chạy ở repo root."
    - "Dựng Supabase local, chạy migration/seed, rồi test luồng đăng bài trên một nền tảng an toàn trước."
    - "Cắm API vào app của bạn và đo độ ổn định trước khi mở cho khách hàng."
  expectedResult: "Bạn gọi được API để đăng/hẹn lịch một bài test lên ít nhất một nền tảng, và có kết luận rõ về việc tự host có xứng công so với bản SaaS hay API khác."
  commonPitfalls:
    - "Tưởng đây là OSS tự do rồi tự host cho production mà chưa đọc license."
    - "Chạy bun install ở repo root (README nói rõ là vô ích vì không có workspace chung)."
    - "Đánh giá thấp chi phí vận hành Supabase + Trigger.dev khi scale lượng bài đăng."

greyHatFlag: "in"

suggestedAngle: "Góc kể hợp lý: 'backend đăng bài đa nền tảng cho dev/agency' — so sánh tự host vs Ayrshare/Buffer API, kèm lưu ý license."
paidToolReplaced: "Ayrshare, các API publishing của Buffer/Hootsuite, phần backend đăng bài của Postiz"
alternativeTo:
  - name: "Ayrshare"
    slug: "ayrshare"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI liệt kê được tech stack, nhưng cảnh báo về license không-tự-do và trade-off self-host vs SaaS cho bối cảnh agency VN cần curation của người theo dõi repo."

tags: ["social-media", "publishing-api", "scheduler", "self-host", "nestjs", "agency"]
scoreBreakdown:
  useCaseFit: 15
  projectHealth: 14
  costAdvantage: 11
  deployment: 6
  documentation: 9
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-08
nextReviewDueAt: 2026-10-06
publishedAt: 2026-07-08
week: "2026-W28"
draft: false
---

Draft từ daily pipeline. Điểm cần Luan kiểm trước khi publish: license repo ghi thuộc sở hữu hoàn toàn của Day Moon Development LLC (không phải OSS tự do) — ảnh hưởng trực tiếp tới cách kể và khuyến nghị self-host. README không nhúng ảnh/video demo nên media để trống.
