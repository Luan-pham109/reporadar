---
name: "Viskit Studio"
repoUrl: "https://github.com/MyuriKanao/viskit-studio"
oneLiner: "Viskit Studio là một xưởng ảnh sản phẩm tự host: bạn upload ảnh hàng, hệ thống tự nhận diện sản phẩm, sinh ảnh AI (ảnh nền trắng, ảnh người mẫu, ảnh mặc thử, banner, module chi tiết), chỉnh sửa lại và xuất thành bộ ảnh marketing cho e-commerce."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/MyuriKanao/viskit-studio/main/docs/assets/intro/workbench-generation-preview.png"
    caption: "Giao diện workbench sinh ảnh sản phẩm của Viskit Studio."
  - type: "image"
    url: "https://raw.githubusercontent.com/MyuriKanao/viskit-studio/main/docs/assets/intro/marketing-kit-overview.jpg"
    caption: "Ví dụ một bộ ảnh marketing (kit) sinh cho một sản phẩm."

vertical: ["ecom", "creative", "agency"]

maturity: "rising"
repoStats:
  stars: 45
  forks: 13
  note: "~54 ngày tuổi, ~0.8 sao/ngày"
  starsPerDay: 0.8
  ageDays: 54
  pushedAt: "2026-05-23"
  archived: false
  openIssues: 0
standoutFeatures:
  - "Đi trọn khâu ảnh sản phẩm: upload ảnh hàng → nhận diện thông tin sản phẩm → tạo brief có cấu trúc → lên kế hoạch output → sinh ảnh nền trắng, ảnh người mẫu, ảnh mặc thử/buyer-show, banner, module chi tiết, và cả bộ 14 ảnh."
  - "Có hàng đợi tác vụ sinh ảnh, xem trước, tải về, xoá và chỉnh sửa lần hai ngay trong app (kèm miniPaint dựng sẵn)."
  - "Model-neutral qua giao diện tương thích OpenAI: cắm được nhiều nhà cung cấp cho các vai vision / LLM / sinh ảnh, cấu hình qua `config.yaml`."
  - "Tự host gọn: Docker Compose một image, chọn SQLite hoặc PostgreSQL; roadmap có thêm embedding/tra cứu素材 tham chiếu để thống nhất phong cách ảnh."
signalSources:
  - label: "GitHub"
    url: "https://github.com/MyuriKanao/viskit-studio"

useCases:
  - "Dựng ảnh nền trắng và ảnh người mẫu cho hàng loạt SKU từ ảnh sản phẩm gốc mà không phải thuê studio chụp từng đợt."
  - "Xuất nhanh một bộ ảnh marketing đủ vị trí (banner, ảnh mặc thử, module chi tiết, bộ 14 ảnh) cho một sản phẩm trước khi lên sàn."
  - "Chỉnh sửa lại ảnh AI ngay trong app (miniPaint tích hợp) thay vì bật thêm Photoshop cho những sửa nhỏ."
  - "Cắm nhà cung cấp model ảnh tuỳ chọn qua config để so chất lượng/chi phí trước khi làm loạt."
  - "Chạy toàn bộ trên máy/VPS của shop để giữ ảnh và cấu hình ở nội bộ, không đẩy hết lên một SaaS đóng."

workflowStepReplaced: "Khâu chụp và làm bộ ảnh sản phẩm cho e-commerce: thay việc thuê studio/chụp tay + hậu kỳ từng ảnh bằng một xưởng tự host sinh ảnh nền trắng, ảnh người mẫu, banner và bộ ảnh chi tiết theo template."
timeOrCostSaved: "Không thay hẳn một SaaS cụ thể; tiết kiệm chủ yếu ở chi phí chụp studio và công hậu kỳ cho từng SKU. Chi phí thật phụ thuộc nhà cung cấp model ảnh bạn cắm vào (tính theo lượng ảnh sinh) — nên chạy thử vài SKU để đo trước."
localProblem: "Shop và ekip ecom VN (đặc biệt hàng thời trang/phụ kiện) tốn nhiều tiền và thời gian chụp lại ảnh sản phẩm mỗi lần lên SKU mới, và hậu kỳ ảnh nền trắng/ảnh mẫu cho hàng chục mã là việc lặp đi lặp lại. Viskit Studio nhắm đúng khâu này bằng cách sinh và ghép bộ ảnh theo template, tự host được."
localEvidence: "Nhu cầu 'tạo ảnh sản phẩm bằng AI', 'ảnh người mẫu AI mặc đồ', 'chụp ảnh sản phẩm nền trắng' đang rõ ở cộng đồng bán hàng online VN (nhiều dịch vụ và tool trả phí như ảnh mẫu AI đang chào hàng). RepoRadar cũng đã có record cho các tool cùng mảng ecom-visual (vd gpt-image2-ecommerce, texel-studio), cho thấy đây là ngách người Việt đang tìm."

vnMarket:
  insight: "Ở VN, làm ảnh sản phẩm cho sàn/website đang dịch chuyển từ thuê chụp studio sang tool AI (ảnh nền trắng, người mẫu ảo mặc đồ, ảnh banner). Đa số shop hiện dùng các web SaaS trả phí theo ảnh hoặc thuê freelancer. Viskit khác ở chỗ tự host và model-neutral — hợp shop/agency muốn kiểm soát chi phí và dữ liệu. Nhưng rào cản lớn: README/tài liệu toàn tiếng Trung, homepage trỏ về forum linux.do, và cấu hình khuyến nghị dựa nhiều vào các gateway reverse-proxy không chính thức (chatgpt2api, jimeng2api...) — cần cẩn trọng về điều khoản và độ ổn định."
  seoKeywords: ["tạo ảnh sản phẩm bằng AI", "ảnh người mẫu AI mặc đồ", "chụp ảnh sản phẩm nền trắng AI", "làm ảnh sản phẩm ecommerce AI", "tự host tool tạo ảnh sản phẩm", "bộ ảnh marketing sản phẩm AI"]
  notes: "Discovery từ daily pipeline 2026-07-09 (github-search, 45 sao, repo còn rất mới, chưa push từ 2026-05-23). Cần Luan kiểm độ ổn định/độ hoàn thiện thật và mức độ phụ thuộc vào các reverse-proxy gateway trước khi publish."

usabilityRisk: "Repo còn rất mới (45 sao, lần push gần nhất 2026-05-23) nên độ ổn định chưa được kiểm chứng. README và toàn bộ tài liệu bằng tiếng Trung, homepage trỏ về forum linux.do — chưa có cộng đồng VN. Bạn cần biết Docker và cấu hình `config.yaml` cho nhà cung cấp model. Đáng lưu ý: hướng dẫn khuyến nghị nhiều gateway reverse-proxy không chính thức (chatgpt2api, jimeng2api, grok...) để gọi model ảnh — dùng loại này có thể vi phạm điều khoản nhà cung cấp và kém ổn định; nên ưu tiên endpoint chính thức tương thích OpenAI."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được Viskit Studio bằng Docker và sinh thử một bộ ảnh cho một sản phẩm thật (ảnh nền trắng + vài biến thể), đủ để đánh giá chất lượng và chi phí model."
  prerequisites:
    - "Máy/VPS có Docker + docker compose."
    - "Một API key model ảnh tương thích OpenAI (ưu tiên endpoint chính thức), cùng key vision/LLM để nhận diện sản phẩm."
    - "Vài ảnh sản phẩm thật để test và một trình dịch tiếng Trung tiện tay."
  steps:
    - "Chạy container từ `docker-compose.yml` mẫu (image `mayurikano/viskit-studio`), map cổng và thư mục `./data`, bật auto-migrate."
    - "Tạo `data/config.yaml`, khai báo provider cho các vai vision / llm / image (base_url + api_key_env + model)."
    - "Mở web UI, upload một ảnh sản phẩm, để hệ thống nhận diện và tạo brief có cấu trúc."
    - "Chọn loại output (nền trắng, người mẫu, banner...) hoặc bộ 14 ảnh, cho chạy hàng đợi rồi xem trước kết quả."
    - "Chỉnh sửa lần hai bằng miniPaint tích hợp nếu cần, tải về và đo chi phí model đã tiêu cho một SKU."
  expectedResult: "Một bộ ảnh sản phẩm sinh từ ảnh gốc (tối thiểu ảnh nền trắng + vài biến thể), đủ để đánh giá chất lượng ảnh AI, độ giống sản phẩm và chi phí mỗi SKU."
  commonPitfalls:
    - "Dựa vào reverse-proxy gateway không chính thức để tiết kiệm chi phí rồi gặp lỗi/không ổn định — ưu tiên endpoint chính thức."
    - "Kỳ vọng ảnh AI giữ đúng 100% chi tiết sản phẩm ngay lần đầu; cần thử prompt/template và sửa lần hai."
    - "Bỏ qua bước cấu hình `config.yaml` cho từng vai (vision/llm/image) khiến pipeline không chạy đủ."

greyHatFlag: "borderline"

suggestedAngle: "Góc ecom/creator: 'Tự dựng xưởng ảnh sản phẩm bằng AI trên VPS của shop — đỡ tiền thuê studio tới đâu?' — làm thử một bộ ảnh cho một SKU thật và so với ảnh chụp studio."
paidToolReplaced: "Các web SaaS tạo ảnh sản phẩm/ảnh người mẫu AI trả phí theo ảnh, và một phần chi phí thuê studio chụp + hậu kỳ cho từng SKU"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI ra được 'có tool AI tạo ảnh sản phẩm', nhưng việc repo tự host cụ thể này chạy ổn tới đâu, cấu hình provider ra sao, và rủi ro phụ thuộc reverse-proxy gateway là phần cần con người thử và biên tập theo ngữ cảnh ecom VN."

scoreBreakdown:
  useCaseFit: 16
  projectHealth: 11
  costAdvantage: 12
  deployment: 10
  documentation: 9
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-09
nextReviewDueAt: 2026-10-07

tags: ["ecom", "creative", "product-photography", "ai-image", "self-hosted", "marketing-assets"]
publishedAt: 2026-07-09
week: "2026-W28"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-07-09 (nguồn: github-search, 45 sao, ~0.8 sao/ngày, 54 ngày tuổi). Gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) repo còn rất mới và chưa push từ 2026-05-23 — xác nhận còn được duy trì; (2) mức độ phụ thuộc và rủi ro của các reverse-proxy gateway không chính thức (chatgpt2api, jimeng2api...) — đã đặt greyHatFlag = borderline; (3) chất lượng ảnh thực tế cho hàng VN; (4) xác nhận media hotlink (raw docs/assets) còn sống khi render.
