---
name: "iLab Conjure"
repoUrl: "https://github.com/kadevin/ilab-conjure"
oneLiner: "iLab Conjure là một web workbench để tạo ảnh AI bằng GPT-Image-2: bạn gõ prompt, quản lý nhiều tác vụ chạy song song và có sẵn thư viện ảnh dùng chung, thay vì mỗi lần lại mở tab API rời rạc."
media: []

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 684
  note: "Chỉ có số sao từ hàng đợi khám phá (684★); số liệu GitHub chi tiết (forks, tuổi repo, sao/ngày) chưa fetch được ở lần quét này."
standoutFeatures:
  - "Giao diện WebUI tập trung cho GPT-Image-2, tiếp nhận cả Codex Responses lẫn API tương thích OpenAI (theo mô tả repo)."
  - "Hỗ trợ nhiều tác vụ chạy song song và hàng đợi cục bộ, hợp với việc render nhiều biến thể trong một lượt."
  - "Có thư viện ảnh dùng chung, chip trích dẫn nhanh nhiều loại và template prompt để tái sử dụng câu lệnh."
signalSources:
  - label: "GitHub"
    url: "https://github.com/kadevin/ilab-conjure"

useCases:
  - "Dựng bàn làm việc tạo ảnh AI nội bộ cho team creative thay vì mỗi người tự mò API GPT-Image-2 riêng."
  - "Chạy song song nhiều prompt để so nhanh vài hướng visual trong cùng một buổi, không phải chờ lần lượt."
  - "Lưu prompt hay dùng thành template và trích dẫn ảnh tham chiếu qua chip cho các brief lặp lại."

workflowStepReplaced: "Khâu thao tác API tạo ảnh rời rạc và quản lý thủ công các lượt render nhiều biến thể."
timeOrCostSaved: "Có thể tiết kiệm thời gian ở khâu vận hành nhiều lượt render và tổ chức prompt/ảnh tham chiếu; chưa có số liệu đo thực tế."
localProblem: "Nhiều designer và team nội dung Việt muốn dùng GPT-Image-2 nhưng ngại đụng API/console; họ cần một giao diện gọn để gõ prompt, chạy nhiều lượt và giữ lại prompt tốt, thay vì thao tác qua tài liệu API tiếng Anh."
localEvidence: "Quan sát chung: các nhóm creative/agency Việt thường chuộng WebUI kiểu ComfyUI/Fooocus hơn là gọi API trực tiếp. Chưa tìm thấy nội dung tiếng Việt gọi đích danh iLab Conjure — đây là suy luận theo hành vi ngành, cần Luan kiểm chứng."

vnMarket:
  insight: "Giá trị chính của repo này với team Việt là lớp giao diện + quản lý tác vụ đặt lên trên GPT-Image-2, chứ không phải bản thân model. Nó hợp khi team đã có API key và muốn một chỗ tập trung để chạy nhiều prompt, chứ không thay được chi phí gọi API."
  seoKeywords: ["tạo ảnh AI GPT Image 2", "webui tạo ảnh ai", "công cụ tạo ảnh ai self host", "quản lý prompt tạo ảnh"]
  notes: "Dựa trên mô tả repo (song ngữ Trung/Anh) và hành vi ngành creative VN. Chưa fetch được README đầy đủ hay dữ liệu cộng đồng; độ chắc chắn thấp."

usabilityRisk: "Là công cụ self-host, cần bạn tự cài đặt và có sẵn API key GPT-Image-2 / endpoint tương thích OpenAI — vẫn phát sinh chi phí gọi API. README gốc chủ yếu tiếng Trung/Anh, chưa có cộng đồng VN. Chưa xác minh được độ ổn định vì thiếu dữ liệu GitHub chi tiết ở lần quét này."

practitionerGuide:
  outcome: "Sau khi thử, bạn có một WebUI tạo ảnh chạy được với API key của mình và vài prompt template đầu tiên cho team."
  prerequisites:
    - "API key GPT-Image-2 hoặc một endpoint tương thích OpenAI đang hoạt động."
    - "Môi trường chạy được ứng dụng (đọc kỹ hướng dẫn cài trong README repo)."
    - "Một bài toán ảnh cụ thể để test, ví dụ ảnh social hoặc thumbnail."
  steps:
    - "Clone repo và làm theo hướng dẫn cài đặt trong README."
    - "Cấu hình API key / endpoint tương thích OpenAI."
    - "Chạy thử một prompt đơn giản để xác nhận pipeline tạo ảnh hoạt động."
    - "Tạo 2-3 template prompt cho các nhu cầu lặp lại và thử chạy song song."
  expectedResult: "Ảnh được sinh đúng từ prompt của bạn, các lượt render song song hiển thị trong hàng đợi, và prompt tốt được lưu lại để tái dùng."
  commonPitfalls:
    - "Quên rằng vẫn phải trả phí gọi API GPT-Image-2 — WebUI không miễn phí phần model."
    - "Kỳ vọng cài đặt mượt như app đóng gói; đây là dự án self-host cần thao tác kỹ thuật."
    - "Dữ liệu về độ ổn định còn thiếu — nên test kỹ trước khi đưa vào quy trình chính."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator: 'dựng bàn làm việc tạo ảnh GPT-Image-2 self-host cho team nhỏ' — so sánh với việc gọi API thủ công."
paidToolReplaced: "Một phần trải nghiệm của các WebUI/app tạo ảnh trả phí, nhưng vẫn dùng API GPT-Image-2 trả phí ở dưới."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả repo, nhưng việc đặt nó vào workflow của team creative Việt (đã có API key, muốn WebUI tập trung) cần lớp biên tập và kiểm chứng địa phương."

scoreBreakdown:
  useCaseFit: 15
  projectHealth: 12
  costAdvantage: 8
  deployment: 8
  documentation: 7
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"

tags: ["ai", "image-generation", "creative", "gpt-image-2", "webui"]
publishedAt: 2026-08-28
week: "2026-W35"
draft: true
---

Draft foundation (auto). Thiếu dữ liệu GitHub chi tiết và README đầy đủ ở lần quét này — mọi đánh giá độ chín/health đều là ước lượng thận trọng. Cần Luan kiểm chứng: độ ổn định thực tế, chất lượng README, và mức độ khác biệt so với các WebUI tạo ảnh khác trước khi publish.
