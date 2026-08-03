# AI Fitness Coach - Portfolio Content

Dưới đây là nội dung chuẩn bị cho trang web Portfolio của bạn. Cấu trúc được thiết kế dựa trên layout thực tế (1 ảnh Mockup lớn + 3-4 ảnh nhỏ bên dưới) tương tự như VocabLens.

---

## SECTION 1: AI POSE COACH & TRACKING
**Trợ Lý AI Chỉnh Sửa Tư Thế Thời Gian Thực**

Tích hợp sức mạnh của Edge AI (chạy trực tiếp trên thiết bị) để phân tích 33 điểm khớp xương của cơ thể, tự động đếm số lần tập và sửa lỗi sai tư thế mà không cần kết nối mạng.

**CORE TECH STACK**
`CameraX` `Google MediaPipe` `MLKit Vision` `3D Vector Math` `Room Database`

**TÍNH NĂNG NỔI BẬT**
- **Camera Live Tracking (FormCoachScreen):** Xử lý hình ảnh camera 60fps để vẽ khung xương (Skeleton) trực tiếp lên cơ thể người tập.
- **Rule-based Angles Engine:** Tự thiết kế các thuật toán đo góc 3D để nhận diện tư thế (VD: Góc gập gối của bài Squat, góc lưng của bài Plank) nhằm đưa ra cảnh báo chấn thương.
- **Tự động đếm Reps:** Tự động hoá hoàn toàn việc đếm số lần lặp lại (Reps) và lưu trữ 100% offline.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Thách thức lớn nhất là đảm bảo tốc độ phản hồi AI dưới 50ms để vẽ khung xương mượt mà. Thay vì đưa ảnh lên Cloud, tôi chọn chạy mô hình Pose Landmarker (Lite) cục bộ hoàn toàn trên GPU/CPU điện thoại bằng MediaPipe, kết hợp với luồng xử lý bất đồng bộ của CameraX để giải quyết bài toán độ trễ và bảo vệ quyền riêng tư người dùng."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính (Lớn nhất):** Chụp màn hình lúc bạn (hoặc ai đó) đang đứng trước camera tập bài Squat, hệ thống vẽ lưới xương (Skeleton) màu xanh lá lên người và hiện chữ "GOOD FORM".
- **📱 3 Ảnh Thumbnail nhỏ (bên dưới):**
  1. **Trang chủ Tab AI Form Coach:** Giao diện bắt đầu, có nút chọn "Squat", "Push-up", "Plank".
  2. **Cảnh báo lỗi (Bad Form):** Màn hình lúc tập sai (VD: cong lưng), hiển thị màu đỏ cảnh báo.
  3. **Màn hình Thống kê (Progress):** Hiển thị biểu đồ Reps hoặc điểm số Form Score sau khi tập xong.

---

## SECTION 2: OFFLINE-FIRST EXERCISE LIBRARY
**Thư Viện Bài Tập Khổng Lồ Siêu Tốc**

Tra cứu hàng nghìn bài tập, hình ảnh minh hoạ động và dữ liệu khoa học về cơ bắp một cách mượt mà ngay cả khi điện thoại đang ở chế độ Máy bay (Airplane mode).

**CORE TECH STACK**
`Jetpack Compose LazyList` `Coil-Compose` `JSON Assets Parsing` `Coroutines`

**TÍNH NĂNG NỔI BẬT**
- **Cơ sở dữ liệu đồ sộ:** Tích hợp 873 bài tập chuẩn y khoa, chia theo 7 nhóm cơ và 5 loại thiết bị tập.
- **Hiệu ứng ảnh động giả lập:** Xử lý luân phiên 1,746 bức ảnh tĩnh (.jpg) thành dạng ảnh động (GIF) mượt mà để minh họa cách tập mà không làm tràn bộ nhớ RAM.
- **Truy vấn thông minh:** Chức năng tìm kiếm, phân loại đa tầng (Nhóm cơ, Thiết bị, Cấp độ) phản hồi tức thì với cấu trúc dữ liệu tối ưu.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Thay vì dùng ảnh GIF nặng nề gây tốn hàng trăm MB RAM và lag màn hình cuộn (Scroll), tôi đã thiết kế một hệ thống "Auto-Flip" thông minh bằng Compose. Hệ thống này chỉ load 2 tấm ảnh JPG rất nhẹ vào bộ nhớ Cache (Coil) và cross-fade chúng tạo cảm giác động, giúp danh sách cuộn mượt mà ở 120Hz."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính (Lớn nhất):** Màn hình **Chi tiết bài tập (Exercise Detail)**. Hình ảnh hoạt ảnh tập luyện (GIF) chiếm nửa trên màn hình, nửa dưới là các tag (Nhóm cơ chính, cơ phụ, cấp độ) và mô tả bằng tiếng Việt chuẩn.
- **📱 3 Ảnh Thumbnail nhỏ (bên dưới):**
  1. **Giao diện Library (Thư viện):** Nơi hiển thị 7 thẻ nhóm cơ nổi bật (ảnh nghệ thuật Neon) như Ngực, Lưng, Chân mà chúng ta vừa làm.
  2. **Bộ Lọc (Filters):** Mở thanh tìm kiếm và hiển thị popup lọc theo "Thiết bị: Tạ đơn", "Mục tiêu: Tăng cơ".
  3. **Thư viện Offline:** Danh sách hàng loạt các thẻ (Card) bài tập đang được render mượt mà.

---

## SECTION 3: PERSONALIZED WORKOUT ENGINE
**Thuật Toán Đề Xuất Giáo Án Cá Nhân Hoá**

Lên lịch tập luyện hoàn chỉnh trong 7 ngày dựa trên hệ thống chấm điểm đa chiều, tối ưu hoá thời gian nghỉ ngơi và kích thích cơ bắp tối đa.

**CORE TECH STACK**
`Room SQLite` `DataStore Preferences` `Scoring Algorithm` `MVVM` 

**TÍNH NĂNG NỔI BẬT**
- **Recommendation Engine (ExerciseScorer):** Thuật toán tự động chấm điểm và chọn lọc bài tập phù hợp dựa trên trình độ, mục tiêu và nhóm cơ đang cần hồi phục của user.
- **Lưu trữ Offline-first (Room DB):** Quản lý toàn bộ tiến trình tập luyện (Weekly Workout Plan), cho phép người dùng tự do tuỳ chỉnh (Thêm, xóa, thay thế) bài tập.
- **Clean Architecture:** Tách biệt hoàn toàn lớp giao diện (UI) và lớp dữ liệu (Repository), dễ dàng mở rộng và bảo trì.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Tôi đã xây dựng một thuật toán 'Exercise Scorer' nội bộ (chạy ở background thread) để tự động cân bằng giáo án. Ví dụ: Nếu người dùng chọn tập ở nhà (Home Workout), hệ thống sẽ ưu tiên 100% các bài 'Bodyweight' và loại bỏ các bài tập cần dùng máy móc (Machine) ở Gym, tạo ra trải nghiệm cực kỳ cá nhân hoá."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính (Lớn nhất):** Màn hình **Dashboard (Trang chủ)** hiển thị lịch trình tuần, ví dụ ngày "Thứ 2: Tập Ngực", với các bài tập được đề xuất trải dọc xuống dưới.
- **📱 3 Ảnh Thumbnail nhỏ (bên dưới):**
  1. **Màn hình Khảo sát Khởi tạo:** Giao diện hỏi người dùng "Trình độ của bạn là gì?" (Beginner/Pro).
  2. **Màn hình Tùy chỉnh (Custom Builder):** Chức năng người dùng đang tự tay Swap (đổi) một bài tập khác vào giáo án.
  3. **Hồ sơ Cá nhân:** Màn hình Settings/Profile nơi hiển thị cân nặng, chiều cao, chỉ số BMI.

---

## SECTION 4: INTERACTIVE PLAYER & OLED UI
**Trải Nghiệm Tập Luyện Premium OLED**

Thiết kế giao diện Dark Mode tối đa hóa hiển thị trên màn hình AMOLED, tiết kiệm pin và mang lại cảm giác sang trọng, tập trung.

**CORE TECH STACK**
`Jetpack Compose Canvas` `Framer Motion (Animations)` `Material Design 3` `StateFlow`

**TÍNH NĂNG NỔI BẬT**
- **Active Workout Player:** Giao diện điều hướng khi đang tập (Đếm thời gian nghỉ, Next/Prev bài tập) với hiệu ứng chuyển cảnh mượt mà.
- **Đa ngôn ngữ (Localization):** Hệ thống tự động dịch thuật và chuẩn hoá thuật ngữ thể hình tiếng Việt.
- **Thống kê chuyên sâu:** Biểu đồ tương tác (Canvas) hiển thị tần suất tập luyện, số Reps thực hiện và tổng khối lượng tạ.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Tôi áp dụng triết lý thiết kế 'OLED-first' với nền True Black (#000000) kết hợp với các dải màu Neon. Điều này không chỉ giúp UI/UX trông cực kỳ 'Futuristic' giống các SaaS hàng đầu, mà còn tiết kiệm pin đáng kể cho người dùng khi màn hình điện thoại phải sáng liên tục trong suốt 1 giờ tập luyện."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính (Lớn nhất):** Màn hình **Workout Player (Trình Phát Tập Luyện)**. Lúc này app đang ở trạng thái đếm ngược đồng hồ (Countdown tròn to giữa màn hình) và hiển thị "Bài tập tiếp theo: Hít Đất".
- **📱 3 Ảnh Thumbnail nhỏ (bên dưới):**
  1. **Workout Player (Khi đang tập):** Màn hình hiển thị số Hiệp (Sets/Reps) để người dùng tự tick ✅ khi tập xong.
  2. **Nghỉ ngơi (Rest Screen):** Giao diện đếm ngược 60s thời gian nghỉ ngơi.
  3. **Biểu đồ Tiến độ:** Màn hình Progress tab với biểu đồ (Canvas) hiển thị các ngày đã tập trong tuần (màu xanh neon).

---

## SECTION 5: AI VOICE COACH & OFFLINE PROGRESS
**Huấn Luyện Viên Cá Nhân Tại Gia**

Ngoài việc quan sát bằng Camera, ứng dụng còn tương tác trực tiếp với bạn thông qua giọng nói (Text-to-Speech), nhắc nhở sửa form và ăn mừng thành tích như một PT (Personal Trainer) thực thụ.

**CORE TECH STACK**
`Android TTS (Text-To-Speech)` `Room DB Aggregation` `Jetpack Compose Canvas (Charts)`

**TÍNH NĂNG NỔI BẬT**
- **Trợ lý giọng nói (VoiceCoach):** Tự động phát âm thanh cảnh báo bằng hai ngôn ngữ (Anh/Việt) khi AI phát hiện tư thế sai (VD: "Hãy giữ lưng thẳng", "Xuống sâu hơn chút nữa").
- **Mô phỏng (Mock Run):** Tích hợp tính năng chạy giả lập dữ liệu cho người dùng test thử AI Form Coach mà không cần bật Camera thực.
- **Biểu đồ nhiệt (Heatmap) tiến độ:** Vẽ biểu đồ thống kê chuyên sâu số lần tập (Reps), điểm số Form (Form Score) và lịch sử tập luyện 30 ngày qua bằng Canvas nguyên bản.

💡 **GHI CHÚ CỦA LẬP TRÌNH VIÊN**
> *"Tôi muốn biến chiếc điện thoại thành một PT thực sự. Bằng cách nối tín hiệu từ CameraX sang MediaPipe, lấy góc khớp gửi về ViewModel, cuối cùng kích hoạt Android TTS (Text-to-Speech) để phát ra âm thanh nhắc nhở, tạo thành một vòng lặp phản hồi (Feedback Loop) thời gian thực khép kín hoàn toàn offline."*

### 📸 Hướng dẫn Chụp ảnh cho Section này:
- **🖼️ Ảnh Mockup Chính (Lớn nhất):** Màn hình **Tiến độ (Progress Screen)** hiển thị tổng quát (Overview) với con số "Tổng số Reps", "Bài tập hoàn thành" được thiết kế dạng thẻ (Card) tuyệt đẹp.
- **📱 3 Ảnh Thumbnail nhỏ (bên dưới):**
  1. **Biểu đồ Lịch sử:** Phần dưới của màn hình Progress với các cột/đường biểu đồ thành tích.
  2. **Cài đặt Voice Coach:** Màn hình cài đặt (Profile) có nút Bật/Tắt Giọng nói HLV.
  3. **Lời khuyên AI:** Các đoạn text nhỏ (Tips) hiện ra trên màn hình khi hoàn thành bài tập.
