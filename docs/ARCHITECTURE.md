# VocabLensAI — System Architecture & Data Flow

Tài liệu này phân tích chi tiết kiến trúc phần mềm, cấu trúc thư mục, luồng dữ liệu (Data Flow) và cơ chế đồng bộ hóa dữ liệu lai (Hybrid Sync) của ứng dụng **VocabLensAI**.

---

## 🏗️ 1. MÔ HÌNH KIẾN TRÚC TỔNG THỂ (OVERVIEW ARCHITECTURE)

Ứng dụng tuân thủ nghiêm ngặt mô hình **MVVM (Model-View-ViewModel)** chuẩn khuyến nghị bởi Google, kết hợp với nguyên tắc **Single Source of Truth (SSOT)**:

```
+-------------------------------------------------------------+
|                         VIEW (UI)                           |
|  - Jetpack Compose Screens (ExploreScreen, ArenaScreen...)  |
|  - Observes StateFlow/State from ViewModel                  |
|  - Triggers Events (User Actions)                           |
+------------------------------------+------------------------+
                                     |
                      Events / Calls | Observes State
                                     v
+-------------------------------------------------------------+
|                      VIEWMODEL (STATE)                      |
|  - VocabViewModel (quản lý tập trung trạng thái toàn app)   |
|  - viewModelScope (quản lý Coroutines lifecycle)            |
+------------------------------------+------------------------+
                                     |
                       Queries / Cmd | Emits Flow/Data
                                     v
+-------------------------------------------------------------+
|                      MODEL (DATA LAYER)                     |
|  +--------------------+  +-------------------------------+  |
|  | Local SQLite (Room)|  | Cloud Sync (Firebase/Supabase)|  |
|  | - AppDatabase      |  | - Firestore Database          |  |
|  | - SQLite Tables    |  | - Authentication Server       |  |
|  +---------+----------+  +---------------+---------------+  |
|            |                             |                  |
|            +--------------+--------------+                  |
|                           |                                 |
|                           v                                 |
|  +-------------------------------------------------------+  |
|  | Core Engines (SpacedRepetition, GamificationEngine...) |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

---

## 📂 2. CẤU TRÚC THƯ MỤC SOURCE CODE

Thư mục nguồn của ứng dụng được tổ chức logic theo tính năng và lớp kiến trúc:

*   `app/src/main/java/com/duyluan/vocablensai/`
    *   `MainActivity.kt`: Entry point khởi chạy, thiết lập Jetpack Navigation Graph và khởi tạo `VocabViewModel`.
    *   `camera/`: Xử lý giao diện CameraX, luồng phân tích khung hình (Image Analysis Analyzer).
    *   `ml/`: Quản lý mô hình TensorFlow Lite (`.tflite`) nhận diện vật thể cục bộ.
    *   `notifications/`: Lập lịch thông báo đẩy nhắc nhở học tập (Daily Alarm & Worker).
    *   `data/`: Lớp dữ liệu (Data Layer)
        *   `dao/`: Các Room DAO truy vấn CSDL SQLite cục bộ (`UserStatsDao`, `MatchHistoryDao`, `StudySetDao`).
        *   `local/`: Quản lý cấu hình lưu trong SharedPreferences (VIP status, ELO local, theme).
        *   `model/`: Định nghĩa các thực thể dữ liệu (Entities) như `StudySet`, `StudySetWord`, `MatchHistoryEntity`, `UserStats`.
        *   `network/`: Xử lý API bên ngoài (`GeminiApiClient` gọi AI, `FirebaseSyncHelper` đồng bộ Firestore).
        *   `AppDatabase.kt`: Khởi tạo Room CSDL và thiết lập các migration.
        *   `GamificationEngine.kt`: Tính toán XP, Level Up, Streak và kiểm tra Danh hiệu (Badges).
        *   `SpacedRepetition.kt`: Thuật toán tính ngày ôn tập tiếp theo dựa trên thang đo SM-2.
        *   `VocabDictionary.kt`: Phân tích file từ điển thô JSON từ assets và tra cứu nhanh.
    *   `ui/`: Lớp giao diện (View Layer)
        *   `screens/`: Tất cả các màn hình Jetpack Compose của ứng dụng.
        *   `viewmodel/`: `VocabViewModel.kt` và các file extension chia tách logic của ViewModel.

---

## 🔄 3. LUỒNG DỮ LIỆU ĐỒNG BỘ HYBRID (ROOM + CLOUD SYNC)

Để mang lại trải nghiệm sử dụng không gián đoạn, VocabLensAI sử dụng cơ chế **Offline-first**:

1.  **Ghi dữ liệu dưới Local (SQLite via Room)**: Khi người dùng hoàn thành bài học, lưu từ vựng hoặc đấu PvP xong, ứng dụng lập tức ghi kết quả vào Room Database cục bộ và cập nhật StateFlow của UI để người dùng thấy kết quả phản hồi ngay lập tức (độ trễ ~0ms).
2.  **Đồng bộ ngầm (Background Sync)**: ViewModel khởi chạy một tác vụ chạy ngầm kiểm tra kết nối mạng của thiết bị:
    *   *Nếu mất mạng*: Trạng thái dữ liệu được đánh dấu là chưa đồng bộ.
    *   *Nếu có mạng*: Hệ thống gọi `FirebaseSyncHelper` đẩy dữ liệu lên Firestore. Trường `lastUpdated` lưu mốc thời gian UTC millisecond được so sánh để ghi đè dữ liệu mới hơn lên dữ liệu cũ hơn.
3.  **Khởi động lại (Onboarding/Login check)**: Khi người dùng đăng nhập tài khoản trên thiết bị mới, hệ thống tự động kéo bản sao lưu mới nhất từ Firestore về ghi đè lên Room Database cục bộ để khôi phục hoàn toàn tiến trình học tập của họ.

---

## 🧠 4. QUẢN LÝ VÒNG ĐỜI COROUTINE (COROUTINE LIFECYCLE)

*   Mọi truy vấn ghi/đọc Database Room được chạy trên nhóm luồng dành riêng cho xuất nhập dữ liệu: `Dispatchers.IO`.
*   Mọi tác vụ nặng liên quan đến AI (suy luận TensorFlow Lite, xử lý ảnh camera) được chạy trên nhóm luồng tính toán: `Dispatchers.Default`.
*   Tất cả các tiến trình bất đồng bộ này được liên kết chặt chẽ với `viewModelScope` để tự động hủy (cancel) ngay khi ViewModel bị giải phóng khỏi bộ nhớ, triệt tiêu hoàn toàn lỗi rò rỉ bộ nhớ (Memory Leaks) hoặc sập app (Crash) do thay đổi cấu hình thiết bị (xoay màn hình).
