---
name: "Craftplan"
repoUrl: "https://github.com/puemos/craftplan"
oneLiner: "Craftplan là phần mềm quản lý gọn cho xưởng thủ công/D2C nhỏ: gom danh mục sản phẩm, định mức nguyên liệu (BOM), tồn kho, đơn hàng, kế hoạch sản xuất và CRM vào một chỗ, tự host trên máy chủ của bạn."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/7277558e-dd2a-4f4a-8853-e3a7caa816e7"
    caption: "Banner Craftplan — ERP mã nguồn mở cho xưởng thủ công nhỏ."

vertical: ["ecom"]

maturity: "rising"
repoStats:
  stars: 1133
  forks: 58
  note: "~564 ngày tuổi, ~2 sao/ngày"
  starsPerDay: 2
  ageDays: 564
  pushedAt: 2026-06-30T11:36:42Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "Gom nhiều nghiệp vụ vào một nền tảng: danh mục sản phẩm, BOM (định mức nguyên liệu), tồn kho, đơn hàng, sản xuất theo lô và CRM — thay vì trả tiền cho nhiều SaaS rời."
  - "BOM có phiên bản và tự tính giá thành theo tầng (nested BOM), kèm bước công (labor) có thời gian và chi phí — hợp với sản phẩm handmade nhiều nguyên liệu."
  - "Sản xuất theo lô tự trừ nguyên liệu, chốt snapshot giá thành từng lô và theo dõi số lượng hoàn thành."
  - "Có live demo công khai (craftplan.fly.dev) để dùng thử trước khi tự cài."
signalSources:
  - label: "GitHub"
    url: "https://github.com/puemos/craftplan"
  - label: "Live Demo"
    url: "https://craftplan.fly.dev"

useCases:
  - "Quản lý xưởng nến thơm/xà phòng/đồ da/bánh handmade: khai báo công thức (BOM) rồi để phần mềm tự tính giá thành và trừ nguyên liệu khi lên lô sản xuất."
  - "Theo dõi tồn kho nguyên liệu và thành phẩm ở một chỗ thay vì rải rác trên nhiều file Excel."
  - "Nhận đơn khách, xếp lịch sản xuất theo calendar và xuất hoá đơn mà không cần mua thêm phần mềm kế toán/kho riêng."

workflowStepReplaced: "Khâu quản lý công thức + tính giá thành + tồn kho + đơn hàng đang làm tay trên nhiều file Excel rời của xưởng thủ công nhỏ."
timeOrCostSaved: "Thay cho việc mua 2-3 SaaS quản lý kho/đơn/CRM riêng lẻ; giá trị lớn nhất là tự tính giá thành theo BOM thay vì bấm máy tính thủ công mỗi lần đổi giá nguyên liệu."
localProblem: "Các xưởng/shop handmade Việt (nến thơm, xà phòng, đồ da, bánh, mỹ phẩm nhỏ) thường quản lý công thức và giá thành bằng Excel, mỗi lần nguyên liệu lên giá phải tính lại tay và dễ bán lỗ mà không biết."
localEvidence: "Cộng đồng handmade/D2C Việt trên Facebook thường xuyên hỏi nhau 'tính giá thành sản phẩm handmade thế nào', 'quản lý nguyên liệu ra sao' — nhu cầu có thật nhưng phần lớn vẫn dùng Excel vì các ERP thương mại quá nặng và đắt."

vnMarket:
  insight: "Ở VN, xưởng thủ công nhỏ chủ yếu quản lý bằng Excel/Google Sheet và sổ tay; ai cần hơn thì dùng phần mềm bán hàng (KiotViet, Sapo, Nhanh) vốn mạnh về POS/bán hàng nhưng yếu về BOM và tính giá thành sản xuất. Craftplan lấp đúng khoảng trống 'công thức → giá thành → lô sản xuất' mà nhóm phần mềm bán hàng phổ thông không làm sâu."
  seoKeywords: ["phần mềm quản lý xưởng handmade", "cách tính giá thành sản phẩm handmade", "quản lý nguyên liệu sản xuất nhỏ", "ERP mã nguồn mở cho shop", "phần mềm định mức nguyên liệu BOM"]
  notes: "Fit ecom/D2C khá rõ với nhóm handmade/artisanal. Rào cản lớn nhất là phải tự host. Độ chắc chắn: trung bình-thấp (mới discovery, chưa test thực tế)."

usabilityRisk: "Phải tự host: viết bằng Elixir/Phoenix, cần Docker và một máy chủ/VPS để chạy — không có bản SaaS bấm-là-dùng. Giao diện tiếng Anh, chưa có bản Việt hoá hay cộng đồng VN. Phù hợp với chủ shop có người kỹ thuật hỗ trợ, hoặc sẵn sàng thuê cài đặt. Dùng thử live demo trước khi quyết."

practitionerGuide:
  outcome: "Có một bản Craftplan chạy được (qua live demo hoặc tự host) với vài sản phẩm mẫu, BOM và một lô sản xuất thử để đánh giá có hợp quy trình xưởng của bạn không."
  prerequisites:
    - "Muốn dùng thật: một VPS/máy chủ chạy Docker (hoặc tài khoản Fly.io như bản demo)."
    - "Danh sách nguyên liệu + công thức của 1-2 sản phẩm để nhập thử."
    - "Người biết cơ bản về Docker/deploy, hoặc chấp nhận thuê cài."
  steps:
    - "Vào craftplan.fly.dev, đăng nhập bằng tài khoản demo (test@test.com) để xem trước toàn bộ tính năng."
    - "Nhập một sản phẩm mẫu kèm BOM (nguyên liệu + số lượng) và xem phần mềm tự tính giá thành."
    - "Tạo một đơn hàng và lên một lô sản xuất để kiểm tra việc tự trừ nguyên liệu."
    - "Nếu ưng, làm theo hướng dẫn Docker trong repo để tự host bản riêng cho dữ liệu thật."
  expectedResult: "Khi đổi giá một nguyên liệu, giá thành sản phẩm và snapshot chi phí lô tự cập nhật đúng — đây là dấu hiệu công cụ đang thay được bảng Excel tính tay."
  commonPitfalls:
    - "Kỳ vọng bản SaaS dùng ngay; thực tế phải tự host mới lưu được dữ liệu riêng."
    - "Bỏ qua bước khai báo BOM đầy đủ nên tính giá thành thiếu, dẫn tới số liệu sai."
    - "Dùng cho shop chỉ nhập-bán lại (không sản xuất) — khi đó phần BOM/sản xuất gần như thừa."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm chủ xưởng handmade/D2C Việt với góc 'thoát Excel tính giá thành', không đóng gói như ERP doanh nghiệp lớn. Kèm cảnh báo phải tự host."
paidToolReplaced: "ERP/inventory SaaS trả phí (kiểu Katana MRP, Craftybase) ↔ Craftplan self-host"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Đây là repo niche (~2 sao/ngày, 1.1k sao), chủ shop handmade Việt gần như không tự tìm ra qua Trending hay hỏi AI. Giá trị RepoRadar là gắn nó với bài toán tính giá thành thủ công rất thật của tệp D2C Việt."

scoreBreakdown:
  useCaseFit: 16
  projectHealth: 18
  costAdvantage: 14
  deployment: 7
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-11
nextReviewDueAt: 2026-10-09

tags: ["erp", "self-hosted", "ecom", "handmade", "inventory", "open-source"]
publishedAt: 2026-07-11
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue. Fit ecom/D2C khá tốt cho nhóm handmade Việt (đây là item hợp scope nhất trong lượt này). Rào cản chính: phải tự host (Elixir/Phoenix + Docker), chưa Việt hoá. Có live demo nên dễ verify. Cần Luan kiểm tra thực tế demo trước khi publish.
