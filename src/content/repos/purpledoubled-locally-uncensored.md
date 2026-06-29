---
name: "Locally Uncensored"
repoUrl: "https://github.com/PurpleDoubleD/locally-uncensored"
oneLiner: "Locally Uncensored là app desktop để chat, tạo ảnh, tạo video và chạy agent bằng AI local: một file cài, không Docker, dữ liệu không phải đi qua cloud nếu bạn dùng backend nội bộ."
media: []

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 824
  forks: 118
  note: "~95 ngày tuổi, ~8.7 sao/ngày; có tín hiệu đang được bàn ở HN/Reddit"
standoutFeatures:
  - "App desktop gom chat, agent mode, tạo ảnh và tạo video trong một giao diện."
  - "README nhấn mạnh chạy local, không thu dữ liệu, không cần API key nếu dùng backend local."
  - "Tự phát hiện 12 local backend, phù hợp người đã dùng Ollama, ComfyUI hoặc local LLM."
  - "Bản v2.5.5 có hardening: remote access tắt quyền shell mặc định, rate limit, path jail, SSRF guard và keychain storage."
signalSources:
  - label: "GitHub"
    url: "https://github.com/PurpleDoubleD/locally-uncensored"

useCases:
  - "Chạy một bàn làm việc AI offline cho chat, ảnh và video mà không phải nối nhiều app rời."
  - "Thử local LLM, Ollama hoặc ComfyUI trong giao diện desktop dễ đưa cho người không thích dòng lệnh."
  - "Tạo nháp ảnh hoặc video nội bộ khi brief còn nhạy cảm và team chưa muốn đẩy dữ liệu lên cloud."
  - "Dùng agent mode để thử sửa code hoặc thao tác file trong phạm vi workspace có kiểm soát."

workflowStepReplaced: "Khâu ghép nhiều công cụ local AI rời rạc như chat app, ComfyUI UI, image gallery và agent runner."
timeOrCostSaved: "Có thể giảm thời gian cài ghép ban đầu cho người muốn thử AI local, nhất là khi họ ngại Docker và chỉ muốn một app desktop."
localProblem: "Creative cá nhân và team nhỏ ở Việt Nam hay muốn thử AI local vì chi phí API, quyền riêng tư hoặc nội dung nhạy cảm, nhưng vướng ở phần cài nhiều backend và giao diện khó dùng."
localEvidence: "Queue ghi repo có 824 sao, 118 fork trong 95 ngày và có tín hiệu đang được bàn ở HN/Reddit. README tập trung vào thông điệp 'single .exe, no Docker', trúng nỗi đau cài đặt của nhóm không chuyên hạ tầng."

vnMarket:
  insight: "Ở Việt Nam, nhóm creative và indie builder quan tâm AI local thường chia làm hai nhóm: người kỹ thuật tự ráp Ollama/ComfyUI, và người chỉ muốn một app chạy được ngay. Locally Uncensored đáng thử ở nhóm thứ hai, nhưng tên và phạm vi 'uncensored' cần kể cẩn thận để không biến thành góc grey-hat."
  seoKeywords: ["AI local trên Windows", "app AI offline", "local LLM desktop", "Ollama giao diện desktop", "tạo ảnh AI local", "ComfyUI dễ dùng"]
  notes: "Từ khóa suy luận từ README và hành vi cộng đồng AI local; cần Luan kiểm thêm Facebook/YouTube Việt trước khi publish."

usabilityRisk: "Tên 'uncensored' dễ kéo kỳ vọng sai. Locally Uncensored vẫn phụ thuộc model/backend bạn dùng, cấu hình máy, GPU và rào pháp lý nội dung. Nếu bật remote access hoặc agent mode, cần đọc kỹ quyền file, shell và mạng."

practitionerGuide:
  outcome: "Bạn có một môi trường AI local đầu tiên để chat và thử tạo ảnh/video mà không phải nối nhiều giao diện rời."
  prerequisites:
    - "Một máy Windows/macOS đủ mạnh cho backend local bạn muốn dùng; tác vụ ảnh/video thường cần GPU tốt hơn chat text."
    - "Một backend local như Ollama hoặc ComfyUI nếu bạn muốn chạy hoàn toàn offline."
    - "Một thư mục workspace test, không chứa dữ liệu nhạy cảm, để thử agent mode."
  steps:
    - "Cài bản desktop theo hướng dẫn của repo, mở app và để app phát hiện backend local có sẵn."
    - "Thử chat với một model nhỏ trước để kiểm tra kết nối và tốc độ phản hồi."
    - "Chuyển sang tab tạo ảnh hoặc video với prompt đơn giản, chỉ dùng nội dung không nhạy cảm ở vòng đầu."
    - "Nếu thử agent mode, giới hạn trong thư mục test và xem kỹ quyền trước khi cho agent sửa file."
    - "Ghi lại backend nào chạy ổn trên máy của bạn để quyết định có dùng cho việc thật không."
  expectedResult: "Bạn biết máy của mình chạy được phần nào: chat, ảnh, video hay agent, và phần nào cần GPU/backend tốt hơn."
  commonPitfalls:
    - "Kỳ vọng app tự làm mọi thứ dù chưa có model hoặc backend local phù hợp."
    - "Bật quyền remote/agent quá rộng khi chưa hiểu cơ chế giới hạn workspace."
    - "Dùng tên 'uncensored' như lời hứa chất lượng, trong khi output vẫn phụ thuộc model và cấu hình."

greyHatFlag: "borderline"

suggestedAngle: "Nên viết theo góc 'AI local dễ cài cho creative', tránh câu chuyện vượt kiểm duyệt hoặc tạo nội dung nhạy cảm."
paidToolReplaced: "Một phần nhu cầu dùng ChatGPT/Claude cloud, image/video SaaS và các UI local rời"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể đọc README, nhưng góc cần thiết là phân loại rủi ro 'uncensored' và đưa về use case AI local sạch cho người Việt."

tags: ["local-ai", "desktop-app", "ollama", "comfyui", "image-generation", "video-generation"]
publishedAt: 2026-06-28
week: "2026-W26"
draft: false
---

Draft foundation. Cần Luan quyết định framing vì tên repo có yếu tố borderline; nên giữ ở hướng private/offline workflow, không khuyến khích nội dung xấu.
