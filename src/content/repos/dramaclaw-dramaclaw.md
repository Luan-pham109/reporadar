---
name: "DramaClaw"
repoUrl: "https://github.com/dramaclaw/dramaclaw"
oneLiner: "DramaClaw là một dây chuyền làm phim/short-drama tự động mã nguồn mở: bạn thả vào một bản thảo (truyện/kịch bản), nó tự tách nhân vật, chia tập, viết kịch bản, vẽ storyboard và khung hình đầu, lồng tiếng rồi dựng thành phim hoàn chỉnh."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/dramaclaw/dramaclaw/main/assets/hero.png"
    caption: "DramaClaw — dây chuyền sản xuất short-drama bằng AI, từ kịch bản tới thành phim."
  - type: "image"
    url: "https://nfg-web-assets.cdnfg.com/dramaclaw/readme/oss-launch.jpg?v=2"
    caption: "Các năng lực lõi: story graph, thư viện nhân vật, storyboard, lồng tiếng, dựng phim."

vertical: ["creative", "agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 787
  forks: 96
  note: "~104 ngày tuổi, ~7.6 sao/ngày"
  starsPerDay: 7.6
  ageDays: 104
  pushedAt: "2026-07-09"
  archived: false
  openIssues: 7
standoutFeatures:
  - "Một pipeline liền mạch từ bản thảo tới thành phim: tách nhân vật & story graph, chia tập/nhịp truyện, sinh kịch bản, storyboard + khung hình đầu, lồng tiếng và dựng phim + xuất phụ đề."
  - "Giữ nhất quán nhân vật/bối cảnh xuyên tập nhờ Asset Library (nhân vật, cảnh, đạo cụ, giọng) và 'Director World / 3GS' khoá cấu trúc không gian, vị trí nhân vật và góc máy cho cùng một bối cảnh."
  - "Chạy nhẹ: mọi inference đi qua một gateway tương thích OpenAI (không chạy model trên máy bạn), nên chỉ cần laptop hoặc VPS nhỏ (~2 vCPU/4GB); không cần Postgres/Redis/Celery, state nằm ở SQLite + file."
  - "Model-neutral: dùng key chính thức của DramaClaw (relayclaw) hoặc trỏ về gateway OpenAI-compatible của riêng bạn; ảnh gpt-image/nano-banana, video dòng Seedance, lồng tiếng IndexTTS2."
  - "Cùng pipeline dùng được cho nhiều định dạng ngoài short-drama: quảng cáo ngắn, video sản phẩm e-commerce và game otome tương tác."
signalSources:
  - label: "GitHub"
    url: "https://github.com/dramaclaw/dramaclaw"
  - label: "Website"
    url: "https://dramaclaw.ai"

useCases:
  - "Biến một bản thảo truyện/kịch bản thành nhiều tập short-drama có storyboard, lồng tiếng và phụ đề mà không phải ghép tay hàng chục công cụ rời rạc."
  - "Giữ khuôn mặt/tạo hình nhân vật và bối cảnh nhất quán xuyên nhiều tập nhờ thư viện asset và 'thế giới đạo diễn' khoá góc máy."
  - "Dựng video quảng cáo ngắn hoặc video sản phẩm e-commerce từ cùng một pipeline kịch bản → storyboard → thành phim."
  - "Chạy thử trên một VPS nhỏ hoặc laptop (không cần GPU cho pipeline chuẩn) rồi cắm key model tuỳ chọn để so chi phí trước khi làm loạt."
  - "Chạy từng bước rời (kịch bản, storyboard, lồng tiếng, dựng) và resume từ checkpoint khi làm dự án dài, thay vì một nút bấm hộp đen."

workflowStepReplaced: "Khâu sản xuất một tập/nhiều tập short-drama hoặc video kể chuyện: gộp tách nhân vật, viết kịch bản, storyboard, lồng tiếng và dựng phim vào một dây chuyền thay vì ráp tay nhiều tool tách rời."
timeOrCostSaved: "Không thay hẳn một SaaS cụ thể; tiết kiệm chủ yếu ở công ráp công cụ và giữ nhất quán nhân vật xuyên tập. Vì inference chạy qua gateway trả phí (relayclaw hoặc BYO), chi phí thật phụ thuộc số ảnh/clip/giọng mỗi tập — cần chạy thử một tập để đo."
localProblem: "Các team/ekip làm short-drama, phim ngắn kể chuyện hoặc video bán hàng dạng series ở VN thường vướng khâu giữ nhân vật và bối cảnh nhất quán qua nhiều tập, và phải ráp tay Midjourney/ComfyUI + tool lồng tiếng + phần mềm dựng rời rạc. DramaClaw gom cả chuỗi này thành một pipeline có story graph và asset library, self-host được."
localEvidence: "Trend short-drama/phim ngắn AI đang nóng ở thị trường nói tiếng Trung (repo dẫn nhiều tập demo do chính team sản xuất), và nhu cầu 'làm phim ngắn bằng AI', 'AI dựng short drama', 'giữ nhân vật nhất quán AI' cũng đang lên ở VN — nhưng chưa thấy nội dung tiếng Việt nào mổ riêng repo dramaclaw."

vnMarket:
  insight: "Ở VN, làm short-drama/video kể chuyện bằng AI hiện vẫn là ghép tay: Midjourney/ComfyUI để ra hình, tool lồng tiếng riêng, rồi CapCut/Premiere để dựng — và điểm đau lớn nhất là nhân vật đổi mặt mỗi cảnh. DramaClaw đánh trúng chỗ đó bằng asset library + khoá bối cảnh/góc máy, và định vị 'source-available, self-host, không khoá vendor'. Rào cản thực tế: license Elastic 2.0 (không phải open-source tự do hoàn toàn), inference vẫn phải trả phí qua gateway, và phần lớn tài liệu/demo nghiêng về tiếng Trung."
  seoKeywords: ["làm short drama bằng AI", "AI dựng phim ngắn", "giữ nhân vật nhất quán AI", "tạo video từ kịch bản AI", "pipeline làm phim AI self-host", "công cụ làm phim AI mã nguồn mở"]
  notes: "Discovery từ daily pipeline 2026-07-09 (github-search, 787 sao). Chưa verify cộng đồng VN nào đã dùng; cần Luan kiểm nhu cầu thực và độ bão hoà nội dung tiếng Việt quanh 'làm short drama AI' trước khi publish."

usabilityRisk: "Không phải web app bấm-một-nút SaaS: bạn phải tự dựng bằng Docker và cấu hình một gateway tương thích OpenAI (key chính thức relayclaw hoặc BYO endpoint). License là Elastic 2.0 — dùng nội bộ/tự host được nhưng không phải open-source tự do hoàn toàn, đọc kỹ nếu định thương mại hoá. Inference vẫn tốn phí model theo lượng ảnh/clip/giọng. Tài liệu và phần lớn demo nghiêng về tiếng Trung, chưa thấy cộng đồng VN."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được DramaClaw bằng Docker và chạy thử một đoạn short-drama ngắn từ một bản thảo mẫu, đủ để đánh giá chất lượng và chi phí trước khi làm loạt."
  prerequisites:
    - "Máy/VPS có Docker + docker compose (pipeline chuẩn không cần GPU; ~2 vCPU/4GB là đủ)."
    - "Một key model: key chính thức DramaClaw (relayclaw) hoặc một gateway tương thích OpenAI của bạn."
    - "Một bản thảo/kịch bản ngắn thật để test thay vì nội dung ảo."
  steps:
    - "Clone repo, copy `.env.example` thành `.env`, đặt `PROMPT_EXPORT_PASSWORD` khác mặc định và điền endpoint/key gateway."
    - "Chạy `docker compose up -d --build` (hoặc dùng `docker-compose.release.yml` để kéo image dựng sẵn), mở web UI ở http://localhost:8080."
    - "Vào Settings → Model Config, dán key (Official hoặc BYO), lưu lại."
    - "Thả một bản thảo ngắn vào, đi lần lượt các bước: tách nhân vật → chia tập → kịch bản → storyboard/khung hình → lồng tiếng → dựng, kiểm tra output từng bước."
    - "Xuất một tập thử, xem lại độ nhất quán nhân vật và chi phí model đã tiêu để quyết định có làm loạt không."
  expectedResult: "Một đoạn/tập short-drama hoàn chỉnh kèm phụ đề và asset pack, đủ để đánh giá chất lượng hình/giọng, độ nhất quán nhân vật và chi phí thực tế mỗi tập."
  commonPitfalls:
    - "Để `PROMPT_EXPORT_PASSWORD` mặc định — hãy đổi trước khi mở dịch vụ."
    - "Kỳ vọng miễn phí hoàn toàn: inference vẫn tốn phí qua gateway, phải đo chi phí một tập trước."
    - "Bỏ qua điều khoản Elastic 2.0 khi định dùng thương mại hoá — đọc license trước."

greyHatFlag: "in"

suggestedAngle: "Góc creator: 'Tôi thử để AI dựng nguyên một tập short-drama từ kịch bản — nhân vật có giữ được mặt xuyên cảnh không?' — quay lại quy trình và so nhân vật giữa các cảnh."
paidToolReplaced: "Các nền tảng AI làm short-drama/phim theo dạng cloud đóng (trả phí theo dự án), khi bạn muốn tự host cả pipeline kịch bản → thành phim thay vì phụ thuộc một dịch vụ hộp đen"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Trending/hỏi AI nói được 'có công cụ AI làm short-drama từ kịch bản', nhưng việc pipeline này giữ nhân vật nhất quán tới đâu, chi phí thật mỗi tập, ràng buộc license Elastic 2.0 và rủi ro ngôn ngữ là phần cần kiểm chứng và biên tập theo ngữ cảnh VN."

scoreBreakdown:
  useCaseFit: 20
  projectHealth: 18
  costAdvantage: 12
  deployment: 11
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-09
nextReviewDueAt: 2026-10-07

tags: ["creative", "agency", "ecom", "ai-video", "short-drama", "aigc", "self-hosted"]
publishedAt: 2026-07-09
week: "2026-W28"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-07-09 (nguồn: github-search, 787 sao, ~7.6 sao/ngày, 104 ngày tuổi). Gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) độ bão hoà nội dung tiếng Việt quanh "làm short drama AI"/giữ nhân vật nhất quán; (2) chi phí thực tế mỗi tập qua gateway relayclaw hoặc BYO; (3) đọc kỹ điều khoản license Elastic 2.0 nếu định gợi ý dùng thương mại; (4) xác nhận media hotlink (hero.png raw + cdnfg banner) còn sống khi render.
