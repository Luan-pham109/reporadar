---
name: "LinkFox AI Design"
repoUrl: "https://github.com/WriterGao/linkfox-ai-design"
oneLiner: "LinkFox AI Design là một nền tảng nguồn mở (Spring Boot + Vue3) để dựng ảnh sản phẩm và thiết kế e-commerce bằng AI — có retouch ảnh, đổi phông nền/cảnh, thử đồ ảo và tạo ảnh người mẫu AI, tự triển khai bằng Docker."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/WriterGao/linkfox-ai-design/main/docs/screenshot.png"
    caption: "Giao diện nền tảng thiết kế ảnh e-commerce của LinkFox (cần kiểm tra đường dẫn thật)."

vertical: ["ecom", "creative"]

maturity: "rising"
repoStats:
  stars: 32
  note: "Số sao lấy ở thời điểm discovery qua GitHub search; chưa fetch được metric GitHub đầy đủ (tuổi repo, sao/ngày)."
standoutFeatures:
  - "Bộ tính năng ảnh e-commerce: retouch ảnh bằng AI, đổi cảnh/phông nền, tạo ảnh sản phẩm chuyên nghiệp."
  - "Thử đồ ảo (virtual try-on) và tạo ảnh người mẫu AI mặc sản phẩm."
  - "Sinh ảnh hàng loạt (batch) — hợp làm nhiều SKU cùng lúc."
  - "Là nền tảng đầy đủ: có đăng nhập/phân quyền, hệ điểm & hạng VIP, quản lý và chia sẻ tác phẩm — tức dựng ra để chạy như một dịch vụ."
signalSources:
  - label: "GitHub"
    url: "https://github.com/WriterGao/linkfox-ai-design"

useCases:
  - "Dựng ảnh sản phẩm chuyên nghiệp và đổi phông nền/cảnh cho gian hàng mà không cần thuê chụp."
  - "Tạo ảnh người mẫu AI mặc sản phẩm hoặc thử đồ ảo cho ngành thời trang/phụ kiện."
  - "Sinh ảnh hàng loạt cho nhiều SKU trong một lần chạy để tiết kiệm thời gian dựng ảnh."
  - "Tự host một nền tảng thiết kế ảnh nội bộ cho team, có phân quyền người dùng."

workflowStepReplaced: "Khâu dựng ảnh sản phẩm & ảnh người mẫu cho gian hàng — thay việc thuê chụp/model và mua ảnh theo lượt bằng một nền tảng AI tự triển khai."
timeOrCostSaved: "Có thể cắt chi phí thuê mẫu và chụp ảnh thời trang; đổi lại là chi phí vận hành hạ tầng (MySQL/Redis) và API ảnh. Chưa có số liệu đo trên hàng VN."
localProblem: "Shop thời trang/phụ kiện ở VN tốn nhiều tiền thuê mẫu và chụp lookbook; các tool thử-đồ-ảo và ảnh người mẫu AI trả phí thì đắt hoặc khoá tính năng. Team muốn một nền tảng tự chủ, làm được số lượng lớn."
localEvidence: "Nhu cầu ảnh người mẫu AI và thử đồ ảo đang nóng trong ngành thời trang online VN; nhiều shop hỏi về giải pháp thay chụp mẫu. LinkFox đánh vào đúng nhóm này nhưng là dự án Trung Quốc, chưa rõ chất lượng thực tế — mới quan sát qua README, chưa test."

vnMarket:
  insight: "Ngành thời trang/phụ kiện online VN đang thử ảnh người mẫu AI và virtual try-on để cắt chi phí thuê mẫu. Đa số dùng dịch vụ đóng gói trả phí (ZMO, Botika, các app try-on). LinkFox cho phép tự host cả nền tảng có phân quyền + hệ VIP, nhưng vì được dựng như một 'sản phẩm SaaS' nên nặng về hạ tầng và cần đánh giá kỹ chất lượng ảnh trước khi tin dùng."
  seoKeywords: ["tạo ảnh người mẫu ai", "thử đồ ảo virtual try-on", "ai chụp ảnh thời trang", "nền tảng thiết kế ảnh e-commerce", "tự host tool ảnh sản phẩm ai"]
  notes: "Suy luận từ README (dịch từ tiếng Trung) và bối cảnh ngành thời trang online VN. Chưa thấy thảo luận tiếng Việt; chưa test chất lượng ảnh."

usabilityRisk: "Là nền tảng đầy đủ nên nặng để dựng: cần Java 17+, Node 18+, Maven 3.8+, Docker & Docker Compose, kèm MySQL 8 và Redis 7. Tài liệu gốc tiếng Trung. Có hệ điểm/VIP gợi ý mô hình SaaS — cần tự lo API ảnh và đánh giá chất lượng đầu ra. Chưa có cộng đồng VN; không hợp người không rành kỹ thuật."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được LinkFox chạy bằng Docker ở máy/VPS, đăng nhập vào nền tảng và thử một luồng tạo ảnh sản phẩm hoặc ảnh người mẫu AI để đánh giá chất lượng."
  prerequisites:
    - "Máy/VPS có Docker & Docker Compose; nền tảng cần MySQL 8 và Redis 7 (đi kèm compose)."
    - "Java 17+, Node 18+, Maven 3.8+ nếu muốn build từ source thay vì chạy compose."
    - "API key dịch vụ ảnh AI mà nền tảng yêu cầu (kiểm trong file cấu hình)."
    - "Chấp nhận tài liệu gốc tiếng Trung; nên dịch khi đọc hướng dẫn."
  steps:
    - "Clone repo và đọc README (dịch sang tiếng Việt/Anh nếu cần)."
    - "Chạy script khởi động một lệnh `./start.sh` hoặc Docker Compose theo hướng dẫn."
    - "Chờ MySQL/Redis và backend Spring Boot + frontend Vue lên, mở giao diện ở http://localhost:3001."
    - "Đăng ký/đăng nhập, cấu hình API ảnh, rồi thử một luồng: tạo ảnh sản phẩm hoặc ảnh người mẫu AI."
    - "Chạy thử batch vài SKU để xem tốc độ và độ ổn định chất lượng."
  expectedResult: "Nền tảng chạy được, bạn tạo ra ít nhất một ảnh sản phẩm/ảnh mẫu AI và đánh giá được ảnh có đủ tốt để dùng cho gian hàng hay không."
  commonPitfalls:
    - "Thiếu Docker/Compose hoặc RAM yếu khiến MySQL/Redis không lên."
    - "Bỏ qua bước cấu hình API ảnh nên tính năng sinh ảnh báo lỗi."
    - "Mắc kẹt ở tài liệu tiếng Trung, cấu hình sai biến môi trường."
    - "Kỳ vọng chất lượng ảnh người mẫu ngang dịch vụ trả phí — cần test thật trước khi cam kết dùng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Tự host nền tảng ảnh người mẫu AI & thử đồ ảo cho shop thời trang' — nhấn khả năng làm batch và tự chủ, kèm cảnh báo cần dân kỹ thuật dựng."
paidToolReplaced: "Các dịch vụ ảnh người mẫu AI & virtual try-on trả phí (ZMO.ai, Botika, các app try-on) và chi phí thuê mẫu/chụp lookbook."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI dịch được mô tả repo, nhưng đánh giá 'nền tảng này nặng và chất lượng ảnh người mẫu có đủ dùng cho shop VN không' cần người dựng thật và test."

tags: ["ai", "ecommerce", "image-generation", "virtual-try-on", "spring-boot", "vue", "open-source", "ecom", "creative"]
scoreBreakdown:
  useCaseFit: 14
  projectHealth: 10
  costAdvantage: 12
  deployment: 9
  documentation: 9
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
- **media:** README chưa cho đường dẫn ảnh screenshot rõ ràng khi fetch; mình để tạm `docs/screenshot.png` — **BẮT BUỘC kiểm/đổi đường dẫn ảnh thật trước khi publish** (có thể phải mở repo xem thư mục ảnh).
- **repoStats:** chỉ có stars (32) từ discovery-time; chưa fetch forks/sao-ngày/tuổi repo.
- **Bản chất 'nền tảng SaaS':** repo có hệ điểm/VIP/phân quyền — dựng ra để chạy như dịch vụ, nặng hạ tầng. Cân nhắc góc trình bày cho đúng (tự-host nội bộ, không phải tool nhẹ dùng ngay).
- **Tài liệu tiếng Trung** và chất lượng ảnh chưa kiểm — cần test thật trước khi publish.
- **scoreBreakdown.projectHealth (10):** ước lượng (repo mới, 32 sao, chưa có metric GitHub).
