# PRD — RepoRadar VN (tên tạm)

**Phiên bản:** 0.2 (Lean MVP — pivot audience)
**Ngày:** 26/06/2026
**Chủ sản phẩm:** Luan
**Trạng thái:** Draft để pressure-test, hạ tầng đã dựng (v0.1), đang chỉnh theo định vị mới

> Lưu ý đọc: Tài liệu này cố tình nêu rõ giả định và rủi ro ở mỗi phần. Phần nào là phán đoán chưa verify đều được đánh dấu **[Giả định — cần kiểm chứng]**. Đừng coi mọi con số là sự thật.

> **Đổi so với v0.1 (đọc trước):** v0.1 đặt khách hàng = *content creator AI/tech* (picks-and-shovels). v0.2 lật sang **người LÀM nghề** (creative media / agency / ecommerce / SEO) — người *dùng* tool, là khách chính; creator trong các ngách đó trở thành **kênh khuếch đại**, không phải khách hàng. Pivot này: (a) giải rủi ro TAM nhỏ của v0.1; (b) đổi nghĩa moat "bão hoà"; (c) đưa "dịch sang ngôn ngữ kinh doanh" từ chỗ bị coi là *commodity* lên thành *moat* — với điều kiện nó là curation-hợp-ngành-có-bằng-chứng, không phải dịch thô.

---

## 1. Vấn đề & Lý do tồn tại

### 1.1 Vấn đề của khách hàng
Người làm **creative media, agency, ecommerce, SEO** tại Việt Nam đang ngập trong làn sóng công cụ AI/open-source mới mỗi tuần, nhưng:
- Thông tin nằm rải rác ở GitHub/HuggingFace/HN/Reddit bằng **ngôn ngữ kỹ thuật**, không nói cho họ biết tool này *cắt được khâu nào trong quy trình, tiết kiệm bao nhiêu giờ, thay được tool trả phí nào*.
- Có **độ trễ Anh–Việt**: tool nổ ở nước ngoài hôm nay, vài tuần sau dân VN mới biết → mất lợi thế đi trước.
- Khó phân biệt tool *đáng đưa vào việc thật* với tool chỉ "nhiều sao cho vui", và không biết có hướng dẫn/cộng đồng tiếng Việt để bám vào khi mắc kẹt.

### 1.2 Vì sao các giải pháp hiện có không đủ
- **GitHub Trending / Trendshift / OSSInsight / HuggingFace trending (free):** chỉ liệt kê "đã nổi", ngôn ngữ kỹ thuật, không có góc nghề-nghiệp Việt, luôn đứng *sau* sóng.
- **Hỏi thẳng AI (ChatGPT/Claude):** dịch tốt + giải nghĩa chung chung, nhưng **mù** ba thứ: (a) tool đang nổi *trước khi* lên Trending (pre-viral), (b) tool nào trong 50 cái tuần này *thật sự matter* cho một ngách cụ thể, (c) khung "cắt khâu nào của ekip VN" *có bằng chứng* — AI cho câu trả lời mặc định, không có gu và không có quan sát ngành.

### 1.3 Định vị một câu
> **Trạm radar công nghệ cho dân creative/agency/ecom/SEO Việt: mỗi tuần chỉ ra vài công cụ AI/open-source đáng đưa vào việc *ngay bây giờ*, nói bằng ngôn ngữ "cắt khâu nào — tiết kiệm bao nhiêu — thay tool nào", kèm cảnh báo cạm bẫy.**

### 1.4 Mô hình: media trực tiếp + bánh đà creator (Hybrid)
- **Khách hàng chính = người làm nghề** (người *dùng* tool). Ta là **media trực tiếp** cho họ → ta tự gánh phân phối (xem §8 growth).
- **Kênh khuếch đại = creator/KOL trong chính các ngách đó.** Họ lấy nguyên liệu từ RepoRadar để sản xuất nội dung → kéo thêm practitioner về. Đây là phần "picks-and-shovels" còn giữ lại: mỗi bài creator viết = một lần nguồn của ta được lan toả miễn phí.
- Phân định: practitioner là người ta **đo thành công** (KR §9). Creator là **đòn bẩy phân phối**, không phải thước đo cuối.

---

## 2. Lằn ranh sống/chết của sản phẩm (đọc kỹ phần này nhất)

Sản phẩm chỉ tồn tại nếu lớp giá trị rơi vào vùng **GitHub Trending + AI hỏi-lạnh không tự làm được**. Nếu trượt vào vùng "AI làm free" → ta là khâu trung gian giữa hai thứ miễn phí → chết.

**Ba lớp giá trị BẮT BUỘC giữ (vùng khó sao chép):**

| Lớp | Vì sao Trending/AI không làm được |
|---|---|
| **Timing — đi trước (pre-viral)** | Trending theo định nghĩa là "đã nổi"; AI có độ trễ tri thức, luôn đứng sau. Bắt tool *trước* sóng = bán "cơ hội đi trước đón đầu". |
| **Curation hợp ngành + có bằng chứng** | AI hỏi-lạnh cho câu trả lời mặc định. Chọn đúng 3-5 tool *matter cho ngách này tuần này* + khung "cắt khâu X, từ N giờ còn M phút, thay tool Y" *có ví dụ thật* đòi gu + quan sát nghề. Đây là moat, không phải dịch thô. |
| **Insight thực tế ngành tại thị trường VN** | Lớp phủ trên cùng: ngành VN đang *thực sự* làm gì quanh bài toán này (hành vi, công cụ/giá hiện tại, từ khoá họ search). Vừa làm ngôn ngữ **chạm đúng tệp**, vừa tạo **lợi thế SEO** (chiếm từ khoá tiếng Việt chưa ai có). Data nằm trong quan sát ngành, không có sẵn để AI học. |

**Vùng PHẢI tránh (commodity — cho kèm cho đủ, KHÔNG tính là giá trị cốt lõi):**
- **Dịch thô / giải nghĩa chung chung** → AI làm tốt và free. *Lưu ý:* "nói ngôn ngữ kinh doanh" chỉ là moat khi nó = curation-hợp-ngành-có-bằng-chứng (lớp 2). Dịch business kiểu mẫu câu là commodity.
- Danh sách tool trending thuần → các nguồn free đã làm.

**Lớp tạm hoãn (Phase 2):**
- **Trust layer** (star authenticity / sao thật-giả): giá trị cao nhưng cần crawl API + tích luỹ lịch sử + chịu trách nhiệm độ chính xác → không làm được ở bản lean một người. Dựng sau bằng Claude Code.

> **Phân biệt Score vs Trust layer (quan trọng):** `altstackSignalScore` v1 là *rubric biên tập* — nén đánh giá đã có trong record, một chân semi-auto từ public signal. Đây là **MVP**. `trustScore` (sao thật/giả, star authenticity tự động) cần hạ tầng riêng → **Phase 2**. Không được gộp hai thứ này.

> **Rủi ro số 1 của cả dự án:** nếu Luan không duy trì được chất lượng ba lớp trên, sản phẩm tự trượt về commodity. Đây là rủi ro **thực thi**, không phải rủi ro ý tưởng.

---

## 2bis. Hiến pháp biên tập: bộ lọc IN/OUT + 4 lăng kính ngành + Signal Score

Hai thứ này là **kỷ luật biên tập bắt buộc** — vì đã chọn trục "nghề thật", lén tuồn đồ xám vào để câu view sẽ loãng đúng linh hồn vừa chọn và mất sponsor sạch về sau.

### Bộ lọc IN / OUT (ranh giới nằm ở *khung kể*, không phải ở tool)

| Crave thật — IN | Đồ xám đội lốt — OUT |
|---|---|
| Tạo ảnh/video số lượng lớn (Flux, ComfyUI, Wan/LTX, upscale) | Deepfake gán mặt người khác |
| Dubbing/localization giọng của **chính brand** | Clone giọng người khác để giả mạo |
| Quản lý nhiều kênh/page **chính chủ hợp lệ** | Nuôi nick, farm tài khoản |
| Research thị trường/SERP **công khai, trong ToS** | Cào data khách hàng, scrape lậu |
| Chatbot tư vấn–chốt đơn minh bạch | Anti-detect browser, proxy né chặn |

> Cùng một tool TTS: "lồng tiếng đa ngôn ngữ cho video brand" = IN; "clone giọng KOL" = OUT. Mỗi record có cờ `greyHatFlag` để đánh dấu rõ.

### 4 lăng kính ngành (mỗi record phải trả lời đúng câu của tệp mình nhắm)
- **Creative/Media:** *"Tool này cắt khâu nào của ekip, từ X giờ dựng còn Y phút?"*
- **Agency:** *"Giảm bao nhiêu giờ ops lặp lại trên mỗi client?"*
- **Ecommerce:** *"Tăng CR hay giảm chi phí xử lý N SKU thế nào?"*
- **SEO:** *"Rank thêm bao nhiêu URL / tiết kiệm bao nhiêu giờ research?"* (ưu tiên khoảng trống lớn: GEO/AEO tooling.)

### Signal Score v1 — nguyên tắc (Kịch bản A)

Quyết định triển khai ghi trong DECISION_LOG 2026-06-29. Tóm tắt ràng buộc biên tập:

**Score là phụ đề của radar, không phải tiêu đề.** Sống trong Evidence Card, không làm trục xếp hạng. Không leaderboard. Không "top score".

**Trọng số v1** (lệch về moat, không theo OSS-health-generic):

| Cấu phần | Weight | Nguồn | Loại |
|---|---|---|---|
| Use Case Fit | 25 | `useCases` + `vertical` + `workflowStepReplaced` | judged |
| Project Health | 25 | `repoStats` (stars, starsPerDay, ageDays, pushedAt, archived) | auto |
| Cost Advantage | 20 | `paidToolReplaced` + `timeOrCostSaved` | judged |
| Deployment Friendliness | 15 | `usabilityRisk` + `practitionerGuide.prerequisites` | judged |
| Documentation Quality | 15 | media/homepage/README/practitionerGuide | judged |

**Scaffolding EEAT đi kèm (bắt buộc):** trang `/methodology`, Evidence Card, nhãn `evidenceLevel` (A/B/C/D), `confidence` (high/med/low), `lastReviewedAt`, sources, limitations. Đây là phần tạo lợi thế EEAT thật — score chỉ là mặt tiền.

**Publish checklist mềm** (không gate cứng): trước khi đặt `draft: false`, record phải có đủ `evidenceLevel`, `confidence`, `lastReviewedAt`, ít nhất 1 `signalSources`, `usabilityRisk` không bỏ trống.

---

## 3. Đối tượng & Thị trường

### 3.1 Khách hàng chính
Người làm nghề trong 4 ngách: **creative/media production, agency marketing, ecommerce, SEO** — người dùng tool trong công việc hằng ngày.

### 3.2 Kênh khuếch đại
Creator/KOL/newsletter trong chính các ngách đó (không phải khách hàng cuối — là đòn bẩy phân phối, §1.4).

### 3.3 TAM **[Giả định — cần kiểm chứng]**
Tệp practitioner 4 ngách ở VN lớn hơn tệp "creator AI/tech thuần" của v0.1 nhiều bậc (v0.1 ước tính chỉ vài trăm). Pivot này **làm nhẹ rủi ro TAM** của v0.1. **Hành động trước khi monetize:** vẫn cần đo thật tệp nào *active + chịu thử tool mới* (xem §9), không vin vào "tệp lớn nên chắc ổn".

---

## 4. Giải pháp — Phạm vi bản Lean MVP

### 4.1 Trong phạm vi (in scope)
1. **Nguồn tín hiệu thủ công, miễn phí:**
   - GitHub Trending + HuggingFace trending (tool đã nổi — để không bỏ sót).
   - **Show HN + subreddit/nguồn nơi tool 4 ngách nổi lên** (vd r/SaaS, r/marketing, r/ecommerce, r/SideProject, ProductHunt) → bắt **pre-viral** bằng tay.
2. **Lớp giá trị cho mỗi tool** (§2 + §2bis):
   - Cờ pre-viral / đáng đi trước bây giờ + link nguồn.
   - Khung 4 lăng kính ngành: cắt khâu nào, tiết kiệm gì, thay tool trả phí nào — **có bằng chứng**.
   - Mức hỗ trợ tiếng Việt + cạm bẫy (Windows? cần GPU? học khó?).
   - Cờ IN/OUT (greyHatFlag).
3. **Định dạng đầu ra:** mỗi kỳ **3-5 tool, đào sâu** (chất hơn lượng), gắn nhãn ngành.
4. **Nhịp:** feed liên tục (rải rác trong tuần) + newsletter tổng hợp cuối tuần.
5. **Kênh:** Website (kho lưu + điểm neo tra cứu, điều hướng **theo ngành**) + nhóm/trang Facebook các ngách + newsletter.
6. **Evidence layer (EEAT, rẻ):**
   - Trang `/methodology`: giải thích Signal Score có nghĩa gì, không có nghĩa gì; rubric 5 cấu phần; evidence level; conflict-of-interest policy.
   - **Evidence Card** trên mỗi trang tool: hiển thị `altstackSignalScore` + `scoreBreakdown` + `evidenceLevel` + `confidence` + `lastReviewedAt` + sources + limitations. Score là phụ đề, không phải tiêu đề.

### 4.2 Ngoài phạm vi (Phase 2+)
- Crawler tự động, database lịch sử sao, feed real-time tự sinh.
- Trust layer / star authenticity tự động.
- Platform nhiều chuyên gia cùng curate.
- Lớp "chạy thử tool" (đứng *trên* Pinokio nếu cần, không tự xây).

### 4.3 Vì sao lean theo hướng này
Giữ pre-viral bằng cách đọc Show HN + subreddit *bằng tay* — không cần hạ tầng kỹ thuật. Khác biệt giữa "radar người ta theo dõi" và "thứ hỏi-AI-cũng-ra".

---

## 5. Định nghĩa chi tiết: một "bản tình báo tool"

Mỗi tool trong feed là một record schema cố định (structured-first — Phase 2 tái sử dụng được). **Schema cần cập nhật từ v0.1** (đánh dấu 🆕 / ✏️ đổi nghĩa):

| Trường | Mô tả | Vùng giá trị |
|---|---|---|
| `name` + `repoUrl` | | Commodity |
| `oneLiner` | Giải bài toán gì — 1-2 câu, tiếng người | Commodity |
| 🆕 `media` | Ảnh/video demo hotlink GitHub (ảnh đầu = thumbnail) | Commodity (rich) |
| 🆕 `vertical` | Ngành nhắm: creative / agency / ecom / seo (cho phép nhiều) | **Cốt lõi** (IA + lăng kính) |
| 🆕 `maturity` | `pre-viral` / `rising` / `established` — 2 luồng feed; tệp rộng nên cover cả tool đã nổi (input vòng 3) | **Cốt lõi** (timing/độ chín) |
| 🆕 `repoStats` + `standoutFeatures` | Hunt: sao/fork/tuổi + đặc điểm nổi bật khách quan | **Cốt lõi** (baseline Hunt) |
| 🆕 `useCases` | Usecase-first: 3-5 việc cụ thể làm được (reader, do Edit viết) | **Cốt lõi** (reader) |
| `signalSources` | Link HN/Reddit/PH để tự đánh giá (giảm false positive) | **Cốt lõi** |
| 🆕 `workflowStepReplaced` | Cắt/thay khâu nào trong quy trình ngành | **Cốt lõi** (lăng kính) |
| 🆕 `timeOrCostSaved` | Tiết kiệm bao nhiêu giờ/chi phí — có bằng chứng | **Cốt lõi** |
| `localProblem` + `localEvidence` | Nỗi đau cụ thể của shop/ekip/team VN nào + ví dụ thật | **Cốt lõi** |
| 🆕 `vnMarket` | Lớp phủ insight thực tế ngành VN: `insight` (ngành đang làm gì quanh bài toán) + `seoKeywords` (từ khoá tiếng Việt target search → nối thẳng KR#6) + `notes` | **Cốt lõi** (moat ngôn ngữ + SEO) |
| 🆕 `usabilityRisk` | Cạm bẫy: hỗ trợ Windows? cần GPU? độ khó cài/dùng? chưa có cộng đồng VN? | **Cốt lõi** (cảnh báo) |
| 🆕 `practitionerGuide` | Hướng dẫn từng bước cho member: chuẩn bị gì, thao tác thế nào, output đúng trông ra sao, bẫy nào dễ gặp | **Cốt lõi / member value** |
| 🆕 `greyHatFlag` | IN / borderline / OUT theo §2bis | **Cốt lõi** (kỷ luật) |
| `paidToolReplaced` | Thay tool trả phí nào (vd "ComfyUI ↔ Midjourney") | Bán-cốt-lõi |
| `suggestedAngle` | Góc cho **creator khuếch đại** (nhánh hybrid) | Bán-cốt-lõi |
| 🆕 `creatorWhitespace` | Cho nhánh creator: còn đất viết không (giữ logic "bão hoà" cũ, chuyển sang đây) | Bán-cốt-lõi |
| `aiCheck` | KR#4: thông tin này AI/Trending tự cho được không? | Kiểm chứng |
| 🆕 `altstackSignalScore` | Tổng điểm 0-100 (rubric biên tập, lệch về moat VN) | **Cốt lõi / EEAT** |
| 🆕 `scoreBreakdown` | 5 số thành phần (Fit/Health/Cost/Deploy/Docs) | **Cốt lõi / EEAT** |
| 🆕 `scoringVersion` | vd "v1" — giúp backfill và migration sau | Metadata |
| 🆕 `evidenceLevel` | A (lab tested) / B (signal reviewed) / C (discovery) / D (unverified) | **Cốt lõi / EEAT** |
| 🆕 `confidence` | high / medium / low | **Cốt lõi / EEAT** |
| 🆕 `lastReviewedAt` | Ngày review cuối (ISO date) | **Cốt lõi / EEAT** |
| 🆕 `nextReviewDueAt` | Ngày review kế tiếp dự kiến | Bán-cốt-lõi |
| `trustScore` | (Phase 2) sao thật/giả — **khác** `altstackSignalScore` | Hoãn |
| metadata | `tags`, `publishedAt`, `week`, `lang`, `draft` | — |

> **Nguyên tắc structured-first giữ nguyên:** website chỉ là một cách render schema. Phase 2 chỉ expose schema đã có.
> **Lưu ý migration:** đổi `worthWritingNow`→`worthAdoptingNow` và thay `vnSaturation`→`vnMarket` (đổi cấu trúc, không chỉ đổi tên) cần cập nhật `config.ts`, các record `.md` hiện có, các trang render, `feed.json`, và skill. Làm ở bước sau PRD.

---

## 6. Vai trò của Claude Code

Bản MVP **không** tự động hoá. Claude Code là **trợ lý on-demand**, chạy pipeline 3 tầng (input vòng 3):
- **`repo-radar-hunt`:** hồ sơ KHÁCH QUAN — sao/fork/tuổi, đặc điểm nổi bật, `maturity`, media. Dùng `fetch-signals.mjs` (deterministic). Cover cả tool đã nổi, không chỉ pre-viral.
- **`repo-radar-synthesize`:** reflect với người Việt — query fan-out + keyword research → `vnMarket` (insight + seoKeywords), `localProblem`, `usabilityRisk`, `aiCheck`. Đây là tầng tạo moat.
- **`repo-radar-edit`:** viết reader-first, usecase-first — `useCases` + tầng đọc; cả copy website.
- **`discover-repos.mjs`:** khâu auto-discovery on-demand — GitHub Search (repo mới theo chủ đề 4 ngách) + Show HN + subreddit ngành → danh sách repo ứng viên, đã loại trùng record. Chạy tay, không phải crawler nền.
- **`fetch-signals.mjs`:** GitHub (sao/fork/velocity) + HN + Reddit cho 1 repo. (Mở rộng ProductHunt/HF trending — chưa làm.)
- (Phase 2) Trust layer + velocity.

Phân định: Claude Code giải phần *viết code + sơ chế tín hiệu*. Nó **không** giải phần *gu chọn tool + quan sát ngành + phân phối cộng đồng* — đó là việc người, là moat thật.

---

## 7. Trải nghiệm & Luồng (Lean)

1. **Trong tuần:** Luan quét Trending/HF + Show HN + subreddit/PH (15-30 phút/lần). Phát hiện tool đáng chú ý → skill soạn nháp record → biên tập → đăng nhanh vào feed (Facebook ngách + Website) bản rút gọn.
2. **Cuối tuần:** tổng hợp 3-5 tool mạnh nhất thành newsletter đào sâu, gắn nhãn ngành.
3. **Practitioner** đọc → áp vào việc / đi trước. **Creator khuếch đại** đọc → lấy đề tài + góc → sản xuất nội dung → kéo thêm practitioner.

---

## 8. Monetization & Growth

**Giai đoạn này: FREE — mục tiêu build audience, CHƯA thu tiền** (đã chốt với Luan). Cần chứng minh practitioner *thật sự dùng* + đo TAM active trước.

**Growth (vì là media trực tiếp, phải tự gánh phân phối):**
- **Ký sinh cộng đồng:** lấy kết quả chạy thử (before/after) → chia sẻ giá trị vào group creative/agency/ecom/SEO → kéo về web.
- **Short-form:** TikTok/Reels review tool open-source mới → điều hướng lấy link.
- **Tool-based SEO:** đi trước viết hướng dẫn tiếng Việt cho tool vừa ra → chiếm Top 1 Google khi dân tình bắt đầu tìm. **Đây là moat đo được mạnh nhất ở phase đầu** (xem KR §9).

**Đường monetize tương lai (ghi nhận, KHÔNG làm bây giờ):**
- B2B sponsorship / native ads cho **bên sạch** (SaaS, tool hợp lệ, trung tâm đào tạo nghiêm túc) — bộ lọc IN/OUT (§2bis) chính là thứ bảo vệ chất lượng sponsor.
- Affiliate phần cứng/tool sạch (thuê GPU đám mây: RunPod, Vast.ai…).
- Bán workflow/prompt tiếng Việt ăn liền (200-500k) — *lead magnet, không phải trụ doanh thu* (dễ bị share lậu ở VN).

> **Cảnh báo:** sponsor/affiliate kéo ngược lớp tin cậy. Một lần đẩy tool rác vì tiền là sụp uy tín. Phải tách bạch "tài trợ" + giữ tiêu chí biên tập độc lập + tuyệt đối không phá bộ lọc IN/OUT.

---

## 9. Mục tiêu & Thước đo (go/no-go)

Chạy **6-8 kỳ (~2 tháng)** rồi quyết tiếp/dừng. **Không** đo bằng like/view (vanity).

**KR thật cần đo (đã chỉnh cho practitioner-media):**
1. **TAM active:** đếm được bao nhiêu practitioner 4 ngách *chịu thử tool mới* là khách tiềm năng thật. *(viên gạch gốc)*
2. **Hành động — adoption:** có practitioner thật sự *đưa một tool từ radar vào việc* (cài/thử/dùng) không? *(quan trọng nhất — chứng minh giá trị, không phải reach)*
3. **Khuếch đại:** có creator ngách nào *lấy đề tài/góc từ radar để sản xuất nội dung* + dẫn nguồn không? *(đo bánh đà phân phối hybrid)*
4. **Vertical-fit + Evidence quality:** mỗi record có trả lời được đúng câu lăng kính ngành (cắt khâu nào / tiết kiệm gì) *có bằng chứng* không? Tự test, mục tiêu ≥80% record đạt. Đồng thời: mỗi record publish có đủ `evidenceLevel`, `confidence`, `lastReviewedAt`, ít nhất 1 `signalSources`, `usabilityRisk` không trống (publish checklist mềm — §2bis).
5. **Hơn-AI (chống commodity):** với mỗi tool, tự test "thông tin này practitioner tự lấy từ Trending/hỏi AI được không?". Nếu >50% trả lời "có" → đang trượt commodity, phải chỉnh. (giữ từ v0.1)
6. **Tool-SEO:** số từ khoá "tên tool + tiếng Việt" chiếm Top 1 Google *trước thị trường*. *(moat đo được của phase đầu)*

**Tín hiệu dừng:** sau 8 kỳ không có nhóm practitioner quay lại + adoption thật + không chiếm được từ khoá nào → dừng, khỏi xây hạ tầng vô ích.

---

## 10. Rủi ro & Giả định (bảng tổng)

| # | Rủi ro / Giả định | Mức độ | Cách giảm thiểu |
|---|---|---|---|
| R1 | Nội dung trượt vào vùng AI làm được | **Chí mạng** | Bám 3 lớp §2; test KR#5 mỗi kỳ |
| R2 | TAM practitioner active vẫn nhỏ / không chịu thử tool | Trung bình (giảm so v0.1) | Đếm thật (KR#1); 4 ngách phân tán rủi ro |
| R3 | Pre-viral false positive → mất tin | Cao | Phát biểu mềm ("đang được bàn"); kèm nguồn; cảnh báo `usabilityRisk` |
| R4 | Nhịp xuất bản không duy trì | Cao | Feed nhẹ + newsletter tuần; nếu đuối, giảm còn newsletter |
| R5 | "Ngôn ngữ kinh doanh" thật ra là phần AI làm được | Cao | Ép về lớp 2: lăng kính ngành *có bằng chứng* + `timeOrCostSaved`; bỏ dịch thô khỏi phần tính-là-giá-trị |
| R6 | **Gánh nặng phân phối** (media trực tiếp, không còn creator quảng bá giùm free) | **Cao (mới do pivot)** | Bánh đà creator (§1.4); tool-SEO (KR#6); ký sinh cộng đồng (§8) |
| R7 | **Trượt grey-hat để câu view** → mất sponsor sạch + bị ban group | **Cao (mới)** | Bộ lọc IN/OUT (§2bis) + `greyHatFlag` mỗi record |
| R8 | Phụ thuộc nguồn bên thứ ba (HN/Reddit/PH/GitHub đổi) | Trung bình | Đa nguồn; thủ công nên dễ thay |
| R9 | Brand cá nhân Luan chưa đủ mạnh để hút audience | Trung bình | MVP để Luan tự thành "radar mẫu" số 1; đo bằng KR#2,3 |

---

## 11. Lộ trình theo phase

- **Phase 0 (giờ):** chốt PRD v0.2 → cập nhật schema/skill theo định vị mới → chọn tên + kênh.
- **Phase 1 (tuần 1-8):** chạy lean thủ công, đo 6 KR. Luan tự là radar mẫu + xây bánh đà creator.
- **Phase 2 (nếu Phase 1 pass):** Claude Code dựng Trust layer + bán tự động velocity. Cân monetize (sponsor sạch / affiliate / workflow).
- **Phase 3 (xa, có điều kiện):** platform nhiều chuyên gia curate; hoặc lớp "chạy thử tool" trên Pinokio. Chỉ khi đã có cộng đồng + chạm trần bản tự-curate.

---

## 12. Câu hỏi mở (cần Luan quyết ở vòng sau)
1. Tên sản phẩm + domain.
2. Nền newsletter (Substack/Beehiiv/Notion + email).
3. Danh sách subreddit/HN/PH cụ thể theo từng ngách để theo dõi pre-viral.
4. Tiêu chí biên tập độc lập (chuẩn bị trước cho ngày có sponsor).
5. Định nghĩa "active practitioner" để đếm TAM cho chính xác.
6. Có nhắm cả 4 ngách ngay, hay khởi động 1-2 ngách trước (vd creative + SEO) rồi mở rộng?
