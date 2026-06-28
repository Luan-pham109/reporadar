---
name: "Kandinsky 5"
repoUrl: "https://github.com/kandinskylab/kandinsky-5"
oneLiner: "Kandinsky 5 là bộ model diffusion mở cho tạo ảnh và video từ prompt hoặc ảnh đầu vào, đáng chú ý với nhánh Video Lite/Pro, tích hợp Diffusers và hướng dùng trong ComfyUI."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/b06f56de-1b05-4def-a611-1a3159ed71b0"
    caption: "Demo tạo video hoặc ảnh từ Kandinsky 5."
  - type: "image"
    url: "https://github.com/user-attachments/assets/17fc2eb5-05e3-4591-9ec6-0f6e1ca397b3"
    caption: "Ví dụ kết quả từ Kandinsky 5."

vertical: ["creative", "ecom"]

maturity: "rising"
repoStats:
  stars: 780
  forks: 60
  note: "~321 ngày tuổi, ~2.4 sao/ngày"
standoutFeatures:
  - "Cung cấp family model cho cả image generation và video generation."
  - "README liên kết Video Lite, Video Pro, Image Lite trên Hugging Face và tài liệu Diffusers."
  - "Có hướng dẫn ComfyUI riêng, hợp với người đã có workflow node-based."
  - "Project updates nêu Video Pro được xếp hạng cao trong LMArena text-to-video và có LoRA cho camera control."
signalSources:
  - label: "GitHub"
    url: "https://github.com/kandinskylab/kandinsky-5"

useCases:
  - "Thử một model mở cho ảnh và video khi team muốn kiểm soát pipeline thay vì phụ thuộc hoàn toàn SaaS."
  - "Dựng workflow ComfyUI cho text-to-video hoặc image-to-video nếu bạn đã có máy/GPU phù hợp."
  - "Test Video Lite trước để đánh giá chất lượng, rồi mới cân nhắc Video Pro cho case nặng hơn."
  - "Khảo sát LoRA camera control cho storyboard, demo chuyển động sản phẩm hoặc concept visual."

workflowStepReplaced: "Khâu chỉ thử video AI trên nền tảng đóng, không có quyền chỉnh pipeline, model hoặc workflow ComfyUI."
timeOrCostSaved: "Có thể giảm phụ thuộc vào credit SaaS khi team đã có hạ tầng GPU; ngược lại, nếu chưa có GPU thì chi phí setup có thể cao hơn dùng dịch vụ sẵn."
localProblem: "Creative team và shop Việt muốn thử video AI cho sản phẩm, social hoặc storyboard, nhưng cần chọn giữa tool cloud dễ dùng và model mở khó vận hành. Kandinsky 5 đáng nằm trong shortlist khi team đã quen ComfyUI hoặc Diffusers."
localEvidence: "Queue ghi repo có 780 sao, 60 fork, 321 ngày tuổi. README có link Hugging Face, Diffusers và ComfyUI, cho thấy đây là lựa chọn nghiêng về người có kỹ thuật hơn là app một nút bấm."

vnMarket:
  insight: "Góc Việt nên nói thẳng: Kandinsky 5 không thay Runway/Kling cho người muốn ra video ngay, nhưng hữu ích cho team đã có ComfyUI/GPU và muốn giữ quyền kiểm soát model, prompt, LoRA và pipeline."
  seoKeywords: ["Kandinsky 5", "model tạo video AI", "ComfyUI video AI", "text to video open source", "image to video open source", "Diffusers Kandinsky"]
  notes: "Từ khóa suy luận từ README, Hugging Face/Diffusers/ComfyUI hints; chưa verify bằng web tiếng Việt trong lượt này."

usabilityRisk: "Kandinsky 5 cần năng lực kỹ thuật, GPU và hiểu ComfyUI hoặc Diffusers. Đừng hứa chất lượng như SaaS đóng trong mọi case; cần test prompt, model Lite/Pro và chi phí render trên máy thật."

practitionerGuide:
  outcome: "Bạn có một vòng test Kandinsky 5 đủ để biết model này có hợp workflow ảnh/video AI của team không."
  prerequisites:
    - "Máy có GPU phù hợp hoặc môi trường cloud GPU."
    - "ComfyUI hoặc Python/Diffusers tùy cách bạn muốn chạy."
    - "Một prompt video ngắn hoặc ảnh sản phẩm/concept để thử image-to-video."
  steps:
    - "Chọn đường chạy phù hợp: ComfyUI nếu team quen node workflow, Diffusers nếu team quen Python."
    - "Bắt đầu với model Lite hoặc ví dụ đơn giản trong README để kiểm tra môi trường."
    - "Tạo một video ngắn từ prompt và ghi lại thời gian render, lỗi bộ nhớ và chất lượng chuyển động."
    - "Thử image-to-video với một ảnh đầu vào thật để xem model giữ hình dáng sản phẩm hoặc nhân vật đến đâu."
    - "So kết quả với công cụ cloud team đang dùng để quyết định có đầu tư tiếp không."
  expectedResult: "Bạn có vài output ảnh/video ngắn và một bảng ghi chú về tốc độ, chất lượng, chi phí GPU và mức khó vận hành."
  commonPitfalls:
    - "Nhảy ngay vào Video Pro hoặc LoRA trước khi chạy được ví dụ cơ bản."
    - "So với SaaS cloud chỉ bằng demo đẹp, không tính setup và thời gian render."
    - "Không kiểm tra license/model card trước khi dùng cho nội dung thương mại."

greyHatFlag: "in"

suggestedAngle: "Góc hay nhất: shortlist model video mở cho team đã dùng ComfyUI, có GPU và muốn kiểm soát pipeline."
paidToolReplaced: "Một phần nhu cầu thử nghiệm thay cho Runway, Kling, Pika hoặc credit video AI cloud"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể nêu tính năng Kandinsky 5, nhưng cần lớp biên tập nói rõ ai ở Việt Nam nên thử: team có ComfyUI/GPU, không phải người cần app nhanh."

tags: ["video-generation", "image-generation", "comfyui", "diffusers", "open-source-model"]
publishedAt: 2026-06-28
week: "2026-W26"
draft: true
---

Draft foundation. Cần Luan kiểm thêm license/model card và benchmark GPU thực tế trước khi đưa vào bài public.
