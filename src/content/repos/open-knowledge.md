---
name: "OpenKnowledge"
repoUrl: "https://github.com/inkeep/open-knowledge"
oneLiner: "OpenKnowledge là app ghi chú cho người muốn AI đọc và sửa trực tiếp note của mình. Dữ liệu lưu dạng markdown/git bạn sở hữu, nên đây là một lựa chọn thay Obsidian hoặc Notion."

vertical: ["creative", "agency"]

# Pre-viral: CÓ. ~790 sao, mới ~23 ngày tuổi, Show HN 25/06 đang nóng (229▲/111💬), chưa lên GitHub Trending.
maturity: "pre-viral"
repoStats:
  stars: 790
  forks: 23
  note: "~23 ngày tuổi, ~34 sao/ngày"
standoutFeatures:
  - "AI-native: Claude/Codex/Cursor đọc–sửa note trực tiếp trong vault của bạn."
  - "Lưu dạng markdown/git — bạn sở hữu dữ liệu, không khoá vendor."
  - "Phát triển cực nhanh (177 release trong ~23 ngày) — nhưng cũng nghĩa là còn non."
signalSources:
  - label: "Show HN (25/06, 229▲ 111💬)"
    url: "https://news.ycombinator.com/item?id=48675435"

useCases:
  - "Hỏi AI ngay trên kho ghi chú của bạn mà không phải copy-paste context qua lại từng lần."
  - "Cho Claude/Cursor tự đọc và viết tiếp note, dàn ý, tài liệu ngay trong vault của bạn."
  - "Giữ toàn bộ ghi chú ở dạng file markdown/git bạn sở hữu — không bị khoá trong Notion hay Obsidian."

workflowStepReplaced: "Khâu quản lý tri thức/ghi chú: để AI đọc và sửa note trực tiếp thay vì copy-paste qua lại giữa app ghi chú và chatbot."
timeOrCostSaved: "Bớt bước chép context cho AI mỗi lần hỏi; có thể thay phí Notion bản trả phí hoặc Obsidian Sync."
localProblem: "Dev, creator và người làm tri thức ở Việt Nam đang dùng Obsidian/Notion thường muốn AI đọc-sửa ghi chú thật sự, đồng thời muốn dữ liệu nằm trong markdown/git mình sở hữu thay vì bị khóa trong một nền tảng."
localEvidence: "Ở Việt Nam đã có nhiều nội dung về 'bộ não thứ hai' và PKM, nên nhu cầu note + AI là có thật. Đây là phán đoán từ các blog/cộng đồng hiện có, chưa phải khảo sát định lượng."

vnMarket:
  insight: "Cộng đồng PKM / 'bộ não thứ hai' tiếng Việt đang sống động (Tuấn Mon, Thịnh Vũ...). Tệp Obsidian/Notion VN sẵn có, đặc biệt nhạy với hai điểm: 'sở hữu dữ liệu' (không khoá vendor) và 'AI đọc được note của mình'."
  seoKeywords: ["AI đọc ghi chú", "thay Notion Obsidian", "bộ não thứ hai AI", "ghi chú markdown AI", "Obsidian AI tiếng Việt"]
  notes: "Đã tìm Google tiếng Việt + cụm 'thay Notion/Obsidian': KHÔNG thấy bài tiếng Việt nào về OpenKnowledge → đất SEO còn nguyên. Repo mới 25/06."

usabilityRisk: "OpenKnowledge chưa hỗ trợ desktop Windows; hiện desktop ưu tiên macOS, còn Linux/Windows phải chạy bản web qua CLI và cần Node 24+. Đây là rào cản lớn với nhiều người dùng Việt. Repo cũng còn rất mới nên tính năng có thể đổi nhanh."

greyHatFlag: "in"

suggestedAngle: "'Bộ não thứ hai mà AI thực sự đọc được' — đánh thẳng vào người đã dùng Obsidian/Notion ở VN. Nhấn 2 điểm: AI-native (Claude/Codex sửa note trực tiếp) + sở hữu dữ liệu (git/markdown, không khoá vendor)."
paidToolReplaced: "Notion (bản trả phí) / Obsidian Sync"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Repo mới đăng 25/06 → nằm ngoài tri thức hầu hết model (độ trễ). Cộng việc CHƯA creator Việt nào viết → đúng vùng AI mù: 'cái này mới, đang nóng, ở VN chưa ai làm' không tự lấy được từ Trending/hỏi AI."

tags: ["ai", "pkm", "note-taking", "markdown", "claude"]
publishedAt: 2026-06-26
week: "2026-W26"
draft: false
---

**Ghi chú góc viết (NHÁP — Luan duyệt trước khi publish):**

- ⚡ Ca pre-viral điển hình: mới 23 ngày, đang nóng HN, chưa Trending, VN chưa ai viết → **đáng đi trước bây giờ**.
- Lợi thế người-đầu-tiên: viết tuần này là đi trước sóng cho cộng đồng Việt.

⚠️ **Cảnh báo phải nói thẳng cho độc giả (R3 — không hứa chắc chắn viral):**
- Repo rất non: ~23 ngày tuổi, đã 177 release → còn đổi nhanh, có thể vỡ tính năng.
- **Chưa hỗ trợ Windows** (chỉ desktop macOS; Linux/Windows chạy bản web qua CLI, cần Node 24+). Đa số độc
  giả VN dùng Windows → đây là rào lớn, đừng giấu.

> Record nháp qua pipeline `hunt → synthesize → edit`. Kiểm lại link nguồn + trạng thái Windows trước khi xuất bản.
