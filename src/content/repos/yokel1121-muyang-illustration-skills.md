---
name: "沐阳插画 Skills (Muyang Illustration Skills)"
repoUrl: "https://github.com/yokel1121/muyang-illustration-skills"
oneLiner: "Bộ skill cho Codex gói sẵn 25 phong cách minh họa cố định (thời trang, biên tập tối giản, đông phương, điện ảnh...) để bạn chỉ cần nói chủ thể là ra hình đúng phong cách, khỏi phải tự chỉnh prompt."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/0a3f4ef1-9f28-47bd-b727-196eaab66f76"
    caption: "Bảng mẫu các phong cách minh họa cố định trong bộ skill."
  - type: "image"
    url: "https://github.com/user-attachments/assets/b942054c-cad1-4e5a-8dc9-a039a7ab3dec"
    caption: "Một nhóm phong cách minh họa mẫu."
  - type: "image"
    url: "https://github.com/user-attachments/assets/3023d076-476a-4817-a291-fabff8ef7067"
    caption: "Thêm ví dụ phong cách minh họa."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 180
  forks: 27
  note: "~6 ngày tuổi, ~30 sao/ngày"
  starsPerDay: 30
  ageDays: 6
  pushedAt: "2026-08-11"
  archived: false
  openIssues: 0
standoutFeatures:
  - "Không phải một prompt chung chung mà là 1 skill tổng và 8 skill con, mỗi cái gói sẵn công thức prompt cho từng nhóm phong cách."
  - "25 phong cách được phân loại rõ (biên tập tối giản,撞色 thời trang,柔焦 mộng ảo, nhã trắng cao cấp, ám hắc thời trang, đông phương thi ý, in ấn hoài cổ, tự sự điện ảnh)."
  - "Cơ chế cố định: người dùng chỉ đưa chủ thể và chọn phong cách, skill không tự ý mở rộng chủ thể hay trộn phong cách, không lộ prompt trung gian."
  - "Mỗi phong cách có ảnh mẫu và link nguồn gốc, README có sơ đồ mermaid mô tả luồng làm việc."
signalSources:
  - label: "GitHub"
    url: "https://github.com/yokel1121/muyang-illustration-skills"

useCases:
  - "Sinh nhanh một bộ hình minh họa đồng nhất theo một phong cách cố định cho bài viết, post hoặc newsletter mà không phải căn prompt lại mỗi lần."
  - "Thử nhiều phong cách khác nhau cho cùng một chủ thể (vd nhân vật, sản phẩm) để chọn hướng visual trước khi làm bộ ảnh chính."
  - "Chuẩn hóa visual language cho nội dung dạng seri: cùng một look thời trang/biên tập cho nhiều hình liên tiếp."
  - "Làm ảnh minh họa có cá tính cho content mạng xã hội kiểu Xiaohongshu/Instagram thay vì dùng ảnh stock chung chung."

workflowStepReplaced: "Khâu tự viết và tinh chỉnh prompt phong cách cho từng ảnh minh họa."
timeOrCostSaved: "Bỏ bớt vòng thử prompt phong cách: chọn 1 trong 25 preset là ra ngay hình cùng look, thay vì mò từng câu lệnh cho mỗi ảnh."
localProblem: "Ekip content và creator Việt khi cần minh họa theo trend thường tốn thời gian mò prompt để giữ đúng một phong cách xuyên suốt. Bộ preset cố định này hợp với người muốn look đồng nhất mà không phải là dân prompt chuyên sâu."
localEvidence: "Nội dung minh họa phong cách (thời trang, biên tập, đông phương) đang được cộng đồng creator Việt và Trung dùng nhiều cho social. Tìm nhanh theo tên repo, độ phủ tiếng Việt gần như chưa có — đây là bản khám phá sớm."

vnMarket:
  insight: "Người làm content Việt quanh mảng minh họa AI hiện chủ yếu tự lưu vài prompt phong cách rồi copy-paste, hoặc mua preset lẻ. Giá trị của bộ này nằm ở việc đóng gói 25 công thức thành skill gọi được trong Codex, giữ phong cách ổn định. Hạn chế lớn: toàn bộ mô tả và tương tác là tiếng Trung."
  seoKeywords: ["Codex skill minh họa", "prompt phong cách minh họa AI", "preset phong cách vẽ AI", "phong cách minh họa thời trang AI", "skill vẽ minh họa Codex", "prompt ảnh Xiaohongshu"]
  notes: "Dựa trên README repo (tiếng Trung) và tìm kiếm nhanh quanh các cụm preset phong cách minh họa và Codex skill. Repo mới 6 ngày, chưa thấy thảo luận HN/Reddit hay nội dung tiếng Việt."

usabilityRisk: "Toàn bộ README, tên phong cách và cách tương tác đều bằng tiếng Trung, người không đọc được tiếng Trung sẽ khó dùng đúng. Repo mới 6 ngày, chưa có cộng đồng và chưa được kiểm chứng ổn định. Ảnh sinh ra phụ thuộc backend tạo ảnh mà môi trường Codex của bạn đang nối tới; phong cách cố định nên không hợp brand cần visual riêng biệt."

practitionerGuide:
  outcome: "Chạy xong guide này bạn có thể gọi một phong cách trong bộ và sinh vài hình minh họa cùng look cho một chủ thể cụ thể."
  prerequisites:
    - "Môi trường Codex chạy được skill và có nối tới một backend sinh ảnh."
    - "Đọc được hoặc dịch được tên 25 phong cách tiếng Trung để chọn đúng preset."
    - "Một chủ thể rõ ràng để đưa vào (vd 'một cô gái 20 tuổi mặc áo phông trắng và chân váy ngắn')."
  steps:
    - "Clone repo và copy 9 thư mục trong skills/ (muyang-*) vào thư mục Codex Skills (~/.codex/skills/)."
    - "Tạo task Codex mới hoặc refresh danh sách skill để nhận diện các skill vừa thêm."
    - "Gọi skill tổng $muyang-illustration rồi khai báo chủ thể và phong cách, hoặc gọi thẳng skill con (vd $muyang-fashion-colorblock)."
    - "Sinh 1-2 hình đầu, đối chiếu với ảnh mẫu của phong cách đó trong README xem look có khớp không."
    - "Chỉnh chủ thể hoặc đổi sang phong cách khác trong bộ rồi sinh đủ số hình cần cho seri."
  expectedResult: "Bạn có vài hình minh họa cùng một phong cách nhất quán, look khớp với ảnh mẫu, không bị trộn phong cách hay lệch chủ thể."
  commonPitfalls:
    - "Chọn sai preset vì không đọc được tên phong cách tiếng Trung nên ra look không như ý."
    - "Kỳ vọng phong cách tùy biến brand trong khi bộ này cố ý giữ 25 công thức cố định."
    - "Không kiểm ảnh mẫu trước khi sinh hàng loạt nên tốn lượt mà vẫn sai hướng visual."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: dùng preset phong cách cố định để giữ visual đồng nhất cho seri content, không biến nó thành tool vẽ vạn năng — và lưu ý rào cản tiếng Trung."
paidToolReplaced: "Một phần khâu mua preset/prompt phong cách lẻ và tự lưu prompt Midjourney"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể dịch README, nhưng việc đặt bộ skill tiếng Trung này vào bài toán giữ phong cách đồng nhất cho creator Việt và cảnh báo rào cản ngôn ngữ là lớp curation khó lấy từ trending chung."

tags: ["creative", "illustration", "codex-skill", "prompt", "style-preset"]
scoreBreakdown:
  useCaseFit: 15
  projectHealth: 18
  costAdvantage: 7
  deployment: 13
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-17
nextReviewDueAt: 2026-11-15
publishedAt: 2026-08-17
week: "2026-W34"
draft: true
---

Draft foundation từ pipeline daily (2026-08-17). Repo rất mới (6 ngày, 180 sao) và toàn tiếng Trung — cần Luan cân nhắc:
- Có nên giữ tên tiếng Trung trong public copy hay Việt hóa hoàn toàn tên phong cách.
- Rào cản ngôn ngữ tiếng Trung là điểm trừ lớn cho reader Việt; nếu publish nên nêu rõ.
- Chưa kiểm chứng chất lượng ảnh thực tế (evidenceLevel C, confidence low).
