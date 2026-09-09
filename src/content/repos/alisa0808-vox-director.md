---
name: "Vox Director"
repoUrl: "https://github.com/Alisa0808/vox-director"
oneLiner: "Vox Director là agent skill biến một chủ đề thành video explainer/quảng cáo phong cách 'paper-collage' kiểu Vox: tự viết kịch bản, dựng keyframe collage, thêm chuyển động, voice-over, nhạc và phụ đề rồi ghép ra mp4."
media:
  - type: "video"
    url: "https://github.com/user-attachments/assets/ed08d230-7bcb-4b48-a17d-23c079208f9f"
    caption: "Phim mẫu Vox Director: 'The evolution of Chinese civilization', 30 giây."
  - type: "image"
    url: "https://raw.githubusercontent.com/Alisa0808/vox-director/main/assets/thumbs/football.jpg"
    caption: "Thumbnail phim explainer 'How football conquered the world'."
  - type: "image"
    url: "https://raw.githubusercontent.com/Alisa0808/vox-director/main/assets/thumbs/money.jpg"
    caption: "Thumbnail phim explainer 'A brief history of money'."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 932
  forks: 135
  note: "~23 ngày tuổi, ~40.5 sao/ngày"
  starsPerDay: 40.5
  ageDays: 23
  pushedAt: 2026-07-30T16:21:18Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Một chủ đề chạy qua pipeline: beat map → bake-off chọn style → keyframe collage → animate → voice + nhạc → ffmpeg ghép ra final.mp4."
  - "Ba luồng đầu vào: B-roll (chỉ cần chủ đề), A-roll (có sẵn video talking-head, giữ mặt/khẩu hình), C-roll (một ảnh tĩnh, cắt nhân vật thành sticker)."
  - "Hai cổng quyết định của người dùng: duyệt beat map và tự mắt chọn style, còn lại tự động hoá."
  - "Chạy được với mọi coding agent (Claude Code, Codex...) dựa trên Atlas Cloud API + ffmpeg local."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Alisa0808/vox-director"

useCases:
  - "Biến một chủ đề thành video explainer 30-60 giây phong cách collage để đăng social hoặc làm content giáo dục."
  - "Dựng nhanh video quảng cáo dạng giải thích cho sản phẩm/dịch vụ mà không cần ekip motion graphics."
  - "Re-style một video talking-head có sẵn thành phong cách collage mà vẫn giữ mặt và khẩu hình thật (A-roll)."
  - "Từ một tấm ảnh (selfie, ảnh sản phẩm) dựng loạt poster collage quanh nhân vật đó, kèm voice-over nhân bản giọng (C-roll)."

workflowStepReplaced: "Cả chuỗi sản xuất video explainer collage: viết kịch bản, dựng keyframe, animate, lồng tiếng, nhạc, phụ đề và ghép."
timeOrCostSaved: "Có thể thay việc thuê ekip motion graphics cho video explainer ngắn, nhưng phát sinh chi phí gọi Atlas Cloud API (nano-banana, gemini, kling, tts, music...) tính theo lượt render."
localProblem: "Team content, agency và creator VN muốn ra video explainer/quảng cáo có phong cách riêng nhưng làm motion graphics thủ công rất tốn ekip và thời gian; các tool tạo video AI phổ thông thì cho ra clip generic, khó có 'gu' collage."
localEvidence: "Nhu cầu làm video ngắn explainer/quảng cáo ở VN rất lớn (TikTok, Reels, YouTube Shorts). Phong cách paper-collage kiểu Vox thì lạ và có nhận diện. Chưa thấy nội dung tiếng Việt về skill này; cần kiểm thêm chi phí thực tế của Atlas Cloud."

vnMarket:
  insight: "Ở VN đa số creator dựng video ngắn bằng CapCut hoặc các tool text-to-video generic; rất ít ai theo được một phong cách motion có nhận diện như collage Vox mà không cần motion designer. Rào cản lớn nhất không phải kỹ thuật mà là phải có Atlas Cloud API key và trả tiền theo lượt render — điều team VN cần cân nhắc trước khi tính đưa vào quy trình."
  seoKeywords: ["tạo video explainer bằng AI", "làm video hoạt hình collage", "AI làm video quảng cáo", "video giải thích tự động", "agent skill làm video", "text to video AI"]
  notes: "Suy luận từ README. Chưa kiểm được nội dung tiếng Việt và mức phí Atlas Cloud thực tế cho một video."

usabilityRisk: "Cần một coding agent (Claude Code/Codex), ffmpeg và đặc biệt là Atlas Cloud API key trả phí — đây là skill do chính Atlas Cloud làm để demo/bán API của họ, nên gần như buộc dùng hạ tầng của họ. Repo mới (23 ngày), chưa có cộng đồng VN, chưa rõ chi phí mỗi video."

practitionerGuide:
  outcome: "Sau guide này bạn có một video explainer collage (final.mp4) ngắn, đủ để đánh giá phong cách và quyết định có đưa vào quy trình không."
  prerequisites:
    - "Một coding agent (Claude Code / Codex) cài được skill."
    - "Atlas Cloud API key (trả phí theo lượt render) — set biến ATLASCLOUD_API_KEY."
    - "ffmpeg + ffprobe và Python 3 kèm Pillow (cho phụ đề/watermark)."
  steps:
    - "Cài skill: git clone repo vào ~/.claude/skills/vox-director (hoặc cài file .skill qua UI)."
    - "Đặt biến môi trường ATLASCLOUD_API_KEY với key lấy từ console Atlas Cloud."
    - "Yêu cầu agent, ví dụ: 'Làm video collage kiểu Vox giới thiệu món ăn đường phố Mexico — tiếng Anh, 16:9, 15 giây.'"
    - "Duyệt beat map agent đề xuất, rồi chọn style trong bước bake-off (agent render cùng một beat ở 3-4 theme)."
    - "Để agent chạy tiếp keyframe → animate → voice → nhạc và ghép ra out/<project>/final.mp4, rồi xem lại."
  expectedResult: "Ra một mp4 ngắn có phong cách collage rõ, có voice-over, nhạc nền và phụ đề; đủ để đánh giá chất lượng và chi phí."
  commonPitfalls:
    - "Chưa có/hết credit Atlas Cloud nên pipeline dừng giữa chừng ở bước gọi model."
    - "Bỏ qua bước duyệt beat map/style nên video ra lệch ý ngay từ kịch bản."
    - "Kỳ vọng miễn phí — thực tế mỗi video tốn phí API, cần thử một clip ngắn để ước lượng chi phí trước."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Dựng video explainer phong cách Vox chỉ từ một câu chủ đề' — nhấn phong cách collage có nhận diện, kèm cảnh báo rõ về Atlas Cloud API trả phí."
paidToolReplaced: "Ekip motion graphics / một phần công cụ làm explainer video trả phí"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được pipeline, nhưng việc chỉ ra đây là skill do Atlas Cloud làm để bán API, rào cản chi phí và độ hợp với creator VN là phần cần người biên tập đánh giá."

tags: ["video", "explainer", "collage", "creative", "agency", "claude-skill", "ffmpeg"]
scoreBreakdown:
  useCaseFit: 15
  projectHealth: 19
  costAdvantage: 11
  deployment: 6
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-02
nextReviewDueAt: 2026-10-31
publishedAt: 2026-08-02
week: "2026-W31"
draft: false
---

Record nháp foundation (pipeline 2026-08-02).

Cần Luan review trước khi publish:
- Đây là skill do **Atlas Cloud** làm và buộc dùng API trả phí của họ — cần cân nhắc khung kể (borderline về mặt "quảng cáo API"?) và nêu rõ chi phí.
- Repo rất mới (23 ngày, 932 sao) → confidence để `low`.
- Media: video mẫu là user-attachment; hai thumbnail lấy từ đường dẫn raw `assets/thumbs/*.jpg` — cần kiểm hotlink sống trước khi publish.
