# VocabLensAI — Comprehensive Technical Interview Prep Guide

Tài liệu này tập hợp các câu hỏi phỏng vấn kỹ thuật chuyên sâu (Technical Q&A) từ các Senior Android Engineer và Tech Lead, xoay quanh các bài toán và giải pháp kỹ thuật cụ thể đã áp dụng trong dự án **VocabLensAI**.

---

## 📱 PART 1: NATIVE ANDROID DEVELOPMENT (KOTLIN & JETPACK COMPOSE)

### Q1: Tại sao bạn lại chọn Jetpack Compose thay vì XML Layouts truyền thống trong dự án này?
> **Trả lời**:
> Jetpack Compose là framework xây dựng giao diện dạng khai báo (Declarative UI) hiện đại. Tôi chọn Compose vì:
> 1.  **Code gọn gàng hơn**: Không còn file XML Layout, không cần gọi `findViewById()` hay dùng ViewBinding. UI và logic giao diện viết chung bằng Kotlin giúp bảo trì dễ dàng.
> 2.  **Quản lý State đồng bộ**: Compose tự động vẽ lại giao diện (Recomposition) khi State thay đổi, triệt tiêu hoàn toàn lỗi không đồng bộ giữa dữ liệu và giao diện thường gặp ở XML.
> 3.  **Tăng tốc độ phát triển**: Sử dụng các Composable tái sử dụng cao, hiệu ứng chuyển động (animations) viết cực kỳ ngắn gọn và mượt mà.

### Q2: Recomposition trong Jetpack Compose hoạt động thế nào? Làm sao để tối ưu hiệu năng và tránh hiện tượng vẽ lại vô ích (Unnecessary Recompositions)?
> **Trả lời**:
> Recomposition là quá trình Compose chạy lại các hàm Composable khi tham số đầu vào (State/Parameters) của chúng thay đổi. Để tối ưu hiệu năng:
> 1.  **Sử dụng keys trong Lazy List**: Khi hiển thị danh sách từ vựng dài trong `LazyColumn`, tôi luôn chỉ định `key = { it.id }` để Compose tái sử dụng Composable cũ thay vì vẽ lại cả danh sách khi có 1 item thay đổi.
> 2.  **derivedStateOf**: Khi một State được tính toán từ các State khác (ví dụ: lọc danh sách từ theo từ khóa tìm kiếm), tôi bọc logic lọc trong `derivedStateOf` để nó chỉ tính toán lại khi từ khóa thực sự thay đổi, tránh chạy lại logic lọc phức tạp ở mỗi frame render.
> 3.  **remember**: Bọc các biến khởi tạo đắt đỏ bên trong `remember` để chúng không bị khởi tạo lại mỗi lần hàm Composable chạy lại.

### Q3: Bạn giải quyết vấn đề điều hướng (Navigation) và truyền nhận dữ liệu giữa các màn hình bằng Jetpack Navigation Compose thế nào?
> **Trả lời**:
> Tôi sử dụng thư viện `androidx.navigation:navigation-compose`.
> *   Thiết lập một `NavHost` chính chứa các điểm đến (routes) định dạng bằng String định danh (ví dụ: `"explore"`, `"arena"`, `"flashcard/{setId}"`).
> *   Truyền tham số an toàn bằng cách định nghĩa đối số trong route (ví dụ: `{setId}`) và lấy ra từ `backStackEntry.arguments`.
> *   Để tránh việc truyền các đối tượng dữ liệu phức tạp (Parcelable) trực tiếp qua Route gây phình dung lượng Bundle và lỗi crash, tôi chỉ truyền các ID nguyên bản (như `setId` dạng Int hoặc String), sau đó màn hình đích sẽ dùng ID đó để truy vấn dữ liệu từ Room Database thông qua ViewModel.

---

## 🤖 PART 2: MACHINE LEARNING & COMPUTER VISION (CAMERAX & TFLITE)

### Q4: Bạn tích hợp mô hình TensorFlow Lite vào ứng dụng Android thế nào và cấu hình luồng xử lý ảnh thời gian thực ra sao?
> **Trả lời**:
> 1.  **Nạp mô hình**: Tôi đặt file mô hình `.tflite` (đã được lượng tử hóa - quantized để giảm dung lượng xuống còn vài MB) cùng file chứa nhãn nhãn vật thể trong thư mục `assets`.
> 2.  **Cấu hình CameraX**: Sử dụng `ImageAnalysis` để lấy luồng ảnh trực tiếp từ camera.
> 3.  **Tiền xử lý ảnh (Preprocessing)**: Khung hình camera trả về định dạng YUV_420_888. Tôi cần chuyển đổi nó về dạng ảnh Bitmap RGB, sau đó xoay chiều ảnh (rotation) khớp với hướng màn hình và scale ảnh về kích thước đầu vào của model (ví dụ: 300x300 pixel).
> 4.  **Chạy suy luận (Inference)**: Đưa Tensor ảnh vào `Interpreter` của TensorFlow Lite để chạy dự đoán bất đồng bộ trên thread phụ.
> 5.  **Hậu xử lý (Postprocessing)**: Nhận kết quả đầu ra chứa tọa độ bounding boxes, ID lớp nhãn vật thể và điểm tin cậy (Confidence score). Tôi lọc bỏ các kết quả có điểm tin cậy $< 50\%$ trước khi vẽ lên màn hình.

### Q5: Làm thế nào bạn tối ưu hóa việc tiêu thụ năng lượng pin và nhiệt độ thiết bị khi Camera quét vật thể liên tục?
> **Trả lời**:
> Việc chạy mô hình ML trên mỗi khung hình camera (30 FPS) rất nhanh làm nóng máy và hao pin. Tôi đã áp dụng các biện pháp tối ưu:
> 1.  **Tần suất quét thấp (Throttling)**: Sử dụng một bộ đếm thời gian hoặc so sánh timestamp để chỉ gửi khung hình đi phân tích sau mỗi 300ms hoặc 500ms, bỏ qua các khung hình trung gian.
> 2.  **Giải phóng tài nguyên**: Lắng nghe vòng đời của Composable (`LifecycleEventObserver`), tự động đóng camera feed và giải phóng đối tượng `Interpreter` của TFLite khi người dùng chuyển sang tab khác hoặc ẩn ứng dụng.

---

## 🧠 PART 3: THUẬT TOÁN HỌC TẬP (SPACED REPETITION SM-2)

### Q6: Hãy giải thích cách bạn tùy biến thuật toán Spaced Repetition (SM-2) trong VocabLensAI?
> **Trả lời**:
> Thuật toán SM-2 trong ứng dụng sử dụng 3 tham số lưu trong bảng `Flashcard`:
> *   `repetitions`: Số lần liên tiếp người dùng nhớ đúng từ vựng.
> *   `interval`: Khoảng cách số ngày cho lần ôn tập tiếp theo.
> *   `easeFactor (EF)`: Hệ số dễ của từ (bắt đầu bằng 2.5).
>
> Khi người dùng lật thẻ và đánh giá độ nhớ của mình từ 0 đến 5:
> *   Nếu chất lượng đánh giá $< 3$ (người dùng quên từ): `repetitions` reset về 0, `interval` reset về 1 ngày, `easeFactor` giảm đi một lượng.
> *   Nếu chất lượng đánh giá $\ge 3$ (nhớ từ):
>     *   Nếu `repetitions == 0`: `interval = 1` ngày.
>     *   Nếu `repetitions == 1`: `interval = 6` ngày.
>     *   Nếu `repetitions > 1`: `interval = interval trước đó * easeFactor`.
>     *   `easeFactor` được cập nhật theo công thức: $EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))$.
> Ngày học tiếp theo được tính bằng ngày hiện tại cộng với số ngày `interval` vừa tính được.

---

## ⚔️ PART 4: PvP GAME ENGINE & FIREBASE

### Q7: Cơ chế Ghép trận PvP (Matchmaking) thời gian thực của bạn hoạt động thế nào trên nền Firestore?
> **Trả lời**:
> Tôi sử dụng cơ chế hàng chờ chung (Queue-based matchmaking):
> 1.  Khi người dùng ấn "Bắt đầu thách đấu", một document chứa thông tin người chơi (userId, ELO hiện tại, trạng thái `"searching"`, timestamp) được ghi vào collection `matchmaking_queue` trên Firestore.
> 2.  Ứng dụng đăng ký lắng nghe thay đổi (Snapshot Listener) trên collection này để tìm kiếm các document có trạng thái `"searching"` và mức ELO chênh lệch trong khoảng $\pm 100$.
> 3.  **Xử lý race condition**: Nếu tìm thấy đối thủ phù hợp, người chơi sẽ cố gắng thực hiện một giao dịch nguyên tử (Firestore Transaction) để cập nhật trạng thái của cả hai bên thành `"matched"` và tạo một mã phòng đấu `matchId` chung.
> 4.  **Bot Fallback**: Để tránh việc người dùng chờ đợi quá lâu khi không có ai trực tuyến, sau 5 giây tìm kiếm, ứng dụng sẽ tự động chuyển trạng thái sang đấu với Bot mô phỏng bằng cách sinh ngẫu nhiên chỉ số ELO và tỷ lệ trả lời đúng phù hợp với trình độ của người chơi.

### Q8: Hãy giải thích cách bạn tính toán cộng/trừ điểm ELO sau mỗi trận đấu PvP?
> **Trả lời**:
> Điểm ELO mới của người chơi A được tính dựa trên hiệu số điểm ELO hiện tại của A ($R_A$) và đối thủ B ($R_B$):
> 1.  Tính điểm kỳ vọng (Expected Score) của người chơi A: $E_A = 1 / (1 + 10^{(R_B - R_A) / 400})$.
> 2.  Xác định điểm thực tế ($S_A$): $1.0$ nếu thắng, $0.5$ nếu hòa, $0.0$ nếu thua.
> 3.  Cập nhật ELO: $R'_A = R_A + K \times (S_A - E_A)$.
>     *   Để đảm bảo thứ hạng phản ánh nhanh trình độ người chơi mới, tôi thiết lập $K = 40$ nếu số trận đấu của người dùng $< 20$.
>     *   Khi người dùng đã thi đấu nhiều trận, hệ số giảm xuống $K = 20$ để giữ tính ổn định của thứ hạng.
