---
name: "ComfyUI Skills for OpenClaw"
repoUrl: "https://github.com/HuangYuChuh/ComfyUI_Skills_OpenClaw"
oneLiner: "ComfyUI Skills for OpenClaw giúp biến workflow ComfyUI thành skill gọi được bởi agent như OpenClaw, Hermes Agent, Codex hoặc Claude Code."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/HuangYuChuh/ComfyUI_Skills_OpenClaw/main/asset/banner.png"
    caption: "Banner README giới thiệu bộ skill ComfyUI cho agent."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 335
  forks: 34
  note: "~116 ngày tuổi, ~2.9 sao/ngày"
  starsPerDay: 2.9
  ageDays: 116
  pushedAt: 2026-04-21T05:23:12Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "README định vị rõ: biến workflow ComfyUI thành skill có CLI thân thiện cho agent, kèm Web UI để cấu hình và test."
  - "Hỗ trợ nhiều môi trường agent: OpenClaw, Hermes Agent, Codex, Claude Code và các agent khác."
  - "Tập trung vào lớp đóng gói workflow, không thay ComfyUI; mục tiêu là làm workflow có thể được agent gọi lại."
signalSources:
  - label: "GitHub"
    url: "https://github.com/HuangYuChuh/ComfyUI_Skills_OpenClaw"

useCases:
  - "Đóng gói một workflow ComfyUI tạo ảnh sản phẩm, ảnh nhân vật hoặc style transfer thành skill để agent gọi lại nhiều lần."
  - "Cho creative technologist tạo CLI quanh workflow ComfyUI để account, planner hoặc PM có thể chạy bằng yêu cầu tự nhiên."
  - "Test và cấu hình workflow qua Web UI trước khi đưa vào chuỗi agent tự động."
  - "Tách phần prompt/vận hành ra khỏi file workflow phức tạp để team dễ dùng lại cho nhiều brief."

workflowStepReplaced: "Khâu mở ComfyUI, nạp workflow, chỉnh input bằng tay và nhớ từng bước chạy mỗi lần cần tạo asset."
timeOrCostSaved: "Có thể giảm thời gian thao tác lặp lại với workflow ComfyUI đã ổn định; không giảm công sức thiết kế workflow ban đầu."
localProblem: "Nhiều team creative Việt đã biết ComfyUI nhưng workflow thường nằm trong máy của một người kỹ thuật. Khi cần lặp lại cho account, e-commerce hoặc social team, việc mở đúng file, chỉnh input và export vẫn dễ sai."
localEvidence: "ComfyUI có cộng đồng và nhu cầu rõ trong nhóm tạo ảnh AI Việt. Lớp skill cho agent còn mới hơn, nên còn đất viết hướng dẫn thực dụng: khi nào nên đóng gói workflow, khi nào chỉ dùng ComfyUI trực tiếp."

vnMarket:
  insight: "Creative/agency Việt đang dùng ComfyUI cho ảnh sản phẩm, nhân vật, thumbnail và style nội bộ, nhưng khó biến workflow thành quy trình lặp lại cho người không rành node. Nếu agent có thể gọi một workflow đã đóng gói, team có thể chuyển từ thử nghiệm cá nhân sang production nhỏ."
  seoKeywords: ["ComfyUI workflow", "ComfyUI agent", "ComfyUI skill", "tự động hóa ComfyUI", "tạo ảnh AI", "workflow tạo ảnh sản phẩm"]
  notes: "Từ khóa dựa trên nhu cầu ComfyUI tiếng Việt và lớp agent mới. Chưa thấy tín hiệu bão hòa riêng cho repo này ở Việt Nam."

usabilityRisk: "Tool này không dành cho người mới hoàn toàn với ComfyUI. Bạn vẫn cần workflow chạy ổn, hiểu input/output và có máy đủ GPU nếu chạy local. Nếu workflow còn thử nghiệm, đóng gói thành skill sẽ chỉ làm lỗi lặp lại nhanh hơn."

practitionerGuide:
  outcome: "Bạn biến được một workflow ComfyUI đã chạy ổn thành skill thử nghiệm và gọi lại được bằng agent hoặc CLI."
  prerequisites:
    - "Một workflow ComfyUI đã test thành công với input/output rõ."
    - "Môi trường Python theo README và quyền cài package cần thiết."
    - "Một agent hoặc môi trường CLI mà team muốn dùng để gọi workflow."
  steps:
    - "Chọn một workflow nhỏ, ví dụ tạo 3 biến thể ảnh sản phẩm từ một ảnh đầu vào."
    - "Cài project theo README và mở phần cấu hình/CLI hoặc Web UI."
    - "Khai báo input cần người dùng cung cấp, output cần trả về và tham số không nên cho người dùng chỉnh."
    - "Chạy thử skill với dữ liệu mẫu, kiểm tra ảnh output và log lỗi."
    - "Viết một prompt vận hành ngắn cho team: cần đưa ảnh nào, mô tả gì, nhận file ở đâu."
  expectedResult: "Kết quả tốt là agent gọi được workflow ComfyUI lặp lại với input rõ, output đúng vị trí và lỗi dễ đọc khi thiếu file hoặc tham số."
  commonPitfalls:
    - "Đóng gói workflow quá lớn trước khi workflow đó ổn định."
    - "Không khóa tham số kỹ thuật nên người dùng không chuyên chỉnh sai node."
    - "Quên ghi giới hạn GPU, model và custom node khiến máy khác không chạy lại được."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: biến workflow ComfyUI của studio thành skill agent để người không rành node vẫn chạy được."
paidToolReplaced: "Giảm nhu cầu dùng một số nền tảng tạo ảnh workflow hosted nếu studio đã có máy ComfyUI local"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể giải thích ComfyUI, nhưng phần đáng giá là cách đóng gói workflow thành thao tác dùng được trong team creative Việt."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 13
  costAdvantage: 8
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-30
nextReviewDueAt: 2026-09-28

tags: ["comfyui", "agent-skills", "image-generation", "workflow", "creative"]
publishedAt: 2026-06-30
week: "2026-W27"
draft: true
---

Draft foundation. Cần Luan test với một workflow ComfyUI thật và kiểm tra docs GitHub Pages trước khi viết guide chi tiết hơn.
