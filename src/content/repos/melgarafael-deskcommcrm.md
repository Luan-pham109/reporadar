---
name: "DeskcommCRM"
repoUrl: "https://github.com/melgarafael/DeskcommCRM"
oneLiner: "DeskcommCRM là một CRM chăm sóc khách hàng đa tenant cho shop online: gộp inbox WhatsApp, agent AI có RAG riêng theo từng shop, quản lý đơn hàng và pipeline hậu mãi vào một nền tảng, dựng trên Next.js 15 + Supabase, làm sẵn cho thị trường e-commerce Brazil (LGPD + Nuvemshop)."
media: []

vertical: ["ecom"]

maturity: "pre-viral"
repoStats:
  stars: 55
  forks: 46
  note: "~81 ngày tuổi, ~0.7 sao/ngày, tỉ lệ fork/sao cao (46/55) cho thấy dự án còn rất sớm nhưng có người mổ code"
  starsPerDay: 0.7
  ageDays: 81
  pushedAt: 2026-07-19T01:17:08Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "Gộp chăm sóc khách hàng người-thật + agent AI có RAG riêng theo từng tenant, phân tích cảm xúc và handoff AI→người được ghi log vào một nền tảng."
  - "Multi-tenant thật ngay từ đầu: RLS trên mọi bảng gắn tenant, test cô lập dữ liệu giữa 2 tenant là gate bắt buộc trong CI."
  - "Kênh chính là WhatsApp qua WAHA; có bộ hostgator-setup-kit cài toàn bộ (app + WAHA + database) trên VPS bằng một lệnh."
  - "Thiết kế theo vòng đời e-commerce (Giỏ bỏ quên → Đã thanh toán → Đã gửi → Đã giao → Hậu mãi) và tích hợp Nuvemshop, kèm webhook LGPD customer/redact + customer/data_request."
  - "Có MCP server nội bộ cho agent, RBAC 4 vai server-side, audit log append-only giữ 5 năm và suite 100+ test invariants về governance."
signalSources:
  - label: "GitHub"
    url: "https://github.com/melgarafael/DeskcommCRM"

useCases:
  - "Tham khảo kiến trúc một CRM chăm sóc khách hàng đa tenant có RLS + agent AI RAG trước khi tự build hệ thống inbox/AI cho shop hoặc cho agency BPO."
  - "Học cách gắn agent AI vào luồng chăm sóc thật: có phân tích cảm xúc, handoff AI→người được audit và kiểm soát budget theo tổ chức, thay vì chatbot trang trí."
  - "Nghiên cứu cách làm multi-tenant an toàn (RLS mọi bảng + test cô lập tenant làm gate CI) cho SaaS phục vụ nhiều shop cùng lúc."
  - "Đội phục vụ khách quốc tế/Brazil có thể cân nhắc dựng thẳng vì đã sẵn WhatsApp + Nuvemshop + LGPD."

workflowStepReplaced: "Khâu tự đấu nối inbox đa kênh + agent AI + quản lý đơn + audit compliance thành một hệ CRM chăm sóc khách hàng, thay vì ghép rời từng mảng."
timeOrCostSaved: "Nếu tự host được, thay cho một CRM/omnichannel trả phí theo tháng cho đội BPO nhiều shop; nhưng README không nêu benchmark cụ thể và chi phí vận hành thật phụ thuộc Supabase + WAHA + VPS + AI Gateway bạn tự trả."
localProblem: "Agency và đội BPO ở Việt Nam nhận chăm sóc khách cho nhiều shop cùng lúc thường phải tự ghép inbox, chatbot, quản lý đơn và phân quyền — vừa tốn công vừa dễ rò dữ liệu giữa các shop. DeskcommCRM giải đúng bài toán 'một hệ đa tenant có cô lập dữ liệu + AI + audit', nhưng bản thân nó lại đóng khung cho hạ tầng Brazil."
localEvidence: "Nhu cầu 'phần mềm chăm sóc khách hàng đa kênh', 'CRM cho shop online', 'gộp inbox nhiều fanpage' xuất hiện đều trong nhóm agency/ecom VN. Điểm lệch: kênh chính của repo là WhatsApp + tích hợp Nuvemshop (nền tảng e-commerce Mỹ Latinh), trong khi shop VN chạy Zalo/Facebook Messenger và Shopify/Haravan/Sapo/KiotViet."

vnMarket:
  insight: "Đội chăm sóc khách ở VN đang dùng các nền tảng omnichannel nội địa (Pancake, Botbanhang, Subiz, Haravan...) gắn với Facebook/Zalo và các sàn/nền tảng VN. DeskcommCRM không cắm thẳng vào bối cảnh đó: nó là CRM cho e-commerce Brazil — kênh WhatsApp/WAHA, tích hợp Nuvemshop, tuân thủ LGPD (luật bảo vệ dữ liệu Brazil, tương đương Nghị định 13/2023 của VN nhưng KHÁC). Giá trị thực cho VN nằm ở lớp kiến trúc (multi-tenant RLS, agent AI RAG theo tenant, governance/audit) để tham khảo hoặc fork, chứ không phải cắm-là-chạy cho shop VN."
  seoKeywords: ["CRM cho shop online", "phần mềm chăm sóc khách hàng đa kênh", "CRM đa tenant open source", "agent AI RAG chăm sóc khách hàng", "self-host CRM e-commerce", "multi-tenant RLS Supabase"]
  notes: "Dựa trên README (stack, roadmap, kiến trúc) và topics GitHub. Chưa thấy tín hiệu HN/Reddit; repo còn nhỏ (55 sao). Điểm cần Luan cân nhắc: tool đóng khung cho hạ tầng Brazil (WhatsApp + Nuvemshop + LGPD) nên độ hợp cho shop VN là gián tiếp — chủ yếu để tham khảo kiến trúc."

usabilityRisk: "Lệch bối cảnh là rủi ro lớn nhất cho VN: kênh chính là WhatsApp (VN dùng Zalo/Messenger), tích hợp e-commerce là Nuvemshop (không có ở VN), tuân thủ theo LGPD của Brazil. Về kỹ thuật, đây là stack nặng và nhiều mảnh: Next.js 15 + Supabase (Postgres + RLS + vector) + WAHA Plus + Upstash Redis + Sentry + Vercel AI Gateway + Nuvemshop — README nói setup từ zero mất ~60–90 phút và cần cấu hình đúng nhiều dịch vụ. Là dự án self-host 'as-is', không có SLA, cộng đồng còn rất nhỏ và toàn tài liệu tiếng Bồ Đào Nha."

practitionerGuide:
  outcome: "Sau guide này bạn quyết định được nên fork/tham khảo DeskcommCRM làm nền cho một CRM chăm sóc khách đa tenant, hay chỉ lấy vài ý tưởng kiến trúc (RLS, agent RAG, audit) rồi tự dựng cho bối cảnh VN."
  prerequisites:
    - "Đọc được tài liệu tiếng Bồ Đào Nha (README, docs/SETUP.md, ARCHITECTURE.md) hoặc dịch trước khi làm theo."
    - "Nếu chạy thật: Node 20 + pnpm, một project Supabase, và (nếu cần WhatsApp) một instance WAHA Plus; thêm Upstash, Sentry, AI Gateway theo docs/SETUP.md."
    - "Xác định rõ kênh và nền tảng shop của bạn — nếu là Zalo/Messenger + Shopify/Haravan thì phải tự thay lớp WAHA/Nuvemshop."
  steps:
    - "Đọc ARCHITECTURE.md và các PRD trong docs/prd/ để nắm mô hình multi-tenant + agent AI trước khi cài."
    - "Clone repo, chạy pnpm install, copy .env.example → .env.local và điền theo docs/SETUP.md."
    - "Dựng Supabase (supabase link + db push) để có schema + RLS; chạy pnpm dev và mở http://localhost:3000."
    - "Chạy pnpm test:unit và test cô lập RLS để hiểu cách họ chặn rò dữ liệu giữa tenant — đây là phần đáng học nhất."
    - "Nếu định dùng thật cho VN, đánh giá công thay kênh WhatsApp/WAHA và tích hợp Nuvemshop bằng kênh/nền tảng VN trước khi cam kết."
  expectedResult: "Bạn chạy được app local với một tenant demo, hiểu luồng inbox → agent AI → audit, và có kết luận rõ tool này đáng fork hay chỉ đáng tham khảo cho bối cảnh của bạn."
  commonPitfalls:
    - "Tưởng là CRM cắm-là-chạy cho shop VN, trong khi kênh (WhatsApp) và tích hợp (Nuvemshop) đều là của Brazil."
    - "Bỏ qua cron event-log-drain khi self-host — không có nó thì webhook và automation không chạy dù vẫn tạo được."
    - "Đánh giá thấp chi phí/công vận hành cả stack (Supabase + WAHA + Upstash + Sentry + AI Gateway) khi lượng hội thoại tăng."

greyHatFlag: "in"

suggestedAngle: "Góc kể hợp lý: 'một CRM chăm sóc khách hàng đa tenant có AI RAG và audit, mã nguồn mở để mổ' — dùng làm case-study kiến trúc cho dân build SaaS/agency VN, kèm cảnh báo tool đóng khung cho hạ tầng Brazil."
paidToolReplaced: "Các nền tảng CRM/omnichannel trả phí theo tháng (kiểu Zendesk, hoặc omnichannel nội địa như Subiz/Pancake) — nhưng chỉ khi bạn tự host được và chấp nhận thay lớp kênh."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI liệt kê được tech stack và tính năng từ README, nhưng cảnh báo lệch bối cảnh cho VN (WhatsApp vs Zalo, Nuvemshop vs sàn VN, LGPD vs Nghị định 13) và việc định vị nó là 'case-study kiến trúc' thay vì 'CRM cắm-là-chạy' cần curation của người theo dõi repo cho ngành ecom VN."

tags: ["crm", "whatsapp", "multi-tenant", "ai-rag", "nextjs", "supabase", "self-host", "ecom"]
scoreBreakdown:
  useCaseFit: 11
  projectHealth: 14
  costAdvantage: 12
  deployment: 6
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-19
nextReviewDueAt: 2026-10-17
publishedAt: 2026-07-19
week: "2026-W29"
draft: true
---

Draft từ daily pipeline (2026-07-19). Điểm cần Luan kiểm trước khi publish:
- Tool đóng khung cho hạ tầng e-commerce Brazil: kênh chính WhatsApp/WAHA, tích hợp Nuvemshop, tuân thủ LGPD. Độ hợp cho shop VN là gián tiếp (chủ yếu tham khảo kiến trúc multi-tenant + agent AI RAG + audit) — cách kể đã phản ánh điều này, cần Luan xác nhận positioning.
- maturity đặt "pre-viral" thay vì gợi ý "rising" của pipeline vì repo mới 55 sao, chưa có tín hiệu HN/Reddit; tỉ lệ fork/sao cao (46/55) đáng chú ý nhưng chưa phải tín hiệu viral.
- README không nhúng ảnh/video demo dạng hotlink nên media để trống.
- Toàn bộ tài liệu repo bằng tiếng Bồ Đào Nha.
