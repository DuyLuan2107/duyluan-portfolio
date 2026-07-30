# VocabLensAI — Cẩm Nang Hướng Dẫn Vận Hành & Kiểm Thử Chi Tiết (Full User & Tester Guide)

Tài liệu này hướng dẫn chi tiết từng nút bấm, thao tác vuốt (gestures), cơ chế dự phòng và cách sử dụng mọi tính năng nhỏ nhất trong ứng dụng **VocabLensAI** để người dùng thử nghiệm không bỏ sót bất kỳ điểm sáng kỹ thuật nào.

---

## 🧭 BẢN ĐỒ PHÂN BỔ TÍNH NĂNG THEO TABS (BOTTOM NAVIGATION)

Ứng dụng sử dụng cấu trúc Bottom Navigation gồm 6 Tab cố định từ trái qua phải:
`Trang chủ` | `Khám phá` | `Quét ảnh` | `Đấu trường` | `Trò chuyện AI` | `Thêm`

---

## 🏠 TAB 1: TRANG CHỦ (STUDY DASHBOARD & STUDY SETS)

Đây là nơi hiển thị tiến trình học hàng ngày và quản lý các bộ từ vựng học thuật.

### A. Giao diện Dashboard chính
*   **Chỉ số Streak 🔥**: Biểu tượng ngọn lửa hiển thị số ngày học liên tiếp của bạn.
*   **Thanh tiến trình ngày (Daily Target)**: Thống kê số từ vựng bạn đã học được hôm nay so với mục tiêu ngày đã cài đặt (ví dụ: 5/10 từ).
*   **Từ vựng cần ôn tập gấp (SRS Reminder Card)**: Hiển thị nhanh số lượng từ đã đến lịch ôn theo thuật toán Spaced Repetition (Ví dụ: *"Bạn có 4 từ cần ôn tập hôm nay"*). Nhấn vào để mở nhanh chế độ ôn tập Flashcard.

### B. Kho Bộ Học Tập (Study Hub)
Nhấn vào mục **"Kho Học Tập 📖"** ở phía trên cùng của trang chủ:
1.  **Từ Vựng Cá Nhân (My Vocabulary)**:
    *   **Nút Sort (Sắp xếp)**: Nhấn biểu tượng sắp xếp ở góc phải để đổi giữa: *Mới nhất, Cũ nhất, Từ A-Z, Từ Z-A, Độ khó giảm dần*.
    *   **Nút View Mode**: Chuyển đổi giữa chế độ **Chi tiết** (Detailed - hiện đầy đủ phiên âm, ví dụ dịch) và chế độ **Thu gọn** (Compact - chỉ hiện từ và nghĩa tiếng Việt dạng list nhỏ gọn để lướt nhanh 100+ từ).
    *   **Bộ lọc SRS (Spaced Repetition Filters)**: Lọc danh sách theo các nhóm: *Tất cả, Đang học, Đã thuộc, Từ khó cần ôn (tần suất trả lời sai cao)*.
    *   **Lọc theo Từ loại (Part of Speech)**: Lọc nhanh các từ là *Danh từ (Noun), Động từ (Verb), Tính từ (Adjective)*.
    *   **Nút Học Flashcard**: Nhấn để chuyển sang chế độ thẻ từ lật mặt. Chạm vào thẻ để lật xem nghĩa/ví dụ, vuốt sang phải nếu nhớ tốt, vuốt sang trái/chọn điểm chất lượng từ 1-5 để thuật toán SM-2 tính ngày ôn tập tiếp theo.
2.  **Bộ Học Tập Mẫu (Predefined Study Sets)**:
    *   Hiển thị 6 bộ học tập mẫu chuyên sâu: *TOEIC, IELTS, Du lịch (Travel), Giao tiếp (Communication), Công sở (Business) và Công nghệ (IT)*.
    *   Bấm vào từng bộ để xem lộ trình học dạng Roadmap Duolingo.
3.  **Tự Tạo Bộ Học Tập Mới**:
    *   Nhấn nút **"+ Tạo Bộ Học Tập Mới"**, nhập Tên bộ và mô tả.
    *   **Thêm Từ - Smart Auto-fill**: Bấm nút thêm từ, chỉ cần gõ từ tiếng Anh (ví dụ: *implement*), hệ thống sẽ tự động tra từ điển assets 150.000 dòng để điền: *nghĩa tiếng Việt (thi hành/áp dụng), phiên âm IPA (/ˈɪmplɪment/), và câu ví dụ mẫu kèm bản dịch*. Bạn chỉ việc ấn "Thêm".
    *   **Thêm Từ - Nhập Nhanh (Bulk Import)**: Bấm nút "Nhập nhanh", gõ tìm kiếm các từ trong thư viện hệ thống, tích chọn nhanh hàng chục từ và ấn "Xác nhận" để import hàng loạt vào bộ học tập của bạn.
    *   **Nút Lưu Ôn Tập**: Nhấn để lưu bộ học tập tự tạo này vào kho dữ liệu cá nhân để áp dụng thuật toán lặp lại ngắt quãng SM-2.

---

## 🧭 TAB 2: KHÁM PHÁ (CEFR ROADMAP PATH)

Học tập theo cấu trúc bài bản gồm 54 Units chia từ trình độ A1 đến C2.

1.  **Giao diện Trục lộ trình dọc**: Các nút tròn bài học được nối với nhau.
    *   Nút màu xám kèm khóa 🔒: Chưa được học.
    *   Nút màu xanh kèm tiêu điểm 🎯: Đang sẵn sàng để học.
    *   Nút màu vàng kèm cúp vàng 🏆: Đã hoàn thành.
2.  **Nội dung bên trong mỗi bài học (4 Tab chức năng)**:
    *   **Tab Từ vựng**: Danh sách từ của bài học. Người dùng có thể nhấn biểu tượng **Loa 🔊** để nghe phát âm (TTS), nhấn **Micro 🎙️** để đọc to từ vựng và nhận điểm số phân tích độ chính xác từ AI.
    *   **Tab Ngữ pháp**: Bài giảng ngữ pháp định dạng Markdown chuyên nghiệp. Phía dưới cùng là phần **Bài tập trắc nghiệm nhanh** gồm 5-10 câu hỏi để củng cố lý thuyết.
    *   **Tab Đọc hiểu**: Đoạn văn tiếng Anh. Người học có thể nhấn "Đọc cả bài" hoặc **chạm trực tiếp vào bất kỳ từ nào trong đoạn văn** để hiển thị hộp thoại dịch nghĩa nhanh của từ đó ngay lập tức.
    *   **Tab Hội thoại**: Đoạn chat giả lập giữa các nhân vật. Bạn có thể bấm nút micro bên cạnh lời thoại của mình để đọc mẫu câu, hệ thống sẽ kiểm tra xem bạn phát âm đúng bao nhiêu phần trăm câu thoại đó.

---

## 📸 TAB 3: QUÉT ẢNH (AI CAMERA SCANNER)

Nhận diện vật thể thông minh xung quanh bằng camera.

*   **Chế độ Live (Thời gian thực)**: Camera chạy liên tục, tự động detect vật thể và hiện khung bounding box kèm nhãn tiếng Anh (Ví dụ: *cell phone*, *laptop*). Nhấn vào nhãn để dịch sang tiếng Việt và lưu flashcard.
*   **Chế độ Capture (Chụp ảnh)**: Nhấn nút chụp tròn ở giữa dưới màn hình. App sẽ đóng băng hình ảnh tại khung hình đó và chạy mô hình nhận diện tĩnh giúp người dùng dễ dàng chạm vào các hộp nhận diện mà không lo camera bị rung lắc.
*   **Chế độ Thư viện (Gallery)**: Bấm biểu tượng ảnh ở góc trái. Hệ thống mở trình chọn ảnh Android (Photo Picker). Chọn một ảnh bất kỳ trong máy, app sẽ phân tích ảnh đó và vẽ các bounding box nhận diện vật thể lên ảnh.
*   **Sáng tác Truyện ngắn AI (AI Storyteller)**: Sau khi quét và lưu được từ 3 từ vựng trở lên, nhấn nút **"Viết truyện AI"**. Trợ lý AI Gemini sẽ sinh một câu truyện ngắn chứa các từ này để người học dễ ghi nhớ.

---

## ⚔️ TAB 4: ĐẤU TRƯỜNG (PvP ARENA GAME ENGINE)

Môi trường kiểm tra kiến thức từ vựng phản xạ nhanh.

*   **Đấu PvP (Matchmaking)**: Nhấn "Thách đấu". Hệ thống sẽ tìm kiếm người chơi thật đang trực tuyến trên Firestore. Nếu sau 5 giây không tìm thấy ai, hệ thống tự động sinh một **Bot ảo** có chỉ số ELO gần bằng bạn (ví dụ: bạn 1200 ELO sẽ gặp Bot từ 1100 - 1300 ELO) để thi đấu.
*   **Cách tính điểm trận đấu**: Hai bên cùng trả lời 15 câu trắc nghiệm. Trả lời đúng được điểm. Trả lời đúng trong vòng dưới 1 giây sẽ được tính điểm nhân đôi (Genius response).
*   **Phân tích trận đấu (Game Review)**: Khi trận đấu kết thúc, hệ thống hiển thị bảng phân tích:
    *   **Genius ⚡**: Số câu trả lời đúng cực nhanh.
    *   **Blunder ⚠️**: Số câu trả lời sai từ dễ hoặc chọn sai đáp án.
    *   *Lời nhận xét cá nhân hóa của AI dựa trên kết quả trận đấu.*
*   **Chế độ Sinh Tồn (Survival Mode)**: Trả lời đố vui từ vựng liên tiếp. Bạn có 3 lượt máu (mạng). Trả lời sai mỗi câu sẽ mất 1 mạng. Trò chơi kết thúc khi hết mạng và lưu kỷ lục High Score của bạn lên Leaderboard.
*   **Lịch sử đấu (Match History)**: Danh sách toàn bộ các trận PvP bạn đã chơi. Bấm vào mỗi trận đấu để mở lại thẻ tổng kết Game Review và đọc lại nhận xét của AI.
*   **Bảng xếp hạng (Leaderboard)**: Bảng xếp hạng online thời gian thực kéo dữ liệu ELO và XP của toàn bộ người chơi từ Firestore.

---

## 💬 TAB 5: TRÒ CHUYỆN AI (ARIA AI CHATBOT)

*   Nhập vai Trợ lý học tiếng Anh Aria. Khi bạn mở tab, Aria sẽ tự động chào bạn bằng tiếng Anh dựa trên thời gian thực tế trong ngày (Chào buổi sáng, buổi chiều...).
*   Hỗ trợ dịch nhanh mẫu câu, giải thích từ vựng phức tạp, đề xuất lộ trình học.
*   **Chỉnh tốc độ nói**: Nhấn nút cài đặt trên khung chat để thay đổi tốc độ đọc của Aria (nhanh/chậm) phù hợp với khả năng nghe của bạn.

---

## ☰ TAB 6: THÊM (PROFILE, SOCIAL & VIP SIMULATOR)

*   **Chỉnh sửa tiểu sử (Bio Editor)**: Viết đôi dòng giới thiệu về bản thân. Hệ thống tự động đồng bộ thời gian thực lên Firestore để bạn bè nhìn thấy.
*   **Danh hiệu (Achievements/Badges)**: Xem danh sách các huy hiệu học tập bạn đã mở khóa (Ví dụ: *Chiến thần PvP* khi thắng 10 trận, *Chăm chỉ* khi giữ streak 7 ngày...).
*   **Danh sách bạn bè & Câu lạc bộ (Social)**:
    *   Tìm kiếm bạn bè theo tên/ID tài khoản. Gửi yêu cầu kết bạn.
    *   **Thách đấu trực tiếp (Play Challenge)**: Nhấn nút thách đấu trực tiếp bên cạnh tên bạn bè trong danh sách để gửi lời mời thách đấu PvP trực tuyến.
    *   Tham gia các câu lạc bộ (TOEIC, IELTS, Speaking) để cùng theo dõi tiến độ học của các thành viên khác.
*   **Nâng cấp VIP (Subscription Simulator)**:
    *   **VIP Gold Paywall**: Khi tài khoản miễn phí gọi các tính năng AI quá 3 lần/ngày, hệ thống sẽ hiện popup Gold Gradient sang trọng mời nâng cấp VIP.
    *   **Free Demo**: Nhấn nút Free Demo trên popup này để lập tức chuyển cờ tài khoản sang trạng thái VIP Gold, mở khóa không giới hạn lượt dùng AI và trải nghiệm toàn bộ tính năng cao cấp của ứng dụng.
