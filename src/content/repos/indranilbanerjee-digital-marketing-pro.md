---
name: "Digital Marketing Pro"
repoUrl: "https://github.com/indranilbanerjee/digital-marketing-pro"
oneLiner: "Digital Marketing Pro là một plugin marketing mã nguồn mở cho Claude Code / Cowork / Codex: cài một dòng rồi chạy các lệnh như engagement, seo-audit, content-engine để chạy cả một quy trình chiến lược marketing 12 phần cho từng brand, sinh ra 50–60 file tài liệu chuẩn hoá."
media: []

vertical: ["agency", "seo", "creative"]

maturity: "rising"
repoStats:
  stars: 554
  forks: 98
  note: "~162 ngày tuổi, ~3.4 sao/ngày"
  starsPerDay: 3.4
  ageDays: 162
  pushedAt: 2026-07-18T13:29:29Z
  archived: false
  openIssues: 1
standoutFeatures:
  - "Là một agent plugin cài qua marketplace: `/plugin marketplace add indranilbanerjee/neels-plugins` rồi `/plugin install digital-marketing-pro@neels-plugins`; chạy trên Claude Code, Cowork, Codex, Cursor, Copilot CLI, Antigravity, Hermes và OpenClaw (theo README)."
  - "Trục sản phẩm là một '12-Part Strategy Flow' 61 bước: mỗi brand chạy qua cùng một chuỗi phần và sinh ra ~50–60 file tài liệu chuẩn hoá theo thư mục (research, four-core, analysis, validation, growth-plan, channels, execution, creative-briefs...)."
  - "README công bố 158 skills và 24–25 specialist agents, nhiều lệnh workflow rời (seo-audit, campaign-plan, content-engine, competitor-analysis, performance-report, email-sequence, check) — đây là con số tác giả tự khai trong README."
  - "Có lớp tuân thủ: nói là 'EU AI Act Article 50 ready' với C2PA content provenance + deepfake disclosure, và audit AEO/GEO 6 nền tảng gồm Google AI Mode; hỗ trợ nhiều brand qua per-brand state và agency-dashboard."
  - "License MIT, thuần Python stdlib (README nói không phụ thuộc bên thứ ba), có 8 HTTP connector thực thi thật (Slack, HubSpot, Klaviyo, SendGrid, Brevo, Customer.io, Mailchimp, Ahrefs) và 25 OAuth connector qua MCP manifest."
signalSources:
  - label: "GitHub"
    url: "https://github.com/indranilbanerjee/digital-marketing-pro"

useCases:
  - "Chạy trọn một 'gói chiến lược marketing' cho một brand bằng lệnh engagement: intake, nghiên cứu thị trường, định vị, growth plan 12 tháng và channel plan — ra ~50–60 file để review, thay vì prompt tay rời rạc."
  - "Chuẩn hoá quy trình cho agency quản nhiều brand: mỗi client chạy cùng một khung 12 phần nên bàn giao, audit chất lượng và onboarding nhân sự mới đồng đều hơn."
  - "Gọi từng workflow lẻ khi cần: seo-audit (kỹ thuật + content + E-E-A-T + AI visibility), campaign-plan, content-engine, competitor-analysis, performance-report, email-sequence."
  - "Dùng lệnh check làm cổng kiểm trước khi publish: soát hallucination, giọng brand, claim, và các nghĩa vụ disclosure (C2PA, deepfake, quy định theo vùng)."

workflowStepReplaced: "Khâu tự dựng khung chiến lược marketing và soạn tay từng tài liệu (research, positioning, growth plan, channel plan, SEO audit, content brief) cho mỗi brand."
timeOrCostSaved: "README nói một engagement 12 phần chạy ~60 phút trên Opus 4.8 với ~15–40 USD tiền API, và rút onboarding nhân sự mới 'từ 6 tuần còn 6 giờ'. Đây là lời tác giả tự khai, chưa có kiểm chứng độc lập; chi phí API thực tế phụ thuộc model, độ dài và số lần chạy lại."
localProblem: "Agency và team in-house ở Việt Nam quản nhiều nhãn hàng thường không có một khung chiến lược thống nhất: mỗi account chạy một kiểu, tài liệu tản mát, chất lượng phụ thuộc từng người, bàn giao và onboarding tốn thời gian. Một plugin ép mọi brand qua cùng một quy trình có thể giúp chuẩn hoá phần khung này."
localEvidence: "Nhu cầu 'quy trình marketing chuẩn cho agency', 'SEO audit', 'AEO/GEO cho AI Overview', 'content brief theo brand' rất phổ biến trong nhóm agency/marketing VN. Điểm plugin này thêm được là đóng gói cả chuỗi tài liệu chiến lược vào các lệnh chạy được trên Claude Code/Cowork."

vnMarket:
  insight: "Team marketing/agency VN đang bắt đầu dùng Claude Code, Cowork và các AI agent để soạn brief, chạy SEO audit và viết content, nhưng phần lớn vẫn prompt rời rạc nên output không đồng đều. Giá trị của repo này với người Việt không nằm ở nội dung tiếng Việt (README và toàn bộ tài liệu là tiếng Anh, khung theo chuẩn EU/US) mà ở CÁI KHUNG quy trình 12 phần dùng chung được. Cần tỉnh táo với marketing của repo: rất nhiều con số tự khai (158 skills, 24 agents, 207 tests, '$15–40/engagement', 'onboarding 6 tuần còn 6 giờ') và một bảng tự so sánh mình hơn tool chính chủ của Anthropic — nên coi là công cụ tăng tốc và chuẩn hoá bản nháp, không phải cam kết kết quả marketing."
  seoKeywords: ["plugin marketing claude code", "quy trình marketing cho agency", "ai marketing agency", "seo audit bằng ai", "aeo geo google ai overview", "content brief theo brand", "marketing automation ai"]
  notes: "Dựa trên README (rất dài, nhiều self-claim và self-promotion của tác giả). Chưa thấy tín hiệu HN/Reddit; repo ~554 sao, ~3.4 sao/ngày, do một cá nhân duy trì. Toàn bộ khung và tài liệu là tiếng Anh, chuẩn tuân thủ theo EU/US — chưa có bản địa hoá VN. Điểm cần Luan cân nhắc: mức độ tin các con số tự khai và độ phù hợp khung EU AI Act với khách VN."

usabilityRisk: "Không phải tool web bấm-là-chạy: cần một agent harness (Claude Code, Cowork, Codex, Cursor...) để cài và chạy, và tốn tiền API mỗi lần chạy (README ước tính ~15–40 USD cho một engagement đầy đủ). Toàn bộ nội dung, khung và tài liệu là tiếng Anh, chuẩn tuân thủ theo EU/US/India — không có bản địa hoá tiếng Việt, phải tự chỉnh cho ngữ cảnh VN. Rất nhiều con số trong README là tác giả tự khai (skills/agents/tests/thời gian/chi phí) và repo mang tính self-promotion mạnh; output vẫn là bản nháp cần người kiểm sự thật và độ chính xác trước khi dùng cho khách. Repo do một cá nhân duy trì, chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Sau guide này bạn cài được plugin trên một agent harness, thiết lập một brand mẫu và chạy được một workflow (ví dụ seo-audit hoặc engagement) để đánh giá khung tài liệu nó sinh ra có hợp quy trình agency của bạn không."
  prerequisites:
    - "Một agent harness hỗ trợ plugin: Claude Code (CLI/IDE) hoặc Anthropic Cowork là đường chính; Codex/Cursor/Copilot CLI/Antigravity là lựa chọn thay thế."
    - "Tài khoản Claude / API key và ngân sách API (README ước tính ~15–40 USD cho một engagement đầy đủ; nên bắt đầu bằng một workflow nhỏ để đo chi phí thực)."
    - "Thông tin một brand để nhập: giọng, đối tượng, kênh, ngành, khu vực pháp lý, đối thủ."
  steps:
    - "Cài marketplace và plugin: `/plugin marketplace add indranilbanerjee/neels-plugins` rồi `/plugin install digital-marketing-pro@neels-plugins` (hoặc dùng UI Plugins nếu ở app Claude)."
    - "Bật auto-update cho marketplace `neels-plugins` (mặc định marketplace bên thứ ba TẮT auto-update trên Claude Code)."
    - "Thiết lập brand mẫu: `/digital-marketing-pro:brand-setup` và trả lời phần profiling (voice, audience, jurisdiction, competitors)."
    - "Chạy thử một workflow lẻ trước cho rẻ, ví dụ `/digital-marketing-pro:seo-audit`, để xem chất lượng và độ dài output; sau đó mới cân nhắc chạy `:engagement` đầy đủ."
    - "Người biên tập rà lại toàn bộ số liệu, claim và tính hợp lệ của tài liệu (nhất là phần tuân thủ/disclosure) trước khi đưa cho khách."
  expectedResult: "Một bộ file Markdown/tài liệu theo cấu trúc thư mục chuẩn của plugin (research, four-core, growth-plan, channels...) — đủ tốt làm bản nháp khung chiến lược để biên tập, không phải bản cuối đưa khách ngay."
  commonPitfalls:
    - "Chạy `:engagement` đầy đủ ngay lần đầu → tốn API và thời gian trước khi biết output có hợp mình không; nên thử workflow lẻ trước."
    - "Tin thẳng các con số và claim trong README/output (skills/agents/tests/thời gian, phần compliance) mà bỏ qua khâu kiểm sự thật."
    - "Dùng nguyên khung EU AI Act / disclosure cho khách VN mà không kiểm lại có đúng ngữ cảnh pháp lý và ngành của mình không."
    - "Quên rằng toàn bộ là tiếng Anh — cần chỉnh giọng và bản địa hoá trước khi dùng cho brand VN."

greyHatFlag: "in"

suggestedAngle: "Góc kể hợp lý: 'plugin biến quy trình chiến lược marketing của agency thành các lệnh chạy được trên Claude Code/Cowork' — nhấn giá trị chuẩn hoá khung 12 phần và bộ workflow lẻ (SEO audit, content, campaign), đồng thời nói thẳng rằng con số trong README là tự khai và output là bản nháp cần người kiểm."
paidToolReplaced: "Một phần các bộ template/quy trình marketing trả phí và tool AI marketing SaaS (ở mức dựng khung chiến lược + bản nháp tài liệu)."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tự viết được từng tài liệu marketing rời, nhưng việc đánh giá 'plugin này thực chất đóng gói gì, con số tự khai đáng tin tới đâu, và khung 12 phần + chuẩn tuân thủ EU có hợp agency VN không' cần người đọc kỹ README và có kinh nghiệm vận hành agency để curate."

tags: ["marketing", "agency", "seo", "aeo", "geo", "claude-plugin", "agent-skills", "marketing-automation", "content-marketing"]
scoreBreakdown:
  useCaseFit: 15
  projectHealth: 16
  costAdvantage: 13
  deployment: 10
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-23
nextReviewDueAt: 2026-10-21
publishedAt: 2026-07-23
week: "2026-W30"
draft: true
---

Draft từ daily pipeline (2026-07-23). Ứng viên duy nhất thực sự mới trong queue hôm nay; 4 ứng viên còn lại (ATH-MaaS/Pixelle-Video, tombadash/mousecontrol, Osmantic/ODS, kadevin/ilab-conjure) đều là bản đổi tên owner/repo của record đã có (aidc-ai-pixelle-video, tombadash-mouser, light-heart-labs-ods, kadevin-ilab-gpt-conjure) nên đã bỏ qua.

Điểm cần Luan quyết trước khi publish:
- README rất dài và nặng self-promotion, nhiều con số tự khai (158 skills, 24 agents, 207 tests, "$15–40/engagement", "onboarding 6 tuần còn 6 giờ") và một bảng tự so sánh mình hơn tool marketing chính chủ của Anthropic — đã ghi rõ trong record là "lời tác giả tự khai, chưa kiểm chứng".
- Toàn bộ khung/tài liệu là tiếng Anh, chuẩn tuân thủ theo EU/US/India, chưa có bản địa hoá VN. Cần cân nhắc độ phù hợp thực tế với khách agency VN.
- Không có media trong queue (media: []) — nếu muốn có thumbnail nên bổ sung ảnh từ README khi review.
