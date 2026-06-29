---
# === Commodity (cho kèm cho đủ) ===
name: "Tên tool"
repoUrl: "https://github.com/owner/repo"
oneLiner: "1-2 câu tiếng người: tool này giải bài toán gì. KHÔNG dùng từ kỹ thuật."
media: # ảnh/video demo kéo từ README repo (hotlink). Ảnh đầu dùng làm thumbnail.
  - type: "image"
    url: "https://raw.githubusercontent.com/owner/repo/main/screenshot.png"
    caption: "Mô tả ngắn ảnh demo (tuỳ chọn)."

# === CỐT LÕI: ngành nhắm tới (4 lăng kính) ===
vertical: ["creative"] # creative | agency | ecom | seo (chọn 1 hoặc nhiều)

# === HUNT: độ chín + dữ liệu khách quan ===
maturity: "rising" # pre-viral | rising | established
repoStats:
  stars: 0
  forks: 0
  note: "vd '~90 ngày tuổi, ~12 sao/ngày'"
  starsPerDay: 0        # fetch-signals --json → .github.starsPerDay
  ageDays: 0            # fetch-signals --json → .github.ageDays
  pushedAt: ""          # fetch-signals --json → .github.pushedAt (ISO date)
  archived: false       # fetch-signals --json → .github.archived
  openIssues: 0         # fetch-signals --json → .github.openIssues
standoutFeatures:
  - "Đặc điểm nổi bật 1 (khách quan)."
  - "Đặc điểm nổi bật 2."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=..."
  - label: "ProductHunt"
    url: "https://www.producthunt.com/posts/..."

# === CỐT LÕI: usecase-first (reader-facing — trả lời heading "<tool> dùng để làm gì?") ===
useCases: # câu hành động trực tiếp, động từ đầu câu (KHÔNG prefix "Dùng để:")
  - "<Động từ> ... <việc cụ thể 1, giọng người dùng, có con số nếu được>"
  - "<Động từ> ... <việc cụ thể 2>"
  - "<Động từ> ... <việc cụ thể 3>"

# === CỐT LÕI: curation hợp ngành + bằng chứng ===
workflowStepReplaced: "Cắt/thay khâu nào trong quy trình ngành (vd 'khâu chụp ảnh sản phẩm')."
timeOrCostSaved: "Tiết kiệm bao nhiêu giờ/chi phí — gắn con số hoặc ước lượng có cơ sở."
localProblem: "Nỗi đau CỤ THỂ của shop/ekip/team VN nào. Không nói chung chung."
localEvidence: "Ví dụ thật / quan sát thật làm bằng chứng cho bài toán trên."

# === CỐT LÕI: insight thực tế ngành VN (lớp phủ ngôn ngữ + SEO) ===
vnMarket:
  insight: "Ngành VN đang THỰC SỰ làm gì quanh bài toán này: hành vi, công cụ/giá hiện tại."
  seoKeywords: ["từ khoá tiếng Việt 1", "từ khoá tiếng Việt 2"]
  notes: "Đã quan sát ở đâu, độ chắc chắn."

# === CỐT LÕI: cảnh báo cạm bẫy ===
usabilityRisk: "Hỗ trợ Windows? cần GPU? khó cài/dùng? chưa có cộng đồng VN? — nói thẳng."

# === MEMBER VALUE: hướng dẫn áp dụng cho practitioner ===
practitionerGuide:
  outcome: "Sau guide này người dùng làm được việc gì / có output đầu tiên nào."
  prerequisites:
    - "Cần chuẩn bị tài khoản/API key/file dữ liệu/quyền truy cập gì."
    - "Cần máy/VPS/GPU/Docker hay người kỹ thuật không."
  steps:
    - "Bước 1: ..."
    - "Bước 2: ..."
    - "Bước 3: ..."
  expectedResult: "Kết quả đúng trông như thế nào, đủ tốt để đánh giá tiếp ra sao."
  commonPitfalls:
    - "Lỗi/bẫy hay gặp 1."
    - "Lỗi/bẫy hay gặp 2."

# === CỐT LÕI: kỷ luật IN/OUT ===
greyHatFlag: "in" # in | borderline | out

# === Bán-cốt-lõi ===
suggestedAngle: "Góc cho creator khuếch đại (nhánh hybrid)."
paidToolReplaced: "Tool trả phí thay thế (vd ComfyUI ↔ Midjourney)."
creatorWhitespace: true # creator còn đất viết về tool này không

# === Kiểm chứng hơn-AI (KR#5) ===
aiCheck:
  canAIGetThis: false
  note: "Vì sao thông tin này practitioner KHÔNG tự lấy được từ Trending/hỏi AI."

# === Signal Score v1 (Kịch bản A) ===
# Hunt điền projectHealth (auto). Synthesize điền costAdvantage + evidenceLevel + confidence.
# Edit điền useCaseFit + deployment + documentation + lastReviewedAt.
scoreBreakdown:
  useCaseFit: 0        # 0-25 — repo-radar-edit chấm (rubric trong skill)
  projectHealth: 0     # 0-25 — fetch-signals --json → .github.suggestedHealthScore (auto)
  costAdvantage: 0     # 0-20 — repo-radar-synthesize chấm
  deployment: 0        # 0-15 — repo-radar-edit chấm
  documentation: 0     # 0-15 — repo-radar-edit chấm
scoringVersion: "v1"
evidenceLevel: "C"     # A=lab-tested B=signal-reviewed C=discovery D=unverified — repo-radar-synthesize set
confidence: "low"      # high | medium | low — repo-radar-synthesize set
lastReviewedAt: ""     # repo-radar-edit set = ngày publish
nextReviewDueAt: ""    # repo-radar-edit set = lastReviewedAt + 90 ngày

# === Metadata ===
tags: ["ai", "creative"]
publishedAt: 2026-06-26
week: "2026-W26"
draft: true
---

Phần body = ghi chú mở rộng / dàn ý / bối cảnh thêm cho người biên tập.
Markdown thoải mái. Phần này tuỳ chọn.
