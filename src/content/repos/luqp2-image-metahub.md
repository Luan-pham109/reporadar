---
name: "Image MetaHub"
repoUrl: "https://github.com/LuqP2/Image-MetaHub"
oneLiner: "Image MetaHub là app desktop giúp bạn duyệt, tìm và sắp xếp ảnh AI đã tạo ngay trên máy: nó đọc metadata (prompt, model, LoRA, seed, sampler...) nhúng trong file và cho lọc/tìm theo các thông tin đó, không cần đẩy ảnh lên cloud."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/LuqP2/Image-MetaHub/main/assets/screenshot-hero-grid.webp"
    caption: "Giao diện thư viện ảnh dạng lưới (từ README)."
  - type: "image"
    url: "https://raw.githubusercontent.com/LuqP2/Image-MetaHub/main/assets/screenshot-gallery.webp"
    caption: "Duyệt và lọc theo facet ở sidebar (từ README)."
  - type: "image"
    url: "https://raw.githubusercontent.com/LuqP2/Image-MetaHub/main/assets/screenshot-imagemodal.webp"
    caption: "Xem chi tiết ảnh và metadata sinh ảnh (từ README)."

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 310
  forks: 24
  note: "~325 ngày tuổi, ~1 sao/ngày"
  starsPerDay: 1
  ageDays: 325
  pushedAt: 2026-08-07T20:06:04Z
  archived: false
  openIssues: 42
standoutFeatures:
  - "Đọc metadata sinh ảnh từ nhiều nguồn: Automatic1111, ComfyUI, InvokeAI, SD.Next, Forge, Fooocus, SwarmUI, Draw Things, Midjourney/Niji, Firefly, DreamStudio, DALL-E; hỗ trợ PNG/JPG/WEBP/AVIF/GIF và cả video MP4/WEBM/MKV/MOV/AVI."
  - "Local-first: quét thư mục trên máy, cache thumbnail để duyệt thư viện lớn nhanh, không bắt buộc tài khoản, không đồng bộ cloud, không telemetry."
  - "Lọc theo facet có include/exclude (checkpoint, LoRA, sampler, scheduler, rating, tag...), gom cụm prompt bằng TF-IDF, tự sinh tag, và có trình xem ảnh nhiều cửa sổ kèm phát hiện lineage img2img/inpaint/outpaint."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=46889180"
  - label: "GitHub"
    url: "https://github.com/LuqP2/Image-MetaHub"
  - label: "Website"
    url: "https://imagemetahub.com"

useCases:
  - "Tìm lại một tấm ảnh AI cũ trong thư viện hàng nghìn file bằng cách gõ prompt, tên model hoặc LoRA thay vì lật từng folder."
  - "Lọc nhanh toàn bộ output theo checkpoint/LoRA/seed để chọn ra bộ ảnh đúng phong cách cho một dự án hoặc khách hàng."
  - "Gắn tag, chấm sao và lọc trùng để dọn ổ cứng đầy ảnh SD/ComfyUI mà vẫn giữ lại thông tin cách tạo ra từng ảnh."
  - "Dò lại prompt/thông số của một ảnh đẹp đã tạo lâu rồi để tái tạo hoặc chỉnh lại phiên bản mới."

workflowStepReplaced: "Khâu tự tay đặt tên/xếp folder và lục lọi ổ cứng để tìm lại ảnh AI cũ cùng prompt của nó."
timeOrCostSaved: "Với người tạo hàng trăm–hàng nghìn ảnh SD/ComfyUI mỗi tuần, việc tìm lại một ảnh kèm prompt có thể mất vài phút mỗi lần; lọc theo metadata giúp rút xuống vài giây. Chưa có số liệu định lượng chính thức từ dự án."
localProblem: "Dân làm ảnh AI ở VN (freelancer thiết kế, ekip làm ảnh sản phẩm/thumbnail, hobbyist chạy Stable Diffusion/ComfyUI local) tích ảnh output rất nhanh nhưng prompt và thông số nằm rải rác trong metadata file, nên khi cần tái tạo hoặc tìm lại 'tấm hôm trước' thì gần như phải lục thủ công."
localEvidence: "Cộng đồng SD/ComfyUI/Midjourney ở VN đông và hay hỏi nhau 'prompt tấm này là gì', 'làm sao xem lại thông số' — đây là quan sát chung về hành vi, chưa phải khảo sát cụ thể một team VN."

vnMarket:
  insight: "Nhóm chơi/làm ảnh AI ở VN chủ yếu tạo ảnh bằng Stable Diffusion/ComfyUI local hoặc Midjourney, và đa số quản lý output bằng cách xếp folder thủ công hoặc dùng trình quản lý ảnh chung (kể cả tool trả phí như Eagle). Một app chuyên đọc metadata ảnh AI, chạy offline, phần lõi miễn phí là góc còn ít người biết."
  seoKeywords: ["quản lý ảnh AI", "tìm prompt trong ảnh", "xem metadata ảnh Stable Diffusion", "quản lý ảnh ComfyUI", "Image MetaHub là gì"]
  notes: "Fit tốt với nhánh creative dùng SD/ComfyUI; fit yếu hơn với người chỉ dùng Midjourney web (dù tool vẫn đọc được metadata Midjourney). Lọt queue từ Show HN (chỉ ~4 điểm) + tín hiệu GitHub. Độ chắc chắn: thấp."

usabilityRisk: "Là app desktop (Electron), cần tải bản release về cài; bản macOS hiện chưa ký nên có thể bị chặn, phải gỡ cờ quarantine thủ công. Phần lõi mã nguồn mở (MPL 2.0) nhưng nhiều tính năng nặng workflow (sinh ảnh qua A1111/ComfyUI, Compare View, Analytics, batch export, bulk tagging) nằm sau license Pro trả phí ($39) hoặc bản dùng thử 3 ngày. Giá trị lớn nhất đến khi bạn thật sự tạo ảnh bằng SD/ComfyUI local; người chỉ dùng tool cloud sẽ khai thác được ít hơn. Chưa có cộng đồng Việt."

practitionerGuide:
  outcome: "Bạn trỏ Image MetaHub vào thư mục ảnh AI của mình và tìm lại được ảnh theo prompt/model/LoRA, xem đầy đủ thông số từng ảnh mà không cần lên mạng."
  prerequisites:
    - "Máy Windows/macOS/Linux và một thư mục chứa ảnh AI đã tạo (SD/ComfyUI/InvokeAI/Midjourney...)."
    - "Ảnh còn giữ metadata gốc (không bị nén/re-save làm mất thông tin sinh ảnh)."
    - "Nếu dùng macOS: sẵn sàng gỡ cờ quarantine cho bản chưa ký."
  steps:
    - "Tải bản desktop mới nhất từ GitHub Releases và cài đặt."
    - "Mở app, thêm một hoặc nhiều thư mục chứa ảnh AI của bạn."
    - "Đợi lần index đầu quét xong (thư viện lớn có thể mất một lúc)."
    - "Dùng ô tìm kiếm + facet ở sidebar để lọc theo prompt, checkpoint, LoRA, sampler, tag..."
    - "Mở một ảnh để xem metadata đầy đủ; gắn tag/chấm sao để dọn và phân loại dần."
  expectedResult: "Gõ một từ khoá prompt hoặc chọn một model là ra đúng nhóm ảnh liên quan trong vài giây, kèm thông số sinh ảnh hiển thị rõ ràng."
  commonPitfalls:
    - "Ảnh đã bị nén hoặc re-save (vd tải qua chat/mạng xã hội) có thể mất metadata nên không lọc được."
    - "Kỳ vọng có sẵn mọi tính năng: nhiều phần (sinh ảnh, Compare, Analytics, batch) nằm sau license Pro."
    - "Trên macOS quên gỡ quarantine nên tưởng app hỏng."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm nhóm chơi Stable Diffusion/ComfyUI ở VN với góc 'dọn kho ảnh AI và tìm lại prompt trong 3 giây' — nói rõ phần lõi miễn phí, phần Pro trả phí $39, và mẹo giữ metadata để không mất khi chia sẻ ảnh."
paidToolReplaced: "Một phần các trình quản lý ảnh trả phí (vd Eagle) ở khâu duyệt/tìm ảnh, cộng thêm khả năng đọc metadata AI mà các tool đó không có"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Image MetaHub, nhưng lớp giá trị là đặt nó vào bối cảnh dân làm ảnh AI VN (SD/ComfyUI), phân định phần free vs Pro và cảnh báo mất metadata khi re-save — phần Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 16
  projectHealth: 16
  costAdvantage: 11
  deployment: 10
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-08
nextReviewDueAt: 2026-11-06

tags: ["ai", "creative", "stable-diffusion", "comfyui", "image-management", "metadata"]
publishedAt: 2026-08-08
week: "2026-W32"
draft: true
---

Draft foundation từ daily queue (Show HN ~4 điểm + tín hiệu GitHub). App desktop Electron/React, local-first, đọc metadata ảnh AI đa nguồn. Phần lõi MPL 2.0 miễn phí; nhiều tính năng workflow (sinh ảnh A1111/ComfyUI, Compare, Analytics, batch, bulk tag) nằm sau Pro $39 — đã nêu trong usabilityRisk. Fit mạnh với creative nhánh SD/ComfyUI, yếu hơn với người chỉ dùng Midjourney/cloud. Media hotlink từ nhánh `main` (đã kiểm tra trả 200). Confidence thấp — cần Luan xác nhận trước khi publish.
