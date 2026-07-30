# VocabLensAI — Artificial Intelligence Pipeline

Tài liệu này thuyết minh chi tiết cách tích hợp Trí tuệ nhân tạo (AI) trong **VocabLensAI**, kết hợp giữa **On-device AI (Trí tuệ nhân tạo trên thiết bị)** và **Cloud LLM (Mô hình ngôn ngữ lớn trên đám mây)**.

---

## 📸 1. ON-DEVICE COMPUTER VISION (TENSORFLOW LITE + CAMERAX)

Để đảm bảo ứng dụng có thể nhận diện vật thể nhanh chóng không cần Internet và không phát sinh chi phí truyền tải băng thông, VocabLensAI chạy mô hình Machine Learning trực tiếp trên thiết bị (Edge AI):

```
[CameraX Live Stream] 
        | (yêu cầu luồng khung hình thời gian thực)
        v
[Image Analysis Analyzer] 
        | (tiền xử lý: resize ảnh về 300x300px, xoay chiều ảnh)
        v
[TensorFlow Lite Interpreter] 
        | (chạy suy luận mô hình Object Detection offline)
        v
[Post-Processing Output] 
        | (lọc kết quả qua ngưỡng chính xác Confidence Threshold > 50%)
        v
[UI Draw: Bounding Box & Label]
```

### Chi tiết tối ưu hóa hiệu năng:
*   **Tránh nghẽn Main Thread**: Quá trình phân tích ảnh diễn ra bất đồng bộ. Mỗi khung hình camera được chuyển đổi thành đối tượng `InputImage` và đưa vào Executor luồng phụ riêng biệt.
*   **Giới hạn số khung hình quét (Frame Throttling)**: Thay vì phân tích cả 30 khung hình/giây của camera, hệ thống chỉ chạy phân tích 1 khung hình mỗi 300ms. Điều này giúp giảm tải nhiệt cho CPU/GPU tới 70% và tiết kiệm pin đáng kể cho thiết bị Android.
*   **Tích hợp Từ điển Offline**: Khi mô hình trả về nhãn vật thể tiếng Anh (ví dụ: *bottle*), hệ thống tra cứu ngay lập tức nghĩa tiếng Việt trong file dữ liệu cục bộ mà không cần gửi request dịch thuật lên Cloud.

---

## 🧠 2. CLOUD LLM PIPELINE (GOOGLE GEMINI API)

Với các tính năng đòi hỏi tư duy ngôn ngữ phức tạp và sáng tạo, ứng dụng gọi trực tiếp API của mô hình Google Gemini thông qua SDK chính thức:

### A. Công Cụ Viết Truyện Ngắn AI (AI Storyteller Prompt)
*   **System Prompt**:
    ```text
    You are an expert English teacher. Write a short, engaging story (under 150 words) suitable for English learners containing the following vocabulary words: [LIST_OF_WORDS]. Keep the grammar simple. Provide the English story first, followed by a Vietnamese translation. Highlight the target words in both versions.
    ```
*   **Xử lý phản hồi**: Dữ liệu trả về được tách biệt rõ ràng phần tiếng Anh và tiếng Việt dựa trên ký tự phân tách đặc biệt, sau đó hiển thị lên màn hình hội thoại `AiStoryDialog` dưới dạng giao diện thẻ đọc trực quan.

### B. Chatbot Giao Tiếp Aria (Conversational AI Chatbot)
*   **System Prompt**:
    ```text
    You are Aria, a friendly and empathetic English learning assistant. Always greet the user in English. Answer their questions briefly and keep the conversation interactive by asking follow-up questions. Use simple vocabulary.
    ```
*   **Xử lý lỗi & Tối ưu**:
    *   Hệ thống lưu lịch sử chat cục bộ trong Room để hiển thị lại ngay lập tức khi mở màn hình mà không cần gọi API tải lại.
    *   Bọc cuộc gọi API trong khối `try-catch` xử lý lỗi mạng (`IOException`), lỗi hết hạn ngạch gọi miễn phí (`429 Too Many Requests`), tự động hiển thị thông báo thân thiện thay vì gây sập ứng dụng (crash).

### C. Bộ Phân Tích & Sửa Lỗi Phát Âm (Phonetic Speech Analyzer)
*   **Cơ chế**: Khi người học đọc to đoạn văn hoặc từ vựng qua micro, hệ thống ghi âm lại file âm thanh và chuyển đổi thành văn bản bằng Jetpack Speech Recognizer cục bộ hoặc gọi API.
*   **Tối ưu**: Gemini AI được cấp prompt so sánh văn bản người học đọc được với mẫu chuẩn để chỉ ra chi tiết ký tự phiên âm phát âm sai (ví dụ: thiếu âm đuôi */s/*, */t/*) và đề xuất cách đặt lưỡi, môi để cải thiện.
