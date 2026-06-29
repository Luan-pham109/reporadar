---
name: "TTS Audio Suite"
repoUrl: "https://github.com/diodiogod/TTS-Audio-Suite"
oneLiner: "TTS Audio Suite là bộ node ComfyUI cho text-to-speech, voice conversion, phụ đề SRT và xử lý audio, giúp creator thử nhiều engine giọng nói trong cùng một workspace local."
media:
  - type: "image"
    url: "https://img.youtube.com/vi/aHz1mQ2bvEY/maxresdefault.jpg"
    caption: "Thumbnail video demo TTS Audio Suite."
  - type: "image"
    url: "https://img.youtube.com/vi/VyOawMrCB1g/maxresdefault.jpg"
    caption: "Video hướng dẫn thêm về bộ node TTS Audio Suite."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 1073
  forks: 124
  note: "~325 ngày tuổi, ~3.3 sao/ngày"
standoutFeatures:
  - "Tích hợp nhiều engine TTS và voice conversion như RVC, Echo-TTS, Qwen3-TTS, CozyVoice 3, IndexTTS-2, ChatterBox, F5-TTS, Higgs Audio và VibeVoice."
  - "README nhấn mạnh subtitle workflow: transcribe SRT, rebuild subtitle từ transcript đã chỉnh và ước lượng timing từ plain text."
  - "Có node cho text-to-speech đa ngôn ngữ, voice cloning/voice conversion, audio editing và một số luồng training RVC."
  - "Thiết kế theo môi trường ComfyUI, hợp với người đã dùng node-based workflow cho ảnh/video AI."
signalSources:
  - label: "GitHub"
    url: "https://github.com/diodiogod/TTS-Audio-Suite"

useCases:
  - "Tạo voice-over nháp cho video ngắn bằng nhiều engine TTS khác nhau mà không rời khỏi ComfyUI."
  - "Canh lại phụ đề SRT sau khi sửa transcript để video thuyết minh đỡ lệch nhịp."
  - "Thử voice conversion hoặc clone giọng cho dự án nội bộ có quyền sử dụng giọng rõ ràng."
  - "Ghép audio AI vào workflow ảnh/video ComfyUI sẵn có của studio thay vì xử lý âm thanh ở một app riêng."

workflowStepReplaced: "Khâu chuyển qua lại giữa app TTS, tool phụ đề, phần mềm chỉnh audio và ComfyUI khi làm voice-over cho video."
timeOrCostSaved: "Có thể giảm nhiều thao tác xuất nhập file khi team đã dùng ComfyUI, nhưng vẫn cần thời gian chọn engine và kiểm chất lượng giọng cho từng ngôn ngữ."
localProblem: "Creator Việt làm video ngắn, khoá học, review sản phẩm hoặc clip faceless thường cần voice-over nhanh, phụ đề đúng nhịp và nhiều giọng thử, nhưng các tool rời rạc khiến vòng sửa âm thanh bị đứt đoạn."
localEvidence: "Từ khoá lồng tiếng AI, chuyển văn bản thành giọng nói, clone giọng AI, tạo phụ đề tự động và ComfyUI tiếng Việt đã có nhu cầu rõ; TTS Audio Suite có thể chen vào nhóm người đã quen ComfyUI."

vnMarket:
  insight: "TTS Audio Suite đáng chú ý vì nó kéo bài toán giọng nói vào ComfyUI, nơi nhiều creator đã quen node và batch. Với thị trường Việt, góc dùng thực tế là voice-over nháp, phụ đề SRT và thử nhiều giọng cho video ngắn, không nên hứa thay phòng thu."
  seoKeywords: ["lồng tiếng AI", "chuyển văn bản thành giọng nói", "clone giọng AI", "ComfyUI TTS", "tạo phụ đề SRT", "voice conversion AI"]
  notes: "Dựa trên README và tìm nhanh các truy vấn tiếng Việt quanh lồng tiếng AI, TTS, clone giọng AI, phụ đề SRT, ComfyUI. Cần kiểm thêm chất lượng tiếng Việt của từng engine."

usabilityRisk: "Rủi ro lớn là chất lượng tiếng Việt và quyền sử dụng giọng. Một số engine cần model lớn, GPU, dependency riêng; voice cloning/voice conversion cũng cần dùng với giọng có quyền rõ ràng để tránh rủi ro đạo đức và pháp lý."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn tạo được một đoạn voice-over thử và file SRT khớp tương đối với video ngắn."
  prerequisites:
    - "ComfyUI đã cài và chạy ổn trên máy của bạn."
    - "Một đoạn script ngắn, video mẫu và nếu cần thì file giọng tham chiếu có quyền sử dụng."
    - "Dung lượng để tải model TTS/voice conversion theo engine muốn thử."
  steps:
    - "Cài TTS Audio Suite theo README và khởi động lại ComfyUI để kiểm tra node đã hiện."
    - "Chọn một engine nhẹ hoặc dễ cài trước, tránh thử toàn bộ 16 engine trong cùng buổi."
    - "Tạo một workflow nhỏ: text đầu vào, node TTS, xuất audio, rồi nghe kiểm tra phát âm tiếng Việt hoặc tiếng Anh."
    - "Nếu làm video, đưa transcript vào luồng SRT để tạo hoặc chỉnh timing phụ đề."
    - "So sánh 2-3 engine theo độ tự nhiên, tốc độ, lỗi phát âm và mức dễ chỉnh lại trong hậu kỳ."
  expectedResult: "Bạn có một file audio voice-over nháp và phụ đề đủ khớp để dựng thử video, biết engine nào đáng giữ cho dự án thật."
  commonPitfalls:
    - "Chọn engine nặng ngay từ đầu làm mất thời gian tải model và xử lý lỗi dependency."
    - "Đánh giá voice cloning chỉ bằng một câu ngắn nên không thấy lỗi ngữ điệu ở video dài."
    - "Dùng giọng người khác khi chưa có quyền, đặc biệt với nội dung thương mại."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: bộ node ComfyUI cho voice-over, SRT và thử nhiều giọng AI trong một luồng làm video."
paidToolReplaced: "Một phần thao tác ở ElevenLabs, CapCut voice, tool phụ đề và app chỉnh audio khi làm bản nháp"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê engine trong README, nhưng góc dùng cho creator Việt cần đặt đúng rủi ro tiếng Việt, quyền giọng và quy trình phụ đề."

tags: ["tts", "audio-ai", "comfyui", "voice", "creative", "subtitle"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 18
  costAdvantage: 8
  deployment: 3
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-28
nextReviewDueAt: 2026-09-28
publishedAt: 2026-06-28
week: "2026-W26"
draft: false
---

Ghi chú biên tập: cần Luan kiểm kỹ greyHatFlag vì voice cloning có thể hợp lệ trong studio nội bộ nhưng dễ trượt sang dùng giọng không có quyền.
