---
name: "Postiz"
repoUrl: "https://github.com/gitroomhq/postiz-app"
oneLiner: "Postiz giúp bạn tự cài một lịch đăng bài đa kênh trên máy/VPS: Facebook, TikTok, Threads, YouTube, LinkedIn... kèm AI viết caption, như một lựa chọn thay Buffer/Hootsuite để bớt phí hằng tháng."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/8b9b7939-da1a-4be5-95be-42c6fce772de"
    caption: "Giao diện Postiz — lịch đăng đa kênh."
  - type: "image"
    url: "https://github.com/user-attachments/assets/a27ee220-beb7-4c7e-8c1b-2c44301f82ef"
    caption: "Ảnh demo Postiz."
  - type: "image"
    url: "https://github.com/user-attachments/assets/eb5f5f15-ed90-47fc-811c-03ccba6fa8a2"
    caption: "Ảnh demo Postiz."

vertical: ["agency", "creative", "ecom"]

# Đã kiểm chứng: 32k sao, ~3 năm tuổi. Không còn pre-viral nhưng tệp rộng vẫn rất đáng dùng.
maturity: "established"
repoStats:
  stars: 32378
  forks: 6024
  note: "~3 năm tuổi"
standoutFeatures:
  - "Gom nhiều mạng xã hội vào một lịch: Facebook, TikTok, Threads, YouTube, LinkedIn, X..."
  - "AI viết & gợi ý nội dung tích hợp sẵn."
  - "Tự host hoàn toàn, mã nguồn mở (AGPL) — không phí theo tháng."
signalSources:
  - label: "Show HN (2024, đã cũ)"
    url: "https://news.ycombinator.com/item?id=41402138"

useCases:
  - "Lên lịch một lần, đăng cùng lúc lên Facebook, TikTok, Threads, YouTube, LinkedIn — khỏi mở 5 tab dán tay từng nền."
  - "Cắt phí Buffer/Hootsuite hằng tháng (tính bằng USD theo từng kênh) — tự cài trên VPS của bạn, trả một lần là dùng thoải mái."
  - "Nhờ AI viết và biến tấu caption riêng cho từng nền chỉ từ một ý tưởng gốc, thay vì ngồi nghĩ lại từ đầu cho mỗi kênh."

workflowStepReplaced: "Khâu đăng bài đa kênh thủ công và quản lý lịch nội dung: gom Facebook/TikTok/Threads/YouTube/LinkedIn về một lịch."
timeOrCostSaved: "Có thể thay phí Buffer/Hootsuite theo tháng; đăng một lần ra nhiều nền thay vì copy tay từng app."
localProblem: "Hợp với creator và agency Việt chạy nội dung nhiều kênh mỗi ngày — những người đang đăng tay từng nền, hoặc trả phí Buffer/Hootsuite bằng USD theo từng kênh mỗi tháng và thấy xót."
localEvidence: "Ở Việt Nam đã có cộng đồng quan tâm tự cài Postiz (vnrom, nghiaapple, group 'Bình dân học AI' đều có bài), nên nhu cầu bỏ phí SaaS đăng bài là có thật. Phần cài đặt đã khá nhiều; chỗ còn trống là góc vận hành thực chiến."

vnMarket:
  insight: "Creator/agency VN chạy đa kênh đang trả phí Buffer/Hootsuite bằng USD hoặc đăng tay từng nền. Góc CÀI ĐẶT đã bão hoà (vnrom, nghiaapple, Bình dân học AI) — còn đất ở góc VẬN HÀNH thực chiến: workflow chạy đa kênh + so chi phí vs Buffer + AI Writer."
  seoKeywords: ["tự host Postiz", "thay Buffer", "đăng bài đa kênh tự động", "Postiz tiếng Việt", "lên lịch đăng bài miễn phí"]
  notes: "Đã tìm ở Google tiếng Việt + YouTube + group Facebook. Góc cài đặt đã bão hoà; cần Luan kiểm thêm group creator (không phải group self-host)."

usabilityRisk: "Muốn tự cài thì cần biết dùng Docker/VPS; đây không phải kiểu bấm một phát là chạy. Ai không rành kỹ thuật sẽ hơi vất ở khâu cài, nhưng hướng dẫn tiếng Việt đã khá nhiều nên không đến nỗi bí."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một lịch nội dung đa kênh đầu tiên và thử được một vòng đăng bài từ cùng một ý tưởng."
  prerequisites:
    - "Một máy hoặc VPS có thể chạy Docker."
    - "Ít nhất 2-3 kênh social thật mà bạn đang quản lý, ví dụ Facebook Page, TikTok hoặc LinkedIn."
    - "Một batch nội dung nhỏ để test, như 3 bài post hoặc một tuần lịch đăng."
  steps:
    - "Dựng Postiz theo hướng dẫn sẵn có và kết nối thử vài kênh quan trọng nhất trước, không cần nối hết toàn bộ nền tảng ngay."
    - "Tạo một lịch nội dung nhỏ cho 3-5 bài để xem giao diện, trạng thái publish và cách quản lý nhiều kênh."
    - "Dùng AI Writer hoặc caption variation trên một ý tưởng gốc để xem công cụ giúp nhanh ở đâu và dở ở đâu."
    - "Lên lịch publish thử cho vài kênh khác nhau rồi theo dõi xem việc đăng, preview và sửa nội dung có ổn không."
    - "So chi phí và công sức vừa bỏ ra với cách cũ: đăng tay, Buffer hoặc Hootsuite."
  expectedResult: "Bạn có một vòng thử thật cho lịch đăng đa kênh và biết Postiz có giảm công thao tác hay giảm phí SaaS cho team mình không."
  commonPitfalls:
    - "Ôm luôn toàn bộ social stack ở lần đầu thay vì chỉ kiểm tra 2-3 kênh cốt lõi."
    - "Tưởng phần cài đặt là khó nhất, trong khi bài toán thật nằm ở workflow nội dung và kiểm lỗi publish."
    - "Tin hoàn toàn caption AI mà không chỉnh lại theo giọng thương hiệu từng nền tảng."

greyHatFlag: "in"

suggestedAngle: "Đừng làm lại bài 'cài Postiz' (đã bão hoà). Góc còn đất: 'Agency/creator VN bỏ Buffer, tự chạy đa kênh bằng Postiz' — tập trung workflow + tiết kiệm phí USD, không phải hướng dẫn Docker."
paidToolReplaced: "Buffer / Hootsuite / Hypefury"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Postiz là gì (commodity). Nhưng cảnh báo 'ở VN đã có vnrom/nghiaapple/Bình dân học AI viết bài cài đặt rồi → đừng làm lại góc đó' là insight độ-bão-hoà mà practitioner không tự lấy chắc từ Trending/hỏi AI."

tags: ["self-hosted", "social-media", "content-creator", "ai"]
publishedAt: 2026-06-26
week: "2026-W26"
draft: false
---

**Ghi chú góc viết (NHÁP — Luan duyệt trước khi publish):**

- ⚠ Đây **không** phải ca pre-viral: repo đã 32k sao, sóng đã qua. Giá trị duy nhất còn lại nằm ở
  **góc insight ngành VN**: tránh viết trùng phần cài đặt đã có người làm.
- Nếu viết, đẩy mạnh khía cạnh chi phí: Buffer/Hootsuite tính phí theo kênh + theo tháng (USD), Postiz
  tự host trả 1 lần hạ tầng.
- Khía cạnh AI Writer + đăng đa kênh từ 1 lịch là điểm hợp creator/agency Việt làm nhiều nền cùng lúc.

> Record nháp qua pipeline `hunt → synthesize → edit`. Kiểm lại các link nguồn trước khi xuất bản.
