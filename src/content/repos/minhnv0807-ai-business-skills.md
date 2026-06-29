---
name: "ai-business-skills"
repoUrl: "https://github.com/minhnv0807/ai-business-skills"
oneLiner: "ai-business-skills là bộ 63 skill marketing song ngữ Việt/Global cho Claude Code, OpenCode, Codex và VS Code, giúp agent viết kế hoạch, brief, content, phân tích ads, personal brand, AI avatar và dropshipping theo workflow có sẵn."
media: []

vertical: ["agency", "creative", "ecom"]

maturity: "rising"
repoStats:
  stars: 478
  forks: 205
  note: "~75 ngày tuổi, ~6.4 sao/ngày"
  starsPerDay: 6.4
  ageDays: 75
  pushedAt: 2026-06-20T03:06:14Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "README mô tả 63 skill song ngữ, gồm 31 VN, 31 Global và design master, dùng cho nhiều agent/coding assistant."
  - "Có quickstart cho bash và PowerShell, cài global hoặc project, không bị khoá vào một app duy nhất."
  - "Skill set phủ nhiều việc marketing thực tế: kế hoạch, content calendar, campaign brief, ads audit, customer insight, personal brand, AI avatar và dropshipping."
  - "Repo có định vị Việt Nam rất rõ, kèm benchmark VN 2025-2026 và regional workflow."
signalSources:
  - label: "GitHub"
    url: "https://github.com/minhnv0807/ai-business-skills"
  - label: "Homepage"
    url: "https://opa.business"

useCases:
  - "Cài một bộ prompt/skill chung cho team marketing để agent trả output theo cùng khung kế hoạch, brief và báo cáo."
  - "Lập kế hoạch campaign 30 ngày, content calendar, ad copy và video script mà không phải paste lại từng prompt rời rạc."
  - "Audit ads, đọc số liệu, tính KPI ngược và viết báo cáo tháng theo format có sẵn cho agency hoặc team in-house."
  - "Dựng workflow personal brand, AI avatar hoặc dropshipping cho creator/ecom muốn có khung làm việc trước khi thuê thêm người."

workflowStepReplaced: "Khâu mỗi người tự lưu prompt marketing riêng, hỏi AI theo kiểu rời rạc rồi mất thời gian chỉnh lại format cho đồng nhất."
timeOrCostSaved: "Có thể giảm nhiều vòng viết prompt và chuẩn hoá output cho team marketing; mức tiết kiệm phụ thuộc việc team có chịu dùng chung context và review chất lượng đầu ra hay không."
localProblem: "Nhiều agency và team marketing Việt dùng ChatGPT/Claude hằng ngày nhưng prompt nằm rải rác trong note cá nhân, chất lượng output lệch nhau giữa từng người. ai-business-skills đáng chú ý vì nó đóng gói thành skill markdown có thể cài cho nhiều môi trường agent."
localEvidence: "README đã có tiếng Việt, use case Việt, benchmark VN 2025-2026 và ví dụ marketing rất gần với thị trường Việt. Từ khoá về prompt marketing, kế hoạch marketing bằng AI và Claude Code/Codex skill vẫn đang còn sớm."

vnMarket:
  insight: "Thị trường Việt không thiếu người dùng AI để viết content, nhưng thiếu quy trình chung để biến AI thành năng lực team. Một bộ skill marketing có frontmatter, workflow và context nền giúp agency giảm lệch chất lượng giữa intern, account và strategist. Điểm đáng xem là nó đã viết bằng tiếng Việt trước, không phải dịch từ bộ prompt global."
  seoKeywords: ["prompt marketing", "AI marketing", "kế hoạch marketing bằng AI", "Claude Code skill", "Codex skill", "AI avatar marketing", "content calendar AI"]
  notes: "Đã kiểm tra truy vấn quanh ai-business-skills, prompt marketing, AI marketing, Claude Code skill và kế hoạch marketing bằng AI. Repo có nội dung Việt sẵn nhưng adoption ngoài GitHub cần Luan kiểm thêm."

usabilityRisk: "ai-business-skills không tự đảm bảo chiến lược đúng. Team vẫn phải cung cấp context sản phẩm, số liệu thật, ngân sách, insight khách hàng và người review; nếu chỉ cài skill rồi giao hết cho agent, output rất dễ đẹp format nhưng sai thực tế."

practitionerGuide:
  outcome: "Bạn có một bộ skill marketing cài vào môi trường agent và chạy thử được một output thật như kế hoạch campaign hoặc audit ads."
  prerequisites:
    - "Một môi trường hỗ trợ đọc skill markdown hoặc custom instruction, ví dụ Claude Code, OpenCode, Codex, VS Code extension hoặc workflow agent tương đương."
    - "Context sản phẩm, tệp khách hàng, kênh bán, ngân sách và số liệu nền để skill không phải đoán."
    - "Một người marketing đủ kinh nghiệm để review output trước khi đưa cho khách hoặc chạy ads."
  steps:
    - "Cài repo theo quickstart bash hoặc PowerShell, chọn global nếu muốn dùng chung hoặc project nếu chỉ thử trong một workspace."
    - "Chạy foundation/context skill trước để ghi lại sản phẩm, audience, thị trường và mục tiêu."
    - "Chọn một việc cụ thể như kế hoạch marketing 30 ngày, content calendar, ad copy hoặc audit ads."
    - "Đưa dữ liệu thật vào prompt: ngân sách, KPI, kênh, benchmark cũ, insight khách hàng và ràng buộc vận hành."
    - "Review output theo checklist nghề: logic funnel, giả định số liệu, claim pháp lý, brand voice và khả năng triển khai."
  expectedResult: "Kết quả đúng là một bản kế hoạch hoặc tài liệu marketing có cấu trúc rõ, đủ để team sửa tiếp và triển khai, không chỉ là bài viết AI nghe mượt."
  commonPitfalls:
    - "Bỏ qua bước context nên skill phải tự đoán sản phẩm và thị trường."
    - "Dùng output thẳng cho khách mà chưa kiểm số liệu, claim và brand voice."
    - "Cài quá nhiều skill cùng lúc nhưng không chọn workflow cụ thể để đo hiệu quả."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: bộ skill marketing tiếng Việt cho team muốn chuẩn hoá cách dùng Claude/Codex/OpenCode, không chỉ sưu tầm prompt lẻ."
paidToolReplaced: "Một phần nhu cầu mua prompt pack, template marketing hoặc thuê viết framework ban đầu cho team nhỏ"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt README, nhưng giá trị nằm ở việc đánh giá bộ skill này như hạ tầng prompt/process cho agency Việt."

scoreBreakdown:
  useCaseFit: 25
  projectHealth: 18
  costAdvantage: 8
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "B"
confidence: "medium"
lastReviewedAt: 2026-06-29
nextReviewDueAt: 2026-09-27

tags: ["marketing", "agent-skills", "prompt", "agency", "vietnam"]
publishedAt: 2026-06-29
week: "2026-W27"
draft: false
---

Draft foundation. Cần Luan review xem record này nên đặt ở lane agency/process hay creative/marketing ops, vì repo phủ khá rộng và có yếu tố self-promo rõ.
