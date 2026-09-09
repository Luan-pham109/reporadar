---
name: "Xianyu RPA"
repoUrl: "https://github.com/zejue/xianyu-rpa"
oneLiner: "Xianyu RPA là bộ công cụ tự động hóa vận hành cho người bán trên Xianyu (chợ đồ cũ C2C của Alibaba): gộp nhiều gian hàng vào một màn hình tiếp khách, tự phát hàng/xử lý đơn, AI trả lời khách và tự '擦亮' đẩy sản phẩm. Nhưng vì nó là RPA lách nền tảng, phát hành dưới dạng file exe đóng kèm mã kích hoạt và chỉ chạy cho một sàn Trung Quốc, đây là case cần cảnh báo mạnh chứ không phải tool sạch để dùng ngay."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/0bbcaa35-2543-4aa9-8e7a-ae21521da21e"
    caption: "Màn hình web gộp tiếp khách nhiều gian hàng (ảnh từ README repo, giao diện tiếng Trung)."
  - type: "image"
    url: "https://github.com/user-attachments/assets/6cbbd34e-2bca-4719-8b1f-befb67e0ce54"
    caption: "Bảng tổng quan dữ liệu vận hành gian hàng (ảnh từ README repo)."

vertical: ["ecom", "agency"]

maturity: "pre-viral"
repoStats:
  stars: 45
  forks: 0
  note: "~7 ngày tuổi, ~6.4 sao/ngày"
  starsPerDay: 6.4
  ageDays: 7
  pushedAt: 2026-08-09T07:57:03Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Gộp tiếp khách đa gian hàng: đưa nhiều network/gian hàng Xianyu về một màn hình web, đồng bộ lịch sử hội thoại và nhắc tin chưa đọc — README tự quảng bá đây là tính năng 'toàn võng độc gia' (độc quyền)."
  - "Tự động phát hàng nhiều dạng: text cố định, ảnh, thẻ/card key, hoặc gọi API bên thứ ba; tương thích hàng không quy cách / một quy cách / nhiều quy cách SKU."
  - "AI khách hàng nhiều tầng: trả lời theo từ khóa + AI cấp gian hàng + AI cấp sản phẩm, tự đánh giá tốt sau khi khách nhận hàng và tự nhắc xác nhận nhận hàng."
  - "Vận hành sản phẩm: đồng bộ nguồn hàng từ người bán khác, tối ưu văn án bằng AI để tăng phơi bày, và tự động '擦亮' (làm mới bài đăng) theo lịch để lấy traffic tự nhiên của sàn."
  - "Chạy trên Playwright, chỉ hỗ trợ Windows, triển khai bản địa (local) và phát hành dưới dạng file exe cần mã kích hoạt (激活码) lấy từ trang landing của tác giả."
signalSources:
  - label: "GitHub"
    url: "https://github.com/zejue/xianyu-rpa"

useCases:
  - "Đọc kiến trúc một tool RPA bán hàng đa gian hàng (Playwright + AI khách hàng + tự phát hàng) để hiểu bài toán trước khi tự build cho sàn VN như Chợ Tốt, Shopee hay TikTok Shop."
  - "Dùng làm ví dụ nội bộ để giải thích cho team vì sao RPA lách sàn (auto '擦亮', auto publish, gộp tiếp khách bằng bot) dễ dẫn tới khóa gian hàng."
  - "So sánh trade-off giữa một tool tự động hóa marketplace kiểu RPA đóng (exe + mã kích hoạt) và các công cụ CSKH/đa kênh hợp lệ hơn."

workflowStepReplaced: "Khâu thao tác tay lặp lại của người bán marketplace: tiếp khách nhiều gian hàng, phát hàng số, trả lời hỏi đáp và làm mới/đẩy bài sản phẩm."
timeOrCostSaved: "Nếu bỏ qua rủi ro policy thì class tool này có thể cắt nhiều giờ thao tác lặp lại mỗi ngày cho người bán nhiều gian hàng. Nhưng phần tiết kiệm đó đi kèm nguy cơ khóa gian hàng, chạy exe đóng không audit được và lệ thuộc mã kích hoạt của một tác giả cá nhân — nên không nên tính là lợi ích ròng."
localProblem: "Người bán đa kênh và team CSKH ecom ở Việt Nam có đúng nỗi đau mà tool này chạm: quản nhiều gian hàng cùng lúc, trả lời tin nhắn không xuể, muốn tự phát hàng số (key, tài khoản, file) và tự đẩy sản phẩm để lấy view. Nhưng Xianyu là sàn Trung Quốc không dùng ở VN, nên bản thân tool này không cắm thẳng vào quy trình của shop Việt."
localEvidence: "Các truy vấn kiểu 'phần mềm quản lý bán hàng đa kênh', 'tự động trả lời tin nhắn Shopee', 'chatbot CSKH sàn TMĐT', 'tự động phát hàng số' đều có tệp người tìm ở Việt Nam. Cái thiếu không phải ý tưởng tự động hóa, mà là (1) tool khớp đúng sàn VN và (2) lớp giải thích rõ rủi ro khóa gian hàng, rủi ro chạy exe lạ đăng nhập tài khoản bán hàng, và ranh giới ToS khi RPA marketplace ở scale thật."

vnMarket:
  insight: "Nếu viết về Xianyu RPA, trọng tâm nên là phân tích mẫu hình 'RPA trợ lý người bán marketplace' và ranh giới của nó, không phải giới thiệu như tool dùng được ngay. Ba điểm khiến nó rơi vào vùng cần cảnh báo: (1) chỉ chạy cho Xianyu — sàn C2C đồ cũ của Alibaba, không liên quan sàn VN; (2) phát hành dưới dạng exe đóng cần mã kích hoạt (mô hình hội viên trả phí), tức không đọc được mã và phải chạy một file lạ có quyền đăng nhập tài khoản bán hàng của bạn; (3) các tính năng auto '擦亮', auto publish, gộp tiếp khách bằng bot là thao tác gaming nền tảng, đúng vùng dễ bị phạt."
  seoKeywords: ["phần mềm rpa bán hàng", "tự động trả lời khách sàn tmđt", "quản lý đa gian hàng", "tự động phát hàng số", "chatbot cskh ecommerce", "Xianyu RPA"]
  notes: "Dựa trên README (tiếng Trung), bảng tính năng và phần lấy mã kích hoạt. Chưa thấy tín hiệu HN/Reddit; repo mới 7 ngày, 45 sao, 0 fork. Góc Việt nên tập trung vào platform-fit và account safety thay vì mẹo tăng đơn."

usabilityRisk: "Rủi ro lớn nhất không nằm ở việc cài mà ở bản chất phân phối và pháp lý nền tảng. Tool chỉ hỗ trợ Windows, phát hành dưới dạng exe đóng và bắt buộc xin mã kích hoạt (激活码) từ landing của tác giả — bạn không audit được code nhưng phải để nó đăng nhập và thao tác trên tài khoản bán hàng thật. Nó gắn cứng vào Xianyu nên không dùng được cho sàn VN. RPA làm mới bài đăng, tự publish và gộp tiếp khách bằng bot đều dễ vi phạm quy định nền tảng, dẫn tới khóa gian hàng. Repo mới, 0 fork, README chỉ có tiếng Trung và chưa có cộng đồng VN nào đỡ khi gặp sự cố."

practitionerGuide:
  outcome: "Sau khi đọc guide này, bạn phân biệt được team mình chỉ đang tham khảo mẫu hình RPA bán hàng hay đang tính chạy một exe đóng lên tài khoản marketplace thật — và dừng đúng lúc."
  prerequisites:
    - "Một use case bán hàng cụ thể (đa gian hàng / auto phát hàng / auto CSKH) và tài liệu quy định của sàn bạn thật sự bán trên đó."
    - "Người chịu trách nhiệm về rủi ro gian hàng để chốt xem có được phép thử nghiệm automation hay không."
    - "Hiểu rõ Xianyu là sàn Trung Quốc: nếu bạn không bán trên Xianyu, tool này chỉ có giá trị tham khảo kiến trúc, không phải giá trị vận hành."
  steps:
    - "Đọc README và bảng tính năng để hiểu tool đang tối ưu cho khâu nào: gộp tiếp khách, phát hàng số, AI trả lời hay đẩy bài sản phẩm."
    - "Viết rõ tiêu chí: mục tiêu là học mẫu hình RPA marketplace để tự build cho sàn VN, hay thật sự muốn chạy tool này."
    - "Nếu chỉ nghiên cứu: dừng ở mức đọc mô tả và flow; không tải/chạy exe và tuyệt đối không xin mã kích hoạt để cắm vào tài khoản bán hàng thật."
    - "Nếu vẫn cân nhắc dùng: đối chiếu thẳng với quy định của sàn bạn bán, và nhớ rằng exe đóng + mã kích hoạt nghĩa là bạn tin toàn bộ vào một tác giả cá nhân không rõ danh tính."
    - "So sánh với lựa chọn ít rủi ro hơn: công cụ CSKH/đa kênh chính thống được sàn chấp nhận, hoặc quy trình phát hàng số có kiểm soát của chính nền tảng."
  expectedResult: "Bạn có kết luận rõ Xianyu RPA là một tham khảo về kiến trúc automation bán hàng hay là thứ team bạn không nên chạm — đặc biệt khi nó không khớp sàn VN và phân phối dưới dạng exe đóng."
  commonPitfalls:
    - "Lầm tưởng vì tool 'triển khai bản địa, không lên cloud' nên an toàn — bỏ qua việc exe đóng vẫn có toàn quyền trên phiên đăng nhập của bạn."
    - "Chạy một exe lạ cần mã kích hoạt để đăng nhập tài khoản bán hàng thật chỉ vì tò mò."
    - "Áp mẫu hình auto '擦亮'/auto publish sang sàn VN mà không đọc quy định nền tảng, dẫn tới khóa gian hàng."

greyHatFlag: "out"

suggestedAngle: "Nếu giữ record, nên kể như bài phân tích về mẫu hình 'RPA trợ lý người bán marketplace' và ranh giới ToS + rủi ro exe đóng, không nên kể như tool tăng đơn dùng được ngay ở VN."
paidToolReplaced: "Các phần mềm trợ lý người bán / CSKH marketplace trả phí (nhóm tool auto-reply, auto-ship, đa gian hàng)."
creatorWhitespace: false

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê tính năng từ README, nhưng việc đánh giá vì sao repo này trượt sang vùng out theo tiêu chí RepoRadar — platform-fit VN, rủi ro exe đóng + mã kích hoạt, gaming nền tảng — vẫn cần lớp curation của người làm nội dung."

tags: ["rpa", "ecommerce", "automation", "playwright", "policy-risk", "ecom"]
scoreBreakdown:
  useCaseFit: 4
  projectHealth: 17
  costAdvantage: 4
  deployment: 4
  documentation: 7
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-15
nextReviewDueAt: 2026-11-13
publishedAt: 2026-08-15
week: "2026-W33"
draft: true
---

Draft từ daily pipeline (2026-08-15). Case grey-hat "out" cùng nhóm với SocialCrabs: cần Luan quyết định giữ như bài phân tích/cảnh báo về RPA marketplace hay bỏ hẳn khỏi mặt tiền.

Lưu ý khi review:
- Tool chỉ phục vụ Xianyu (sàn C2C Trung Quốc) — không khớp sàn VN, giá trị với độc giả VN chủ yếu là tham khảo kiến trúc + cảnh báo.
- Phân phối dưới dạng exe đóng cần mã kích hoạt (激活码), mô hình hội viên trả phí; không audit được và có quyền trên tài khoản bán hàng người dùng. Đây là lý do chính đẩy về "out".
- Media là 2 ảnh screenshot hotlink từ README (giao diện tiếng Trung). Cân nhắc bỏ media nếu không muốn hiển thị UI của tool grey-hat trên mặt tiền.
- repoStats lấy từ signals của queue (45 sao, 0 fork, ~7 ngày). Không có tín hiệu HN/Reddit.
