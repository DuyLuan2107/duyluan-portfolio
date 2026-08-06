# Hướng Dẫn Chụp & Ghép Nội Dung Portfolio (AI Fitness Coach)

Dự án AI Fitness Coach của bạn được thiết kế theo phong cách UI/UX "OLED-first" (Dark Mode, màu đen sâu kết hợp màu Neon). Do đó, khi chụp ảnh màn hình, bạn cần đặc biệt lưu ý đến **thẩm mỹ Dark Mode** để toát lên vẻ cao cấp (Premium) của một ứng dụng thể hình SaaS.

Hãy mở máy ảo (Emulator) hoặc điện thoại Android thực tế của bạn, chụp đúng **20 bức ảnh** dưới đây, lưu với đúng tên file và bỏ vào thư mục `public/Portfolio_Assets/Screenshots/FitnessCoach/`.

*(Lưu ý: Bạn có thể tự tạo thư mục `FitnessCoach` bên trong `Screenshots` để tách biệt với VocabLensAI)*

---

### 📷 SECTION 1: TRỢ LÝ TƯ THẾ AI (POSE COACH)
*Khu vực này khoe sức mạnh Computer Vision (MediaPipe) nhận diện khung xương thời gian thực.*

*   **1. `01_pose_analysis.png`** (Phân Tích Trực Tiếp): Ảnh chụp lúc Camera đang bật, có vẽ lưới xương Skeleton (các đường line và điểm) lên cơ thể người tập.
*   **2. `02_exercise_home.png`** (Trang Chủ Bài Tập): Giao diện Home chứa các nút chọn bài tập nhanh (Squat, Push-up, Plank...).
*   **3. `03_pose_warning.png`** (Cảnh Báo Lỗi Sai): Ảnh chụp lúc hệ thống bắt lỗi sai tư thế (ví dụ: lưng cong khi Squat), có khung cảnh báo màu đỏ hoặc text màu đỏ nổi bật.
*   **4. `04_form_score.png`** (Thống Kê Form): Màn hình hiển thị điểm số (Form Score) đánh giá kỹ thuật sau khi kết thúc buổi tập.

---

### 📚 SECTION 2: THƯ VIỆN NGOẠI TUYẾN (OFFLINE LIBRARY)
*Khu vực này khoe khả năng quản lý danh sách lớn (LazyList) và Load ảnh mượt mà.*

*   **5. `05_exercise_detail.png`** (Chi Tiết Bài Tập): Màn hình chi tiết của 1 bài tập (ví dụ: Barbell Curl) có hình ảnh mô phỏng nhóm cơ (đang chạy auto-flip) và hướng dẫn Text.
*   **6. `06_library_categories.png`** (Thư Viện Nhóm Cơ): Màn hình duyệt danh mục 7 nhóm cơ (Ngực, Lưng, Chân...).
*   **7. `07_library_filter.png`** (Bộ Lọc Tìm Kiếm): Màn hình khi đang mở Bottom Sheet hoặc Dialog lọc bài tập theo thiết bị (Dumbbell, Barbell, Bodyweight).
*   **8. `08_offline_list.png`** (Danh Sách Bài Tập): Danh sách cuộn dạng lưới (Grid) hoặc danh sách (List) các thẻ bài tập rất đẹp mắt.

---

### ⚙️ SECTION 3: THUẬT TOÁN ĐỀ XUẤT (PERSONALIZED WORKOUT)
*Khu vực này khoe Clean Architecture và DataStore Preferences, quản lý logic cá nhân hóa.*

*   **9. `09_weekly_plan.png`** (Lịch Tập Hàng Tuần): Bảng Dashboard hiển thị lịch trình tập luyện 7 ngày trong tuần (Thứ 2 tập Ngực, Thứ 3 tập Chân...).
*   **10. `10_onboarding_survey.png`** (Khảo Sát Cá Nhân): Màn hình Khảo sát lúc mới vào app (Hỏi về mục tiêu: Giảm mỡ, Tăng cơ, Trình độ...).
*   **11. `11_replace_exercise.png`** (Thay Thế Bài Tập): Màn hình khi user bấm vào nút "Đổi bài tập khác" (Swap) hiển thị danh sách bài thay thế tương đương.
*   **12. `12_user_profile.png`** (Hồ Sơ Người Dùng): Tab Profile hiện các chỉ số sức khỏe, BMI, chiều cao, cân nặng.

---

### 📱 SECTION 4: TRÌNH PHÁT CHẾ ĐỘ OLED (OLED PLAYER)
*Khu vực này khoe UI/UX cực xịn, thiết kế tối màu Dark Theme kết hợp Canvas vẽ biểu đồ.*

*   **13. `13_workout_player.png`** (Trình Phát Tập Luyện): Giao diện "Đang tập" (Workout Session), hiện đồng hồ đếm ngược siêu to, vòng tròn tiến độ và tên bài tiếp theo.
*   **14. `14_set_tracker.png`** (Theo Dõi Hiệp): Chỗ user nhập số kg tạ và số Reps đã hoàn thành cho 1 Set.
*   **15. `15_rest_timer.png`** (Đếm Ngược Nghỉ Ngơi): Màn hình nghỉ giữa các Hiệp (Rest Timer), ưu tiên nền tối đen (OLED) và vòng tròn đếm lùi phát sáng.
*   **16. `16_activity_chart.png`** (Biểu Đồ Tiến Độ): Biểu đồ thanh (Bar chart) vẽ bằng Canvas thống kê cường độ tập các ngày trong tuần.

---

### 🗣️ SECTION 5: TRỢ LÝ GIỌNG NÓI AI (VOICE COACH)
*Khu vực khoe tính năng tương tác bằng Text-To-Speech và tổng hợp dữ liệu cuối cùng.*

*   **17. `17_progress_summary.png`** (Tổng Quan Tiến Độ): Màn hình chúc mừng sau khi hoàn thành buổi tập, bắn pháo hoa, v.v.
*   **18. `18_workout_history.png`** (Lịch Sử Tập Luyện): Bảng danh sách hoặc dòng thời gian (Timeline) ghi lại các buổi tập trong quá khứ.
*   **19. `19_voice_settings.png`** (Cài Đặt Giọng Nói): Màn hình Settings cho phép gạt (Switch) bật/tắt nhắc nhở bằng giọng nói, chọn ngôn ngữ (Anh/Việt).
*   **20. `20_ai_tips.png`** (Mẹo Từ AI): Khu vực (hoặc Dialog) hiển thị các tip/lời khuyên do AI sinh ra dựa trên điểm Form Score.

---

### MẸO CHỤP ẢNH ĐỂ ĐẠT CHẤT LƯỢNG CAO NHẤT (CHUẨN PORTFOLIO):
1. **Dùng Dark Mode:** Luôn bật Dark Theme khi chụp để toát lên triết lý "OLED-first" mà bạn đã ghi trong CV.
2. **Ẩn Status Bar (Thanh trạng thái):** Cố gắng tắt các icon thông báo rác, pin yếu, giờ giấc lộn xộn. Trên Emulator, bạn có thể dùng System UI Tuner để fix giờ thành `12:00` và pin 100% cho chuyên nghiệp.
3. **Tỉ lệ khung hình:** Đảm bảo chụp đúng tỷ lệ màn hình điện thoại (VD: 9:16 hoặc 9:19.5, độ phân giải cao). Tránh crop mất góc.
4. **Mockup:** Bạn không cần tự ghép ảnh vào mockup viền điện thoại đâu! Trong Component `FitnessCoachShowcase.tsx` đã có sẵn tính năng "Phone Frame Simulator", bạn chỉ cần đưa ảnh vuông vắn bình thường vào, web sẽ tự bao bọc nó bằng viền iPhone cực đẹp!
