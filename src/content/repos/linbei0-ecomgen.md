---
name: "EcomGen"
repoUrl: "https://github.com/linbei0/EcomGen"
oneLiner: "EcomGen là bộ công cụ chạy local giúp người bán tự dựng ảnh sản phẩm thương mại điện tử bằng AI — có agent lên storyboard, chế độ 'giữ đúng sự thật sản phẩm', rồi review, chỉnh và xuất cả bộ ra file ZIP."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/linbei0/EcomGen/main/docs/assets/ecomgen-home-overview.png"
    caption: "Trang tổng quan EcomGen: quản lý dự án ảnh theo từng sản phẩm."
  - type: "image"
    url: "https://raw.githubusercontent.com/linbei0/EcomGen/main/docs/assets/ecomgen-storyboard-selection.png"
    caption: "Chọn storyboard từ bộ template ảnh e-commerce dựng sẵn."

vertical: ["ecom", "creative"]

maturity: "rising"
repoStats:
  stars: 66
  note: "Số sao lấy ở thời điểm discovery qua GitHub search; chưa fetch được metric GitHub đầy đủ (tuổi repo, sao/ngày)."
standoutFeatures:
  - "Làm việc theo dự án: khai mô tả sản phẩm + spec thị trường, rồi Pi Agent lên storyboard với ~25 template ảnh e-commerce dựng sẵn."
  - "Có chế độ bảo vệ 'sự thật sản phẩm' (PRODUCT_TRUTH) và bảo vệ pixel (PIXEL_PROTECTED) để AI không bịa chi tiết hàng."
  - "Sinh ảnh bất đồng bộ qua worker BullMQ + Redis, có lưu vết audit; kèm review, chỉnh sửa và xuất ZIP cả bộ."
  - "Cắm được nhiều nhà cung cấp ảnh: các provider tương thích OpenAI và Google Gemini."
signalSources:
  - label: "GitHub"
    url: "https://github.com/linbei0/EcomGen"

useCases:
  - "Dựng nguyên bộ ảnh sản phẩm từ một mô tả hàng: chọn template, để agent lên storyboard rồi sinh loạt ảnh theo bố cục e-commerce."
  - "Giữ đúng đặc điểm thật của sản phẩm (màu, logo, chi tiết) nhờ chế độ product-truth/pixel-protected — tránh AI 'vẽ' sai hàng."
  - "Review và chỉnh từng ảnh trong bộ, rồi xuất ZIP để up thẳng lên gian hàng hoặc gửi cho team."
  - "Chủ động dùng API key ảnh của riêng mình (OpenAI-compatible hoặc Gemini) thay vì trả phí theo ảnh cho dịch vụ đóng gói."

workflowStepReplaced: "Khâu chụp/dựng ảnh sản phẩm cho gian hàng — thay việc thuê studio hoặc mua ảnh theo lượt bằng một quy trình sinh ảnh AI có kiểm soát chạy tại máy."
timeOrCostSaved: "Có thể cắt chi phí thuê chụp/studio và phí ảnh theo lượt; chi phí còn lại là token/ảnh của provider tự cắm. Chưa có số liệu đo trên hàng VN, cần tự thử một dự án nhỏ."
localProblem: "Shop và team ecom ở VN (Shopee, Lazada, TikTok Shop) tốn tiền và thời gian chụp ảnh sản phẩm, hoặc dùng tool AI đóng gói dễ bị 'vẽ' sai chi tiết hàng khiến khách khiếu nại. Họ cần vừa nhanh vừa giữ đúng mặt hàng."
localEvidence: "Nỗi lo 'ảnh AI đẹp nhưng sai với hàng thật' là chủ đề quen trong nhóm bán online VN; chế độ product-truth của EcomGen đánh trúng lo này. Mới quan sát qua README, chưa test trên sản phẩm VN cụ thể."

vnMarket:
  insight: "Dân ecom VN đang trộn giữa thuê chụp ảnh và các app AI ảnh sản phẩm (Photoroom, Pebblely, ZMO...) trả phí theo ảnh/tháng. Điểm đau lớn là ảnh AI sai chi tiết hàng và chi phí đội lên khi làm số lượng lớn. EcomGen chạy local + cắm API riêng + chế độ giữ-đúng-sản-phẩm là hướng khác biệt, nhưng đổi lại phải tự dựng hệ thống."
  seoKeywords: ["tạo ảnh sản phẩm bằng ai", "app dựng ảnh sản phẩm shopee", "ai chụp ảnh sản phẩm không sai hàng", "công cụ ảnh e-commerce nguồn mở", "tự host tool tạo ảnh sản phẩm"]
  notes: "Suy luận từ README và bối cảnh ngành ecom VN. Chưa thấy thảo luận tiếng Việt về EcomGen; chưa test."

usabilityRisk: "Cài đặt khá kỹ thuật: chạy trên Windows với Node 22+, pnpm 11 (khóa bản 11.19.0), Redis 6.2+ (có Docker), và cần tự sinh ECOMGEN_MASTER_KEY (32-byte base64). Bắt buộc có ít nhất một provider ảnh (OpenAI-compatible hoặc Gemini) — phát sinh chi phí và cần tài khoản riêng. Chưa có cộng đồng VN; người không rành kỹ thuật khó tự dựng."

practitionerGuide:
  outcome: "Sau guide này bạn có EcomGen chạy local, tạo một dự án cho một sản phẩm thật và sinh thử một bộ ảnh với chế độ product-truth để xem AI có giữ đúng chi tiết hàng không."
  prerequisites:
    - "Máy Windows, cài Node.js 22+ và pnpm 11 (bản 11.19.0)."
    - "Redis 6.2+ (dùng Docker cho nhanh) và Docker Compose nếu muốn chạy kiểu container."
    - "Một API key provider ảnh: OpenAI-compatible Images hoặc Google Gemini."
    - "Một khóa ECOMGEN_MASTER_KEY dạng base64 32-byte (tạo theo hướng dẫn README)."
  steps:
    - "Clone repo, cài phụ thuộc bằng pnpm và bật Redis (qua Docker Compose là tiện nhất)."
    - "Khai các biến môi trường: MASTER_KEY và API key provider ảnh."
    - "Chạy web (React/Vite) + API (Fastify) + worker (BullMQ) theo README."
    - "Tạo một dự án mới, nhập mô tả sản phẩm và spec, để Pi Agent lên storyboard."
    - "Bật chế độ PRODUCT_TRUTH, sinh bộ ảnh, review vài tấm rồi xuất ZIP."
  expectedResult: "Bạn nhận một bộ ảnh sản phẩm theo template e-commerce, giữ được chi tiết chính của hàng; đủ để đánh giá chất lượng và mức độ 'đúng hàng' so với ảnh thật."
  commonPitfalls:
    - "Sai phiên bản pnpm hoặc Node khiến cài đặt gãy (repo khóa pnpm 11.19.0)."
    - "Chưa bật Redis nên worker sinh ảnh không chạy."
    - "Quên/khai sai ECOMGEN_MASTER_KEY dẫn tới lỗi khởi động."
    - "Kỳ vọng ảnh hoàn hảo ngay — vẫn cần review và chỉnh, nhất là hàng có chi tiết phức tạp."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Tool AI dựng ảnh sản phẩm mà không sợ vẽ sai hàng' — nhấn chế độ product-truth và việc tự cắm API để chủ động chi phí, hợp shop làm ảnh số lượng lớn."
paidToolReplaced: "Các app AI ảnh sản phẩm trả phí theo ảnh/tháng (Photoroom, Pebblely, ZMO.ai...) và một phần chi phí thuê studio chụp sản phẩm."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI liệt kê được tính năng, nhưng đánh giá 'chế độ product-truth có thật sự giữ đúng hàng VN không' và độ khó dựng hệ thống local là phần cần người test và biên tập."

tags: ["ai", "ecommerce", "image-generation", "product-photo", "open-source", "ecom", "creative"]
scoreBreakdown:
  useCaseFit: 16
  projectHealth: 12
  costAdvantage: 13
  deployment: 7
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-09-01
nextReviewDueAt: 2026-11-30
publishedAt: 2026-09-01
week: "2026-W36"
draft: true
---

Record nháp foundation (pipeline 2026-09-01).

Cần Luan review trước khi publish:
- **repoStats:** chỉ có stars (66) từ discovery-time GitHub search; chưa fetch forks/sao-ngày/tuổi repo qua signals. Chạy fetch-signals để bổ sung.
- **media:** đường dẫn raw README (`docs/assets/ecomgen-home-overview.png`, `docs/assets/ecomgen-storyboard-selection.png`) suy ra từ mô tả README — cần kiểm hotlink sống trước khi publish.
- **Rào cản cài đặt:** khá kỹ thuật (Windows-only theo README, pnpm khóa bản, Redis, master key) — usecase-first vẫn ổn nhưng cần cảnh báo rõ đây là tool cho người có nền kỹ thuật hoặc có bạn dev.
- **scoreBreakdown.projectHealth (12):** ước lượng vì queue không kèm suggestedHealthScore; chấm lại khi có metric GitHub.
