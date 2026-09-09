---
name: "beautiful-mermaid"
repoUrl: "https://github.com/lukilabs/beautiful-mermaid"
oneLiner: "beautiful-mermaid biến sơ đồ Mermaid (viết bằng chữ) thành ảnh SVG đẹp hoặc dạng ASCII cho terminal — nhanh, dễ đổi màu/theme, không phụ thuộc DOM, gọn cho các app và trợ lý AI."
media: []

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 10618
  forks: 363
  note: "~165 ngày tuổi, ~64.4 sao/ngày; đang được bàn ở Show HN (418 điểm)"
  starsPerDay: 64.4
  ageDays: 165
  pushedAt: 2026-05-06T10:53:19Z
  archived: false
  openIssues: 77
standoutFeatures:
  - "Render 6 loại sơ đồ (flowchart, state, sequence, class, ER, XY chart) ra cả SVG cho UI đẹp lẫn ASCII/Unicode cho terminal."
  - "Hệ theming chỉ cần 2 màu (nền + chữ) là suy ra cả sơ đồ; kèm 15 theme sẵn và tương thích mọi theme VS Code qua Shiki; đổi theme bằng CSS variable không cần render lại."
  - "Render đồng bộ (không async, không 'nháy'), hợp với React useMemo; thuần TypeScript, không phụ thuộc DOM, dựng 100+ sơ đồ dưới 500ms."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=46804828"
  - label: "GitHub"
    url: "https://github.com/lukilabs/beautiful-mermaid"

useCases:
  - "Tạo sơ đồ luồng/kiến trúc/sequence trông chuyên nghiệp cho tài liệu, slide, bài blog thay vì bản Mermaid mặc định hơi thô."
  - "Nhúng sơ đồ đẹp, tự đổi màu theo theme sáng/tối vào web/app hay công cụ nội bộ mà không phải vật lộn với CSS của Mermaid."
  - "Xuất sơ đồ dạng ASCII/Unicode để dán vào terminal, README, hoặc giao diện chat với trợ lý AI."

workflowStepReplaced: "Khâu chỉnh tay CSS/class của Mermaid để sơ đồ trông đẹp, hoặc vẽ lại sơ đồ bằng công cụ diagram thủ công."
timeOrCostSaved: "Tiết kiệm thời gian tinh chỉnh giao diện sơ đồ và thay được vài công cụ vẽ diagram trả phí cho nhu cầu sơ đồ dạng code; lợi ích rõ nhất với người/đội có sẵn kỹ năng dev để nhúng thư viện."
localProblem: "Team làm nội dung kỹ thuật, agency dựng tài liệu/đề xuất, hoặc dev viết blog ở VN thường cần sơ đồ minh hoạ nhưng bản Mermaid mặc định trông khô, còn vẽ tay bằng tool riêng thì tốn thời gian và khó đồng bộ theme sáng/tối."
localEvidence: "Show HN đạt 418 điểm, 66 bình luận — nhu cầu 'Mermaid nhưng đẹp và render được ra terminal' được quan tâm; craft.do dùng chính nó cho Craft Agents."

vnMarket:
  insight: "Ở VN dân dev/technical writer đã quen Mermaid (trong Markdown, Notion, GitHub) và thường chấp nhận giao diện mặc định hoặc chụp màn hình. Ít người biết có thể tuỳ biến theme sâu hay render ASCII. Đây là thư viện lập trình (npm) nên đối tượng dùng trực tiếp là dev; người làm nội dung không code sẽ cần một sản phẩm đóng gói sẵn."
  seoKeywords: ["vẽ sơ đồ bằng mermaid", "mermaid đẹp hơn", "render mermaid ra svg", "sơ đồ mermaid trong terminal", "beautiful-mermaid là gì"]
  notes: "Fit vừa phải với creative/agency ở góc 'sơ đồ đẹp cho nội dung/tài liệu', nhưng rào cản là phải biết dùng thư viện. Độ chắc chắn: trung bình–thấp."

usabilityRisk: "Đây là THƯ VIỆN TypeScript (npm), không phải app bấm-là-chạy: muốn dùng cần biết code/nhúng vào dự án. Người làm nội dung không lập trình sẽ khó dùng trực tiếp. Có 77 issue mở; là dự án còn mới. Chưa có cộng đồng Việt. Điểm cộng: tài liệu README rất chi tiết, cài đặt đơn giản với dev."

practitionerGuide:
  outcome: "Bạn render được một sơ đồ Mermaid ra SVG đẹp (hoặc ASCII) với theme mình chọn, đủ để nhúng vào tài liệu/app."
  prerequisites:
    - "Môi trường Node/dự án dùng npm/bun/pnpm và biết chạy code TypeScript/JavaScript cơ bản."
    - "Một đoạn sơ đồ Mermaid muốn render (flowchart, sequence...)."
    - "Không cần API key hay dịch vụ ngoài."
  steps:
    - "Cài thư viện: `npm install beautiful-mermaid`."
    - "Gọi `renderMermaidSVG(code, options)` để lấy chuỗi SVG, hoặc `renderMermaidASCII(code)` cho terminal."
    - "Chọn theme sẵn (vd `THEMES['tokyo-night']`) hoặc chỉ truyền 2 màu `bg`/`fg` để tự suy ra."
    - "Nhúng chuỗi SVG vào trang/app; nếu React, dùng useMemo và truyền CSS variable để đổi theme sáng/tối tức thì."
  expectedResult: "Một sơ đồ SVG gọn, đẹp, đúng theme (hoặc bản ASCII/Unicode) sẵn sàng nhúng vào tài liệu, web hoặc chat."
  commonPitfalls:
    - "Kỳ vọng đây là app/dịch vụ trực quan — thực chất là thư viện cần lập trình để dùng."
    - "Quên rằng đổi theme sáng/tối tức thì cần truyền CSS variable thay vì mã màu hex cố định."
    - "Dùng cú pháp Mermaid ngoài 6 loại được hỗ trợ — có thể không render đúng."

greyHatFlag: "in"

suggestedAngle: "Góc 'làm sơ đồ Mermaid đẹp cho tài liệu/blog/slide' cho technical writer và agency — nhưng nói rõ đây là thư viện cho dev, người không code cần chờ bản đóng gói."
paidToolReplaced: "Công cụ vẽ diagram trả phí (cho nhu cầu sơ đồ dạng code) / renderer Mermaid mặc định"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI biết 'có thư viện làm Mermaid đẹp', nhưng phần có giá trị cho reader VN — cách nhúng thực tế, so với Mermaid mặc định, và ai trong 4 ngách dùng được (dev vs người không code) — cần synthesize/thử mới rõ."

scoreBreakdown:
  useCaseFit: 14
  projectHealth: 20
  costAdvantage: 12
  deployment: 8
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-12
nextReviewDueAt: 2026-10-10

tags: ["mermaid", "diagrams", "svg", "typescript", "developer-tools"]
publishedAt: 2026-07-12
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue (Show HN 418 điểm). Fit vừa phải: hữu ích cho creative/agency làm sơ đồ nội dung/tài liệu, nhưng là thư viện cần biết code để dùng. LUAN CẦN CÂN NHẮC: có nên khung lại cho người không lập trình, hay giữ như tham khảo cho nhóm technical. Số liệu chỉ lấy từ signals của queue.
