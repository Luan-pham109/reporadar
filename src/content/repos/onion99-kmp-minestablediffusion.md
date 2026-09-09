---
name: "Mine StableDiffusion (KMP)"
repoUrl: "https://github.com/Onion99/KMP-MineStableDiffusion"
oneLiner: "Mine StableDiffusion là app tạo ảnh AI (Stable Diffusion/SDXL/FLUX...) chạy thẳng trên máy hoặc điện thoại của bạn — không cần internet, không cần tài khoản, không mất phí theo lượt tạo."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/Onion99/KMP-MineStableDiffusion/master/docs/figma.webp"
    caption: "Giao diện app trên desktop."
  - type: "video"
    url: "https://raw.githubusercontent.com/Onion99/KMP-MineStableDiffusion/master/docs/desktop_screenshot4.gif"
    caption: "Demo giao diện tạo ảnh trên desktop."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 109
  forks: 10
  note: "~235 ngày tuổi, ~0.5 sao/ngày"
  starsPerDay: 0.5
  ageDays: 235
  pushedAt: 2026-03-13T10:46:03Z
  archived: false
  openIssues: 4
standoutFeatures:
  - "Tạo ảnh AI (Stable Diffusion, SDXL, FLUX, SD3, Chroma...) chạy 100% offline — không cần server, không cần tài khoản, không mất phí theo lượt."
  - "Một codebase Kotlin Multiplatform chạy được trên cả Android, iOS, Windows, macOS và Linux, không phải viết riêng từng nền tảng."
  - "Tăng tốc bằng phần cứng thật qua C++/JNI và stable-diffusion.cpp, dùng Vulkan (Android/Windows/Linux) hoặc Metal (macOS/iOS) thay vì chạy CPU thuần."
  - "Ảnh xuất ra tự nhúng thông số sinh ảnh (prompt, seed, model, sampler, LoRA) vào file PNG — kéo ảnh cũ vào lại là biết đúng công thức đã dùng."
signalSources:
  - label: "GitHub Releases"
    url: "https://github.com/Onion99/KMP-MineStableDiffusion/releases"
  - label: "Community Showcase"
    url: "https://github.com/Onion99/KMP-MineStableDiffusion/issues/13"

useCases:
  - "Tạo ảnh AI ngay trên điện thoại hoặc laptop cá nhân mà không cần internet, không lo prompt/ảnh nhạy cảm bị gửi lên server người khác."
  - "Chạy các model SDXL, FLUX, SD3, Chroma... trực tiếp trên máy có GPU đủ mạnh, không tốn phí credit theo mỗi lần tạo ảnh."
  - "Áp nhiều LoRA cùng lúc với thanh chỉnh trọng số ngay trong app để ra đúng phong cách ảnh cần, không cần chỉnh file config tay."
  - "Đọc lại thông số ảnh cũ (prompt, seed, model, LoRA) ngay từ file PNG đã lưu, dựng lại đúng công thức mà không cần ghi chú riêng."

workflowStepReplaced: "Khâu tạo ảnh AI phải phụ thuộc dịch vụ cloud, trả phí theo credit hoặc lo prompt/ảnh bị lưu trên server bên thứ ba."
timeOrCostSaved: "Repo không công bố số giờ/tiền cụ thể tiết kiệm; lợi thế chính là chi phí vận hành gần như bằng 0 sau khi tải model về máy (so với app cloud tính phí theo credit hoặc subscription hàng tháng), đổi lại phải có phần cứng đủ mạnh."
localProblem: "Người làm nội dung/marketing nhỏ lẻ hoặc freelancer thiết kế ở Việt Nam đôi khi cần tạo ảnh AI cho ý tưởng thương hiệu chưa công bố, hoặc muốn thử nghiệm riêng tư mà không gửi prompt/ảnh lên server nước ngoài, cũng không muốn trả subscription hàng tháng cho một app cloud."
localEvidence: "Tìm kiếm tiếng Việt về 'Stable Diffusion' hiện chủ yếu ra hướng dẫn cài trên máy tính qua ComfyUI/Automatic1111 (ví dụ bài hướng dẫn trên Tinh Tế), còn một app sẵn dùng ngay trên điện thoại/desktop (không cần biết code) gần như chưa có nội dung tiếng Việt nào nhắc tới."

vnMarket:
  insight: "Người Việt quan tâm 'tạo ảnh AI offline' chủ yếu qua tin công nghệ (ví dụ bài về Qualcomm demo Stable Diffusion trên chip Snapdragon, hay Google AI Edge Gallery) chứ chưa có app thực dùng phổ biến được nhắc tới. Mine StableDiffusion lấp đúng khoảng trống này: một app thật, tải về cài ngay trên Android/iOS/Desktop, không phải demo phần cứng của hãng chip."
  seoKeywords: ["tạo ảnh AI offline", "Stable Diffusion Android", "vẽ AI không cần mạng", "app AI vẽ tranh điện thoại", "Stable Diffusion điện thoại"]
  notes: "Đã search 'tạo ảnh AI offline điện thoại Stable Diffusion Android không cần internet' — kết quả chủ yếu là bài báo về demo phần cứng Qualcomm và Google AI Edge Gallery, không phải app cụ thể như repo này. Độ chắc chắn: medium — nhu cầu có thật nhưng cần Luan xác nhận thêm cộng đồng creative/game VN đã biết tool này chưa."

usabilityRisk: "Cần máy/điện thoại có GPU hỗ trợ Vulkan 1.2+ (Android/Windows/Linux) hoặc Metal (macOS/iOS) — máy cũ hoặc yếu sẽ chạy chậm hoặc không tải nổi model lớn như FLUX/SD3. Người dùng phải tự tải file model .gguf/.safetensors nặng vài GB, app không có sẵn model đi kèm. Chưa thấy cộng đồng hỗ trợ tiếng Việt."

practitionerGuide:
  outcome: "Bạn cài được app lên điện thoại hoặc máy tính và tạo ra ảnh AI đầu tiên hoàn toàn offline."
  prerequisites:
    - "Điện thoại hoặc máy tính có GPU hỗ trợ Vulkan 1.2+ hoặc Metal."
    - "Dung lượng trống vài GB để tải model (.gguf hoặc .safetensors) phù hợp."
    - "Không cần tài khoản hay API key — chỉ cần tải app từ trang Releases."
  steps:
    - "Vào trang Releases, tải bản phù hợp thiết bị (.apk cho Android, .dmg cho macOS, .exe cho Windows)."
    - "Cài đặt và mở app, làm theo gợi ý bắt đầu với model nhẹ như SD-Turbo hoặc SD 1.5."
    - "Tải model .gguf/.safetensors về đúng thư mục app yêu cầu."
    - "Nhập prompt, chọn Sampler, bấm tạo ảnh và theo dõi tiến trình ngay trong app."
    - "Nếu máy yếu, bật tuỳ chọn Offload to CPU / Keep VAE-CLIP on CPU trong phần cài đặt để tránh lỗi hết bộ nhớ."
  expectedResult: "Kết quả đúng là một ảnh được tạo ra ngay trên thiết bị, không có kết nối mạng, và file PNG xuất ra có nhúng sẵn thông số (prompt, seed, model) để dùng lại về sau."
  commonPitfalls:
    - "Chọn thẳng model nặng (FLUX, SD3) khi máy yếu, dẫn tới lỗi hết bộ nhớ (OOM) hoặc treo app."
    - "Không bật Offload to CPU / Keep VAE-CLIP on CPU khi cần, dù app đã có sẵn tuỳ chọn xử lý lỗi OOM."
    - "Nhầm phiên bản build (Android/iOS/Desktop) khi tải từ Releases, khiến app không cài được."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: so sánh trải nghiệm tạo ảnh AI offline trên điện thoại (Mine StableDiffusion) với việc tự cài ComfyUI/Automatic1111 trên máy tính — ai hợp dùng app nào."
paidToolReplaced: "Midjourney hoặc các app tạo ảnh AI di động tính phí theo credit, ở phần việc cần sự riêng tư/offline hơn là chất lượng ảnh cao nhất"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể giải thích Stable Diffusion chạy offline là gì, nhưng việc biết cụ thể một app Kotlin Multiplatform như thế này đã có sẵn bản build cho cả 5 nền tảng, và đặt nó cạnh nhu cầu riêng tư của người dùng Việt, cần người tổng hợp tay."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 8
  costAdvantage: 14
  deployment: 3
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-05
nextReviewDueAt: 2026-10-03

tags: ["ai", "creative", "stable-diffusion", "offline", "mobile"]
publishedAt: 2026-07-05
week: "2026-W28"
draft: false
---

Draft từ pipeline daily. Cần Luan tự cài thử bản Android/Desktop để xác nhận tốc độ tạo ảnh thật trên phần cứng phổ biến ở VN trước khi publish — projectHealth thấp (8/25) vì repo còn khá non và ít sao, nên cân nhắc kỹ độ ưu tiên so với 2 record kia trong đợt này.
