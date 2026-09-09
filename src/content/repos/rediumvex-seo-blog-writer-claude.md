---
name: "SEO Blog Writer — Claude Skill"
repoUrl: "https://github.com/rediumvex/seo-blog-writer-claude"
oneLiner: "SEO Blog Writer là một skill cho Claude Code: đưa vào một URL, ghi chú hay chủ đề, nó trả về bài blog hoàn chỉnh kèm đủ trường SEO (title, meta description, focus keyword, FAQ schema, mục lục) với giọng văn cố tình 'nghe như người viết'."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/5d75ed29-b450-4d62-8b83-f962b56ca401"
    caption: "Ảnh bìa của skill SEO Blog Writer cho Claude Code."

vertical: ["agency", "seo"]

maturity: "rising"
repoStats:
  stars: 36
  forks: 2
  note: "~95 ngày tuổi, ~0.4 sao/ngày"
  starsPerDay: 0.4
  ageDays: 95
  pushedAt: 2026-06-11T11:17:09Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Là một Claude Code skill thật (một file SKILL.md), cài bằng git clone vào ~/.claude/skills rồi gọi `/seo-blog-writer` với URL/ghi chú/chủ đề."
  - "Sinh sẵn toàn bộ trường SEO trong một prompt: H1, excerpt, category/tags, SEO title (≤60 ký tự), meta description (≤160 ký tự), focus keyword, alt text ảnh bìa, FAQ schema 3–5 Q&A, mục lục, widget sidebar HTML, nội dung Markdown."
  - "Ép 6 'quy tắc chống-AI' lên từng câu (burstiness, perplexity, chèn trải nghiệm ngôi thứ nhất mỗi ~500 chữ, cấm cụm sáo rỗng, tự viết hook/H2, danh sách số lẻ)."
  - "License MIT, dễ fork: chỉ cần sửa 3 mục (Voice & Tone, Content Pillars, Internal Links) trong SKILL.md để đổi sang blog của bạn."
signalSources:
  - label: "GitHub"
    url: "https://github.com/rediumvex/seo-blog-writer-claude"

useCases:
  - "Biến một URL/ghi chú/chủ đề thành bản nháp blog đã điền sẵn title, meta, FAQ schema và mục lục để dán thẳng vào CMS."
  - "Chuẩn hoá quy trình viết blog SEO cho một team/agency bằng một skill dùng chung, thay vì mỗi người tự prompt kiểu khác nhau."
  - "Lấy khung SKILL.md làm điểm khởi đầu rồi fork thành skill viết bài riêng cho brand của mình (đổi giọng, pillar, internal link)."

workflowStepReplaced: "Khâu prompt tay nhiều lần để ra bài blog và điền thủ công các trường SEO (meta, FAQ schema, mục lục)."
timeOrCostSaved: "Tác giả nói trước đây mất ~4 giờ/bài để tự sửa output AI cho 'nghe như người'; skill gộp lại còn một prompt — nhưng đây là lời tác giả tự khai, chưa có kiểm chứng độc lập."
localProblem: "Người làm content/SEO và agency nhỏ ở Việt Nam thường tốn nhiều thời gian biên tập lại bài do AI viết để bớt sáo rỗng và điền đủ trường SEO (meta, FAQ schema, mục lục). Một skill đóng khung sẵn quy trình đó giúp rút ngắn khâu 'từ bản thô đến bản đăng được'."
localEvidence: "Nhu cầu 'viết bài chuẩn SEO bằng AI', 'humanize nội dung AI', 'tạo FAQ schema' rất phổ biến trong nhóm SEO/content VN. Cái skill này thêm được là gói toàn bộ trường SEO + quy tắc giọng vào một lệnh Claude Code."

vnMarket:
  insight: "Thị trường content-AI VN đang bão hoà tool 'viết bài chuẩn SEO' và 'humanize AI'. Điểm khác của repo này là ở dạng Claude Code skill mã nguồn mở (MIT) để bạn tự sửa, thay vì SaaS trả phí. Nhưng cần tỉnh táo: repo bán mạnh thông điệp 'beats AI detectors / vượt máy dò AI' và tự quảng bá cộng đồng của tác giả. Google đánh giá theo chất lượng và trải nghiệm thực (helpful content, E-E-A-T), không thưởng cho việc 'né máy dò'; nên coi đây là công cụ tăng tốc bản nháp, không phải cam kết lên top hay 'qua mặt Google'."
  seoKeywords: ["viết bài chuẩn SEO bằng AI", "humanize nội dung AI", "claude skill viết blog", "tạo FAQ schema", "vượt máy dò AI content", "công cụ viết blog SEO"]
  notes: "Dựa trên README + SKILL.md. Chưa thấy tín hiệu HN/Reddit; repo nhỏ (36 sao) và mang tính self-promotion (Skool community, Instagram của tác giả). Điểm cần Luan cân nhắc: khung 'beat AI detectors' có phù hợp định hướng nội dung sạch của RepoRadar không."

usabilityRisk: "Cần Claude Code để dùng (không phải tool web bấm là chạy). Bản gốc cấu hình sẵn cho blog cá nhân của tác giả (tên, pillar, internal link) — phải sửa SKILL.md trước khi dùng cho brand khác. Định vị 'vượt máy dò AI' là con dao hai lưỡi: nội dung vẫn phải người kiểm về sự thật/độ chính xác, và chiến lược 'né detector' không đảm bảo thứ hạng Google. Repo nhỏ, một tác giả, chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Sau guide này bạn có một bản nháp blog đã điền đủ trường SEO từ một chủ đề/URL, và biết cần sửa gì trong skill để hợp brand mình."
  prerequisites:
    - "Đã cài Claude Code và có thư mục ~/.claude/skills."
    - "Một URL/ghi chú/chủ đề đầu vào để viết bài."
    - "Sẵn sàng sửa SKILL.md (Voice & Tone, Content Pillars, Internal Links) sang thông tin brand của bạn."
  steps:
    - "Clone vào skills: `cd ~/.claude/skills && git clone https://github.com/rediumvex/seo-blog-writer-claude.git seo-blog-writer`."
    - "Khởi động lại Claude Code để skill `/seo-blog-writer` xuất hiện."
    - "Mở SKILL.md, đổi tên/positioning, content pillars và internal links sang blog của bạn (xoá phần của tác giả gốc)."
    - "Chạy thử: `/seo-blog-writer <url hoặc chủ đề>` và kiểm tra bản nháp trả về."
    - "Người biên tập rà lại sự thật, số liệu, và tính hợp lệ của FAQ schema trước khi đăng."
  expectedResult: "Một bản nháp blog Markdown kèm SEO title/meta/focus keyword/FAQ schema/mục lục — đủ tốt để biên tập nhanh rồi đăng, không phải bản cuối tự động."
  commonPitfalls:
    - "Đăng nguyên bản chưa sửa cấu hình gốc → dính tên/pillar/link của tác giả khác."
    - "Tin vào lời 'beats AI detectors' mà bỏ qua khâu kiểm sự thật và E-E-A-T thật — Google chấm chất lượng, không chấm việc né detector."
    - "Quên xác thực FAQ schema/meta trước khi publish khiến rich snippet không hợp lệ."

greyHatFlag: "borderline"

suggestedAngle: "Góc kể hợp lý: 'skill Claude Code chuẩn hoá quy trình nháp blog SEO' — nhấn mạnh giá trị điền sẵn trường SEO + fork được, đồng thời nói thẳng vì sao 'né máy dò AI' không phải chiến lược SEO bền vững."
paidToolReplaced: "Jasper, Copy.ai, Surfer AI writer và các tool viết bài SEO trả phí (ở mức tạo bản nháp)."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tự viết được bài SEO, nhưng việc đánh giá 'skill này thực chất là gì, khung beat-AI-detector có nên tin không, và trade-off cho content team VN' cần curation của người đọc kỹ SKILL.md và hiểu quan điểm E-E-A-T của Google."

tags: ["seo", "content", "claude-skill", "blog-writer", "ai-writing", "agency"]
scoreBreakdown:
  useCaseFit: 12
  projectHealth: 11
  costAdvantage: 12
  deployment: 12
  documentation: 8
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-14
nextReviewDueAt: 2026-10-12
publishedAt: 2026-07-14
week: "2026-W29"
draft: false
---

Draft từ daily pipeline (2026-07-14). Điểm cần Luan quyết trước khi publish: repo bán mạnh thông điệp "beats AI detectors / vượt máy dò AI" (đã gắn greyHatFlag: "borderline") và mang tính self-promotion cho community của tác giả — cần cân nhắc có hợp định hướng nội dung sạch của RepoRadar không, hoặc kể lại với cảnh báo rõ về E-E-A-T. Repo nhỏ (36 sao), một tác giả, chưa có tín hiệu HN/Reddit.
