---
name: "Anima Style Explorer"
repoUrl: "https://github.com/ThetaCursed/Anima-Style-Explorer"
oneLiner: "Anima Style Explorer là thư viện tra cứu trực quan hơn 40.000 phong cách hoạ sĩ gắn tag Danbooru, cho xem trước ảnh minh hoạ trước khi đưa tên hoạ sĩ vào prompt cho model Anima 2B thay vì đoán mò."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/ThetaCursed/Anima-Style-Explorer/main/images/Anima%202B%20Style%20Explorer.png"
    caption: "Giao diện chính: lưới ảnh minh hoạ hàng chục nghìn phong cách hoạ sĩ."
  - type: "image"
    url: "https://raw.githubusercontent.com/ThetaCursed/Anima-Style-Explorer/main/images/Anima%202B%20Style%20Explorer%20-%20Favorites%20Tab.png"
    caption: "Tab Favorites: bộ sưu tập hoạ sĩ đã lưu, tổ chức theo folder."
  - type: "image"
    url: "https://raw.githubusercontent.com/ThetaCursed/Anima-Style-Explorer/main/images/swipe-mode.png"
    caption: "Swipe Mode: duyệt nhanh từng hoạ sĩ một, có phím tắt."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 254
  forks: 29
  note: "~145 ngày tuổi, ~1.8 sao/ngày"
  starsPerDay: 1.8
  ageDays: 145
  pushedAt: "2026-06-03"
  archived: false
  openIssues: 0
standoutFeatures:
  - "Hơn 40.000 preview phong cách hoạ sĩ gắn tag Danbooru, xem trực tiếp bằng ảnh thay vì đọc tên rồi đoán."
  - "Sắp xếp theo A-Z, số lượng ảnh training (Works) hoặc độ 'độc nhất' (Uniqueness Rank) để tìm phong cách hiếm."
  - "Chế độ Swipe tập trung từng hoạ sĩ một, có phím tắt (mũi tên điều hướng, C để copy tên, mũi tên xuống để lưu yêu thích) và tự bỏ qua hoạ sĩ đã lưu."
  - "Chạy hoàn toàn offline bằng Vanilla JS + ảnh WebP, lưu bộ sưu tập yêu thích cục bộ qua IndexedDB, xuất/nhập JSON hoặc danh sách tên .txt."
signalSources:
  - label: "GitHub"
    url: "https://github.com/ThetaCursed/Anima-Style-Explorer"

useCases:
  - "Xem trước ảnh minh hoạ của hơn 40.000 phong cách hoạ sĩ trước khi quyết định đưa tên nào vào prompt, thay vì gõ tag rồi generate thử để đoán."
  - "Lọc phong cách hiếm, ít người dùng (Uniqueness Rank cao) để ảnh AI của bạn không bị trùng gu với số đông."
  - "Duyệt nhanh hàng trăm hoạ sĩ bằng chế độ Swipe, lưu ngay những cái ưng vào bộ sưu tập riêng theo dự án."
  - "Gom các phong cách đã chọn vào từng folder theo dự án (vd bộ nhân vật, bộ minh hoạ bìa) rồi xuất file tên để chia sẻ cho cả team."
  - "Chạy hoàn toàn offline trên trình duyệt, không cần tài khoản hay kết nối mạng khi đã tải trang một lần."

workflowStepReplaced: "Khâu tự thử-sai để tìm tên hoạ sĩ Danbooru phù hợp phong cách mong muốn khi viết prompt cho model Anima 2B hoặc hệ Danbooru-tag tương tự."
timeOrCostSaved: "Không thay tool trả phí cụ thể; tiết kiệm chủ yếu ở số vòng generate-thử-sai để tìm đúng phong cách — người vẽ AI làm việc nghiêm túc có thể giảm đáng kể số lần chạy model chỉ để 'xem thử style này ra sao'."
localProblem: "Người vẽ AI anime/2D ở VN dùng model như Anima 2B hay các checkpoint tương thích Danbooru-tag thường phải mò tên hoạ sĩ bằng cách gõ thử prompt nhiều lần mới biết phong cách ra sao. Anima Style Explorer cho xem trước ảnh minh hoạ hơn 40.000 phong cách trước khi đưa vào prompt, tiết kiệm hẳn công thử-sai."
localEvidence: "Cộng đồng vẽ AI anime VN (nhóm Facebook, Discord Civitai VN, diễn đàn NovelAI/Stable Diffusion tiếng Việt) đã quen thao tác với danh sách artist tag Danbooru, nhưng chưa thấy nội dung tiếng Việt nào nhắc tới công cụ Anima Style Explorer hay model Anima 2B cụ thể."

vnMarket:
  insight: "Cộng đồng vẽ AI anime ở VN (Civitai, NovelAI, các nhóm Facebook vẽ AI) đã quen thao tác với 'artist tag' để chỉnh phong cách, nhưng thường tra cứu bằng danh sách text hoặc wiki, không có công cụ xem ảnh trước hàng loạt và lọc theo độ hiếm. Anima Style Explorer lấp đúng khoảng trống đó cho ai đang dùng model Anima 2B hoặc hệ sinh thái Danbooru-tag tương tự. Vì đây là công cụ ngách gắn với một model ít người VN biết tên, whitespace nội dung tiếng Việt gần như trống, nhưng thị trường mục tiêu (người vẽ AI anime nghiêm túc, không phải người dùng phổ thông) cũng nhỏ hơn nhiều so với các tool tạo ảnh đại trà."
  seoKeywords: ["danh sách phong cách hoạ sĩ AI vẽ anime", "tag Danbooru cho AI vẽ", "công cụ tra cứu style AI art", "prompt phong cách hoạ sĩ AI", "Anima 2B tiếng Việt"]
  notes: "Verify qua WebSearch 2026-07-02: không tìm thấy nội dung tiếng Việt nào về Anima 2B hay Anima Style Explorer; đây là ngách rất hẹp (cộng đồng vẽ AI anime dùng một model cụ thể). Cần Luan xác nhận độ lớn cộng đồng VN dùng Anima 2B trước khi đầu tư nội dung."

usabilityRisk: "Chỉ hữu ích nếu bạn thực sự dùng model Anima 2B hoặc hệ sinh thái Danbooru-tag tương thích — đây không phải công cụ tạo ảnh, chỉ là thư viện tra cứu tên/phong cách để bạn tự đưa vào prompt ở nơi khác (ComfyUI, WebUI...). Dùng tên hoạ sĩ thật để định hướng phong cách AI vẽ vẫn là chủ đề gây tranh cãi bản quyền/đạo đức trong giới vẽ — cân nhắc kỹ trước khi dùng phong cách của một hoạ sĩ còn sống cho sản phẩm thương mại."

practitionerGuide:
  outcome: "Sau guide này bạn có một danh sách 5-10 tên hoạ sĩ Danbooru phù hợp phong cách bạn muốn, đã xem ảnh minh hoạ trước, sẵn sàng dán vào prompt."
  prerequisites:
    - "Trình duyệt để mở trang tĩnh (không cần cài đặt, chạy được offline)."
    - "Đã có sẵn model Anima 2B hoặc pipeline ComfyUI/WebUI tương thích tag Danbooru để test prompt."
  steps:
    - "Mở trang Anima Style Explorer, dùng ô tìm kiếm hoặc bộ lọc Works/Uniqueness để lọc theo phong cách bạn hình dung."
    - "Bật Swipe Mode để duyệt nhanh từng hoạ sĩ một, bấm mũi tên xuống để lưu những cái ưng vào Favorites."
    - "Gộp các hoạ sĩ đã lưu vào một folder riêng theo dự án, xuất ra file .txt danh sách tên."
    - "Copy tên hoạ sĩ (bấm trực tiếp vào card) rồi dán vào prompt ở ComfyUI/WebUI, test thử với model Anima 2B."
    - "So sánh vài phong cách khác nhau trên cùng một bố cục ảnh để chọn ra phong cách ổn định nhất cho dự án."
  expectedResult: "Bạn có sẵn danh sách hoạ sĩ đã xem trước phong cách, giảm hẳn số lần thử-sai khi viết prompt, và một bộ favorite lưu lại cho lần sau."
  commonPitfalls:
    - "Tưởng đây là công cụ tạo ảnh — thực ra chỉ là thư viện tra cứu tên, bạn vẫn phải tự generate ở nơi khác."
    - "Chọn phong cách của hoạ sĩ còn sống rồi dùng cho sản phẩm thương mại mà không cân nhắc vấn đề bản quyền/đạo đức."
    - "Dữ liệu Favorites lưu cục bộ trình duyệt (IndexedDB) — quên export sẽ mất khi đổi máy hoặc xoá cache."

greyHatFlag: "borderline"

suggestedAngle: "Góc creator: 'Cách chọn phong cách hoạ sĩ cho AI vẽ anime bằng thư viện 40.000 style thay vì đoán mò tag' — dành cho kênh hướng dẫn vẽ AI/prompt engineering, nhớ nhắc rõ vấn đề bản quyền/đạo đức khi dùng tên hoạ sĩ còn sống."
paidToolReplaced: "Không có tool trả phí tương đương trực tiếp — thay thế công tự tra cứu/thử tay từng tên hoạ sĩ trên Danbooru hoặc wiki cộng đồng."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI/Trending nói được 'có công cụ liệt kê 40.000 style hoạ sĩ Danbooru', nhưng việc chọn phong cách nào hợp gu VN, cách dùng an toàn về bản quyền và cách phối với pipeline ComfyUI/WebUI phổ biến ở VN là phần cần biên tập."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 0
  deployment: 15
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-02
nextReviewDueAt: 2026-09-30

tags: ["creative", "ai-art", "anime", "danbooru", "prompt-engineering"]
publishedAt: 2026-07-02
week: "2026-W27"
draft: false
---

Record nháp sinh trong daily pipeline ngày 2026-07-02 (nguồn: github-search, 254 sao). Đã gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) độ lớn thực tế của cộng đồng VN dùng model Anima 2B/hệ Danbooru-tag (ngách rất hẹp, có thể không đáng đầu tư bài riêng), (2) cân nhắc lại `greyHatFlag: borderline` — đã gắn vì chủ đề "mượn phong cách hoạ sĩ thật cho AI" còn tranh cãi bản quyền/đạo đức, cần Luan xác nhận khung kể phù hợp, (3) `costAdvantage: 0` vì không xác định được tool trả phí tương đương — kiểm lại nếu có bằng chứng khác.
