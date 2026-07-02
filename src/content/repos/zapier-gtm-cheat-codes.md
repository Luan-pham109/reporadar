---
name: "GTM Cheat Codes"
repoUrl: "https://github.com/zapier/gtm-cheat-codes"
oneLiner: "GTM Cheat Codes là bộ skill Claude Code/Cursor cho team marketing-sales-CS: biến brief, dữ liệu CRM và ghi chú cuộc gọi thành campaign, danh sách ưu tiên account, bản tóm tắt... có nguồn dẫn chứng và bước duyệt của người, thay vì AI tự động gửi/đăng."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 294
  forks: 14
  note: "~51 ngày tuổi, ~5.8 sao/ngày"
  starsPerDay: 5.8
  ageDays: 51
  pushedAt: "2026-06-29"
  archived: false
  openIssues: 0
standoutFeatures:
  - "14 nhóm skill theo chức năng thật: marketing, customer-advocacy, sales-revops, customer-support, legal-operations, gtm-ops, content-ops — không phải một bộ prompt chung chung."
  - "Kết nối trực tiếp qua Zapier MCP/SDK vào CRM, docs, chat, Sheets thật, có cổng phê duyệt của người trước khi ghi đè hệ thống hoặc gửi ra ngoài."
  - "Có tài liệu tổng quan cấp quản lý (`docs/vp-marketing-skill-breakdown.md`) và registry CSV để chọn đúng skill khớp quy trình team."
  - "Do chính Zapier phát hành và mô tả là bộ skill nội bộ GTM team của họ đang dùng — không phải side project thử nghiệm."
signalSources:
  - label: "GitHub"
    url: "https://github.com/zapier/gtm-cheat-codes"

useCases:
  - "Biến một brief campaign rời rạc thành gói campaign có cấu trúc và mockup trang, thay vì tự gom ghi chú từ nhiều nơi."
  - "Xếp hạng account nào đáng ưu tiên tiếp cận dựa trên tín hiệu 'why-now' thật từ CRM, thay vì đoán theo cảm tính."
  - "Soạn nháp outreach cá nhân hoá cho sale từ dữ liệu CRM và lịch sử dùng sản phẩm của khách, có nguồn dẫn để rep chỉnh lại trước khi gửi."
  - "Lọc trước hộp thư báo chí/đối tác/khách hàng để không bỏ sót yêu cầu gấp, trước khi ai đó phải đọc thủ công cả hộp thư chung."
  - "Tổng hợp một cuộc gọi hoặc bản ghi thành bản tóm tắt kèm hành động tiếp theo, có gắn nguồn để người duyệt kiểm lại nhanh."

workflowStepReplaced: "Khâu tự viết prompt rời rạc và tự gom dữ liệu CRM/docs/chat cho từng việc GTM (campaign, ưu tiên account, tóm tắt cuộc gọi) — thay bằng skill đóng gói sẵn có nguồn dẫn chứng và cổng duyệt."
timeOrCostSaved: "Không thay một SaaS cụ thể; tiết kiệm chủ yếu ở công tự viết prompt và tự gom dữ liệu cho từng việc GTM lặp lại — mức tiết kiệm còn phụ thuộc quy mô team và stack CRM sẵn có."
localProblem: "Team marketing/sales/CS ở agency và startup VN đang tự viết prompt rời rạc để làm báo cáo campaign, ưu tiên account hay tóm tắt cuộc gọi — mỗi người một kiểu, không ai review lại được nguồn dữ liệu. GTM Cheat Codes đóng gói sẵn quy trình có nguồn dẫn chứng và bước duyệt của người trước khi ghi vào hệ thống hoặc gửi email/tin nhắn."
localEvidence: "Chưa có bài tiếng Việt nào nhắc riêng repo gtm-cheat-codes hoặc bộ skill GTM của Zapier; nội dung về 'Zapier MCP + Claude Code cho GTM' hiện chỉ có bằng tiếng Anh (Databar.ai, Coffee.ai)."

vnMarket:
  insight: "GTM team ở VN (đặc biệt agency và B2B SaaS) phần lớn vẫn thao tác CRM/report thủ công hoặc dùng prompt ChatGPT rời rạc — chưa quen khái niệm 'skill' cài thẳng vào Claude Code/Cursor để tự động hoá GTM có governance. gtm-cheat-codes fit nhất với team đã có Zapier/CRM kết nối sẵn (HubSpot, Salesforce, Slack) — tức doanh nghiệp tầm trung trở lên, không hợp shop nhỏ. Whitespace: chưa ai viết tiếng Việt review riêng bộ skill này, nhưng cần nói thẳng rào cản: phải trả phí Zapier ở mức dùng nhiều, và phần lớn workflow giả định stack SaaS kiểu Mỹ ít phổ biến ở SME Việt (nhiều nơi vẫn dùng Excel/Google Sheet, Base, Bitrix)."
  seoKeywords: ["AI agent cho marketing", "tự động hoá quy trình GTM", "Claude Code cho sales", "AI agent CRM", "skill Claude Code marketing", "Zapier MCP AI agent"]
  notes: "Verify qua WebSearch 2026-07-02: chưa thấy nội dung tiếng Việt về riêng repo này; nhu cầu 'Zapier MCP + Claude Code cho GTM' mới có bài tiếng Anh. Cần kiểm thêm trong cộng đồng RevOps/marketing ops VN trước khi publish."

usabilityRisk: "Không phải công cụ đứng một mình — cần tài khoản Zapier (MCP/SDK) và ít nhất một CRM/hệ thống đã kết nối để skill có dữ liệu thật mà xử lý. Phần lớn ví dụ giả định stack SaaS kiểu Âu-Mỹ (HubSpot, Salesforce, Slack), team VN dùng Sheet/Base/Bitrix thuần sẽ phải tự map lại. Không có giao diện web — chạy trong Claude Code/Cursor/Codex, cần người quen làm việc với coding agent."

practitionerGuide:
  outcome: "Sau guide này bạn chạy được một skill GTM thật (vd ưu tiên account hoặc tìm customer proof) trên dữ liệu CRM/Sheet của mình, có bước duyệt trước khi ghi ngược hệ thống."
  prerequisites:
    - "Đã cài Claude Code, Cursor hoặc Codex."
    - "Có tài khoản Zapier (MCP) đã kết nối ít nhất một CRM/Sheet/chat tool."
    - "Một việc thật để test, vd danh sách account cần ưu tiên hoặc một campaign cần báo cáo."
  steps:
    - "Đọc `docs/vp-marketing-skill-breakdown.md` để chọn đúng 1-2 skill khớp việc bạn đang làm, thay vì cài cả 14 nhóm."
    - "Mở `registry/skills.csv` để tìm skill cụ thể, rồi đọc README/SKILL.md/SETUP.md trong thư mục skill đó."
    - "Kết nối skill với hệ thống thật qua Zapier MCP, dùng dữ liệu sanitize/thử trước khi chạy trên dữ liệu khách thật."
    - "Chạy skill trên một việc thật, ví dụ ưu tiên 10 account hoặc tóm tắt một campaign vừa chạy."
    - "Luôn giữ bước duyệt của người trước khi để skill gửi email, cập nhật CRM hoặc đăng nội dung ra ngoài."
  expectedResult: "Bạn có một output GTM thật (báo cáo, danh sách ưu tiên, draft outreach...) kèm nguồn dữ liệu rõ ràng, sẵn sàng cho người duyệt trước khi dùng chính thức."
  commonPitfalls:
    - "Cài hết 14 nhóm skill cùng lúc rồi rối, không biết bắt đầu từ đâu."
    - "Bỏ qua bước duyệt của người, để skill tự ghi thẳng vào CRM hoặc gửi ra ngoài."
    - "Dùng thẳng dữ liệu khách hàng thật khi mới test skill lần đầu, thay vì dữ liệu sanitize."

greyHatFlag: "in"

suggestedAngle: "Góc creator: '3 skill GTM của Zapier đáng cài nhất cho agency/SaaS Việt đã có CRM' — chọn lọc theo stack phổ biến ở VN thay vì giới thiệu cả 14 nhóm."
paidToolReplaced: "Một phần việc thuê thêm RevOps/marketing ops junior để làm báo cáo, ưu tiên account và tóm tắt cuộc gọi thủ công"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI/Trending nói được 'Zapier có bộ skill GTM cho coding agent', nhưng skill nào thực sự khớp stack CRM/Sheet phổ biến ở VN, rào cản chi phí Zapier, và cách set governance/duyệt là phần cần biên tập theo ngữ cảnh VN."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 18
  costAdvantage: 8
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-02
nextReviewDueAt: 2026-09-30

tags: ["agency", "gtm", "marketing-ops", "claude-code", "zapier", "ai-agents"]
publishedAt: 2026-07-02
week: "2026-W27"
draft: false
---

Record nháp sinh trong daily pipeline ngày 2026-07-02 (nguồn: github-search, 294 sao, repo chính chủ Zapier). Đã gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) độ phù hợp thực tế với stack CRM phổ biến ở SME/agency VN (nhiều nơi chưa dùng HubSpot/Salesforce), (2) chi phí Zapier MCP ở mức dùng thật, (3) có nhóm RevOps/marketing ops VN nào đã thảo luận repo này chưa.
