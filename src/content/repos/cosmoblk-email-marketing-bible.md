---
name: "Email Marketing Bible"
repoUrl: "https://github.com/CosmoBlk/email-marketing-bible"
oneLiner: "Email Marketing Bible là một skill cài vào Claude Code (hoặc agent AI khác) để AI đóng vai chuyên gia email marketing: audit tài khoản ESP, dựng flow, viết copy đúng giọng thương hiệu, chẩn đoán vì sao email rơi vào spam, và chặn AI gửi hàng loạt khi chưa có sự đồng ý của bạn."

vertical: ["agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 238
  forks: 34
  note: "~144 ngày tuổi, ~1.7 sao/ngày"
  starsPerDay: 1.7
  ageDays: 144
  pushedAt: "2026-06-30T20:30:43Z"
  archived: false
  openIssues: 1
standoutFeatures:
  - "19 chương kiến thức + 19 playbook theo ngành (ecommerce, SaaS, agency, nonprofit, y tế, bất động sản...), xây từ 908 nguồn và kinh nghiệm thật vận hành SmartrMail — một SaaS email marketing từng có ~28.000 khách hàng và gửi 6 tỷ email trước khi được mua lại năm 2022."
  - "Có cơ chế 'preflight gate': agent phải dừng lại xin xác nhận trước khi gửi hàng loạt, thay vì tự ý bắn email cho cả danh sách."
  - "Bao quát từ kỹ thuật deliverability (SPF, DKIM, DMARC, BIMI) đến pháp lý (GDPR, CAN-SPAM, CASL, CCPA, luật chống spam Úc) như một checklist quyết định trước khi gửi."
  - "Có bộ quy tắc riêng để 'de-slop' — làm copy do AI viết bớt nghe như AI, giữ đúng giọng thương hiệu."
signalSources:
  - label: "GitHub"
    url: "https://github.com/CosmoBlk/email-marketing-bible"
  - label: "Trang tài liệu đầy đủ"
    url: "https://emailmarketingskill.com"

useCases:
  - "Audit một tài khoản Klaviyo/Mailchimp đang thiếu flow nào (welcome, cart, post-purchase, win-back) rồi để AI dựng ngay flow còn thiếu và đáng tiền nhất trước."
  - "Chẩn đoán vì sao email đang rơi vào tab Khuyến mãi hoặc mục Spam của Gmail, đi từng lớp: xác thực tên miền, uy tín gửi, rồi mới tới nội dung."
  - "Biến một bản nháp email (tự viết hoặc AI viết) thành bản nghe như người thật viết, đúng giọng thương hiệu, trước khi bấm gửi."
  - "Tra nhanh benchmark tỷ lệ mở/click/doanh thu-trên-mỗi-email theo đúng ngành của mình thay vì đoán mò theo cảm tính."
  - "Rà một chiến dịch qua checklist tuân thủ GDPR/CAN-SPAM/CASL/CCPA trước khi gửi, để không dính rủi ro pháp lý khi làm việc với khách nước ngoài."

workflowStepReplaced: "Khâu tư vấn email marketing: audit setup ESP, dựng flow tự động, viết copy, chẩn đoán deliverability và review tuân thủ trước khi gửi."
timeOrCostSaved: "Có thể thay được phần việc một chuyên gia/agency email marketing tư vấn hàng tháng, nhưng README không đưa ra con số giờ hay tiền tiết kiệm cụ thể — cần agency tự đo khi áp dụng thật."
localProblem: "Nhiều shop ecommerce và agency ở Việt Nam chạy email marketing chủ yếu dựa vào mẫu có sẵn của ESP (Mailchimp, Omnisend...) và không có ai trong team hiểu sâu deliverability hay luật chống spam quốc tế — nhất là các agency đang phục vụ khách hàng nước ngoài."
localEvidence: "Các bài hướng dẫn tiếng Việt về 'gửi email hàng loạt không bị spam' rất phổ biến (Bizfly, Sapo, Zozo, AMIS, Tomorrow Marketers...), cho thấy nhu cầu khắc phục deliverability là có thật, nhưng phần lớn dừng ở mẹo cấu hình SPF/DKIM chung chung, thiếu tài liệu tiếng Việt đi sâu vào playbook theo ngành hay quy trình audit bài bản như skill này."

vnMarket:
  insight: "Thị trường email marketing Việt Nam vẫn quen với cách làm 'gửi mẫu có sẵn rồi xem tỷ lệ mở', ít nơi có tài liệu bài bản về audit flow, benchmark theo ngành hay compliance quốc tế. Agency Việt phục vụ khách nước ngoài (đặc biệt ecommerce DTC) sẽ hưởng lợi nhiều nhất từ phần playbook ngành và checklist GDPR/CAN-SPAM, vì đây là kiến thức khó tự tổng hợp nhanh. Góc viết nên nhấn vào việc skill này thay thế phần 'đọc hàng chục bài blog rồi tự đúc kết' bằng một nguồn duy nhất, thay vì hứa tăng doanh thu email tức thì."
  seoKeywords: ["email marketing không bị spam", "khắc phục email vào spam Gmail", "tỷ lệ mở email marketing", "tự động hóa email marketing bằng AI", "audit Klaviyo", "compliance email marketing GDPR"]
  notes: "Đã tra Google với các cụm 'tỷ lệ mở/spam Gmail' tiếng Việt (Bizfly, Sapo, Zozo, AMIS, Tomorrow Marketers) để xác nhận nhu cầu có thật; chưa tìm thấy thảo luận tiếng Việt nào nhắc trực tiếp tới repo/skill này — độ bão hoà nội dung tiếng Việt về chính tool coi như bằng 0, cần Luan kiểm thêm nhóm Facebook/cộng đồng Klaviyo VN nếu muốn chắc hơn."

usabilityRisk: "Đây là một skill cài vào Claude Code (hoặc agent đọc được định dạng skill), không phải phần mềm chạy độc lập — bạn cần đã có Claude Code/Claude Desktop hoặc agent tương thích. Skill tự nó không gửi được email; vẫn cần tài khoản ESP thật (Klaviyo, Mailchimp...) và các API/MCP kết nối tới đó. Toàn bộ nội dung là tiếng Anh, chưa có bản dịch hay case study Việt Nam nào."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một bản audit email marketing đầu tiên cho một tài khoản ESP thật, kèm danh sách flow nên làm trước."
  prerequisites:
    - "Claude Code (hoặc agent AI khác đọc được định dạng skill) đã cài sẵn."
    - "Một tài khoản ESP đang chạy thật (Klaviyo, Mailchimp, Omnisend...) để audit, cùng quyền truy cập cần thiết."
    - "Thông tin cơ bản về ngành và quy mô doanh thu để agent chọn đúng playbook."
  steps:
    - "Clone skill vào thư mục `~/.claude/skills/email-marketing-bible` theo lệnh trong README."
    - "Mô tả tài khoản ESP hiện tại của bạn cho AI: ngành hàng, doanh thu ước tính, các flow đang có."
    - "Yêu cầu AI audit và liệt kê flow còn thiếu, xếp theo mức độ đáng làm trước."
    - "Chọn một flow AI đề xuất, để AI dựng bản nháp rồi tự đọc lại timing, exit condition và copy trước khi duyệt."
    - "Không cho agent gửi thật ngay — chạy thử trên danh sách nhỏ hoặc tài khoản test trước khi áp dụng cho toàn bộ khách hàng."
  expectedResult: "Bạn có một bản audit rõ ràng (đang thiếu flow nào, vì sao) và ít nhất một bản nháp flow/email sẵn sàng để review, thay vì phải tự đọc hàng chục bài blog trước khi bắt tay làm."
  commonPitfalls:
    - "Để agent tự động kết nối MCP và gửi thật mà chưa đọc kỹ phần safety gate trong SKILL.md."
    - "Áp playbook ngành nước ngoài (case study Casper, Duolingo...) nguyên văn mà không điều chỉnh theo hành vi khách Việt."
    - "Bỏ qua phần compliance vì nghĩ 'khách Việt không quan tâm GDPR' — rủi ro nếu agency phục vụ khách quốc tế."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Dùng AI như một chuyên gia email marketing thường trực — audit tài khoản ESP trong 10 phút thay vì thuê tư vấn' kèm ví dụ chẩn đoán một lỗi deliverability cụ thể."
paidToolReplaced: "Chuyên gia/agency tư vấn email marketing, hoặc các gói audit deliverability trả phí riêng lẻ"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt skill này làm gì, nhưng việc dịch 19 playbook ngành sang bối cảnh Việt Nam và chỉ ra đâu là phần thật sự hữu ích cho agency/ecom Việt vẫn cần người biên tập."

tags: ["email-marketing", "claude-code-skill", "agency", "ecommerce", "deliverability", "compliance"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 14
  deployment: 10
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-03
nextReviewDueAt: 2026-10-01
publishedAt: 2026-07-03
week: "2026-W27"
draft: true
---

Draft foundation sinh trong round pipeline ngày 2026-07-03. Cần Luan kiểm tay thêm độ bão hoà nội dung tiếng Việt và xác nhận các playbook ngành có áp dụng được cho khách VN trước khi publish.
