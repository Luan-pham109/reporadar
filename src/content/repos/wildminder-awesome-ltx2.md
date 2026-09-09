---
name: "Awesome LTX-2 (awesome-ltx2)"
repoUrl: "https://github.com/wildminder/awesome-ltx2"
oneLiner: "Một danh sách tuyển chọn (awesome-list) gom toàn bộ model, text encoder, LoRA, node và workflow của bộ tạo video AI mã nguồn mở LTX-2 để chạy trong ComfyUI — kèm bảng dung lượng và link tải thẳng từ HuggingFace."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/ee73cbc3-648b-47fa-9346-c4299919a060"
    caption: "Logo bộ sưu tập Awesome LTX-2."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 555
  forks: 39
  note: "~197 ngày tuổi, ~2.8 sao/ngày"
  starsPerDay: 2.8
  ageDays: 197
  pushedAt: "2026-07-23"
  archived: false
  openIssues: 1
standoutFeatures:
  - "Gom một chỗ mọi thứ cần để chạy LTX-2 (bộ tạo video AI mã nguồn mở của Lightricks) trong ComfyUI: checkpoint bản đầy đủ, các bản lượng tử hoá (fp8, int8, nvfp4, gguf) để nhẹ VRAM, text encoder, VAE, LoRA, node và workflow."
  - "Bảng chi tiết có cột phiên bản / độ chính xác / dung lượng / link tải thẳng HuggingFace — giúp chọn nhanh bản model vừa với dung lượng VRAM (ví dụ bản nvfp4 ~17-21 GB thay vì bản bf16 ~46 GB)."
  - "Có mục công cụ hạ yêu cầu phần cứng (vd LTX2.3-Multifunctional gộp text-to-video, image-to-video, lip-sync, nâng cấp video vào một app, chỉ cần 24GB VRAM thay vì 32GB)."
  - "Kèm phần công cụ và nền tảng huấn luyện LoRA, bộ dataset/captioning và ghi chú kỹ thuật về workflow hai giai đoạn (spatial/temporal upscaler)."
signalSources:
  - label: "GitHub"
    url: "https://github.com/wildminder/awesome-ltx2"

useCases:
  - "Dùng làm điểm tra cứu duy nhất khi cần tải model LTX-2 để dựng video local trong ComfyUI: tìm nhanh bản lượng tử hoá vừa VRAM máy mình thay vì mò từng repo HuggingFace."
  - "So sánh các bản model theo dung lượng và độ chính xác (bf16 / fp8 / int8 / nvfp4 / gguf) để chọn bản chạy được trên card đang có trước khi tải hàng chục GB."
  - "Tìm LoRA phong cách, node ComfyUI và workflow mẫu để tạo video ngắn từ text hoặc từ ảnh (t2v / i2v) cho nội dung sáng tạo."
  - "Lấy làm bản đồ khi muốn tự huấn luyện LoRA cho LTX-2: xem sẵn danh sách công cụ train local, nền tảng train cloud và bộ công cụ chuẩn bị dataset."

workflowStepReplaced: "Khâu tự đi dò và sàng lọc model/LoRA/workflow LTX-2 rải rác trên HuggingFace và ComfyUI: thay vì search từng file, có sẵn danh mục phân nhóm kèm bảng dung lượng và link tải."
timeOrCostSaved: "Bản thân list không thay SaaS nào; giá trị là tiết kiệm thời gian khảo sát — thay vài giờ tự đào HuggingFace bằng một danh mục đã phân loại theo phiên bản và dung lượng. LTX-2 là model mở nên nếu chạy được sẽ thay chi phí thuê tool tạo video trả phí (Runway, Kling...), nhưng đổi lại cần GPU mạnh."
localProblem: "Team creative VN muốn tạo video AI local (không phụ thuộc SaaS trả phí theo credit) thường vướng hai chỗ: (1) không biết bản model nào vừa với VRAM máy mình nên tải nhầm bản 46 GB không chạy nổi, (2) tài nguyên LTX-2 (model, LoRA, workflow) nằm rải rác nhiều nơi. Một danh mục có bảng dung lượng + link tải giúp rút ngắn khâu chọn bản model đúng."
localEvidence: "LTX-2 là dòng model tạo video mở của Lightricks, được ComfyUI hỗ trợ chính thức (có blogpost riêng); cộng đồng ComfyUI VN đã bàn về LTX/LTXV trong các group làm ảnh/video AI, nhưng chưa có bản đồ tiếng Việt gom lại các bản lượng tử hoá theo mức VRAM."

vnMarket:
  insight: "Ở VN, dân làm video AI local chủ yếu chạy ComfyUI trên card NVIDIA tầm 12-24GB VRAM, và bài toán lớn nhất là chọn đúng bản model lượng tử hoá vừa máy. Một awesome-list có bảng dung lượng như thế này giá trị ở chỗ giúp chọn bản chạy được ngay, nhưng nó là danh mục tĩnh chứ không phải sản phẩm dùng được, mô tả bằng tiếng Anh và giả định người đọc đã quen ComfyUI. Điểm cần lưu ý cho ngữ cảnh VN: list có hẳn một mục finetune và text encoder NSFW / gỡ kiểm duyệt (abliterated/heretic) — cần tách bạch khi giới thiệu cho khách thương hiệu/agency."
  seoKeywords: ["LTX-2 ComfyUI", "tạo video AI local", "model tạo video mã nguồn mở", "LTX video AI tiếng Việt", "chạy LTX-2 VRAM bao nhiêu", "LoRA LTX-2 ComfyUI", "text to video open source"]
  notes: "Discovery từ daily pipeline 2026-07-26 (github-search, 555 sao, ~2.8 sao/ngày). Đây là awesome-list cho một model cụ thể (LTX-2), không phải tool chạy được. Cần Luan quyết định vị trí: publish như một trang tài nguyên cho nhóm dùng ComfyUI, hay dùng làm nguồn tuyển repo cho các record sau."

usabilityRisk: "Đây là một danh sách markdown trỏ tới model/LoRA/workflow, KHÔNG phải công cụ chạy được — bạn vẫn phải tự cài ComfyUI và tự tải từng file. Yêu cầu phần cứng nặng: kể cả bản lượng tử hoá nhẹ nhất cũng ~17-21 GB, nhiều bản 27-46 GB, nên cần GPU VRAM cao (khuyến nghị 24GB+). Toàn bộ mô tả bằng tiếng Anh và giả định bạn đã quen ComfyUI. Danh sách chứa mục finetune và encoder NSFW / gỡ kiểm duyệt (abliterated/heretic) — cần cẩn trọng nếu dùng cho nội dung thương hiệu. Repo còn nhỏ (555 sao), do một người duy trì nên độ đầy đủ/độ mới của link phụ thuộc tần suất cập nhật."

practitionerGuide:
  outcome: "Sau guide này bạn xác định được bản model LTX-2 vừa với VRAM máy mình và tải đúng bộ file (checkpoint + text encoder + VAE) để nạp vào ComfyUI, kèm một workflow mẫu để render thử một video ngắn."
  prerequisites:
    - "Đã cài ComfyUI và biết nạp checkpoint / node cơ bản."
    - "GPU NVIDIA VRAM cao (khuyến nghị 24GB+); biết dung lượng VRAM máy mình để chọn bản lượng tử hoá."
    - "Dung lượng ổ trống lớn (mỗi bản model 17-46 GB) và kết nối tải HuggingFace ổn định."
  steps:
    - "Mở repo, vào mục Checkpoints, đối chiếu cột dung lượng/độ chính xác với VRAM máy để chọn bản (vd nvfp4 ~17-21 GB cho card nhỏ, fp8 ~27-30 GB, bf16 ~46 GB cho card lớn)."
    - "Tải kèm text encoder (mục Text Encoders) và VAE (mục Separated Components) đúng phiên bản model bạn chọn."
    - "Vào mục ComfyUI Nodes và Workflow & Technical Notes lấy một workflow mẫu (t2v hoặc i2v) rồi nạp vào ComfyUI."
    - "Nếu VRAM eo hẹp, cân nhắc app LTX2.3-Multifunctional trong mục Apps & Tools (gộp sẵn tính năng, yêu cầu VRAM thấp hơn) trước khi dựng workflow thủ công."
    - "Render thử một clip ngắn để kiểm tra tốc độ và chất lượng trên máy mình trước khi đưa vào quy trình chính; bỏ qua các mục finetune/encoder NSFW nếu làm nội dung thương hiệu."
  expectedResult: "ComfyUI nạp được model LTX-2 và render ra một video ngắn hợp lệ; bạn biết bản model nào chạy ổn với card của mình để dùng lại về sau."
  commonPitfalls:
    - "Tải nhầm bản bf16 46 GB không đủ VRAM rồi báo lỗi out-of-memory — luôn đối chiếu cột dung lượng trước khi tải."
    - "Quên tải đúng text encoder / VAE tương ứng phiên bản model nên workflow không chạy."
    - "Vô tình dùng các finetune/encoder NSFW hoặc gỡ kiểm duyệt cho nội dung khách hàng thương hiệu."
    - "Quên rằng list chỉ trỏ tới file — vẫn phải tự cài ComfyUI, tự tải và tự dựng workflow."

greyHatFlag: "borderline"

suggestedAngle: "Góc creator/creative: 'Chạy LTX-2 tạo video AI ngay trên máy — chọn bản model nào cho card 12GB / 24GB' — dịch và điểm các bản lượng tử hoá theo mức VRAM, tách rõ phần sạch dùng cho nội dung thương hiệu và phần NSFW nên bỏ qua."
paidToolReplaced: "LTX-2 (chạy local) thay cho tool tạo video AI trả phí theo credit như Runway / Kling / Luma — đổi lại cần GPU mạnh"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI ra được LTX-2 là gì, nhưng một bảng đối chiếu mọi bản lượng tử hoá theo dung lượng/độ chính xác kèm link tải HuggingFace còn sống, cộng cảnh báo phần NSFW, là thứ cần con người tuyển và cập nhật liên tục — model và link đổi rất nhanh."

scoreBreakdown:
  useCaseFit: 11
  projectHealth: 16
  costAdvantage: 14
  deployment: 8
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-26
nextReviewDueAt: 2026-10-24

tags: ["creative", "awesome-list", "ai-video", "comfyui", "ltx-2", "text-to-video", "resource", "reference"]
publishedAt: 2026-07-26
week: "2026-W30"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-07-26 (nguồn: github-search, 555 sao, ~2.8 sao/ngày, 197 ngày tuổi). Gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Lưu ý cho Luan: đây là một awesome-list cho model LTX-2 (danh mục), KHÔNG phải tool chạy được — cân nhắc publish như trang tài nguyên cho nhóm dùng ComfyUI hay dùng làm nguồn tuyển repo cho record sau. Danh sách có mục finetune và text encoder NSFW / gỡ kiểm duyệt (abliterated/heretic) nên đã đặt greyHatFlag = borderline; nếu publish nên biên tập để tách bạch phần dùng được cho nội dung thương hiệu. Yêu cầu phần cứng nặng (GPU VRAM cao) là rào cản chính với đa số người đọc VN.
