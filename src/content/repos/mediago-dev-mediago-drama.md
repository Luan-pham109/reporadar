---
name: "MediaGo Drama"
repoUrl: "https://github.com/mediago-dev/mediago-drama"
oneLiner: "MediaGo Drama là một xưởng làm 'phim truyện tranh ngắn' (漫剧) chạy trên máy bạn: thả vào một cuốn tiểu thuyết hay kịch bản, các Agent sẽ tự tách nhân vật, viết lại kịch bản, dựng cảnh/đạo cụ, chia phân cảnh rồi sinh ảnh và video thành từng tập."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/mediago-dev/mediago-drama/main/images/taixu-project-overview.png"
    caption: "Trang tổng quan dự án: gom nhân vật, cảnh, đạo cụ, phân cảnh và tư liệu đã sinh về một chỗ."
  - type: "image"
    url: "https://raw.githubusercontent.com/mediago-dev/mediago-drama/main/images/taixu-agent-workspace.png"
    caption: "Bàn làm việc Agent: chạy tách nhân vật, dựng cảnh, viết lại kịch bản và chia phân cảnh trong cùng ngữ cảnh dự án."

vertical: ["creative", "agency"]

maturity: "pre-viral"
repoStats:
  stars: 40
  forks: 12
  note: "~59 ngày tuổi, ~0.7 sao/ngày — repo còn rất mới, tín hiệu thấp"
  starsPerDay: 0.7
  ageDays: 59
  pushedAt: 2026-07-30T02:40:33Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Một pipeline theo trục 'nguyên tác → kịch bản → thiết lập → phân cảnh → tư liệu → video': mỗi giai đoạn để lại một tài liệu có thể đọc, sửa và tái sử dụng thay vì chỉ giữ ảnh/video cuối."
  - "Cách tiếp cận 'document-driven': nhân vật, cảnh, đạo cụ và phân cảnh lưu dưới dạng file Markdown local, vừa là tư liệu cho người biên tập vừa là ngữ cảnh cho Agent chạy các bước sau."
  - "Bộ Skills viết sẵn theo vai (screenplay-writer, character-writer, scene-writer, prop-writer, storyboard-writer, novel-writer, image-generation, video-generation) và có prompt template + preset phong cách (người thật, 2D anime, 3DCG, chibi)."
  - "Model routing tách năng lực khỏi kênh chạy: ảnh dùng dòng gpt-image-2, video dùng dòng Seedance; chạy được trên Codex / OpenCode làm runtime cho Agent."
  - "Ứng dụng desktop (Tauri/Electron) + service Go chạy local; README định vị đây là bản thiên về trải nghiệm dev/workflow local hơn là app đóng gói bấm-một-nút."
signalSources:
  - label: "GitHub"
    url: "https://github.com/mediago-dev/mediago-drama"
  - label: "Website"
    url: "https://mediago.torchstellar.com/"

useCases:
  - "Biến một cuốn tiểu thuyết hoặc truyện dài thành nhiều tập 'phim truyện tranh ngắn' (漫剧/short-drama) mà giữ được nhân vật, bối cảnh và đạo cụ nhất quán xuyên các tập."
  - "Dùng Agent để tự tách nhân vật, phân tích diễn biến, viết lại thành kịch bản phân cảnh và chia storyboard từ một bản thảo, thay vì gõ tay từng bước."
  - "Lưu toàn bộ thiết lập nhân vật/cảnh/đạo cụ dưới dạng tài liệu để tái sử dụng cho tập sau hoặc dự án khác, giảm việc dựng lại từ đầu mỗi lần."
  - "Chạy sinh ảnh nhân vật/cảnh/đạo cụ rồi đẩy tiếp sang sinh video cho từng nhóm cảnh, xem lại theo dạng preview từng tập trong cùng một workspace."
  - "Chuẩn hoá 'công thức' viết kịch bản, phong cách và prompt thành các Skill để cả team dùng chung một quy tắc sản xuất."

workflowStepReplaced: "Khâu tiền kỳ + sản xuất của một series truyện tranh ngắn/short-drama: gộp tách nhân vật, viết kịch bản, dựng thiết lập nhân vật–cảnh–đạo cụ, chia phân cảnh và sinh ảnh/video vào một dây chuyền có ngữ cảnh dự án, thay vì ráp tay nhiều công cụ rời."
timeOrCostSaved: "Không thay hẳn một SaaS cụ thể; tiết kiệm chủ yếu ở công ráp công cụ, quản lý thiết lập nhân vật/cảnh và giữ nhất quán xuyên tập. Sinh ảnh/video vẫn gọi model trả phí (gpt-image-2, Seedance) nên chi phí thật phụ thuộc số ảnh/clip mỗi tập — cần chạy thử một tập để đo."
localProblem: "Team/ekip làm truyện tranh động, short-drama hoặc video kể chuyện dạng series ở VN thường vướng hai chỗ: (1) nhân vật và bối cảnh đổi tạo hình mỗi cảnh, và (2) phải ráp tay tool viết kịch bản + Midjourney/ComfyUI + tool dựng video rời rạc, không có 'bộ nhớ dự án' chung. MediaGo Drama gom cả chuỗi này thành một workspace document-driven, chạy local."
localEvidence: "Trend 漫剧/short-drama AI đang nóng ở thị trường nói tiếng Trung (repo demo bằng dự án '太虚'), và ở VN các từ khoá kiểu 'làm truyện tranh bằng AI', 'AI dựng short drama', 'giữ nhân vật nhất quán AI' cũng đang lên — nhưng chưa thấy nội dung tiếng Việt nào mổ riêng repo này. Lưu ý: repo mới ~59 ngày, mới 40 sao, cần coi là một 'phát hiện sớm' chứ chưa phải tool đã được kiểm chứng cộng đồng."

vnMarket:
  insight: "Ở VN, làm truyện tranh động/short-drama bằng AI hiện phần lớn là ghép tay: một tool viết kịch bản/nội dung, Midjourney hoặc ComfyUI ra hình, tool video riêng, rồi CapCut/Premiere để dựng — và điểm đau lớn nhất vẫn là nhân vật đổi mặt, bối cảnh không khớp giữa các cảnh. MediaGo Drama đánh vào chỗ đó bằng cách lưu thiết lập nhân vật/cảnh/đạo cụ thành tài liệu tái dùng và để Agent bám theo. Rào cản thực tế: repo còn rất sơ khai (40 sao), tài liệu và demo nghiêng hẳn về tiếng Trung, và bản hiện tại thiên về chạy dev (Node/pnpm/Go) hơn là cài xong dùng ngay."
  seoKeywords: ["làm truyện tranh bằng AI", "làm 漫剧 bằng AI", "AI dựng short drama", "giữ nhân vật nhất quán AI", "tạo video từ tiểu thuyết AI", "agent làm phim ngắn AI", "pipeline làm phim AI self-host"]
  notes: "Discovery từ daily pipeline 2026-08-10 (github-search, 40 sao, ~0.7 sao/ngày, 59 ngày tuổi). Chưa verify cộng đồng VN nào đã dùng; cần Luan kiểm nhu cầu thực và độ bão hoà nội dung tiếng Việt quanh 'làm truyện tranh/short drama AI' trước khi publish, và cân nhắc repo còn quá mới."

usabilityRisk: "Bản hiện tại chủ yếu dành cho dev/trải nghiệm workflow local: cần Node.js 24, pnpm 11.9+, Go 1.25+, go-task và phải chạy song song service + desktop (2 terminal), sửa server Go phải build lại — chưa phải app cài-xong-dùng-ngay. Sinh ảnh/video vẫn phụ thuộc model trả phí (gpt-image-2, Seedance) qua cấu hình riêng. Repo rất mới (40 sao, ~59 ngày), phần lớn tài liệu và demo là tiếng Trung, chưa thấy cộng đồng VN; bản phát hành chính thức có thể kèm thành phần thương mại đóng ngoài repo (xem COMMERCIAL_FEATURES)."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được môi trường dev của MediaGo Drama và chạy thử một dự án 漫剧/short-drama nhỏ từ một bản thảo mẫu, đủ để đánh giá độ nhất quán nhân vật, chất lượng ảnh/video và chi phí model trước khi làm loạt."
  prerequisites:
    - "Máy có Node.js 24, pnpm 11.9+, Go 1.25+ và go-task cài sẵn."
    - "Key/model cho sinh ảnh và video theo cấu hình model routing của repo (dòng gpt-image-2 cho ảnh, Seedance cho video); nếu dùng Codex/OpenCode làm runtime Agent thì chuẩn bị tương ứng."
    - "Một bản thảo tiểu thuyết/kịch bản ngắn thật để test thay vì nội dung ảo."
  steps:
    - "Clone repo, chạy `pnpm install` để cài dependency."
    - "Mở 2 terminal: terminal 1 chạy `pnpm dev:server`, terminal 2 chạy `pnpm dev:desktop` để bật service local và app desktop."
    - "Trong app, tạo dự án mới và import bản thảo (tiểu thuyết/kịch bản) làm nguyên tác."
    - "Ở bàn làm việc Agent, lần lượt chọn các Skill (screenplay-writer → character-writer/scene-writer/prop-writer → storyboard-writer) để sinh và chỉnh kịch bản, thiết lập nhân vật/cảnh/đạo cụ, rồi chia phân cảnh; kiểm tra tài liệu từng bước."
    - "Cấu hình model routing, sinh ảnh cho nhân vật/cảnh, rồi đẩy sang sinh video cho một nhóm phân cảnh và xem lại ở preview từng tập; đo chi phí model đã tiêu để quyết định có làm loạt không."
  expectedResult: "Một dự án có bộ tài liệu nhân vật/cảnh/đạo cụ/phân cảnh đọc được, cùng một vài phân cảnh đã sinh ảnh/video, đủ để đánh giá độ nhất quán tạo hình xuyên cảnh và chi phí thực tế mỗi tập."
  commonPitfalls:
    - "Kỳ vọng cài-xong-dùng-ngay: bản hiện tại là môi trường dev, phải chạy service + desktop và cài đúng phiên bản Node/pnpm/Go/go-task."
    - "Quên build lại sau khi sửa server: đổi code Go phải chạy `pnpm build:server` rồi khởi động lại mới có hiệu lực."
    - "Nghĩ là miễn phí hoàn toàn: sinh ảnh/video vẫn tốn phí model, nên đo chi phí một tập trước khi nhân bản."
    - "Bỏ qua ranh giới thương mại: bản phát hành chính thức có thể chứa thành phần đóng ngoài giấy phép Apache-2.0 của repo — đọc COMMERCIAL_FEATURES nếu định thương mại hoá."

greyHatFlag: "in"

suggestedAngle: "Góc creator: 'Tôi để một dàn Agent tự biến một chương tiểu thuyết thành một tập truyện tranh ngắn — nhân vật có giữ được tạo hình xuyên cảnh không?' — quay lại quy trình từ import nguyên tác tới phân cảnh và so nhân vật giữa các cảnh."
paidToolReplaced: "Cách ghép tay Midjourney/ComfyUI + tool viết kịch bản + phần mềm dựng cho series truyện tranh ngắn; hoặc các nền tảng làm 漫剧/short-drama AI dạng cloud đóng, khi bạn muốn tự chủ pipeline và giữ tư liệu dự án ở local."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Trending/hỏi AI nói được 'có công cụ AI làm truyện tranh/short-drama từ tiểu thuyết', nhưng cách MediaGo Drama tổ chức document-driven, bộ Skills theo vai, độ nhất quán nhân vật thực tế, chi phí model mỗi tập và độ khó cài dev là phần cần tự kiểm chứng và biên tập theo ngữ cảnh VN — nhất là khi repo mới và tài liệu chủ yếu tiếng Trung."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 14
  costAdvantage: 11
  deployment: 7
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-10
nextReviewDueAt: 2026-11-08

tags: ["creative", "agency", "ai-video", "short-drama", "manju", "aigc", "agent", "self-hosted"]
publishedAt: 2026-08-10
week: "2026-W33"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-08-10 (nguồn: github-search, 40 sao, ~0.7 sao/ngày, 59 ngày tuổi). Gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động. projectHealth lấy từ suggestedHealthScore của queue (chuẩn hoá về thang 0-25).

Cần Luan kiểm tay trước khi publish:
1. **Repo còn rất mới** (40 sao, ~59 ngày, 0.7 sao/ngày) — đây là phát hiện sớm, cần cân nhắc có nên đưa lên feed hay giữ theo dõi thêm; đã set `maturity: pre-viral` và `confidence: low` cho đúng thực tế.
2. **Media hotlink chưa verify**: URL ảnh dựng theo đường dẫn `./images/*.png` trong README trỏ về nhánh `main` (raw.githubusercontent). Cần mở thử để chắc còn sống và đúng nhánh trước khi render.
3. **Độ bão hoà nội dung tiếng Việt** quanh "làm truyện tranh/短劇 AI" và "giữ nhân vật nhất quán AI" — chưa kiểm.
4. **Chi phí thực tế mỗi tập** qua model gpt-image-2 / Seedance — cần chạy thử một tập để đo.
5. **Ranh giới thương mại**: repo Apache-2.0 nhưng bản phát hành chính thức có thể kèm thành phần đóng (COMMERCIAL_FEATURES.md) — đọc kỹ nếu định gợi ý dùng thương mại.
