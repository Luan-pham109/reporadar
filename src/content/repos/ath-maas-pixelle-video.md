---
name: "Pixelle-Video"
repoUrl: "https://github.com/ATH-MaaS/Pixelle-Video"
oneLiner: "Pixelle-Video là công cụ tự động dựng video ngắn từ một chủ đề: bạn gõ vào một câu, AI tự viết kịch bản, tạo hình ảnh/video, lồng tiếng và ghép nhạc thành clip hoàn chỉnh."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/ATH-MaaS/Pixelle-Video/main/resources/webui.png"
    caption: "Giao diện WebUI: nhập chủ đề, chọn giọng đọc, phong cách hình ảnh và mẫu video."
  - type: "image"
    url: "https://raw.githubusercontent.com/ATH-MaaS/Pixelle-Video/main/resources/flow.png"
    caption: "Luồng xử lý: viết kịch bản → dựng hình → lồng tiếng → ghép video."

vertical: ["creative"]

maturity: "established"
repoStats:
  stars: 27192
  forks: 3956
  note: "~289 ngày tuổi, ~94.1 sao/ngày"
  starsPerDay: 94.1
  ageDays: 289
  pushedAt: 2026-06-14T12:40:58Z
  archived: false
  openIssues: 159
standoutFeatures:
  - "Nhập một chủ đề, AI tự động hoàn tất cả chuỗi: viết lời bình, tạo ảnh/video minh hoạ, tổng hợp giọng đọc, thêm nhạc nền và ghép thành video."
  - "Kết nối được nhiều nhà cung cấp: chạy local hoàn toàn miễn phí (Ollama + ComfyUI) hoặc gọi API DashScope, OpenAI, Seedream, Seedance, Kling..."
  - "Hỗ trợ nhiều mẫu video (dọc/ngang/vuông), nhiều engine TTS (Edge-TTS, Index-TTS, có clone giọng), và các module mở rộng: người ảo đọc bản tin, ảnh-sang-video, chuyển động."
  - "Có bản Windows một-cú-click (không cần cài Python/ffmpeg), tài liệu và video hướng dẫn đầy đủ, giao diện đa ngôn ngữ."
signalSources:
  - label: "GitHub"
    url: "https://github.com/ATH-MaaS/Pixelle-Video"
  - label: "Tài liệu chính thức"
    url: "https://aidc-ai.github.io/Pixelle-Video/zh"

useCases:
  - "Dựng hàng loạt video ngắn dạng kể chuyện, review, kiến thức phổ thông cho TikTok/YouTube Shorts chỉ từ một chủ đề gõ vào."
  - "Sản xuất video nội dung theo lô (batch) cho kênh nuôi content, chọn sẵn phong cách hình ảnh và giọng đọc thống nhất."
  - "Làm video người ảo đọc bản tin hoặc chuyển ảnh sản phẩm thành clip động mà không cần quay dựng."
  - "Chạy local miễn phí bằng Ollama + ComfyUI để giữ chi phí gần 0 khi cần ra nhiều clip mỗi ngày."

workflowStepReplaced: "Cắt gần như toàn bộ khâu viết kịch bản, tìm/tạo hình, lồng tiếng và ghép dựng cho video ngắn — gộp thành một quy trình tự động."
timeOrCostSaved: "Rút một clip ngắn từ vài giờ viết-quay-dựng xuống còn vài phút chờ máy render; nếu chạy local (Ollama + ComfyUI) chi phí có thể về gần 0, chỉ tốn điện và GPU."
localProblem: "Nhiều bạn làm kênh content/affiliate ở VN cần ra đều đặn nhiều video ngắn mỗi ngày nhưng nghẽn ở khâu viết kịch bản, dựng hình và lồng tiếng. Thuê người hoặc mua tool AI làm video theo tháng thì tốn, mà làm tay thì không kịp số lượng."
localEvidence: "Trào lưu 'kênh AI', video kể chuyện/tóm tắt sách, video kiến thức đọc bằng giọng AI đang rất phổ biến trên TikTok/YouTube VN. Người làm thường chắp vá nhiều tool (ChatGPT viết script, Midjourney/ComfyUI tạo ảnh, TTS riêng, CapCut ghép). Nội dung tiếng Việt riêng về Pixelle-Video thì gần như chưa có — cần kiểm thêm."

vnMarket:
  insight: "Ngách 'làm video ngắn bằng AI' ở VN đang nóng: nhiều người bán khoá học và tool SaaS làm video AI thu phí theo tháng, phần đông creator thì tự ghép nhiều công cụ rời. Một pipeline mã nguồn mở, chạy được local miễn phí như Pixelle-Video là lựa chọn đáng cân nhắc cho nhóm muốn giảm chi phí và tự chủ quy trình."
  seoKeywords: ["tự động làm video AI", "AI làm video ngắn từ chủ đề", "công cụ làm video AI miễn phí", "làm video AI kể chuyện", "phần mềm tạo video ngắn tự động", "AI viết kịch bản và lồng tiếng video"]
  notes: "Suy luận từ README và trào lưu kênh AI trên nền tảng VN. Chưa kiểm được thảo luận/nội dung tiếng Việt cụ thể về chính Pixelle-Video."

usabilityRisk: "Giao diện và tài liệu gốc chủ yếu tiếng Trung (có bản EN). Chất lượng ảnh/video local phụ thuộc nặng vào GPU và ComfyUI; máy yếu thì phải dùng API trả phí. Cài từ nguồn cần uv + ffmpeg; nhiều tính năng phải tự cấu hình API key. Chưa có cộng đồng hỗ trợ tiếng Việt. Lưu ý nguồn gốc repo: dự án gốc ghi ở AIDC-AI (homepage aidc-ai.github.io) nhưng candidate trong queue nằm ở org ATH-MaaS — cần xác minh owner thật trước khi publish."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được một video ngắn hoàn chỉnh (kịch bản + hình + giọng đọc + nhạc) chỉ từ một chủ đề, và biết cách chọn chạy local hay qua API."
  prerequisites:
    - "Máy Windows (dùng bản một-cú-click) hoặc macOS/Linux đã cài uv và ffmpeg nếu chạy từ nguồn."
    - "Ít nhất một nguồn LLM: Ollama chạy local miễn phí, hoặc API key (Qwen/OpenAI/DeepSeek...)."
    - "Nguồn tạo ảnh/video: ComfyUI local (cần GPU) hoặc API key của DashScope/OpenAI/Seedream/Kling..."
  steps:
    - "Windows: tải bản một-cú-click ở trang releases, giải nén và chạy start.bat; máy khác thì clone repo rồi chạy `uv run streamlit run web/app.py`."
    - "Mở http://localhost:8501, vào '⚙️ Cấu hình hệ thống' điền API key LLM và cấu hình ComfyUI/RunningHub hoặc API media."
    - "Chọn chế độ 'AI tạo nội dung', gõ một chủ đề (ví dụ 'Vì sao nên đọc sách mỗi ngày'), chọn giọng đọc và mẫu video."
    - "Bấm tạo video và theo dõi tiến trình (viết lời → tạo ảnh → lồng tiếng → ghép); xem trước kết quả trong thư mục output."
    - "Tinh chỉnh: đổi model LLM, prompt prefix phong cách ảnh, hoặc engine TTS để ra đúng chất kênh của bạn."
  expectedResult: "Một file video ngắn nằm trong thư mục output với lời bình, hình minh hoạ theo phong cách đã chọn, giọng đọc và nhạc nền — đủ tốt để đánh giá có dùng cho kênh thật không."
  commonPitfalls:
    - "Chưa cấu hình ComfyUI/API media nên khâu tạo ảnh/video lỗi hoặc trống."
    - "Máy không có GPU mà cố chạy model ảnh local → rất chậm hoặc treo; nên chuyển sang API."
    - "Bỏ qua bước điền API key LLM nên không tạo được kịch bản."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Tự dựng kênh video ngắn AI miễn phí bằng Pixelle-Video' — nhấn chuyện chạy local Ollama + ComfyUI để chi phí về gần 0 so với các tool SaaS làm video AI thu phí tháng."
paidToolReplaced: "Các SaaS làm video AI thu phí theo tháng (ví dụ nhóm tool kiểu InVideo AI, Pictory) và quy trình ghép tay ChatGPT + Midjourney + TTS + CapCut."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả repo, nhưng đánh giá chạy local thực tế (GPU nào chịu nổi, chất lượng ảnh/giọng ra sao) và góc chi phí cho creator VN cần người thử thật và biên tập."

tags: ["ai", "video-generation", "short-video", "tts", "comfyui", "creative", "open-source"]
scoreBreakdown:
  useCaseFit: 20
  projectHealth: 22
  costAdvantage: 16
  deployment: 10
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-08-23
nextReviewDueAt: 2026-11-21
publishedAt: 2026-08-23
week: "2026-W34"
draft: true
---

Record nháp foundation (pipeline 2026-08-23).

Cần Luan review trước khi publish:
- **Nguồn gốc repo:** candidate trong queue là `ATH-MaaS/Pixelle-Video` (27.192 sao theo GitHub API) nhưng README, badge và homepage đều trỏ về `AIDC-AI/Pixelle-Video` (aidc-ai.github.io). Nhiều khả năng repo được chuyển/đổi org và README chưa cập nhật badge — cần xác minh owner thật và chỉnh `repoUrl` cho đúng.
- **Media:** đang hotlink `resources/webui.png` và `resources/flow.png` raw từ nhánh main của ATH-MaaS. Cần kiểm hotlink có sống không (nếu owner thật là AIDC-AI thì đổi đường dẫn). README còn nhiều video demo dạng user-attachments có thể dùng thay.
- Điểm số (useCaseFit/costAdvantage/deployment/documentation) là ước lượng discovery, chưa lab-test.
