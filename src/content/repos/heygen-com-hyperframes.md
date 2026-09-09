---
name: "HyperFrames"
repoUrl: "https://github.com/heygen-com/hyperframes"
oneLiner: "HyperFrames là framework mã nguồn mở của HeyGen biến file HTML/CSS + animation thành video MP4 cố định (cùng input ra cùng video), làm để AI agent như Claude Code tự viết, preview rồi render video mà không cần mở phần mềm dựng phim."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/public/images/hyperframes-logo-motion-1280-trimmed.webp"
    caption: "Demo HyperFrames: code HTML bên trái biến thành video render bên phải."
  - type: "image"
    url: "https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png"
    caption: "Một mẫu design template (Bold Poster) dựng bằng HyperFrames."
  - type: "image"
    url: "https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/creative-mode.png"
    caption: "Mẫu Creative Mode — một trong các template có sẵn để remix."

vertical: ["creative", "agency"]

maturity: "established"
repoStats:
  stars: 33160
  forks: 3086
  note: "~117 ngày tuổi, ~283 sao/ngày"
  starsPerDay: 283.4
  ageDays: 117
  pushedAt: "2026-07-05T05:11:17Z"
  archived: false
  openIssues: 96
standoutFeatures:
  - "Định nghĩa video bằng HTML thuần + data attribute (data-start, data-duration, data-track-index) — không bắt buộc dùng React hay định dạng timeline riêng như các tool video-as-code khác."
  - "Render cố định (deterministic): cùng input ra cùng frame, cùng video — renderer seek từng khung trong headless Chrome rồi encode bằng FFmpeg, hợp cho CI và pipeline tự động."
  - "Đi kèm 21 skill agent tải theo nhu cầu, dạy Claude Code/Cursor/Gemini CLI/Codex đúng quy trình dựng video (plan → viết HTML → wire animation → thêm media → lint → preview → render)."
  - "Mã nguồn mở Apache 2.0, không tính phí theo lượt render; có sẵn cả render local, render qua AWS Lambda, và playground online tại hyperframes.dev."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=47797513"
  - label: "GitHub"
    url: "https://github.com/heygen-com/hyperframes"

useCases:
  - "Dựng video ra mắt sản phẩm hoặc feature announcement từ một brief/URL, độ dài tới ~3 phút (sweet spot 30-90 giây), ngay trong Claude Code."
  - "Biến một pull request GitHub thành video changelog có diff code animated, giọng đọc và phụ đề — hợp để khoe tính năng mới cho team hoặc khách."
  - "Làm video data-viz, chart race, hoặc map animation từ số liệu mà không phải dựng tay từng khung trong After Effects."
  - "Ghép video social có caption động, overlay và nhạc nền bám nhịp, xuất MP4 hoặc overlay nền trong suốt."
  - "Chạy pipeline docs-to-video / website-to-video tự động: đưa nội dung vào, agent viết HTML rồi render hàng loạt cho content lặp lại."

workflowStepReplaced: "Khâu dựng và render video motion/explainer bằng phần mềm timeline (After Effects) hoặc code video kiểu React — thay bằng viết HTML để agent tự sinh và render qua CLI."
timeOrCostSaved: "README không nêu số giờ/tiền cụ thể; lợi ích rõ nhất là Apache 2.0 miễn phí, không phí theo lượt render — thay cho các tool video-as-code có phí bản quyền theo team; đổi lại bạn tự chịu chi phí máy/compute khi render (headless Chrome + FFmpeg)."
localProblem: "Team creative/agency ở Việt Nam làm nhiều video lặp lại (video ra mắt sản phẩm, explainer, video social theo mẫu) thường kẹt ở khâu dựng tay trong After Effects hoặc CapCut — mỗi biến thể phải mở project sửa tay, khó tự động hoá và khó ghép vào quy trình content hàng loạt."
localEvidence: "Đã có vài bài tiếng Việt viết về HyperFrames (vnrom.net có hướng dẫn cài đặt→render MP4 khá đầy đủ, apidog.com/vi có bài giới thiệu 'chỉnh sửa video bằng AI') — cho thấy chủ đề đã bắt đầu được người Việt để ý, nhưng phần lớn dừng ở giới thiệu/cài đặt, chưa thấy nội dung đi sâu vào usecase ngành (agency dựng video sản phẩm hàng loạt) bằng tiếng Việt."

vnMarket:
  insight: "Ở Việt Nam, dân làm video quảng cáo/social đa số vẫn dùng CapCut, Premiere, After Effects và gần đây là các tool AI text-to-video (Veo, Kling, Sora). HyperFrames khác hẳn nhánh 'AI sinh video từ prompt' — nó là 'video-as-code', hợp với người đã quen HTML/dev hoặc dùng agent code, mạnh nhất ở video có cấu trúc lặp lại và cần chính xác (chart, launch video theo template, changelog). Góc VN nên nhấn đúng chỗ này thay vì so sánh trực tiếp với Veo/Kling, vì đối tượng và bài toán khác nhau."
  seoKeywords: ["tạo video từ HTML", "hyperframes tiếng Việt", "render video bằng code", "công cụ tạo video cho AI agent", "video as code", "dựng video tự động bằng claude code", "hyperframes heygen"]
  notes: "Đã tra 'hyperframes heygen tiếng Việt' và 'tạo video từ HTML AI agent tiếng Việt' — thấy vnrom.net và apidog.com/vi đã có bài, cùng review tiếng Anh (andrew.ooo). Độ bão hoà VN mức trung bình-thấp, còn đất viết theo hướng usecase ngành; cần Luan kiểm thêm nhóm dev/creative VN."

usabilityRisk: "Cần Node.js 22+ và FFmpeg, chạy qua CLI và render bằng headless Chrome — không phải app bấm-là-chạy, hợp người đã quen terminal/dev hoặc dùng agent code, không hợp editor thuần dùng giao diện. Render local ăn CPU/RAM (seek từng frame trong Chrome + encode FFmpeg); muốn nhẹ máy thì phải setup AWS Lambda (thêm bước kỹ thuật). README và docs hoàn toàn tiếng Anh."

practitionerGuide:
  outcome: "Sau guide này, bạn render được một video MP4 đầu tiên từ HTML — hoặc bằng CLI thủ công, hoặc nhờ agent (Claude Code) dựng hộ."
  prerequisites:
    - "Máy đã cài Node.js 22+ và FFmpeg."
    - "Nếu dùng qua agent: đã có Claude Code / Cursor / Gemini CLI / Codex."
  steps:
    - "Cách nhanh nhất: cài skill cho agent bằng `npx skills add heygen-com/hyperframes`, rồi mô tả video muốn làm (vd 'dùng /hyperframes tạo video giới thiệu sản phẩm 10 giây có tiêu đề fade-in')."
    - "Hoặc làm tay: `npx hyperframes init my-video` → `cd my-video`."
    - "`npx hyperframes preview` để xem trước trong trình duyệt với live reload."
    - "`npx hyperframes render` để xuất ra MP4."
    - "Nếu render local nặng máy, xem phần AWS Lambda trong skill `/hyperframes-cli` để render trên cloud."
  expectedResult: "Một file MP4 render đúng như preview; chạy lại cùng input phải ra cùng video (tính deterministic) — đủ để đánh giá có ghép vào pipeline content được không."
  commonPitfalls:
    - "Quên cài FFmpeg hoặc dùng Node dưới 22 → render lỗi ngay từ đầu."
    - "Kỳ vọng nó là 'AI sinh video từ prompt' như Veo/Kling — thực chất phải có (hoặc để agent viết) HTML + animation trước."
    - "Render local trên máy yếu bị chậm/nghẽn vì headless Chrome + FFmpeg ăn tài nguyên; video dài nên cân nhắc Lambda."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator/agency: quay clip 'bảo Claude Code dựng video changelog từ một PR GitHub rồi render ra MP4' — vừa lạ, vừa cho thấy điểm mạnh deterministic + built-for-agents mà tool text-to-video không làm được."
paidToolReplaced: "Remotion (dựng video bằng React/code — HyperFrames còn có skill remotion-to-hyperframes để chuyển qua), và một phần khâu motion/explainer thường làm trong After Effects."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI chung chung sẽ biết 'HyperFrames render video từ HTML', nhưng biết nó là video-as-code (khác hẳn text-to-video), cần Node 22+/FFmpeg, mạnh ở video lặp lại/deterministic và hợp agent hơn editor thủ công — là phần cần người biên tập định vị đúng cho tệp VN, không tự suy ra được từ mô tả một dòng."

tags: ["video", "html", "ai-agent", "claude-code-skills", "creative", "open-source"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 25
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "B"
confidence: "medium"
lastReviewedAt: 2026-07-05
nextReviewDueAt: 2026-10-03
publishedAt: 2026-07-05
week: "2026-W27"
draft: false
---

Draft sinh từ pipeline thủ công theo yêu cầu Luan ngày 2026-07-05 (repo heygen-com/hyperframes). Điểm cần Luan kiểm trước khi publish: (1) định vị "video-as-code" so với nhánh text-to-video (Veo/Kling) đã nói rõ chưa; (2) đã có bài tiếng Việt (vnrom.net, apidog.com/vi) — cân nhắc góc usecase ngành để khác biệt; (3) verify lại media hotlink còn sống.
