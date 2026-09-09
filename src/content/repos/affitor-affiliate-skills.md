---
name: "affiliate-skills"
repoUrl: "https://github.com/Affitor/affiliate-skills"
oneLiner: "affiliate-skills là bộ skill dạng Markdown biến bất kỳ AI nào (Claude Code, ChatGPT, Gemini, Cursor...) thành 'team affiliate marketing': tìm chương trình, soi nội dung đang trending, viết bài có dữ liệu, dựng landing page và theo dõi hiệu quả."
media: []

vertical: ["seo", "agency"]

maturity: "pre-viral"
repoStats:
  stars: 587
  forks: 191
  note: "~142 ngày tuổi, ~4.1 sao/ngày"
  starsPerDay: 4.1
  ageDays: 142
  pushedAt: "2026-06-14"
  archived: false
  openIssues: 3
standoutFeatures:
  - "Khoảng 50+ skill chia theo 8 giai đoạn tạo thành 'flywheel' khép kín: research → content → blog/SEO → landing → phân phối → analytics → automation → meta."
  - "Chạy được với nhiều AI (Claude Code, Pi, ChatGPT, Gemini CLI, Cursor, Windsurf) vì skill chỉ là file Markdown/SKILL.md."
  - "Có skill lấy dữ liệu chương trình affiliate và quét nội dung đang trending (YouTube/TikTok/X/Reddit) để chọn góc theo engagement thật."
  - "Kèm skill compliance-checker (FTC + luật nền tảng), registry.json và các eval case."
signalSources:
  - label: "Show HN (Mar 2026)"
    url: "https://news.ycombinator.com/item?id=47420553"
  - label: "Show HN (Apr 2026)"
    url: "https://news.ycombinator.com/item?id=47632530"

useCases:
  - "Tìm và so sánh chương trình affiliate theo hoa hồng, cookie và độ khoẻ traffic trước khi quyết định promote."
  - "Quét nội dung đang trending trên TikTok/YouTube để biết format và hook nào đang thắng rồi mới bắt tay viết."
  - "Viết bài mạng xã hội, thread, script TikTok hoặc bài so sánh sản phẩm có kèm số liệu từ nguồn thật."
  - "Dựng landing page/bio link thuần HTML rồi deploy, và theo dõi chuyển đổi bằng UTM để lặp lại cái nào chạy tốt."

workflowStepReplaced: "Khâu tự nghiên cứu chương trình, chọn góc, viết nội dung và dựng landing rời rạc bằng nhiều tool trong quy trình affiliate."
timeOrCostSaved: "Có thể gom nhiều khâu affiliate vào một pipeline AI, nhưng chất lượng phụ thuộc nguồn dữ liệu và người kiểm; chưa có số tiết kiệm cụ thể để dẫn."
localProblem: "Người làm affiliate và creator Việt thường chọn chương trình theo cảm tính, viết nội dung không biết format nào chạy, và tốn giờ dựng landing convert thấp. Bộ skill này ép quy trình đi theo dữ liệu và có sẵn khung compliance."
localEvidence: "Cộng đồng affiliate/MMO Việt rất đông và có nhu cầu chọn offer + làm content đa nền tảng. Riêng độ phổ biến của affiliate-skills ở VN thì chưa kiểm chứng (repo còn nhỏ, ~587 sao)."

vnMarket:
  insight: "affiliate-skills hợp với creator/affiliate Việt đã dùng AI agent và muốn một quy trình có kỷ luật thay vì làm theo cảm hứng. Cần nói thẳng: nhiều skill dựa vào API/nguồn dữ liệu của Affitor (openaffiliate.dev) nên chất lượng data cho thị trường Việt cần kiểm; và nội dung affiliate hàng loạt dễ trượt sang grey-hat nếu bỏ qua phần compliance."
  seoKeywords: ["affiliate marketing AI", "kiếm tiền affiliate", "skill AI affiliate", "viết content affiliate", "landing page affiliate", "chọn chương trình affiliate", "MMO AI"]
  notes: "Suy luận từ README (rất dài, nhiều demo dạng chữ) và 2 lần Show HN điểm thấp (3 điểm). Cần kiểm dữ liệu openaffiliate.dev có phủ chương trình VN không trước khi publish."

usabilityRisk: "Skill là Markdown nên cài dễ, nhưng nhiều skill phụ thuộc API/nguồn dữ liệu bên ngoài (openaffiliate.dev) — độ phủ cho offer Việt chưa rõ. Nội dung affiliate sản xuất hàng loạt dễ vi phạm luật quảng cáo/nền tảng nếu bỏ qua disclosure; repo có compliance-checker nhưng vẫn cần người chịu trách nhiệm."

practitionerGuide:
  outcome: "Chạy xong guide, bạn có một góc nội dung được chọn theo dữ liệu trending + một chương trình affiliate đã so sánh, đủ để viết thử bài đầu tiên có disclosure."
  prerequisites:
    - "Một AI agent đọc được Markdown (Claude Code/Pi khuyến nghị, hoặc ChatGPT/Gemini/Cursor)."
    - "Kết nối mạng để các skill research gọi được nguồn dữ liệu (vd openaffiliate.dev)."
    - "Một ngách/sản phẩm cụ thể muốn promote để thử pipeline."
  steps:
    - "Cài skill: git clone vào ~/.claude/skills/affiliate-skills rồi chạy ./setup, hoặc dùng npx skills add theo README (hoặc dán bootstrap prompt cho AI không hỗ trợ skill)."
    - "Chạy trending-content-scout cho ngách của bạn để xem format, hook và khoảng trống nội dung đang có."
    - "Chạy affiliate-program-search + traffic-analyzer để so sánh chương trình theo hoa hồng, cookie và độ khoẻ traffic."
    - "Chọn một góc, chạy content-research-brief để gom nguồn + số liệu thật, rồi viết một bài (vd viral-post-writer) kèm disclosure FTC."
    - "Chạy compliance-checker trước khi đăng để soát disclosure và luật nền tảng."
  expectedResult: "Một bài nội dung có góc dựa trên dữ liệu, kèm nguồn và disclosure — thay vì viết theo cảm tính; đủ để đánh giá pipeline có hợp ngách của bạn không."
  commonPitfalls:
    - "Dựa hoàn toàn vào dữ liệu chương trình từ nguồn ngoài mà không kiểm xem có phủ offer/thị trường Việt không."
    - "Sản xuất nội dung hàng loạt rồi quên bước compliance/disclosure — rủi ro với nền tảng và luật quảng cáo."
    - "Tin thẳng số liệu 'engagement/benchmark' trong demo mà không kiểm lại trên nền tảng thật."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: dùng affiliate-skills để chuyển từ 'chọn offer theo cảm tính' sang 'chọn theo dữ liệu trending + compliance', nhấn mạnh phần disclosure — không cổ vũ đẻ content rác."
paidToolReplaced: "Một phần các tool nghiên cứu affiliate + landing builder trả phí (kiểu ClickFunnels/Linktree + tool research offer)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI liệt kê được skill, nhưng đánh giá độ phủ dữ liệu cho thị trường Việt, ranh giới grey-hat và cách áp compliance cần biên tập theo ngữ cảnh."

tags: ["seo", "agency", "affiliate-marketing", "agent-skills", "content-marketing", "ai"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 13
  costAdvantage: 8
  deployment: 10
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-05
nextReviewDueAt: 2026-11-03
publishedAt: 2026-08-05
week: "2026-W32"
draft: false
---

Record nháp foundation (daily pipeline). Cần Luan kiểm: (1) mức grey-hat/borderline và câu chữ về nội dung affiliate hàng loạt, (2) độ phủ dữ liệu openaffiliate.dev cho offer Việt, (3) projectHealth thấp (13) vì repo còn nhỏ và 2 lần Show HN điểm thấp. Chưa có media demo dạng ảnh trong README nên để media rỗng.
