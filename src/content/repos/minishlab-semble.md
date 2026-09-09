---
name: "Semble"
repoUrl: "https://github.com/MinishLab/semble"
oneLiner: "Semble là công cụ tìm kiếm code dành cho AI agent (Claude Code, Cursor, Codex...): thay vì để agent grep rồi đọc nguyên file, nó trả về đúng đoạn code cần thiết, tốn ~98% ít token hơn. Chạy hoàn toàn trên CPU, không cần API key hay GPU."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/MinishLab/semble/main/assets/images/speed_vs_ndcg_cold.png"
    caption: "Benchmark tốc độ vs chất lượng truy hồi (từ README)."
  - type: "image"
    url: "https://raw.githubusercontent.com/MinishLab/semble/main/assets/images/token_efficiency.png"
    caption: "Hiệu quả token: recall so với số token phải đọc (từ README)."

vertical: ["agency"]

maturity: "pre-viral"
repoStats:
  stars: 5596
  forks: 236
  note: "~98 ngày tuổi, ~57.1 sao/ngày"
  starsPerDay: 57.1
  ageDays: 98
  pushedAt: 2026-07-08T08:59:00Z
  archived: false
  openIssues: 8
standoutFeatures:
  - "Tìm code bằng ngôn ngữ tự nhiên và chỉ trả về đoạn liên quan; repo nêu tốn ~98% ít token hơn grep+read khi agent khám phá codebase."
  - "Chạy trên CPU, không cần API key/GPU/dịch vụ ngoài; dùng embedding tĩnh (Model2Vec) + BM25 nên index/truy vấn tính bằng mili-giây."
  - "Cắm được vào nhiều agent qua MCP server, CLI (AGENTS.md) hoặc sub-agent riêng; có sẵn installer tự phát hiện Claude Code/Codex/OpenCode."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=48169874"
  - label: "GitHub"
    url: "https://github.com/MinishLab/semble"
  - label: "Documentation"
    url: "https://minish.ai/packages/semble/introduction/"

useCases:
  - "Cho agent code (Claude Code, Cursor, Codex) tìm đúng chỗ trong codebase mà không đốt cả cửa sổ context vào việc đọc file thừa."
  - "Giảm chi phí token khi agent phải khám phá một repo lạ hoặc lớn, nhờ chỉ nạp đoạn code liên quan."
  - "Dùng như CLI để search code trong script hoặc tra nhanh một repo git từ xa mà không cần mở IDE."

workflowStepReplaced: "Khâu agent grep tìm rồi đọc nguyên các file khớp để hiểu code — vốn ngốn nhiều token và thời gian."
timeOrCostSaved: "Repo nêu tiết kiệm ~98% token so với grep+read ở cùng mức recall; với team chạy agent code nhiều, đây là khoản token/chi phí đáng kể. Con số là do dự án tự công bố qua benchmark của họ."
localProblem: "Đây là công cụ cho dev/team sản phẩm, không cho người làm nội dung. Nhóm liên quan là agency/studio Việt có mảng kỹ thuật đang xài agent code (Claude Code, Cursor) và thấy hoá đơn token phình lên khi agent đọc file lan man trong codebase lớn."
localEvidence: "Show HN đạt ~445 điểm, ~151 bình luận quanh ý 'tìm code cho agent tốn ít token hơn grep' — mối quan tâm của giới dev/ML. Chưa có tín hiệu nhu cầu từ tệp creative/ecom/seo Việt."

vnMarket:
  insight: "Dev VN đang dùng agent code (Claude Code, Cursor, Codex) ngày càng nhiều, và chi phí token khi agent khám phá repo lớn là nỗi đau có thật. Semble là hạ tầng cho nhóm kỹ thuật, không phải công cụ dùng ngay cho người làm nội dung/bán hàng."
  seoKeywords: ["tìm kiếm code cho AI agent", "giảm token Claude Code", "code search MCP", "semantic code search", "Semble là gì"]
  notes: "Fit với 'agency' chỉ ở nhánh kỹ thuật/dev. Lọt queue vì tín hiệu Show HN. Con số ~98% là dự án tự công bố, chưa kiểm chứng độc lập. Độ chắc chắn: thấp."

usabilityRisk: "Là công cụ cho dev, cần biết cài qua uv và cấu hình MCP/AGENTS.md cho từng agent — không phải tool bấm-là-chạy cho non-tech. Con số tiết kiệm token và độ chính xác đều là benchmark của chính dự án, chưa có kiểm chứng độc lập. Chất lượng truy hồi trên codebase tiếng Việt/comment tiếng Việt chưa rõ. Chưa có cộng đồng Việt."

practitionerGuide:
  outcome: "Bạn cắm Semble vào một agent code (vd Claude Code) và để nó search codebase bằng Semble thay vì grep+read, rồi tự cảm nhận mức tiết kiệm token."
  prerequisites:
    - "Máy có cài uv (Python package manager) và một agent code đang dùng (Claude Code, Codex, OpenCode...)."
    - "Một repo để thử — local path hoặc URL git."
    - "Người biết chỉnh cấu hình MCP / AGENTS.md của agent."
  steps:
    - "Cài: uv tool install semble, rồi chạy semble install để nó tự dò agent đang có."
    - "Chọn kiểu tích hợp: MCP server, hướng dẫn trong AGENTS.md, hoặc sub-agent riêng."
    - "Thử semble search \"luồng xác thực xử lý thế nào\" ./project để xem nó trả về đoạn code nào."
    - "Để agent dùng Semble trong một tác vụ thật trên repo lớn và quan sát cách nó tìm chỗ."
    - "Chạy semble savings để xem thống kê token đã tiết kiệm theo cách tính của tool."
  expectedResult: "Agent tìm đúng vùng code liên quan mà không đọc nguyên file; với repo lớn, số token cho bước khám phá giảm rõ so với grep+read."
  commonPitfalls:
    - "Tin tuyệt đối con số ~98% — đó là benchmark tự công bố, kết quả thực tế tuỳ codebase."
    - "Quên rằng index cần build lại khi file đổi (tool tự làm, nhưng lần đầu tốn chút thời gian)."
    - "Kỳ vọng đây là tool cho người non-tech; thực chất cần kỹ năng dev để cấu hình."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm nhóm dev/agency đang xài agent code với góc 'giảm hoá đơn token khi agent đọc codebase' — kèm lưu ý con số ~98% là do dự án tự đo."
paidToolReplaced: "Một phần nhu cầu các công cụ code-search/embedding trả phí ở khâu truy hồi cho agent"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Semble, nhưng lớp giá trị là đặt nó vào bối cảnh chi phí token cho dev Việt và cảnh báo con số tự công bố — phần Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 9
  projectHealth: 23
  costAdvantage: 12
  deployment: 10
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-13
nextReviewDueAt: 2026-10-11

tags: ["ai", "code-search", "mcp", "devtools", "agents"]
publishedAt: 2026-07-13
week: "2026-W29"
draft: true
---

Draft foundation từ daily queue (Show HN ~445 điểm). CẢNH BÁO FIT: tool dev/ML, fit yếu với creative/ecom/seo (đặt tạm `vertical: ["agency"]` ở nhánh kỹ thuật). Con số ~98% token và độ chính xác đều là benchmark tự công bố của dự án — đã nêu trong usabilityRisk. Confidence thấp. Cần Luan xác nhận scope trước khi publish.
