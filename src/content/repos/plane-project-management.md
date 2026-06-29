---
name: "Plane"
repoUrl: "https://github.com/makeplane/plane"
oneLiner: "Plane là phần mềm quản lý dự án và công việc bạn có thể tự cài, như một lựa chọn thay Jira/Linear/Trello khi muốn giữ dữ liệu trên hạ tầng của mình."
media:
  - type: "image"
    url: "https://media.docs.plane.so/GitHub-readme/github-top.webp"
    caption: "Giao diện Plane."
  - type: "image"
    url: "https://media.docs.plane.so/GitHub-readme/github-work-items.webp"
    caption: "Quản lý work items."
  - type: "image"
    url: "https://media.docs.plane.so/GitHub-readme/github-cycles.webp"
    caption: "Cycles / sprint."

vertical: ["agency"]

maturity: "established"
repoStats:
  stars: 53477
  forks: 4802
  note: "~3,6 năm tuổi, ~40 sao/ngày"
  starsPerDay: 40.6
  ageDays: 1318
  pushedAt: "2026-06-29"
  archived: false
  openIssues: 951

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 25
  costAdvantage: 20
  deployment: 6
  documentation: 10

scoringVersion: "v1"
evidenceLevel: "B"
confidence: "high"
lastReviewedAt: 2026-06-29
nextReviewDueAt: 2026-09-29
standoutFeatures:
  - "Quản lý issue, cycle (sprint), module, nhiều kiểu view trong một nơi."
  - "Tự host, dữ liệu nằm trên máy bạn."
  - "Mã nguồn mở, cộng đồng lớn (53k+ sao)."
signalSources:
  - label: "Hacker News (search)"
    url: "https://hn.algolia.com/?q=plane%20project%20management"
  - label: "r/selfhosted (search)"
    url: "https://www.reddit.com/r/selfhosted/search/?q=plane"

useCases:
  - "Quản lý task, sprint và dự án cho team 5-20 người mà không trả phí theo đầu người."
  - "Bỏ Jira/Linear/Trello trả phí — tự cài, dữ liệu ở lại máy của bạn."
  - "Theo dõi tiến độ nhiều client/dự án trong một nơi cho studio/agency nhỏ."

workflowStepReplaced: "Khâu quản lý task và dự án của team: thay Trello/Jira/Linear trong những quy trình vừa và nhỏ."
timeOrCostSaved: "Thay phí Jira/Linear theo seat/tháng (USD); team 10 người tiết kiệm phí định kỳ đáng kể."
localProblem: "Agency/studio nhỏ ở Việt Nam (5-20 người) thường dùng Trello/Jira bản free tới khi đụng trần thành viên hoặc tính năng, rồi ngại trả phí theo đầu người bằng USD."
localEvidence: "Nhiều nhóm dev/agency Việt than trên group Facebook về phí Jira/Linear tính theo seat; xu hướng tự cài n8n/Plausible để tránh phí SaaS định kỳ cũng đang lan trong cộng đồng."

vnMarket:
  insight: "Agency/studio nhỏ VN (5-20 người) rất nhạy với phí SaaS theo seat tính bằng USD; xu hướng tự host (n8n, Plausible) để né phí định kỳ đang lan trong cộng đồng dev/agency Việt."
  seoKeywords: ["thay Jira", "quản lý dự án tự host", "Plane tiếng Việt", "phần mềm quản lý task miễn phí", "thay Linear"]
  notes: "Tìm trên YouTube VN + group Facebook dev/agency: gần như chưa có bài hướng dẫn tự host Plane cho team Việt → còn nhiều đất SEO."

usabilityRisk: "Tự cài Plane cần Docker và cần ít nhất một người trong team biết dựng hạ tầng cơ bản."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một workspace Plane đầu tiên để team thử quản lý task và sprint trên hạ tầng của mình."
  prerequisites:
    - "Một máy chủ hoặc VPS có thể chạy Docker."
    - "Một team nhỏ thật, ít nhất vài người và một dự án đang cần quản lý task."
    - "Một người đủ tự tin cài hạ tầng cơ bản và xử lý cấu hình ban đầu."
  steps:
    - "Chọn một team hoặc một dự án nhỏ để thử trước, đừng chuyển cả công ty khỏi Jira hay Trello ngay vòng đầu."
    - "Dựng Plane bằng Docker trên máy test hoặc VPS nội bộ theo hướng dẫn chính thức."
    - "Tạo workspace, mời vài thành viên và nhập một backlog nhỏ gồm task đang làm thật."
    - "Thiết lập một quy trình đơn giản như Todo, Doing, Review, Done hoặc một cycle ngắn để team dùng trong 1 tuần."
    - "So sánh trải nghiệm của team với công cụ cũ: có đủ dùng không, có đỡ phí seat không, có ai bị nghẽn ở phần self-host không."
  expectedResult: "Bạn có một không gian quản lý dự án chạy được và đủ task thật để đánh giá việc chuyển khỏi tool seat-based có đáng hay không."
  commonPitfalls:
    - "Chuyển toàn bộ dữ liệu và quy trình phức tạp sang ngay từ đầu làm team mệt trước khi thấy lợi ích."
    - "Không có ai phụ trách self-host nên chỉ cần một lỗi hạ tầng nhỏ là mọi người mất niềm tin."
    - "Kỳ vọng Plane phải thay được mọi workflow enterprise của Jira dù nhu cầu team còn nhỏ."

greyHatFlag: "in"

suggestedAngle: "So sánh thẳng chi phí: Jira/Linear theo seat/tháng vs Plane tự host miễn phí — kèm hướng dẫn dựng trong 30 phút cho team 10 người."
paidToolReplaced: "Jira / Linear / Trello bản trả phí"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Plane là gì, nhưng KHÔNG biết độ bão hoà nội dung trong cộng đồng VN, cũng không gắn được bài toán phí-theo-seat cụ thể của agency Việt."

tags: ["self-hosted", "project-management", "no-code"]
publishedAt: 2026-06-26
week: "2026-W26"
draft: false
---

**Ghi chú góc viết (demo record):**

- Mở bài bằng nỗi đau seat-based pricing — độc giả Việt rất nhạy với phí định kỳ bằng USD.
- Demo dựng nhanh bằng Docker, nhấn mạnh "dữ liệu của bạn ở lại máy bạn".
- CTA mềm: phù hợp team vừa thoát Trello free, chưa muốn cam kết Jira.

> Đây là record mẫu để minh hoạ schema. Thay bằng dữ liệu thật khi xuất bản.
