---
name: "Guizang Social Card Skill"
repoUrl: "https://github.com/op7418/guizang-social-card-skill"
oneLiner: "Guizang Social Card Skill giúp Claude Code/Codex biến bài viết, ảnh hoặc video ngắn thành bộ ảnh carousel kiểu Xiaohongshu và cặp cover mạng xã hội, theo hai hệ visual editorial và Swiss design."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/d370abcc-1fc4-4de1-903a-09020a6556ce"
    caption: "Ví dụ bộ social card do Guizang Social Card Skill tạo."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 5789
  forks: 465
  note: "~67 ngày tuổi, ~86.4 sao/ngày"
  starsPerDay: 86.4
  ageDays: 67
  pushedAt: 2026-07-01T16:39:11Z
  archived: false
  openIssues: 10
standoutFeatures:
  - "Hai hệ visual dùng chung một workflow: điện tử tạp chí (editorial, kiểu Monocle/Kinfolk) và Swiss International (lưới, một màu neo, tương phản font mạnh)."
  - "28 bộ khung layout (16 editorial + 12 Swiss) và 10 preset theme màu; không cho tự chọn hex để giữ nhất quán thẩm mỹ."
  - "3 khổ ảnh dựng sẵn: 1080×1440 (Xiaohongshu 3:4), 2100×900 (21:9) và 1080×1080 (1:1) cho cặp cover."
  - "Xuất single-file HTML rồi render PNG bằng Playwright, kèm script validate tự bắt lỗi tràn khung, font quá nhỏ, đè footer."
signalSources:
  - label: "GitHub"
    url: "https://github.com/op7418/guizang-social-card-skill"

useCases:
  - "Biến một bài viết dài thành bộ ảnh carousel 5-9 tấm để đăng feed, giữ bố cục có gu thay vì ghép chữ lên ảnh thô."
  - "Tạo cặp cover đồng bộ (một tấm ngang 21:9 làm header, một tấm vuông 1:1 làm ảnh chia sẻ) từ cùng một nội dung."
  - "Dựng nhanh thẻ review sản phẩm/tool kiểu Swiss có biểu đồ và số liệu để đăng social."
  - "Cho Claude Code/Codex làm hàng loạt social card một cách nhất quán, đỡ phải mở Canva chỉnh tay từng tấm."

workflowStepReplaced: "Khâu dàn trang và làm ảnh carousel/cover cho social — thay phần thiết kế tay bằng một quy trình HTML → PNG có khung sẵn."
timeOrCostSaved: "Có thể rút việc dựng một bộ carousel từ vài chục phút chỉnh tay xuống một lượt chạy agent, nhưng vẫn cần người biên tập nội dung và duyệt visual."
localProblem: "Team marketing, agency và freelancer Việt phải ra ảnh carousel/cover liên tục cho các nền tảng social, nhưng làm tay từng tấm trong Canva vừa lâu vừa dễ lệch style giữa các bài."
localEvidence: "Nhu cầu 'thiết kế bài đăng', 'làm ảnh carousel', 'cover bài viết' ở VN rất lớn (Canva phổ biến khắp team content). Skill này gốc nhắm Xiaohongshu/WeChat nên khung nội dung thiên về nền tảng TQ; độ hợp với nền tảng VN cần kiểm thêm."

vnMarket:
  insight: "Ở VN đa số team content vẫn dựng carousel/cover bằng Canva với template có sẵn. Giá trị của skill này không phải 'AI làm ảnh' chung chung, mà là ra bộ ảnh có hệ thống thẩm mỹ nhất quán (editorial/Swiss) cho người dùng đã sống trong môi trường agent. Khung mặc định nghiêng về Xiaohongshu/WeChat nên cần biên tập lại cho phù hợp Facebook/Instagram/Threads."
  seoKeywords: ["làm ảnh carousel", "thiết kế bài đăng bằng AI", "tạo cover bài viết", "social card AI", "thay thế Canva", "Claude Code làm ảnh social"]
  notes: "Suy luận từ README và thực tế dùng Canva ở VN. Cần kiểm nội dung tiếng Việt và độ hợp khổ ảnh với nền tảng VN trước khi publish."

usabilityRisk: "Đây là agent skill cho môi trường coding (Claude Code/Codex/Cursor), không phải app kéo thả — cần biết chạy agent và có Node/Playwright để render. Khung layout và ví dụ gốc thiên về Xiaohongshu/WeChat, phải điều chỉnh khi dùng cho nền tảng VN. License AGPL-3.0 (bản phái sinh/SaaS phải mở mã), cần lưu ý nếu định dùng thương mại kín."

practitionerGuide:
  outcome: "Sau guide này bạn có một bộ social card (carousel hoặc cặp cover) xuất ra PNG, đủ để đăng thử hoặc đưa cho designer polish."
  prerequisites:
    - "Claude Code / Codex (hoặc agent có quyền đọc-ghi file và chạy shell) đã cài được skill."
    - "Node.js + Playwright để chạy render.mjs xuất PNG."
    - "Nội dung nguồn: một bài viết, ảnh chụp màn hình, hoặc ghi chú sản phẩm để làm ruột card."
  steps:
    - "Cài skill theo README (npx skills add hoặc git clone vào ~/.claude/skills)."
    - "Đưa nội dung nguồn cho agent và nói rõ nền tảng, phong cách (editorial hay Swiss) và màu neo, ví dụ 'làm bộ Xiaohongshu 5 tấm phong cách Swiss, màu IKB'."
    - "Duyệt bản beat/khung layout agent đề xuất trước khi để nó dựng chi tiết."
    - "Cho agent chạy render.mjs để xuất PNG, rồi mở xem bố cục và chữ."
    - "Yêu cầu chỉnh inline hoặc đổi khung/đổi ảnh cho các tấm chưa ưng, render lại."
  expectedResult: "Bộ PNG ra đúng khổ, chữ không tràn khung, style nhất quán giữa các tấm; đủ tốt để đăng thử hoặc bàn giao."
  commonPitfalls:
    - "Kỳ vọng đây là Canva kéo thả nên bối rối khi phải làm việc qua agent và file HTML."
    - "Không nói rõ nền tảng/phong cách nên agent chọn khung lệch mục đích."
    - "Quên rằng khung gốc thiên về Xiaohongshu/WeChat, đăng thẳng lên nền tảng VN mà chưa chỉnh khổ/nội dung."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Cho Claude Code làm cả bộ carousel có gu trong một lần chạy' — nhấn tính nhất quán style và render PNG tự động, kèm cảnh báo cần chỉnh cho nền tảng VN."
paidToolReplaced: "Canva Pro / một phần việc dàn ảnh social thủ công"
alternativeTo:
  - name: "Canva"
    slug: "canva"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tóm tắt được repo, nhưng góc dùng cho team content/agency VN, cảnh báo khổ ảnh thiên nền tảng TQ và ràng buộc license AGPL là phần cần người biên tập."

tags: ["social-cards", "design", "creative", "agency", "claude-code", "html"]
scoreBreakdown:
  useCaseFit: 17
  projectHealth: 20
  costAdvantage: 14
  deployment: 6
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-08-02
nextReviewDueAt: 2026-10-31
publishedAt: 2026-08-02
week: "2026-W31"
draft: true
---

Record nháp foundation (pipeline 2026-08-02). Đây là **dự án anh em** với `op7418/guizang-ppt-skill` (đã có record riêng): PPT skill giải bài toán "trình chiếu ngang", còn skill này giải "ảnh tĩnh feed / social card". KHÔNG phải trùng — cùng owner nhưng khác repo.

Cần Luan review trước khi publish:
- Khung layout gốc thiên về Xiaohongshu/WeChat — cần cân nhắc/biên tập độ hợp với nền tảng VN.
- License AGPL-3.0: lưu ý nếu có ý định dùng thương mại kín.
