---
name: "E-Commerce Image Generator (GPT-Image-2)"
repoUrl: "https://github.com/buluslan/gpt-image2-ecommerce"
oneLiner: "Đây là một skill/script giúp bạn mô tả bằng lời một nhu cầu ảnh sản phẩm (ví dụ 'ảnh nền trắng chuyên nghiệp cho một chai serum') rồi tự động khớp đúng 1 trong 25 mẫu prompt thương mại điện tử và gọi GPT-Image-2 qua Codex CLI để tạo ảnh."
media:
  - type: "image"
    url: "https://github.com/buluslan/gpt-image2-ecommerce/raw/main/assets/banner.png"
    caption: "Banner giới thiệu bộ công cụ tạo ảnh sản phẩm bằng GPT-Image-2."

vertical: ["creative", "agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 193
  forks: 27
  note: "~67 ngày tuổi, ~2.9 sao/ngày"
  starsPerDay: 2.9
  ageDays: 67
  pushedAt: "2026-04-27T12:47:46Z"
  archived: false
  openIssues: 0
standoutFeatures:
  - "25 mẫu prompt dựng sẵn cho đúng các tình huống ảnh thương mại điện tử quen thuộc: ảnh nền trắng/hero, ảnh lifestyle, flat lay, macro, poster/banner khuyến mãi, ảnh mạng xã hội (Xiaohongshu/Instagram/TikTok), UGC/buyer review, ảnh người mẫu, before-after, bao bì, infographic, ảnh livestream, thử đồ ảo, ghost mannequin, mockup, ảnh mùa vụ..."
  - "Cho phép truyền ảnh nền trắng sản phẩm thật làm ảnh tham chiếu, giúp giữ đúng hình dạng và thương hiệu sản phẩm thay vì để AI tự bịa."
  - "Có xử lý 'giảm cảm giác AI' riêng cho ảnh UGC/livestream/mạng xã hội (thêm nhiễu hạt phim, khuyết điểm thật) để trông giống ảnh chụp thật hơn."
  - "Chạy qua Codex CLI nên dùng được trong nhiều agent khác nhau (Claude Code, OpenClaw, Cursor, Windsurf) miễn máy có cài Codex CLI, không khoá cứng vào một hệ sinh thái."
signalSources:
  - label: "GitHub"
    url: "https://github.com/buluslan/gpt-image2-ecommerce"

useCases:
  - "Ra một bộ ảnh nền trắng chuyên nghiệp cho sản phẩm mới chỉ bằng một câu mô tả, không cần dựng set chụp thật."
  - "Tạo nhanh ảnh lifestyle hoặc flat lay để đăng bài mạng xã hội trong ngày, khi chưa kịp thuê chụp hoặc chưa có đủ ảnh thật để đăng."
  - "Dựng ảnh trước-sau, ảnh macro chi tiết hoặc infographic cho trang chi tiết sản phẩm (trang A+ hoặc landing) mà không cần dựng lại từng cảnh bằng tay."
  - "Thử nhanh nhiều phong cách ảnh (sang trọng, mùa vụ, thể thao...) cho cùng một sản phẩm trước khi chốt bộ ảnh chạy quảng cáo thật."
  - "Tạo ảnh UGC/ảnh mạng xã hội trông tự nhiên (có chủ đích làm 'giảm cảm giác AI') để không bị nhận ra ngay là ảnh máy tạo khi đăng story/reels."

workflowStepReplaced: "Khâu chụp ảnh sản phẩm cho một số tình huống thường ngày (ảnh nền trắng, ảnh mạng xã hội, banner khuyến mãi) — không thay được ảnh cần chụp thật 100% như ảnh có người mẫu thật đại diện thương hiệu."
timeOrCostSaved: "Có thể tránh được một phần chi phí thuê ekip chụp cho các ảnh phụ trợ (ảnh mạng xã hội, banner, biến thể theo mùa); README không đưa ra số tiền cụ thể, và bạn vẫn trả phí theo lượt gọi GPT-Image-2 qua Codex."
localProblem: "Shop online và agency ecom nhỏ ở Việt Nam thường không đủ ngân sách chụp lại ảnh sản phẩm cho mỗi dịp sale hoặc mỗi nền tảng (Shopee, TikTok Shop, Instagram), nên hay dùng đi dùng lại một bộ ảnh cũ, làm nội dung nhàm và khó bắt trend theo mùa."
localEvidence: "Xu hướng dùng AI tạo ảnh sản phẩm (Nano Banana, GPT-Image) đã lan khá rộng ở Việt Nam năm 2026 — nhiều bài hướng dẫn tiếng Việt (FPT Shop, Raccoon, CentriX, Fylia, Wokushop...) và cả case thử nghiệm thật của một thương hiệu mỹ phẩm Việt so sánh GPT-Image với Nano Banana cho ảnh sản phẩm — cho thấy nhu cầu và cả sự cạnh tranh nội dung tiếng Việt về chủ đề này đã khá rõ."

vnMarket:
  insight: "Nội dung tiếng Việt về 'tạo ảnh sản phẩm bằng AI' đã khá nhiều (chủ yếu xoay quanh Nano Banana của Google), nên góc khác biệt của repo này không nằm ở việc 'AI tạo ảnh sản phẩm được' — điều đó nhiều người biết rồi — mà ở chỗ nó đóng gói sẵn 25 tình huống ảnh thương mại điện tử cụ thể thành một skill dùng lặp lại được trong Claude Code/Codex, thay vì phải tự nghĩ prompt mỗi lần. Nên viết theo hướng 'bộ prompt ảnh ecom dùng lại được' hơn là giới thiệu lại khái niệm AI tạo ảnh."
  seoKeywords: ["tạo ảnh sản phẩm AI", "ảnh sản phẩm cho shop online", "AI tạo ảnh thương mại điện tử", "prompt ảnh sản phẩm", "GPT-Image ảnh sản phẩm", "ảnh mạng xã hội AI cho shop"]
  notes: "Đã tra Google các cụm 'ảnh sản phẩm AI', 'Nano Banana ảnh sản phẩm' và thấy độ bão hoà nội dung tiếng Việt khá cao quanh chủ đề tạo ảnh AI nói chung, nhưng chưa thấy ai viết cụ thể về repo/skill gpt-image2-ecommerce này — cần Luan kiểm thêm nhóm Facebook ecommerce/agency nếu muốn chắc hơn."

usabilityRisk: "Cần cài Codex CLI và đăng nhập tài khoản có quyền dùng GPT-Image-2 (tốn phí theo lượt gọi ảnh, không miễn phí); README chủ yếu bằng tiếng Trung nên người không đọc được sẽ cần dịch hoặc dùng phần tóm tắt tiếng Anh. Repo cũng chưa có phần rõ ràng về bản quyền/rủi ro khi ảnh AI trông quá giống ảnh sản phẩm thật của brand khác — nên tự kiểm tra trước khi dùng ảnh AI để chạy quảng cáo trả phí."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có ít nhất một tấm ảnh sản phẩm sinh ra từ AI đúng theo một trong 25 kịch bản ảnh ecom, sẵn sàng để so sánh với ảnh chụp thật."
  prerequisites:
    - "Máy đã cài Codex CLI và đăng nhập tài khoản có quyền dùng model GPT-Image-2."
    - "Một ảnh sản phẩm nền trắng thật (không bắt buộc, nhưng giúp AI giữ đúng hình dạng sản phẩm)."
    - "Một câu mô tả rõ ràng: loại ảnh muốn (nền trắng, lifestyle, banner...), tông màu, cảm giác thương hiệu."
  steps:
    - "Clone repo và đảm bảo Codex CLI đã đăng nhập, chạy thử một lệnh `codex exec` mẫu trong README."
    - "Mô tả bằng tiếng Việt/Anh nhu cầu ảnh cụ thể, kèm ảnh sản phẩm nền trắng nếu có, để agent tự khớp vào 1 trong 25 mẫu."
    - "Xem ảnh đầu ra, kiểm tra chất liệu, ánh sáng và độ giống sản phẩm thật trước khi dùng."
    - "Thử lại với 1-2 biến thể phong cách khác nhau cho cùng sản phẩm để chọn ra bộ ảnh ổn nhất."
    - "Đối chiếu ảnh AI với ảnh chụp thật (nếu có) trước khi quyết định dùng ảnh AI để chạy quảng cáo trả phí."
  expectedResult: "Bạn có một hoặc vài tấm ảnh sản phẩm theo đúng kịch bản mong muốn, đủ để đánh giá xem có thay được một phần buổi chụp thật hay chỉ dùng cho nội dung mạng xã hội hàng ngày."
  commonPitfalls:
    - "Không truyền ảnh tham chiếu nên AI vẽ sai hình dạng/logo sản phẩm."
    - "Dùng thẳng ảnh AI cho quảng cáo trả phí mà chưa kiểm tra rủi ro giống sản phẩm/thương hiệu khác."
    - "Quên rằng mỗi lượt tạo ảnh đều tốn phí API, dùng tràn lan không kiểm soát chi phí."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator: so sánh 25 mẫu ảnh ecom này với việc tự nghĩ prompt từ đầu, quay một clip 'tạo trọn bộ ảnh cho 1 sản phẩm trong 5 phút' để mô tả trực quan tốc độ."
paidToolReplaced: "Chụp ảnh sản phẩm thuê ngoài cho ảnh phụ trợ, hoặc các tool ảnh sản phẩm AI trả phí như Pebblely, Photoroom"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể xác nhận GPT-Image-2 tạo được ảnh sản phẩm, nhưng việc biết có sẵn 25 mẫu ecom cụ thể và cách chọn giữa dùng ảnh AI hay chụp thật cho từng tình huống là phần cần người biên tập diễn giải."

tags: ["ai-image", "ecommerce", "product-photography", "creative", "codex-cli"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 12
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

Draft foundation sinh trong round pipeline ngày 2026-07-03. Cần Luan kiểm tay ảnh demo còn render đúng không và xác nhận rủi ro bản quyền ảnh AI trước khi publish.
