---
name: "Kitten TTS"
repoUrl: "https://github.com/KittenML/KittenTTS"
oneLiner: "Kitten TTS là thư viện chuyển văn bản thành giọng nói (text-to-speech) siêu nhẹ, mã nguồn mở: model chỉ 25-80 MB, chạy được trên CPU không cần GPU, dùng để tự sinh giọng đọc cho video/nội dung."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/f4646722-ba78-4b25-8a65-81bacee0d4f6"
    caption: "Kitten TTS — model TTS nhẹ dưới 25MB."
  - type: "image"
    url: "https://github.com/user-attachments/assets/d80120f2-c751-407e-a166-068dd1dd9e8d"
    caption: "Minh hoạ các model Kitten TTS."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 15063
  forks: 864
  note: "~340 ngày tuổi, ~44.3 sao/ngày"
  starsPerDay: 44.3
  ageDays: 340
  pushedAt: 2026-06-11T00:04:42Z
  archived: false
  openIssues: 123
standoutFeatures:
  - "Cực nhẹ: các model từ 15M đến 80M tham số, dung lượng 25-80 MB, xây trên ONNX nên chạy được trên CPU mà không cần GPU."
  - "Có bản v0.8 với 3 kích cỡ model (15M, 40M, 80M) để cân bằng giữa nhẹ và chất lượng giọng."
  - "Có demo trên Hugging Face Spaces và cộng đồng Discord để thử nhanh trước khi tích hợp."
signalSources:
  - label: "GitHub"
    url: "https://github.com/KittenML/KittenTTS"
  - label: "Hugging Face Demo"
    url: "https://huggingface.co/spaces/KittenML/KittenTTS-Demo"

useCases:
  - "Tự sinh giọng đọc (voiceover) cho video ngắn/nội dung mà không cần thuê người đọc hay trả phí dịch vụ TTS đám mây."
  - "Nhúng TTS vào ứng dụng/tool chạy offline trên máy yếu vì model chỉ 25-80 MB và chạy trên CPU."
  - "Thử nghiệm nhanh chất lượng giọng qua demo Hugging Face trước khi quyết định đưa vào quy trình sản xuất nội dung."

workflowStepReplaced: "Khâu thu âm/thuê đọc hoặc trả phí TTS đám mây khi làm voiceover cho video/nội dung."
timeOrCostSaved: "Bỏ phí thuê bao TTS đám mây (ElevenLabs, cloud TTS) cho khối lượng lớn; chạy local nên không tính phí theo ký tự — với điều kiện chất lượng và ngôn ngữ đáp ứng nhu cầu."
localProblem: "Creator/team nội dung Việt làm video hàng loạt (review, kể chuyện, tin tức) cần voiceover rẻ và nhanh, nhưng các dịch vụ TTS chất lượng cao thường tính phí theo ký tự và đội chi phí khi làm nhiều."
localEvidence: "Nhiều kênh YouTube/TikTok Việt dạng 'giọng đọc AI' đang dùng các dịch vụ TTS trả phí hoặc giọng máy miễn phí chất lượng thấp; nhu cầu giọng đọc rẻ, chạy local là có thật trong giới làm content số lượng lớn."

vnMarket:
  insight: "Thị trường voiceover AI ở VN đang bị chi phối bởi dịch vụ có sẵn giọng tiếng Việt (Vbee, FPT.AI Voice, và giọng của ElevenLabs/cloud). Điểm mấu chốt của Kitten TTS với người Việt là CÓ HỖ TRỢ TIẾNG VIỆT hay không — phần lớn model TTS nhẹ dạng này tập trung tiếng Anh. Nếu chưa có giọng Việt tự nhiên, giá trị thực tế cho creator Việt bị giới hạn mạnh dù model rất nhẹ."
  seoKeywords: ["text to speech tiếng Việt miễn phí", "giọng đọc AI offline", "TTS chạy trên CPU", "phần mềm đọc văn bản tiếng Việt", "voiceover AI cho video"]
  notes: "Fit creative rõ về mặt kỹ thuật, nhưng vướng câu hỏi tiếng Việt. CẦN VERIFY chất lượng/độ hỗ trợ tiếng Việt trước khi giới thiệu cho tệp Việt. Độ chắc chắn: thấp."

usabilityRisk: "Rủi ro lớn nhất: nhiều khả năng CHƯA hỗ trợ giọng tiếng Việt tự nhiên (các model TTS siêu nhẹ thường tối ưu cho tiếng Anh) — cần kiểm tra trực tiếp trên demo. Còn ở trạng thái 'developer preview', API có thể đổi giữa các bản. Cài đặt cần biết Python/pip. Nếu chỉ cần giọng Việt, các dịch vụ Việt hoá sẵn có thể phù hợp hơn."

practitionerGuide:
  outcome: "Tự tạo được một file giọng đọc từ đoạn văn bản bằng Kitten TTS trên máy CPU, và tự đánh giá chất lượng giọng (đặc biệt là tiếng Việt) có đủ dùng cho nội dung của bạn không."
  prerequisites:
    - "Python và pip trên máy (không cần GPU)."
    - "Một đoạn văn bản mẫu — nên thử cả tiếng Việt để kiểm tra hỗ trợ ngôn ngữ."
    - "Kết nối mạng để tải model (25-80 MB) lần đầu."
  steps:
    - "Vào demo Hugging Face Spaces, dán thử một đoạn tiếng Việt để nghe giọng trước khi cài."
    - "Nếu chất lượng ổn, cài thư viện theo Quick Start trong README và tải model."
    - "Chạy sinh giọng cho một đoạn văn bản ngắn, xuất ra file audio."
    - "So sánh giọng với công cụ bạn đang dùng để quyết định có đưa vào quy trình không."
  expectedResult: "Ra được file audio rõ tiếng từ văn bản; với tiếng Anh chất lượng thường tốt. Với tiếng Việt, hãy nghe kỹ độ tự nhiên và dấu thanh trước khi tin dùng."
  commonPitfalls:
    - "Giả định có giọng Việt tự nhiên mà không kiểm tra trước — dễ mất công cài xong mới thấy không dùng được cho nội dung Việt."
    - "Kỳ vọng chất lượng ngang dịch vụ trả phí cao cấp; đây là model nhẹ, đổi lại chất lượng có giới hạn."
    - "Bỏ qua cảnh báo 'developer preview' nên bị lỗi khi bản mới đổi API."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, đặt thẳng câu hỏi 'Kitten TTS có đọc được tiếng Việt không?' và test thật, thay vì quảng bá chung chung. Góc trung thực này chính là giá trị cho creator Việt."
paidToolReplaced: "Dịch vụ TTS trả phí theo ký tự (ElevenLabs, cloud TTS) ↔ Kitten TTS chạy local"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Repo khá nổi (15k sao) nên AI biết nó tồn tại, nhưng câu hỏi thực tế của creator Việt — 'nó đọc tiếng Việt có tự nhiên không, có thay được Vbee/ElevenLabs không' — thì phải test mới trả lời được. Giá trị RepoRadar nằm ở kiểm chứng tiếng Việt, không phải ở việc biết repo này."

scoreBreakdown:
  useCaseFit: 12
  projectHealth: 23
  costAdvantage: 13
  deployment: 11
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-11
nextReviewDueAt: 2026-10-09

tags: ["tts", "text-to-speech", "ai", "creative", "onnx", "voiceover"]
publishedAt: 2026-07-11
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue. Fit creative (voiceover). CẢNH BÁO chính: chưa xác nhận hỗ trợ tiếng Việt — đây là yếu tố quyết định giá trị cho tệp Việt và cần Luan/skill test trực tiếp trên demo Hugging Face trước khi publish. Trạng thái repo là 'developer preview'.
