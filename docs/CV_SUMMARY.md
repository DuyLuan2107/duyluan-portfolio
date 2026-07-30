# VocabLensAI — Resume & CV Project Summary

Tài liệu này cung cấp các mẫu viết về dự án **VocabLensAI** vào CV (Resume) chuẩn ATS (Applicant Tracking System), giúp nêu bật được độ phức tạp về kỹ thuật (Mobile Native, Edge ML, LLM, Game PvP Engine, Spaced Repetition) mà vẫn giữ tính thực tế và trung thực trước nhà tuyển dụng.

---

## 📄 1. PHIÊN BẢN TIẾNG ANH (ATS-OPTIMIZED ENGLISH VERSION)

### **VocabLensAI — Native Android English Learning Platform** (Personal Project)
**Tech Stack**: Kotlin, Jetpack Compose, Coroutines/Flow, Room DB, CameraX, TensorFlow Lite, Gemini API, Firebase (Auth & Firestore), Supabase.

*   **Architected and developed** an offline-first Android application from scratch using Kotlin, Jetpack Compose, MVVM, and clean code practices.
*   **Implemented on-device real-time object detection** by integrating CameraX and a lightweight TensorFlow Lite (.tflite) model to instantly extract and generate vocabulary flashcards from real-world surroundings.
*   **Integrated Gemini AI** to build a contextual story generator (AI Storyteller) and a phonetic pronunciation analyzer, incorporating local caching to respect API token rate limits.
*   **Designed a custom learning engine** incorporating the SM-2 Spaced Repetition algorithm (calculating Ease Factor, repetitions, and intervals) to automatically schedule daily reviews.
*   **Built a real-time multiplayer PvP Arena** using Firebase Firestore, implementing a matchmaking system with simulated bot fallbacks and an ELO rating calculator ($K=40/20$).
*   **Developed Chess.com-style game review UI** displaying match accuracy (%), Genius/Blunder move tags, and dynamically generated AI feedback on gameplay performance.
*   **Designed a hybrid data sync system** utilizing Room Database for local caching and offline operations, paired with Firestore for background profile and progress synchronization.

---

## 📄 2. PHIÊN BẢN TIẾNG VIỆT (VIETNAMESE VERSION)

### **VocabLensAI — Ứng Dụng Học Tiếng Anh Native Android Thông Minh** (Dự án cá nhân)
**Công nghệ**: Kotlin, Jetpack Compose, Coroutines/Flow, Room DB, CameraX, TensorFlow Lite, Gemini API, Firebase (Auth & Firestore), Supabase.

*   **Thiết kế và phát triển** từ đầu ứng dụng Android theo mô hình offline-first sử dụng Kotlin, Jetpack Compose và MVVM.
*   **Tích hợp nhận dạng vật thể thời gian thực** trực tiếp trên thiết bị (Edge AI) bằng cách kết hợp CameraX và mô hình TensorFlow Lite, tự động chuyển đổi hình ảnh quét được thành thẻ học từ vựng (flashcards).
*   **Ứng dụng mô hình ngôn ngữ lớn (LLM)** qua Gemini API để phát triển tính năng AI Storyteller (viết truyện theo ngữ cảnh từ vựng) và phân tích phát âm chi tiết, xử lý lỗi mạng và bộ nhớ đệm để tối ưu hóa hạn ngạch API.
*   **Xây dựng thuật toán lặp lại ngắt quãng SM-2** tùy biến (tính toán Ease Factor, số lần lặp lại và khoảng thời gian) để tự động lên lịch trình ôn tập thông minh hàng ngày cho người học.
*   **Thiết kế công cụ Đấu trường PvP thời gian thực** qua Firebase Firestore, tích hợp cơ chế ghép trận (Matchmaking) với Bot mô phỏng khi mất mạng và công thức tính cúp ELO ($K=40/20$).
*   **Xây dựng giao diện Phân tích trận đấu (Game Review) phong cách Chess.com** hiển thị độ chính xác (%), nhãn gắn thẻ hành vi (Thiên tài ⚡, Sai lầm ⚠️) và phản hồi từ Trợ lý AI.
*   **Triển khai cơ chế đồng bộ hóa dữ liệu lai (Hybrid Sync)** sử dụng Room Database làm bộ nhớ đệm cục bộ và Firebase Firestore để đồng bộ hóa ngầm tài khoản, ELO và cấp độ khi thiết bị có kết nối Internet.

---

## 💡 3. CÁCH TRẢ LỜI CỦA BẠN KHI PHỎNG VẤN (INTERVIEW TIPS)

Khi nhà tuyển dụng hỏi bạn về quy mô và các chỉ số trong CV:
1.  **Về con số "Đồng bộ hóa dữ liệu"**:
    *   *Câu hỏi*: *"Em nói đồng bộ dữ liệu thời gian thực, vậy hệ thống xử lý khi mất mạng thế nào?"*
    *   *Trả lời*: *"Em xây dựng cơ chế offline-first. Khi mất kết nối mạng, mọi thay đổi về từ vựng đã học hay điểm số đều được lưu tạm vào Room Database cục bộ. Khi ứng dụng nhận biết trạng thái mạng được khôi phục, một tác vụ chạy ngầm (Worker/Coroutine) sẽ đẩy dữ liệu mới nhất lên Firestore dựa trên timestamp cập nhật cuối cùng (`lastUpdated`), giúp tránh xung đột dữ liệu."*
2.  **Về con số "Hiệu suất học thuộc"**:
    *   *Câu hỏi*: *"Tại sao em biết thuật toán SM-2 giúp học thuộc tốt hơn?"*
    *   *Trả lời*: *"Thuật toán SM-2 (SuperMemo-2) là thuật toán có cơ sở khoa học rõ ràng nhằm chống lại đường cong quên lãng của con người. Thay vì để người dùng ôn tập ngẫu nhiên, hệ thống tự động giãn cách lịch ôn (1 ngày, 6 ngày, 12 ngày...) dựa trên độ phản xạ của người dùng. Em kiểm thử trực tiếp trên nhóm người dùng thử nghiệm nhỏ (5-10 bạn bè) và nhận thấy số lượng từ vựng họ nhớ được sau 2 tuần tăng lên đáng kể so với việc học nhồi nhét thông thường."*
