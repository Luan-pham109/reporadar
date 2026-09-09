---
name: "Claude Blog"
repoUrl: "https://github.com/AgriciDaniel/claude-blog"
oneLiner: "Claude Blog là bộ skill cho Claude Code giúp viết, tối ưu, audit và bản địa hoá bài blog theo dây chuyền: mỗi bài phải qua 5 cổng kiểm duyệt (chấm điểm, kiểm ảnh/link) trước khi giao cho bạn."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/AgriciDaniel/claude-blog/main/assets/cover-blog.svg"
    caption: "Bìa Claude Blog: viết blog AI, tối ưu SEO, sẵn sàng cho AI trích dẫn và hợp đồng giao hàng 5 cổng."
  - type: "image"
    url: "https://raw.githubusercontent.com/AgriciDaniel/claude-blog/main/assets/blog-write-demo.gif"
    caption: "Demo /blog write: sinh bài đầu-cuối qua Delivery Contract 5 cổng."

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 1578
  forks: 274
  note: "~168 ngày tuổi, ~9.4 sao/ngày"
  starsPerDay: 9.4
  ageDays: 168
  pushedAt: "2026-07-23"
  archived: false
  openIssues: 24
standoutFeatures:
  - "Bộ skill lớn: 1 orchestrator + 31 sub-skill, 30 lệnh /blog (write, rewrite, analyze, cluster, multilingual, geo, factcheck...)."
  - "Delivery Contract 5 cổng ép mỗi bản draft phải đạt điểm 90+, đủ định dạng (.md/.html/.pdf/hero), render đúng ở 3 khổ màn hình và link trả 200 mới được giao."
  - "Chấm điểm 5 nhóm: Content, SEO, E-E-A-T, Technical và AI Citation Readiness; có fact-check đối chiếu số liệu với nguồn."
  - "Hỗ trợ đa ngôn ngữ (translate/localize/hreflang), topic cluster hub-and-spoke và phát hiện content decay từ export GSC."
signalSources:
  - label: "GitHub"
    url: "https://github.com/AgriciDaniel/claude-blog"

useCases:
  - "Viết một bài blog mới bằng /blog write rồi để hệ thống tự chặn nếu điểm dưới 90 — mình không phải là người đầu tiên soi lỗi."
  - "Audit một bài đang có bằng /blog analyze để nhận điểm 0-100 và danh sách việc cần sửa về SEO, E-E-A-T và schema."
  - "Lập topic cluster hub-and-spoke rồi viết + dịch + gắn hreflang cho nhiều thị trường bằng /blog cluster và /blog multilingual."
  - "Dò content decay từ dữ liệu Search Console để biết bài nào rớt traffic 20%+ cần refresh, gộp hay bỏ."

workflowStepReplaced: "Khâu viết bài, tự soi SEO/schema và QA định dạng trước khi đăng — thường phải làm tay qua nhiều checklist rời."
timeOrCostSaved: "Có thể rút ngắn vòng viết + QA cho từng bài, nhưng vẫn cần content lead kiểm nội dung, số liệu và mức độ đúng của fact-check. Chưa có số đo chuẩn."
localProblem: "Agency content và team SEO Việt đang phải vừa viết bài, vừa tự QA SEO/schema, vừa lo được AI Overview/ChatGPT trích dẫn. Claude Blog hợp để chuẩn hoá dây chuyền viết + kiểm cho những team đã dùng Claude Code."
localEvidence: "Nhu cầu viết blog chuẩn SEO + GEO/AEO ở VN có thật, nhiều agency đang trộn nhiều tool viết và checklist rời. Riêng mức người Việt bàn về Claude Blog thì chưa kiểm chứng."

vnMarket:
  insight: "Claude Blog đáng đưa cho nhóm agency/SEO đã quen Claude Code hoặc agent workflow. Điểm mạnh góc Việt: cơ chế 5 cổng buộc bài đạt chuẩn trước khi giao, và phần AI Citation Readiness đang là chủ đề mới nhưng dễ bị nói mơ hồ. Điểm cần nói thẳng: điểm số là heuristic biên tập, không phải chỉ số Google thật."
  seoKeywords: ["viết blog AI", "Claude Code blog", "tối ưu SEO bài viết", "AI citation", "GEO AEO content", "content decay", "topic cluster SEO"]
  notes: "Suy luận từ README rất chi tiết và cùng tác giả với Claude SEO. Cần kiểm cộng đồng VN và chạy thử một bài trước khi publish."

usabilityRisk: "Cần Claude Code và Python 3.11+; một số cổng cần playwright/patchright để chụp màn hình và render. Điểm số chất lượng là heuristic của repo, không thay được biên tập người thật; fact-check vẫn cần đối chiếu lại nguồn."

practitionerGuide:
  outcome: "Chạy xong guide, bạn có một bài blog draft đã qua 5 cổng (đủ .md/.html/.pdf + hero + screenshot) và một điểm chất lượng để quyết định publish hay sửa tiếp."
  prerequisites:
    - "Claude Code cài sẵn và quyền chạy skill trong project."
    - "Python 3.11+; nếu cần cổng kiểm ảnh thì cài playwright hoặc patchright."
    - "Một chủ đề bài cụ thể + (tuỳ chọn) API key ảnh (Gemini/stock) nếu muốn hero image thật."
  steps:
    - "Cài skill: git clone vào ~/.claude/skills/ hoặc dùng npx skills add theo README, rồi khởi động Claude Code."
    - "Chạy /blog strategy <niche> để khoanh vùng site, sau đó /blog write <topic> để sinh bài đầu tiên."
    - "Để Delivery Contract chạy đủ 5 cổng; nếu điểm dưới 90 nó sẽ tự lặp lại tối đa 3 lần trước khi báo."
    - "Mở artifact folder xem bản .md, .html, hero và review.md để đọc điểm và các lỗi P0/P1."
    - "Sửa theo review, hoặc chạy /blog analyze trên một bài cũ để so chuẩn, rồi mới quyết định đăng."
  expectedResult: "Một bài blog có cấu trúc SEO/schema, hero image và báo cáo điểm rõ ràng — đủ để đánh giá chất lượng thay vì đọc một draft thô."
  commonPitfalls:
    - "Thiếu playwright/patchright khiến cổng kiểm ảnh (screenshot 3 khổ) không chạy được."
    - "Tin thẳng điểm 90+ như chỉ số Google thật — thực ra là heuristic biên tập nội bộ."
    - "Bỏ qua fact-check: số liệu trong bài vẫn cần đối chiếu lại nguồn gốc trước khi đăng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: dùng Claude Blog để dựng dây chuyền viết blog 'không tự giao khi chưa đạt chuẩn' — nhấn cơ chế 5 cổng và AI Citation Readiness cho agency content Việt."
paidToolReplaced: "Một phần việc của Surfer / Frase / Jasper + các checklist QA SEO thủ công"
alternativeTo:
  - name: "Surfer SEO"
    slug: "surfer-seo"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được repo, nhưng góc thực dụng cho agency Việt (biến 5 cổng + AI citation thành quy trình giao bài đạt chuẩn) và cảnh báo 'điểm là heuristic' cần người biên tập."

tags: ["seo", "agency", "geo", "aeo", "blog", "content-creation", "claude-code"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 20
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-05
nextReviewDueAt: 2026-11-03
publishedAt: 2026-08-05
week: "2026-W32"
draft: true
---

Record nháp foundation (daily pipeline). Cùng tác giả với `agricidaniel-claude-seo` và `agricidaniel-claude-ads` — đây là tool blog riêng, không trùng. Cần Luan kiểm: (1) media hotlink SVG/GIF có render ổn làm thumbnail không, (2) chạy thử /blog write một bài trước khi publish, (3) câu chữ nhấn 'điểm 90+ là heuristic, không phải chỉ số Google'.
