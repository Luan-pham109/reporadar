---
name: "SuperSEO Skills"
repoUrl: "https://github.com/inhouseseo/superseo-skills"
oneLiner: "SuperSEO Skills là bộ 11 'skill' cho Claude giúp làm SEO: mỗi skill nhận một input, agent tự nghiên cứu rồi trả ra kết quả — từ audit trang, viết brief, viết bài, tới phân tích khoảng trống nội dung và lên kế hoạch link."
media:
  - type: "image"
    url: "https://github.com/inhouseseo/superseo-skills/raw/main/demo/page-audit-demo.gif"
    caption: "Demo skill page-audit chạy audit một trang thực tế."

vertical: ["seo", "agency", "creative", "ecom"]

maturity: "rising"
repoStats:
  stars: 251
  note: "Số sao lấy từ snapshot discovery của pipeline (GitHub API chưa fetch được trong lần soi này, chưa có tuổi repo/sao/ngày)."
standoutFeatures:
  - "11 skill SEO đóng gói sẵn: page-audit, content-brief, write-content, improve-content, keyword-deep-dive, semantic-gap-analysis, eeat-audit, topic-cluster-planning, featured-snippet-optimizer, linkbuilding, expert-interview."
  - "Mỗi skill 'một input, agent tự làm phần nghiên cứu', kèm tài liệu tham chiếu nạp theo nhu cầu."
  - "Cài được nhiều cách: plugin Claude Code, copy vào ~/.claude/skills, upload .zip trên Claude.ai/Desktop, hoặc dùng trong Cursor."
  - "README dẫn phương pháp theo tên các chuyên gia SEO (Koray Tuğberk, Kyle Roof, Lily Ray) và có ruleset chống 'AI slop' khi generate."
signalSources:
  - label: "GitHub"
    url: "https://github.com/inhouseseo/superseo-skills"

useCases:
  - "Audit một trang rồi nhận danh sách vấn đề SEO onpage và gợi ý sửa, không phải tự dò từng mục."
  - "Tạo content brief và viết nháp bài chuẩn SEO từ một từ khoá/chủ đề đầu vào."
  - "Phân tích semantic gap và E-E-A-T để biết bài đang thiếu gì so với top."
  - "Lên topic cluster và kế hoạch link cho một mảng nội dung trước khi giao cho team viết."

workflowStepReplaced: "Khâu nghiên cứu + dựng nháp SEO thủ công (audit, brief, semantic gap, E-E-A-T) mà editor/SEO thường làm bằng nhiều tool và nhiều thao tác tay."
timeOrCostSaved: "Có thể rút khâu nghiên cứu và dựng brief/nháp từ nhiều giờ xuống một lượt chạy skill; chất lượng vẫn cần biên tập lại, nên con số tuỳ từng bài."
localProblem: "Team content/SEO và agency Việt tốn nhiều giờ cho khâu nghiên cứu trước khi viết: dựng brief, tìm khoảng trống nội dung, kiểm E-E-A-T. Một bộ skill Claude làm sẵn các bước này có thể tăng tốc phần 'chuẩn bị' vốn hay bị bỏ qua hoặc làm sơ sài."
localEvidence: "Nhiều team Việt đã dùng Claude/ChatGPT để viết bài nhưng thường thiếu bước brief và audit bài bản, dẫn tới nội dung 'AI slop'. Bộ skill có ruleset chống slop và bám phương pháp chuyên gia là góc đáng thử. Cần Luan chạy thử với một chủ đề tiếng Việt để đánh giá chất lượng thật."

vnMarket:
  insight: "Rất nhiều người làm content Việt đã dùng LLM để viết, nhưng phần lớn dừng ở 'nhập prompt, lấy bài'. Khoảng trống thật nằm ở khâu nghiên cứu và kiểm chất lượng (brief, semantic gap, E-E-A-T, chống slop). Một bộ skill Claude đóng gói theo phương pháp SEO thực chiến đúng vào chỗ này, và vì phân phối dưới dạng Claude skill/plugin nên hợp làn sóng dùng Claude Code đang lên ở VN."
  seoKeywords: ["claude skills SEO", "AI viết bài chuẩn SEO", "content brief AI", "E-E-A-T audit", "semantic gap analysis", "SEO bằng AI", "prompt SEO tiếng Việt"]
  notes: "Từ khoá 'AI viết bài SEO', 'claude skills' có tín hiệu tăng; bộ tool cụ thể này chưa thấy nội dung tiếng Việt. Độ chắc chắn: trung bình-thấp, cần test với chủ đề Việt."

usabilityRisk: "Skill viết chủ yếu cho ngữ cảnh SEO tiếng Anh; chất lượng với tiếng Việt và search intent Việt cần kiểm lại. Cần biết dùng Claude Code / Claude Skills để cài. Đầu ra vẫn là nháp phải biên tập; skill linkbuilding cần dùng có trách nhiệm, tránh trượt sang mua/spam link."

practitionerGuide:
  outcome: "Bạn cài được bộ skill vào Claude và chạy thử ít nhất một quy trình (vd page-audit hoặc content-brief) ra output đầu tiên để đánh giá."
  prerequisites:
    - "Tài khoản Claude và một trong: Claude Code, Claude.ai/Desktop (bản hỗ trợ Skills), hoặc Cursor."
    - "Một chủ đề/URL thật để test (nên chọn mảng nội dung bạn rành để chấm chất lượng)."
    - "Hiểu cơ bản về SEO onpage để đọc và sửa output cho đúng ngữ cảnh Việt."
  steps:
    - "Cài qua plugin Claude Code (/plugin marketplace add inhouseseo/superseo-skills) hoặc copy skill folder vào ~/.claude/skills."
    - "Chọn một skill để thử trước, ví dụ page-audit cho một URL hoặc content-brief cho một từ khoá."
    - "Đọc output và đối chiếu với hiểu biết của bạn về chủ đề để xem phần nghiên cứu có đúng không."
    - "Chạy tiếp write-content/improve-content rồi biên tập lại giọng và dữ kiện cho thị trường Việt."
    - "Nếu hợp quy trình, chuẩn hoá lại thành checklist nội bộ cho team."
  expectedResult: "Một output SEO (audit/brief/nháp) đủ tốt để đánh giá tool có tăng tốc quy trình thật của bạn không, sau khi biên tập lại."
  commonPitfalls:
    - "Đăng thẳng bài do skill sinh mà không kiểm dữ kiện và search intent tiếng Việt."
    - "Kỳ vọng skill linkbuilding thay được chiến lược link thật — đây chỉ là hỗ trợ lập kế hoạch."
    - "Bỏ qua ruleset chống slop rồi vẫn ra nội dung nhạt vì input quá mỏng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: dùng Claude skills để làm phần 'nghiên cứu trước khi viết' (brief, semantic gap, E-E-A-T) mà dân content Việt hay bỏ qua — không phải 'AI viết hộ cả bài'."
paidToolReplaced: "Một phần nhu cầu dùng các nền tảng SEO content/brief trả phí (vd Surfer SEO, Frase, Clearscope) ở khâu nghiên cứu và dựng brief"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI chung sẽ ra mẹo SEO chung; việc biết tới bộ skill cụ thể này, cách cài vào Claude và cách chỉnh cho search intent tiếng Việt cần lớp tổng hợp riêng."

scoreBreakdown:
  useCaseFit: 21
  projectHealth: 14
  costAdvantage: 15
  deployment: 12
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-13
nextReviewDueAt: 2026-11-11

tags: ["seo", "claude-skills", "ai-content", "content-brief", "eeat", "agency"]
publishedAt: 2026-08-13
week: "2026-W33"
draft: true
---

Draft foundation (auto). Nguồn dữ liệu: description + số sao từ queue discovery, đối chiếu trang GitHub công khai (star 251, license Apache-2.0). GitHub API chưa fetch trong pipeline nên chưa có tuổi repo/sao-ngày/forks chính thức. Media dùng đường dẫn GIF demo trong README repo. Cần Luan: (1) test một chủ đề tiếng Việt để đánh giá chất lượng thật (skill viết cho ngữ cảnh SEO tiếng Anh), (2) rà lại skill linkbuilding về mặt IN/OUT, (3) bổ sung repoStats đầy đủ bằng fetch-signals trước khi nâng confidence/publish.
