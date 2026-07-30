# VocabLensAI — Detailed Product Features

Tài liệu này liệt kê toàn bộ các tính năng đã được triển khai hoàn chỉnh trong ứng dụng **VocabLensAI**, giải thích cơ chế hoạt động kỹ thuật bên dưới của từng tính năng.

---

## 📸 1. NHÓM TÍNH NĂNG AI CAMERA & TỪ VỰNG THỜI GIAN THỰC

### A. Quét Vật Thể Nhận Diện Từ Vựng (On-device Camera Scanner)
*   **Cơ chế**: Sử dụng thư viện **CameraX** của Google để tạo luồng preview hình ảnh trực tiếp. Các khung hình (image frames) được phân tích bất đồng bộ thông qua mô hình Object Detection của **TensorFlow Lite** chạy offline 100% trên thiết bị.
*   **Chức năng**: Vẽ hộp giới hạn (Bounding Box) xung quanh vật thể được nhận diện, hiển thị nhãn tiếng Anh (ví dụ: *chair*, *keyboard*, *mouse*) và tự động dịch nghĩa tiếng Việt thông qua từ điển cục bộ.

### B. Truyện Ngắn Học Tập Bằng AI (AI Storyteller)
*   **Cơ chế**: Kết hợp danh sách từ vựng người dùng vừa quét được bằng Camera và gọi Gemini API bằng thư viện `google-generativeai` Client SDK.
*   **Chức năng**: AI tự động biên soạn một câu chuyện ngắn ngắn bằng tiếng Anh chứa tất cả các từ vựng đó. Đi kèm là bản dịch tiếng Việt và phân tích từ vựng giúp người dùng tiếp thu từ mới thông qua ngữ cảnh tự nhiên.

### C. Giao Diện Kho Học Tập Cải Tiến (Advanced Study Hub)
*   **Sắp xếp linh hoạt (Sort Engine)**: Sắp xếp danh sách từ vựng theo Mới nhất, Cũ nhất, A-Z, Z-A, và Độ khó giảm dần.
*   **Chế độ thu gọn (Compact Mode)**: Chuyển đổi linh hoạt giữa giao diện Chi tiết (Detailed - có ảnh, ví dụ, phiên âm) và dạng Danh sách rút gọn (Compact - chỉ hiện từ và nghĩa chính) giúp tối ưu hóa không gian hiển thị khi danh sách đạt hàng trăm từ.
*   **Nút Cuộn Lên Đầu (FAB Scroll-to-top)**: Tự động xuất hiện và ẩn đi thông minh dựa trên hành động vuốt màn hình của người dùng.

---

## ⚔️ 2. NHÓM TÍNH NĂNG ĐẤU TRƯỜNG PvP GAME ENGINE

### A. Ghép Trận PvP Thời Gian Thực (PvP Matchmaking)
*   **Cơ chế**: Sử dụng Firebase Firestore để quản lý hàng chờ ghép cặp trực tuyến (Matchmaking Queue).
*   **Chức năng**: Hệ thống tìm kiếm các người chơi khác có điểm ELO tương đồng ($\pm 100$). Nếu sau 5 giây không tìm thấy đối thủ trực tuyến, hệ thống sẽ tự động kích hoạt **Bot mô phỏng** để người dùng không phải chờ đợi lâu.

### B. Tính Điểm ELO & Thứ Hạng (ELO Calculator)
*   **Cơ chế**: Sử dụng công thức tính điểm ELO chuẩn Chess.com với hệ số $K$ thay đổi linh hoạt ($K=40$ cho người mới để nhanh chóng tìm được phân cấp trình độ; $K=20$ cho người chơi có kinh nghiệm để tránh biến động lớn).
*   **Chức năng**: Cộng/trừ ELO ngay sau khi kết thúc trận đấu và cập nhật lên bảng xếp hạng trực tuyến toàn cầu (Leaderboard).

### C. Phân Tích Trận Đấu (Game Review)
*   **Cơ chế**: So sánh tốc độ và độ chính xác của từng câu trả lời trong trận đấu.
*   **Chức năng**: Hiển thị bảng tổng kết phong cách Chess.com, phân loại các câu trả lời của người dùng thành:
    *   **Genius (Thiên tài) ⚡**: Trả lời đúng trong thời gian cực ngắn (< 1 giây).
    *   **Blunder (Sai lầm) ⚠️**: Trả lời sai các từ vựng dễ hoặc chọn đáp án sai nhiều lần.
    *   *Kèm lời nhận xét thông minh sinh ra bởi Trợ lý AI.*

### D. Chế Độ Sinh Tồn (Survival Mode)
*   **Chức năng**: Trò chơi đố vui từ vựng không giới hạn thời gian. Người chơi sẽ trả lời liên tiếp các câu hỏi cho đến khi hết lượt máu (3 mạng). Điểm số cao nhất (High Score) được lưu trữ cục bộ và đồng bộ lên Cloud.

---

## 🗺️ 3. LỘ TRÌNH BÀI HỌC HỆ THỐNG (EXPLORE ROADMAP PATH)

### A. Bản Đồ Lộ Trình Duolingo Style
*   **Cơ chế**: Đọc cấu trúc 54 Units bài học chuẩn CEFR (A1-C2) từ file JSON assets cục bộ.
*   **Chức năng**: Hiển thị bản đồ lộ trình học dạng trục dọc sinh động với các trạng thái nút: Đã khóa 🔒, Sẵn sàng học 🎯, Đã hoàn thành 🏆.

### B. Bài Học Phân Tích Đa Dạng
*   **Tab Từ Vựng**: Học từ kèm phát âm và luyện nói nói trực quan.
*   **Tab Ngữ Pháp**: Học lý thuyết ngữ pháp định dạng Markdown sạch đẹp, có ví dụ thực tế và bài tập trắc nghiệm củng cố ngay cuối trang.
*   **Tab Đọc Hiểu**: Đoạn văn tiếng Anh. Người học có thể nghe AI đọc cả bài hoặc **chạm trực tiếp vào bất kỳ từ nào** để dịch nghĩa nhanh ngay lập tức.
*   **Tab Hội Thoại**: Thực hành đóng vai giao tiếp theo từng câu thoại của nhân vật.

---

## 📚 4. THUẬT TOÁN HỌC TẬP & TỰ TẠO BỘ HỌC TẬP (CUSTOM STUDY SETS)

### A. Thuật Toán Lặp Lại Ngắt Quãng SM-2 (Spaced Repetition)
*   **Cơ chế**: Tùy biến thuật toán SuperMemo-2 danh tiếng.
*   **Chức năng**: Dựa trên đánh giá độ dễ/khó của người học sau mỗi lần lật Flashcard để tính toán các hệ số:
    *   `Ease Factor (EF)`: Hệ số dễ (mặc định 2.5).
    *   `Interval`: Khoảng thời gian ôn tập tiếp theo (1 ngày, 6 ngày, hoặc tăng dần theo EF).
    *   `Repetitions`: Số lần lặp lại thành công liên tiếp.

### B. Trình Nhập Từ Thông Minh (Smart Auto-fill)
*   **Cơ chế**: Khi người dùng thêm từ vào bộ học tập tự tạo, hệ thống tự động tra cứu bất đồng bộ trong Master Dictionary chứa hơn 150.000 dòng dữ liệu từ vựng.
*   **Chức năng**: Tự động điền phiên âm IPA, nghĩa tiếng Việt chính xác và câu ví dụ minh họa mà người học không cần nhập thủ công.

### C. Nhập Từ Hàng Loạt (Bulk Import)
*   **Chức năng**: Mở hộp thoại chứa toàn bộ từ điển hệ thống, cho phép tìm kiếm và tích chọn nhanh nhiều từ cùng lúc để nạp vào bộ học tập tùy chỉnh của mình.

---

## 👑 5. MÔ PHỎNG VIP PREMIUM & BẢO MẬT

### A. Paywall Subscription Simulator
*   **Chức năng**: Giới hạn người dùng tài khoản Free chỉ được sử dụng tối đa 3 lượt gọi AI (dịch bài, viết truyện AI, chatbot) mỗi ngày. Khi vượt quá giới hạn, ứng dụng hiển thị popup VIP Gold Gradient bắt mắt mời nâng cấp. Người kiểm thử có thể nhấn "Free Demo" để trải nghiệm đầy đủ.

### B. Firebase Auth & Live Cloud Sync
*   **Chức năng**: Xác thực tài khoản qua Email/Mật khẩu hoặc Google Sign-In. Khi có mạng, toàn bộ XP, ELO, Streak, danh sách từ vựng đã học được đồng bộ ngầm thời gian thực giữa Local SQLite (Room) và Firebase Cloud.
