# LungXray Trustworthy Classifier - Portfolio Content

Nội dung chuẩn bị cho trang web Portfolio.
Cấu trúc: 1 ảnh Mockup lớn + 3-4 ảnh nhỏ bên dưới mỗi Section.

---

## SECTION 1: TWO-STAGE AI PIPELINE & OOD SAFETY GATE
**Phân Loại Bệnh Phổi Từ X-quang Với Kiến Trúc 2 Giai Đoạn**

Không chỉ là một mô hình phân loại ảnh thông thường — toàn bộ pipeline được thiết kế để chống gian lận học tập (Shortcut Learning), đảm bảo AI nhìn đúng vùng tổn thương trong phổi, không bị đánh lừa bởi các ký hiệu phụ trên phim X-quang.

**CORE TECH STACK**
`TensorFlow Lite` `U-Net (ResNet50 Encoder)` `YOLOv12m-cls` `Median-fill Masking` `CameraX` `Coroutines`

**TÍNH NĂNG NỔI BẬT**
- **Stage 1 — Lung Segmentation (UNet TFLite):** Model U-Net với encoder ResNet50 được xuất sang TFLite, chạy trực tiếp trên thiết bị để tạo binary lung mask từ ảnh X-quang đầu vào, phân đoạn chính xác vùng nhu mô phổi.
- **Median-fill Masking:** Vùng ngoài phổi (chữ L/R đánh dấu phim, bóng vai, viền thiết bị) được lấp đầy bằng màu trung bình vùng phổi, cưỡng chế Stage 2 chỉ học đặc trưng trong phổi.
- **Stage 2 — YOLOv12m-cls TFLite:** Phân loại 4 lớp bệnh lý (COVID-19, Normal, Lung Opacity, Viral Pneumonia) trên ảnh đã được che nền.
- **OOD Safety Gate (Plausibility Check):** Nếu diện tích lung mask nằm ngoài ngưỡng hợp lệ (8%–72%), hệ thống tự động từ chối kết quả và cảnh báo người dùng — tránh gây ảo tưởng chẩn đoán với ảnh rác, ảnh CT, ảnh chụp phong cảnh.
- **Real-time Progress Tracking:** Thanh tiến trình 6 bước hiển thị từng giai đoạn (UNet → Masking → Classify → Heatmap) kèm thời gian inference thực tế tính bằng ms.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Thách thức không phải là train model — mà là deploy đúng cách. Tôi phải đồng bộ hóa 2 model TFLite (UNet + YOLOv12) chạy tuần tự trong background coroutine, xử lý bitmap pipeline qua 4 bước biến đổi ảnh mà không làm tràn bộ nhớ. Safety gate OOD là quyết định thiết kế quan trọng nhất: thà im lặng còn hơn đưa ra kết quả sai."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình Phân tích (AnalyzeScreen) đang chạy — thanh tiến trình đang ở 65%, hiển thị stage "YOLOv12m-cls TFLite đã hoàn tất phân loại", bên dưới là ảnh X-quang phổi đang được load.
- **📱 3 Ảnh Thumbnail:**
  1. **Chọn ảnh:** Màn hình trống với 2 nút "Chọn từ thư viện" + "Chụp ảnh Camera", nền gradient tối.
  2. **Kết quả hợp lệ:** Card kết quả hiển thị "COVID-19 · 99% · YOLOv12m-cls" với badge màu đỏ.
  3. **OOD bị từ chối:** Card cảnh báo màu vàng "Ảnh không đủ điều kiện — không công bố confidence".

---

## SECTION 2: EXPLAINABILITY PIPELINE & INTERACTIVE XAI VIEWER
**Trực Quan Hóa Bằng Chứng AI — Không Chỉ Tin Vào Con Số**

Bác sĩ/nhà nghiên cứu không nên tin vào kết quả AI một cách mù quáng. Màn hình XAI hiển thị toàn bộ hành trình của bức ảnh qua 5 bước pipeline và cho phép so sánh trực tiếp heatmap attention để phán đoán xem model có "nhìn đúng chỗ" không.

**CORE TECH STACK**
`Occlusion Sensitivity (on-device)` `Grad-CAM++ (PyTorch server)` `Jetpack Compose Canvas` `Crossfade Animation` `Bitmap Processing`

**TÍNH NĂNG NỔI BẬT**
- **Dual-mode Explainability:** Offline dùng Occlusion Sensitivity (tự tính trực tiếp từ YOLOv12m-cls TFLite); Online Research dùng Grad-CAM++ từ PyTorch server (Streamlit). Cùng một ảnh, hai nguồn heatmap để đối chiếu.
- **Interactive XAI Viewer:** Giao diện 4 ô ảnh tương tác — bấm vào ô nào để phóng to tương ứng: Ảnh gốc / Lung Mask / Masked / Heatmap. Heatmap được render bằng Compose Canvas với bảng màu Jet (xanh→vàng→đỏ).
- **5-Step Timeline:** Mỗi bước pipeline được giải thích bằng text lâm sàng, kèm ảnh thumbnail kết quả của bước đó.
- **Scientific Evidence Cards:** Giải thích các khái niệm Attention Leakage, Shortcut Learning, EBPG, IoU Localization ngay trong app để người dùng đánh giá độ tin cậy.
- **Lung-constrained evidence:** Occlusion Sensitivity chỉ tính trên các ô nằm trong vùng lung mask, loại bỏ nhiễu từ vùng nền.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Occlusion Sensitivity phải chạy 36 lần inference (6×6 grid) trên cùng một ảnh — mỗi lần che đi một ô rồi đo sự thay đổi confidence. Tôi dùng coroutine + progress callback để báo tiến độ liên tục, tránh ANR. Kết quả là heatmap hoàn toàn model-derived, không phải mock data."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình XAI (ExplainabilityScreen) với 4 ô ảnh grid — ảnh gốc X-quang, lung mask trắng đen, ảnh masked, và heatmap đỏ-vàng sáng rõ tập trung vào vùng phổi.
- **📱 3 Ảnh Thumbnail:**
  1. **Timeline pipeline:** Phần 5 bước mũi tên hướng xuống với giải thích từng bước.
  2. **Heatmap phóng to:** Ô heatmap được phóng to full, thấy rõ gradient màu jet trên phổi.
  3. **Evidence cards:** Phần "Cơ sở khoa học & Đánh giá tin cậy" với badge EBPG/IoU.

---

## SECTION 3: AI CLINICAL REASONING ASSISTANT (LLM-POWERED)
**Trợ Lý Phản Biện Y Khoa Tích Hợp Trực Tiếp Vào App**

Thay vì để bác sĩ tự đoán ý nghĩa của heatmap, ứng dụng tích hợp một trợ lý AI chuyên biệt được huấn luyện bằng System Prompt bám sát nội dung luận văn — hiểu Shortcut Learning, EBPG, IoU, và phác đồ Fleischner.

**CORE TECH STACK**
`Groq API (LLaMA 3.1-8b-instant)` `HTTP/JSON (native Android)` `Coroutines (Dispatchers.IO)` `LazyColumn Chat UI` `Offline Fallback`

**TÍNH NĂNG NỔI BẬT**
- **Context-aware Chat:** Mỗi khi chọn ca bệnh từ Lịch sử, chatbot tự động tải thông tin ca bệnh (Nhãn, Confidence, Model, Trạng thái OOD) và giới thiệu lại — không cần gõ lại.
- **Groq/LLaMA 3.1 Integration:** Gọi API thực tế qua mạng với System Prompt chuyên biệt y khoa, không phải chatbot generic.
- **Offline Fallback thông minh:** Nếu mất kết nối, tự động chuyển sang tập câu trả lời lâm sàng được tính trước từ đồ án — buổi demo/bảo vệ luôn diễn ra an toàn.
- **Quick Prompts gợi ý:** 4 nút câu hỏi nhanh: Shortcut Learning, EBPG/IoU, Phác đồ Fleischner, Lý do từ chối/chấp nhận.
- **Typing Indicator:** Hiệu ứng spinner "Gemini đang suy luận phản biện..." trong 1.2 giây tạo cảm giác suy luận thực tế.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"System Prompt là phần khó nhất — tôi phải viết instruction buộc LLaMA trả lời đúng ngữ cảnh luận văn (EBPG, Median-fill, Plausibility Check) thay vì trả lời chung chung. Fallback offline quan trọng hơn Online vì demo trước hội đồng không thể phụ thuộc vào internet."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình XAI với chatbox mở — bong bóng AI (màu Teal) trả lời câu hỏi về EBPG với con số 0.7962, bong bóng người dùng (màu xanh lá) hỏi phía trên.
- **📱 3 Ảnh Thumbnail:**
  1. **Quick Prompts:** 4 chip gợi ý câu hỏi nhanh màu cyan dưới chatbox.
  2. **Typing indicator:** Spinner xoay + chữ "Gemini đang suy luận..." đang hiển thị.
  3. **Phác đồ Fleischner:** Câu trả lời dài về phác đồ lâm sàng cho ca Lung Opacity.

---

## SECTION 4: HISTORY & CASE NAVIGATION SYSTEM
**Quản Lý Toàn Bộ Lịch Sử Ca Bệnh — Bấm Chọn Để Phân Tích Lại**

Mỗi ca phân tích được lưu offline cùng toàn bộ metadata pipeline. Bác sĩ có thể bấm vào bất kỳ ca cũ nào để xem lại XAI và tiếp tục chat với trợ lý AI theo đúng ngữ cảnh của ca đó.

**CORE TECH STACK**
`Local JSON Storage` `SwipeToDismissBox` `Staggered Fade-in Animation` `AlertDialog` `Coroutines`

**TÍNH NĂNG NỔI BẬT**
- **Tap-to-Analyze History:** Bấm vào thẻ ca bệnh → tự động đặt làm Active Case → chuyển hướng sang màn XAI với chatbot đã context-switch sang ca đó.
- **Swipe-to-Delete với Animation:** Vuốt sang trái để xóa, nền đỏ lộ ra dần, spinner xoay "Đang xóa..." 800ms trước khi biến mất.
- **Dialog xác nhận xóa:** AlertDialog 2 bước (đơn lẻ / toàn bộ) tránh xóa nhầm.
- **Staggered Entrance Animation:** Mỗi thẻ trong danh sách fade-in lệch nhau 70ms tạo hiệu ứng waterfall khi màn hình mở.
- **OOD Badge:** Thẻ bệnh lý màu đỏ tối `#261C1C`, thẻ bình thường màu Slate `#1E293B` — phân biệt ngay bằng màu sắc.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"selectedResult vs latestResult là bài toán state management thú vị nhất. Repository cần phân biệt 'ca mới nhất' (sau khi quét) và 'ca đang xem' (do người dùng chọn từ lịch sử). Sai ở đây thì toàn bộ chatbot mất context."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình Lịch sử với 3-4 thẻ ca bệnh — thẻ COVID-19 màu đỏ tối, thẻ Normal màu slate, thẻ OOD bị từ chối.
- **📱 3 Ảnh Thumbnail:**
  1. **Swipe-to-delete:** Thẻ đang vuốt, nền đỏ + icon thùng rác lộ ra.
  2. **Dialog xác nhận:** AlertDialog "Bạn có chắc chắn muốn xóa?" với 2 nút.
  3. **Spinner xóa:** Thẻ đang trong trạng thái "Đang xóa ca bệnh..." xoay tròn.

---

## SECTION 5: RESEARCH REPORT EXPORT & MODEL TRANSPARENCY
**Xuất Báo Cáo PDF & Bảng So Sánh 5 Mô Hình**

Mọi kết quả đều được đóng gói thành báo cáo nghiên cứu chuẩn — có thể chia sẻ ngay. Màn hình About Model công khai toàn bộ metrics benchmark của 5 backbone, minh bạch về năng lực và giới hạn của hệ thống.

**CORE TECH STACK**
`Android PdfDocument API` `FileProvider (Android 7+)` `Share Intent` `Bitmap-to-Canvas Rendering`

**TÍNH NĂNG NỔI BẬT**
- **PDF Export (native, không thư viện ngoài):** Dùng Android `PdfDocument` API để vẽ báo cáo A4 (595×842px) bao gồm: metadata ca bệnh, ảnh pipeline (Gốc/Mask/Masked/Heatmap), pipeline steps, disclaimer y khoa.
- **Share Intent:** Xuất PDF → chia sẻ trực tiếp qua Zalo, Email, Drive không cần cài thêm app.
- **Model Benchmark Table:** Bảng so sánh 5 backbone (DenseNet121, EfficientNet-B3, ResNet50, ViT-B/16, YOLOv12m-cls) với đầy đủ Accuracy, Macro Recall, F1, IoU, EBPG, TopK — hàng YOLOv12m-cls được highlight là mô hình được chọn.
- **Animated Progress Bar:** Mỗi metric trong bảng được render bằng thanh fill animation khi cuộn đến — kết hợp giữa trực quan hóa và thông tin học thuật.
- **Disclaimer tích hợp:** Mọi màn hình kết quả đều có DisclaimerCard nhắc nhở đây là đầu ra nghiên cứu, không phải chẩn đoán lâm sàng.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"PDF thuần native không cần iText hay thư viện ngoài — vẽ từng pixel bằng Canvas API. Khó nhất là co giãn ảnh bitmap từ bộ nhớ vào trang A4 mà không vỡ ảnh, phải tự tính tỉ lệ scale cho từng loại ảnh pipeline."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình Report — card kết quả với ảnh X-quang nhỏ bên trái, thông tin "COVID-19 · 99%" bên phải, 2 nút "Xuất PDF" + "Chia sẻ" ở dưới.
- **📱 3 Ảnh Thumbnail:**
  1. **Bảng benchmark:** About Model Screen với bảng 5 mô hình, dòng YOLOv12m-cls sáng lên.
  2. **PDF preview:** File PDF mở bằng trình đọc PDF trên điện thoại, thấy header + pipeline images.
  3. **Share intent:** Bottom sheet chia sẻ với các app (Zalo, Gmail, Drive...).

---

## SECTION 6: SPLASH & ONBOARDING — CLINICAL DARK TECH UI
**Giao Diện "Clinical Dark Tech" Từ Giây Đầu Tiên**

Màn hình đầu tiên người dùng thấy không chỉ là form đăng nhập — đó là 3 trang onboarding giải thích toàn bộ triết lý thiết kế hệ thống AI, kèm hiệu ứng radar animation và logo phổi phát sáng tự vẽ bằng Canvas.

**CORE TECH STACK**
`HorizontalPager` `Compose Canvas (custom animations)` `InfiniteTransition` `Glassmorphism Cards` `AnimatedVisibility`

**TÍNH NĂNG NỔI BẬT**
- **Animated Lung Logo:** Logo hình phổi được vẽ hoàn toàn bằng Compose Canvas, gồm 2 thùy phổi Bézier path + hiệu ứng glow pulse xanh cyan vô hạn.
- **Background Radar Effect:** Hiệu ứng radar quét vòng tròn mở rộng dần (expand + fade) chạy liên tục ở nền, tạo cảm giác thiết bị y tế đang scan.
- **3-Page HorizontalPager Onboarding:** Mỗi trang giải thích một trụ cột của hệ thống: Pipeline AI 2 giai đoạn / Local-first Privacy / Research Ethics.
- **Login với Password Toggle:** Form đăng nhập tích hợp vào cùng màn hình splash (không chuyển Activity), transition mượt bằng AnimatedVisibility.
- **Dark Theme xuyên suốt:** Nền Deep Navy `#0A0F1A`, accent Cyan `#06B6D4`, Emerald `#10B981` — thiết kế nhất quán từ Splash đến mọi màn hình.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Toàn bộ logo và radar effect được vẽ bằng Canvas drawArc/drawPath — không dùng file SVG hay ảnh PNG nào. Điều này giúp logo responsive theo mọi kích thước màn hình và không tốn dung lượng APK."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính:** Màn hình Splash/Onboarding trang 1 — logo phổi glowing màu cyan giữa màn hình tối, chữ "LUNG X-RAY · TRUSTWORTHY CLASSIFIER", radar vòng tròn xung quanh.
- **📱 3 Ảnh Thumbnail:**
  1. **Onboarding trang 2:** "Local-first · Bảo mật dữ liệu" với icon khóa và 4 bullet points.
  2. **Onboarding trang 3:** "Chỉ phục vụ nghiên cứu" với disclaimer và bảng 5 mô hình.
  3. **Login screen:** Form đăng nhập glassmorphism trên nền tối, nút "Vào ứng dụng".

---

## CV BULLET POINTS — SẴN SÀNG DÁN VÀO CV

### Phiên bản On-device AI / Edge AI (khuyên dùng):
```
Lung X-ray Trustworthy Classifier (Android) | Graduation Project, Nha Trang University   9.1/10
Tech Stack: Python · TFLite · U-Net · YOLOv12 · Kotlin · Jetpack Compose · Groq API

• Designed and deployed a two-stage on-device AI pipeline entirely via TFLite:
  Stage 1 (U-Net ResNet50) performs lung segmentation; Stage 2 (YOLOv12m-cls) classifies
  4 pathology classes (COVID-19, Pneumonia, Lung Opacity, Normal) — fully offline.

• Eliminated shortcut learning by applying median-fill masking on segmented lung regions,
  constraining model attention to pulmonary tissue; validated with EBPG (+12% vs. baseline)
  and IoU localization across 300 annotated COVID-19 cases.

• Built an OOD safety gate that auto-rejects non-chest-X-ray inputs via lung-area ratio
  thresholding, preventing false diagnostic confidence on out-of-distribution images.

• Integrated dual-mode XAI (Occlusion Sensitivity on-device + Grad-CAM++ via PyTorch server)
  and an LLM clinical reasoning assistant (Groq/LLaMA 3.1) with Fleischner-guideline grounding
  and automatic offline fallback for reliable demo environments.

• Exported native PDF research reports (Android PdfDocument API, no third-party lib) with
  full pipeline imagery and clinical disclaimers; benchmarked 5 backbones (ViT, DenseNet,
  ResNet, EfficientNet, YOLOv12) with quantitative trustworthiness metrics in-app.
```

### Phiên bản ngắn (Android Dev focus):
```
Lung X-ray Trustworthy Classifier (Android) | Graduation Project, NTU   9.1/10
Tech Stack: Kotlin · Jetpack Compose · TFLite · U-Net · YOLOv12 · Groq API

• Deployed a full 2-stage medical AI pipeline (U-Net segmentation + YOLOv12 classification)
  to Android via TFLite with completely offline on-device inference and OOD input rejection.

• Built XAI visualizations (Occlusion Sensitivity heatmap + Grad-CAM++) and an LLM chatbot
  (Groq/LLaMA 3.1) providing interactive, clinically-grounded AI critique per case.

• Implemented native PDF export, swipe-gesture history management, and a "Clinical Dark Tech"
  UI system (Glassmorphism + Canvas animations) across 7 screens in Jetpack Compose.
```
