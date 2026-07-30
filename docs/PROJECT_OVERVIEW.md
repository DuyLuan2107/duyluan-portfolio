# VocabLensAI — Comprehensive Project Overview

Ứng dụng **VocabLensAI** là một nền tảng học tiếng Anh native thông minh chạy trên hệ điều hành Android. Ứng dụng tích hợp công nghệ trí tuệ nhân tạo nhận diện vật thể thời gian thực và mô hình ngôn ngữ lớn để mang lại trải nghiệm học tập cá nhân hóa, kết hợp mô hình đấu trường PvP tính cúp thứ hạng độc đáo.

---

## 🎯 1. BÀI TOÁN DỰ ÁN GIẢI QUYẾT (PROBLEM STATEMENT)

Việc học từ vựng tiếng Anh theo cách truyền thống thường gặp phải 3 rào cản lớn:
1.  **Thiếu tính ngữ cảnh**: Học từ vựng qua danh sách thô rất khó nhớ vì từ vựng không liên hệ với các vật thể hay hoạt động xung quanh cuộc sống thực tế của người học.
2.  **Đường cong quên lãng (Forgetting Curve)**: Người học có xu hướng quên 70% từ mới sau 24 giờ nếu không được lên lịch ôn tập đúng thời điểm vàng.
3.  **Thiếu động lực học tập (Lack of Gamification)**: Các bài tập trắc nghiệm lặp đi lặp lại dễ gây nhàm chán, thiếu tính cạnh tranh và tương tác cộng đồng.

### Giải pháp từ VocabLensAI:
*   **Contextual Edge AI**: Biến camera điện thoại thành công cụ học tập. Quét vật thể xung quanh $\rightarrow$ hiển thị nghĩa và phiên âm $\rightarrow$ học trực tiếp bằng hình ảnh thực tế.
*   **Scientific Repetition**: Tích hợp thuật toán lặp lại ngắt quãng SM-2 để tự động hóa lịch ôn tập hàng ngày của từng người dùng một cách riêng biệt.
*   **Active PvP Engagement**: Thiết kế đấu trường PvP Blitz đố vui từ vựng trực tuyến tính ELO và xếp hạng League hàng tuần để kích thích tinh thần tự học của người chơi thông qua tính cạnh tranh lành mạnh.

---

## 🚀 2. KIẾN TRÚC HỆ THỐNG CỐT LÕI (CORE ARCHITECTURE)

Ứng dụng được thiết kế theo mô hình **MVVM (Model-View-ViewModel)** chuẩn, đảm bảo tính tách biệt của các lớp dữ liệu và khả năng mở rộng trong tương lai:
*   **Giao diện (Jetpack Compose)**: 100% giao diện khai báo, tối ưu hóa Recomposition, thiết kế mượt mà và trực quan.
*   **Bất đồng bộ (Coroutines & Flow)**: Sử dụng luồng dữ liệu bất đồng bộ để đồng bộ thời gian thực giữa Local SQLite và Firebase Cloud.
*   **Công cụ lưu trữ (Room Database)**: Lưu trữ tiến trình học tập, lịch sử thi đấu và từ vựng cá nhân, đảm bảo ứng dụng luôn chạy mượt mà ngay cả khi không có kết nối mạng (Offline-first).

---

## 🌟 3. CÁC TÍNH NĂNG NỔI BẬT

1.  **AI Camera Scanner**: Nhận dạng vật thể thời gian thực bằng TensorFlow Lite kết hợp CameraX.
2.  **AI Storyteller**: Tự động sinh câu chuyện ngắn bằng Gemini API dựa trên từ vựng quét được.
3.  **Spaced Repetition Flashcards**: Ôn tập thẻ từ theo thuật toán SuperMemo-2.
4.  **PvP Arena (ELO & Game Review)**: Ghép trận PvP trực tuyến, tính ELO Chess.com style, phân tích lỗi sai (Genius/Blunder moves) bằng AI.
5.  **Duolingo-style Roadmap**: 54 bài học phân cấp theo chuẩn khung tham chiếu CEFR từ A1 đến C2.
6.  **Social Community**: Hệ thống Bạn bè, câu lạc bộ, bảng xếp hạng toàn cầu trực tuyến và lời mời thách đấu.
7.  **Subcription Paywall Simulator**: Mô phỏng tính năng VIP giúp hạn chế lượt dùng AI và cho phép mở khóa trải nghiệm thử nghiệm thông qua giao diện sang trọng.
