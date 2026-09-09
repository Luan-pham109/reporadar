---
name: "Whispering (Epicenter)"
repoUrl: "https://github.com/epicenter-so/epicenter"
oneLiner: "Whispering là app chuyển giọng nói thành văn bản (đọc chép chính tả) mã nguồn mở, ưu tiên chạy trên máy bạn — bấm ghi âm, nói, rồi lấy transcript để dán vào bất cứ đâu, dữ liệu là file bạn tự sở hữu."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/9e210c52-2740-43b6-af3f-e6eaf4b5c397"
    caption: "Logo/ảnh giới thiệu Epicenter — bộ app local-first, trong đó Whispering là app đọc-chép nói-thành-chữ."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 4690
  forks: 363
  note: "~1214 ngày tuổi, ~3.9 sao/ngày; vừa có sóng Show HN cho Whispering (591 điểm)"
  starsPerDay: 3.9
  ageDays: 1214
  pushedAt: 2026-07-11T08:34:38Z
  archived: false
  openIssues: 214
standoutFeatures:
  - "Whispering là app speech-to-text (SPA) chạy được cả trên trình duyệt lẫn dạng native trong app desktop Epicenter; bấm ghi âm → nói → tuỳ chọn 'transform' transcript → copy hoặc dán thẳng."
  - "Local-first: có thể chạy phiên âm bằng model GGUF ngay trên máy (audio không rời máy), hoặc chọn provider đám mây/tự host tuỳ mức tin cậy bạn muốn."
  - "Dữ liệu ghi ra dạng file Markdown + SQLite bạn tự sở hữu: grep được, version bằng Git, mở trong Obsidian — khi app ngừng phát triển thì file vẫn còn."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=44942731"
  - label: "GitHub"
    url: "https://github.com/epicenter-so/epicenter"

useCases:
  - "Đọc chép nhanh ý tưởng nội dung, script video hoặc caption bằng giọng nói thay vì gõ, rồi dán transcript vào editor."
  - "Phỏng vấn/ghi chú họp voice-to-text để lấy bản thô, sau đó biên tập lại thành bài."
  - "Giữ audio nhạy cảm ở lại trên máy: dùng phiên âm GGUF local khi không muốn gửi file ghi âm lên dịch vụ đám mây."

workflowStepReplaced: "Khâu gõ tay bản thô nội dung/ghi chú, hoặc phải dùng app dictation trả phí để nói-thành-chữ."
timeOrCostSaved: "Thay được các app đọc-chép trả phí (Superwhisper, Otter, Dragon...) bằng bản mã nguồn mở; tiết kiệm phí thuê bao, còn thời gian tiết kiệm tuỳ mức bạn thật sự thay việc gõ bằng nói."
localProblem: "Người làm nội dung/creative VN hay có ý tưởng khi đang di chuyển và muốn 'nói ra' thành chữ để không quên; nhóm cần phiên âm phỏng vấn cũng ngại upload file ghi âm lên dịch vụ nước ngoài vì lo riêng tư/chi phí."
localEvidence: "Show HN của Whispering đạt 591 điểm, 152 bình luận — nhu cầu 'dictation đáng tin, chạy local' đang được quan tâm rõ ở cộng đồng kỹ thuật quốc tế."

vnMarket:
  insight: "Ở VN phần đông vẫn dùng bàn phím ảo/giọng nói của điện thoại hoặc Google Docs voice typing (miễn phí nhưng dữ liệu lên đám mây, tiếng Việt tạm ổn). Nhóm chuyên nghiệp hơn dùng các app trả phí. Chưa thấy thói quen dùng công cụ đọc-chép local-first mã nguồn mở. Điểm cần kiểm tra kỹ trước khi khuyến nghị: chất lượng nhận dạng TIẾNG VIỆT của model local phụ thuộc model Whisper phía sau, chưa có bằng chứng tốt cho tiếng Việt."
  seoKeywords: ["app chuyển giọng nói thành văn bản", "phần mềm đọc chép chính tả mã nguồn mở", "dictation local first", "phiên âm audio offline", "Whispering là gì"]
  notes: "Fit chủ yếu ở góc năng suất viết nội dung. Rủi ro lớn nhất là độ chính xác tiếng Việt chưa kiểm chứng. Độ chắc chắn: thấp–trung bình."

usabilityRisk: "Đây là monorepo Epicenter khá phức tạp; muốn đủ tính năng native (shortcut toàn hệ thống, dán native, phiên âm GGUF local) phải dùng app desktop Epicenter (Tauri) chứ không chỉ bản web. Chất lượng phiên âm phụ thuộc model bạn chọn — TIẾNG VIỆT chưa có bằng chứng tốt. Dùng provider đám mây thì audio/transcript sẽ rời máy sang bên đó. Chưa có cộng đồng Việt; tài liệu và toolkit vẫn ở giai đoạn pre-1.0 (khuyến cáo 'fork-and-own')."

practitionerGuide:
  outcome: "Bạn ghi âm giọng nói và nhận lại transcript văn bản để copy/dán, thử được cả chế độ phiên âm local lẫn provider đám mây."
  prerequisites:
    - "Trình duyệt để dùng bản hosted (whispering.epicenter.so), HOẶC cài app desktop Epicenter nếu muốn tính năng native."
    - "Nếu muốn phiên âm đám mây: API key của provider bạn chọn."
    - "Nếu muốn phiên âm local (GGUF): dùng app desktop và máy đủ khoẻ để chạy model trên máy."
  steps:
    - "Mở Whispering trên trình duyệt hoặc trong app Epicenter."
    - "Chọn nguồn phiên âm: model local (GGUF, trong Epicenter) hoặc provider đám mây (nhập API key)."
    - "Bấm ghi âm, nói một đoạn tiếng Việt thử, dừng lại để lấy transcript."
    - "Kiểm tra độ chính xác tiếng Việt; nếu cần, bật bước 'transform' để LLM chỉnh lại transcript, rồi copy/dán."
  expectedResult: "Có transcript văn bản từ giọng nói của bạn; đánh giá được model nào cho tiếng Việt đủ dùng để làm bản thô."
  commonPitfalls:
    - "Kỳ vọng tiếng Việt chuẩn ngay — chất lượng phụ thuộc model Whisper phía sau, cần thử thực tế."
    - "Nghĩ bản web đủ mọi tính năng — nhiều tính năng native chỉ có trong app desktop Epicenter."
    - "Quên rằng dùng provider đám mây nghĩa là audio/văn bản sẽ gửi sang bên đó, mất tính 'local-first'."

greyHatFlag: "in"

suggestedAngle: "Góc 'công cụ đọc-chép mã nguồn mở, dữ liệu là file bạn tự giữ' cho người làm nội dung ngại phụ thuộc app trả phí — nhưng phải nói thẳng khâu cần kiểm chứng tiếng Việt."
paidToolReplaced: "Superwhisper / Otter / Dragon (dictation & phiên âm trả phí)"
alternativeTo:
  - name: "Superwhisper"
    slug: "superwhisper"
  - name: "Otter.ai"
    slug: "otter-ai"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Whispering là gì, nhưng phần thật sự có giá trị — model nào cho TIẾNG VIỆT đủ dùng, cần bản web hay desktop, ranh giới dữ liệu local vs đám mây — phải tự thử mới biết. Đây là chỗ synthesize/lab-test thêm giá trị."

scoreBreakdown:
  useCaseFit: 16
  projectHealth: 18
  costAdvantage: 15
  deployment: 9
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-12
nextReviewDueAt: 2026-10-10

tags: ["speech-to-text", "dictation", "local-first", "open-source", "productivity"]
publishedAt: 2026-07-12
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue (Show HN "Whispering" 591 điểm). Lưu ý: repo là monorepo Epicenter, tool chính đáng quan tâm cho RepoRadar là Whispering (nói-thành-chữ). CẦN LUAN KIỂM CHỨNG: chất lượng nhận dạng tiếng Việt của các model phiên âm trước khi publish — đây là yếu tố quyết định fit. Số liệu chỉ lấy từ signals của queue.
