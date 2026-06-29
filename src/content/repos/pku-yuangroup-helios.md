---
name: "Helios"
repoUrl: "https://github.com/PKU-YuanGroup/Helios"
oneLiner: "Helios là model tạo video dài thời gian thực giúp đội sáng tạo thử text-to-video, image-to-video và video-to-video trên hạ tầng tự kiểm soát, thay vì chỉ phụ thuộc credit của các SaaS video AI."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/1d10da4a-aba9-4ac1-ab02-cd0dfce8d35b"
    caption: "Demo video Helios từ README."
  - type: "video"
    url: "https://github.com/PKU-YuanGroup/Helios-Page/blob/main/videos/helios_features.mp4"
    caption: "Video giới thiệu tính năng Helios."

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 1937
  forks: 152
  note: "~118 ngày tuổi, ~16.4 sao/ngày"
standoutFeatures:
  - "README mô tả Helios là model 14B tạo video dài, đạt khoảng 19.5 FPS trên một GPU H100 và khoảng 10 FPS trên một Ascend NPU."
  - "Hỗ trợ text-to-video, image-to-video, video-to-video và chế độ interactive, với các checkpoint Base, Mid và Distilled."
  - "Có hướng dẫn chạy qua script inference, Diffusers, SGLang-Diffusion, vLLM-Omni và tối ưu group offloading để hạ nhu cầu VRAM."
  - "Repo có tín hiệu sớm trên Hacker News và tốc độ tăng sao cao trong khoảng 4 tháng đầu."
signalSources:
  - label: "GitHub"
    url: "https://github.com/PKU-YuanGroup/Helios"
  - label: "Hacker News"
    url: "https://news.ycombinator.com/item?id=47499660"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2603.04379"

useCases:
  - "Dựng clip concept dài hơn vài giây để kiểm tra nhịp chuyển động trước khi đem brief sang team dựng thật."
  - "Biến ảnh sản phẩm hoặc key visual thành video thử nghiệm cho ads, Reels, TikTok hoặc landing page."
  - "Test nhiều hướng text-to-video trong nội bộ nếu team đã có GPU mạnh và muốn giảm phụ thuộc credit SaaS."
  - "So sánh bản Base, Mid và Distilled để chọn điểm cân bằng giữa chất lượng, tốc độ và tài nguyên máy."

workflowStepReplaced: "Khâu thử motion concept và tạo video AI vòng đầu bằng nhiều công cụ hosted rời rạc."
timeOrCostSaved: "Có thể giảm chi phí thử ý tưởng khi team cần render nhiều clip nháp, nhưng lợi ích chỉ rõ nếu đã có GPU hoặc hạ tầng phù hợp."
localProblem: "Studio nhỏ, team social và đội ecom ở Việt Nam đang muốn thử video AI cho ads, teaser và storyboard, nhưng chi phí credit SaaS và chuyện bảo mật file khách hàng khiến nhiều team muốn có một góc lab nội bộ."
localEvidence: "Các cụm như tạo video AI, text to video, image to video, ComfyUI video và model video tự host đã có nhu cầu tìm kiếm đều hơn, trong khi nội dung tiếng Việt gọi đích danh Helios vẫn còn mỏng."

vnMarket:
  insight: "Helios đáng chú ý với thị trường Việt ở nhóm team đã có người kỹ thuật hoặc GPU mạnh: giá trị chính là dựng lab video AI nội bộ để test motion concept, không phải thay ngay toàn bộ quy trình sản xuất video."
  seoKeywords: ["tạo video AI", "text to video", "image to video", "model video tự host", "Helios video AI", "ComfyUI video AI"]
  notes: "Dựa trên README, trang project, arXiv và tìm nhanh các truy vấn tiếng Việt quanh tạo video AI, text to video, image to video. Chưa thấy nhiều nội dung tiếng Việt đi sâu riêng về Helios."

usabilityRisk: "Helios vẫn là model nặng. README nhắc tới H100, Ascend NPU, CUDA, Python và nhiều nhánh inference; người không quen GPU, driver và tải checkpoint lớn rất dễ mất nhiều giờ ở bước setup."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một clip thử đầu tiên bằng Helios để biết team có nên đầu tư tiếp vào lab video AI nội bộ hay không."
  prerequisites:
    - "Máy Linux hoặc môi trường GPU phù hợp với hướng dẫn trong README, kèm CUDA và dung lượng đủ để tải checkpoint."
    - "Một prompt ngắn hoặc một ảnh đầu vào thật sự muốn biến thành clip, tránh test bằng prompt quá chung."
    - "Người có thể đọc log Python, xử lý lỗi dependency và kiểm tra VRAM."
  steps:
    - "Chọn trước một bài test hẹp, ví dụ clip 5-8 giây từ ảnh sản phẩm hoặc một prompt storyboard ngắn."
    - "Cài môi trường theo README rồi tải checkpoint phù hợp, ưu tiên bản Distilled nếu mục tiêu là kiểm tra tốc độ trước."
    - "Chạy một lượt text-to-video hoặc image-to-video ngắn để đo thời gian render, mức dùng VRAM và độ ổn định."
    - "Xem lại clip theo tiêu chí công việc: chuyển động có đủ mượt không, hình có giữ chủ thể không, và output có đủ làm bản nháp nội bộ không."
    - "Nếu ổn, thử tiếp các nhánh tối ưu như group offloading hoặc tích hợp Diffusers/ComfyUI để ghép vào cách làm hiện tại."
  expectedResult: "Bạn có một clip nháp đủ xem bố cục, chuyển động và độ giữ hình, từ đó quyết định nên tiếp tục tối ưu Helios hay quay lại SaaS video cho dự án gấp."
  commonPitfalls:
    - "Bắt đầu bằng clip dài hoặc độ phân giải cao làm thời gian render và lỗi VRAM tăng rất nhanh."
    - "Prompt thiếu shot, chủ thể và chuyển động cụ thể nên clip ra đẹp nhưng không dùng được cho brief thật."
    - "Không kiểm tra driver, CUDA và dung lượng model trước khi demo cho team."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: lab video AI tự host cho team muốn thử motion dài hơn, không chỉ clip vài giây."
paidToolReplaced: "Một phần credit thử nghiệm trên Runway, Kling, Pika hoặc các SaaS video AI ở vòng concept"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt Helios là model video thời gian thực, nhưng góc áp vào bài toán lab motion cho team Việt và rào cản GPU cần lớp biên tập theo ngữ cảnh."

tags: ["video-ai", "text-to-video", "image-to-video", "creative", "gpu"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 20
  costAdvantage: 8
  deployment: 3
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "B"
confidence: "medium"
lastReviewedAt: 2026-06-28
nextReviewDueAt: 2026-09-28
publishedAt: 2026-06-28
week: "2026-W26"
draft: false
---

Ghi chú biên tập: cần Luan kiểm tay mức độ phù hợp với độc giả creative rộng vì Helios vẫn nghiêng mạnh về nhóm có GPU và người kỹ thuật.
