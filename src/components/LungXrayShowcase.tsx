"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotItem {
  src: string;
  title: string;
  desc: string;
}

interface FeatureCategory {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  reflection: string;
  screenshots: ScreenshotItem[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: "two_stage_pipeline",
    title: "🔍 Luồng Xử Lý AI & Cổng An Toàn",
    icon: "🔍",
    tagline: "Phân Loại Bệnh Phổi Từ X-quang Với Kiến Trúc 2 Giai Đoạn",
    description: "Không chỉ là một mô hình phân loại ảnh thông thường — toàn bộ pipeline được thiết kế để chống gian lận học tập (Shortcut Learning), đảm bảo AI nhìn đúng vùng tổn thương trong phổi, không bị đánh lừa bởi các ký hiệu phụ trên phim X-quang.",
    techStack: ["TensorFlow Lite", "U-Net (ResNet50 Encoder)", "YOLOv12m-cls", "Median-fill Masking", "CameraX", "Coroutines"],
    highlights: [
      "Giai Đoạn 1 — Phân Đoạn Phổi (UNet TFLite): Model U-Net với encoder ResNet50 được xuất sang TFLite, chạy trực tiếp trên thiết bị để tạo binary lung mask từ ảnh X-quang đầu vào, phân đoạn chính xác vùng nhu mô phổi.",
      "Kỹ Thuật Che Phủ (Median-fill): Vùng ngoài phổi (chữ L/R đánh dấu phim, bóng vai, viền thiết bị) được lấp đầy bằng màu trung bình vùng phổi, cưỡng chế Stage 2 chỉ học đặc trưng trong phổi.",
      "Giai Đoạn 2 — YOLOv12m-cls TFLite: Phân loại 4 lớp bệnh lý (COVID-19, Normal, Lung Opacity, Viral Pneumonia) trên ảnh đã được che nền.",
      "Cổng An Toàn OOD (Kiểm Tra Tính Hợp Lý): Nếu diện tích lung mask nằm ngoài ngưỡng hợp lệ (8%–72%), hệ thống tự động từ chối kết quả và cảnh báo người dùng — tránh gây ảo tưởng chẩn đoán.",
      "Theo Dõi Tiến Độ Thời Gian Thực: Thanh tiến trình 6 bước hiển thị từng giai đoạn (UNet → Masking → Classify → Heatmap) kèm thời gian inference thực tế tính bằng ms."
    ],
    reflection: "Thách thức không phải là train model — mà là deploy đúng cách. Tôi phải đồng bộ hóa 2 model TFLite (UNet + YOLOv12) chạy tuần tự trong background coroutine, xử lý bitmap pipeline qua 4 bước biến đổi ảnh mà không làm tràn bộ nhớ. Safety gate OOD là quyết định thiết kế quan trọng nhất: thà im lặng còn hơn đưa ra kết quả sai.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "Phân Tích", desc: "Màn hình phân tích đang chạy tiến trình AI." },
      { src: "/lungxray-mockup.png", title: "Chọn Ảnh", desc: "Màn hình chọn ảnh X-quang đầu vào." },
      { src: "/lungxray-mockup.png", title: "Hợp Lệ", desc: "Card kết quả chẩn đoán hợp lệ." },
      { src: "/lungxray-mockup.png", title: "Cảnh Báo OOD", desc: "Cảnh báo từ chối kết quả ngoài phân phối." }
    ]
  },
  {
    id: "xai_viewer",
    title: "👁️ Trực Quan Hóa XAI",
    icon: "👁️",
    tagline: "Trực Quan Hóa Bằng Chứng AI — Không Chỉ Tin Vào Con Số",
    description: "Bác sĩ/nhà nghiên cứu không nên tin vào kết quả AI một cách mù quáng. Màn hình XAI hiển thị toàn bộ hành trình của bức ảnh qua 5 bước pipeline và cho phép so sánh trực tiếp heatmap attention để phán đoán xem model có nhìn đúng chỗ không.",
    techStack: ["Occlusion Sensitivity", "Grad-CAM++", "Jetpack Compose Canvas", "Crossfade Animation", "Bitmap Processing"],
    highlights: [
      "Giải Thích Mô Hình Kép: Offline dùng Occlusion Sensitivity; Online Research dùng Grad-CAM++ từ PyTorch server.",
      "Trình Xem XAI Tương Tác: Giao diện 4 ô ảnh tương tác — bấm vào ô nào để phóng to tương ứng: Ảnh gốc / Lung Mask / Masked / Heatmap.",
      "Tiến Trình 5 Bước: Mỗi bước pipeline được giải thích bằng text lâm sàng, kèm ảnh thumbnail kết quả của bước đó.",
      "Thẻ Bằng Chứng Khoa Học: Giải thích các khái niệm Attention Leakage, Shortcut Learning, EBPG, IoU Localization ngay trong app.",
      "Bằng Chứng Giới Hạn Trong Phổi: Occlusion Sensitivity chỉ tính trên các ô nằm trong vùng lung mask, loại bỏ nhiễu từ vùng nền."
    ],
    reflection: "Occlusion Sensitivity phải chạy 36 lần inference (6×6 grid) trên cùng một ảnh — mỗi lần che đi một ô rồi đo sự thay đổi confidence. Tôi dùng coroutine + progress callback để báo tiến độ liên tục, tránh ANR. Kết quả là heatmap hoàn toàn model-derived, không phải mock data.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "XAI Viewer", desc: "Màn hình hiển thị 4 ô ảnh grid và heatmap." },
      { src: "/lungxray-mockup.png", title: "Timeline", desc: "Tiến trình 5 bước giải thích pipeline." },
      { src: "/lungxray-mockup.png", title: "Heatmap", desc: "Heatmap hiển thị trực quan vùng tổn thương." },
      { src: "/lungxray-mockup.png", title: "Bằng Chứng", desc: "Cơ sở khoa học và đánh giá độ tin cậy EBPG/IoU." }
    ]
  },
  {
    id: "clinical_assistant",
    title: "💬 Trợ Lý Lâm Sàng",
    icon: "💬",
    tagline: "Trợ Lý Phản Biện Y Khoa Tích Hợp LLaMA",
    description: "Tích hợp trợ lý AI chuyên biệt được huấn luyện bằng System Prompt bám sát nội dung luận văn — hiểu Shortcut Learning, EBPG, IoU, và phác đồ Fleischner.",
    techStack: ["Groq API (LLaMA 3.1-8b)", "HTTP/JSON", "Coroutines", "LazyColumn UI", "Offline Fallback"],
    highlights: [
      "Trò Chuyện Theo Ngữ Cảnh: Khi chọn ca bệnh, chatbot tự tải thông tin ca bệnh (Nhãn, Confidence, Model) và giới thiệu lại.",
      "Tích Hợp Groq/LLaMA 3.1: Gọi API với System Prompt y khoa, không phải chatbot generic.",
      "Dự Phòng Ngoại Tuyến (Offline): Nếu mất kết nối, tự động chuyển sang câu trả lời tính trước — demo luôn an toàn.",
      "Gợi Ý Câu Hỏi Nhanh: 4 nút câu hỏi nhanh: Shortcut Learning, EBPG/IoU, Fleischner, Lý do.",
      "Hiệu Ứng Suy Luận: Hiệu ứng spinner tạo cảm giác suy luận thực tế."
    ],
    reflection: "System Prompt là phần khó nhất — tôi phải viết instruction buộc LLaMA trả lời đúng ngữ cảnh luận văn (EBPG, Median-fill, Plausibility Check) thay vì trả lời chung chung. Fallback offline quan trọng hơn Online vì demo trước hội đồng không thể phụ thuộc vào internet.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "Chat UI", desc: "Trợ lý AI trả lời câu hỏi về EBPG." },
      { src: "/lungxray-mockup.png", title: "Gợi Ý Nhanh", desc: "Các gợi ý câu hỏi phản biện nhanh." },
      { src: "/lungxray-mockup.png", title: "Đang Suy Luận", desc: "Hiệu ứng Gemini đang suy luận." },
      { src: "/lungxray-mockup.png", title: "Phác Đồ", desc: "Phác đồ Fleischner chi tiết." }
    ]
  },
  {
    id: "history_navigation",
    title: "📂 Lịch Sử & Điều Hướng",
    icon: "📂",
    tagline: "Quản Lý Toàn Bộ Lịch Sử Ca Bệnh",
    description: "Mỗi ca phân tích được lưu offline cùng toàn bộ metadata. Bác sĩ có thể bấm vào bất kỳ ca cũ nào để xem lại XAI và tiếp tục chat với trợ lý AI theo đúng ngữ cảnh của ca đó.",
    techStack: ["Local JSON Storage", "SwipeToDismissBox", "Staggered Fade-in Animation", "AlertDialog", "Coroutines"],
    highlights: [
      "Chạm Để Xem Lại: Chọn ca bệnh -> Đặt làm Active Case -> Chuyển sang XAI và chuyển context cho chatbot.",
      "Vuốt Để Xóa: Vuốt để xóa với nền đỏ, hiệu ứng spinner chờ 800ms.",
      "Xác Nhận Xóa: Chống xóa nhầm bằng AlertDialog 2 bước.",
      "Hiệu Ứng Xuất Hiện Nối Tiếp: Mỗi thẻ xuất hiện lệch nhau 70ms tạo hiệu ứng waterfall.",
      "Thẻ Cảnh Báo OOD: Màu sắc phân biệt thẻ bệnh lý đỏ, bình thường slate, ngoài phân phối cảnh báo."
    ],
    reflection: "selectedResult vs latestResult là bài toán state management thú vị nhất. Repository cần phân biệt 'ca mới nhất' và 'ca đang xem'. Sai ở đây thì toàn bộ chatbot mất context.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "Danh Sách", desc: "Danh sách lịch sử ca bệnh với màu sắc badge phân biệt." },
      { src: "/lungxray-mockup.png", title: "Vuốt Xóa", desc: "Tính năng vuốt để xóa thẻ." },
      { src: "/lungxray-mockup.png", title: "Xác Nhận", desc: "Xác nhận xóa an toàn." },
      { src: "/lungxray-mockup.png", title: "Đang Xóa", desc: "Trạng thái đang xóa ca bệnh." }
    ]
  },
  {
    id: "export_report",
    title: "📄 Xuất Báo Cáo PDF",
    icon: "📄",
    tagline: "Xuất Báo Cáo PDF & Bảng So Sánh 5 Mô Hình",
    description: "Mọi kết quả đều được đóng gói thành báo cáo nghiên cứu chuẩn — có thể chia sẻ ngay. Màn hình About Model công khai toàn bộ metrics benchmark của 5 backbone.",
    techStack: ["Android PdfDocument API", "FileProvider", "Share Intent", "Bitmap-to-Canvas Rendering"],
    highlights: [
      "Xuất PDF Gốc (Native): Dùng PdfDocument API vẽ báo cáo A4 (595×842px) không cần thư viện bên thứ 3.",
      "Chia Sẻ Trực Tiếp: Chia sẻ trực tiếp qua Zalo, Email, Drive dễ dàng.",
      "Bảng Đánh Giá Mô Hình: Bảng so sánh 5 backbone (DenseNet121, EfficientNet-B3, ResNet50, ViT-B/16, YOLOv12m-cls).",
      "Thanh Tiến Trình Chuyển Động: Hiệu ứng animation hiển thị thông số metrics.",
      "Tuyên Bố Miễn Trừ Trách Nhiệm: Nhắc nhở kết quả phục vụ nghiên cứu lâm sàng, không phải chẩn đoán cuối."
    ],
    reflection: "PDF thuần native không cần iText hay thư viện ngoài — vẽ từng pixel bằng Canvas API. Khó nhất là co giãn ảnh bitmap từ bộ nhớ vào trang A4 mà không vỡ ảnh, phải tự tính tỉ lệ scale.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "Xuất Báo Cáo", desc: "Màn hình xuất báo cáo PDF và chia sẻ." },
      { src: "/lungxray-mockup.png", title: "Bảng So Sánh", desc: "Bảng so sánh 5 mô hình xương sống." },
      { src: "/lungxray-mockup.png", title: "Bản Xem Trước", desc: "Báo cáo A4 hoàn chỉnh khi mở trên ứng dụng đọc." },
      { src: "/lungxray-mockup.png", title: "Chia Sẻ", desc: "Giao diện chia sẻ native của Android." }
    ]
  },
  {
    id: "dark_tech_ui",
    title: "🎨 Giao Diện Công Nghệ Tối",
    icon: "🎨",
    tagline: "Giao Diện Clinical Dark Tech Từ Giây Đầu Tiên",
    description: "Onboarding giải thích triết lý thiết kế hệ thống AI, kèm hiệu ứng radar animation và logo phổi phát sáng tự vẽ bằng Canvas.",
    techStack: ["HorizontalPager", "Compose Canvas", "InfiniteTransition", "Glassmorphism Cards", "AnimatedVisibility"],
    highlights: [
      "Logo Phổi Hoạt Hình: Vẽ bằng Compose Canvas, hiệu ứng glow pulse xanh cyan vô hạn.",
      "Hiệu Ứng Radar Nền: Hiệu ứng radar quét vòng tròn tạo cảm giác thiết bị scan.",
      "Hướng Dẫn Mở Đầu 3 Trang: Giải thích Pipeline AI 2 giai đoạn / Local-first Privacy / Research Ethics.",
      "Biểu Mẫu Đăng Nhập: Tích hợp vào màn hình splash với transition mượt mà.",
      "Chủ Đề Tối (Dark Theme): Nền Deep Navy, accent Cyan và Emerald nhất quán xuyên suốt."
    ],
    reflection: "Toàn bộ logo và radar effect được vẽ bằng Canvas drawArc/drawPath — không dùng file SVG hay ảnh PNG nào. Logo responsive và không tốn dung lượng APK.",
    screenshots: [
      { src: "/lungxray-mockup.png", title: "Màn Hình Khởi Động", desc: "Logo phổi glowing với radar effect." },
      { src: "/lungxray-mockup.png", title: "Quyền Riêng Tư", desc: "Giới thiệu tính bảo mật và Edge AI." },
      { src: "/lungxray-mockup.png", title: "Đạo Đức Nghiên Cứu", desc: "Giải thích mục đích nghiên cứu y khoa." },
      { src: "/lungxray-mockup.png", title: "Đăng Nhập", desc: "Giao diện đăng nhập Glassmorphism." }
    ]
  }
];

export default function LungXrayShowcase() {
  const [activeTab, setActiveTab] = useState("two_stage_pipeline");
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const activeCategory = featureCategories.find((cat) => cat.id === activeTab) || featureCategories[0];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActivePhotoIdx(0);
  };

  return (
    <div className="space-y-16">
      {/* --- PRODUCT TOUR SHOWCASE --- */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Deep Dive</span>
          <h3 className="text-2xl font-bold text-white">Khám Phá Các Tính Năng Đồ Sộ (Product Tour)</h3>
          <p className="text-sm text-slate-400">
            Hệ thống phân tích X-quang y tế chuyên sâu. Hãy chọn danh mục bên dưới để xem chi tiết kiến trúc giải pháp.
          </p>
        </div>

        {/* Feature Grid Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {featureCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] transition ${
                activeTab === cat.id
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105"
                  : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title.split(" ").slice(1).join(" ")}</span>
            </button>
          ))}
        </div>

        {/* Showcase Panel (Flex layout with phone mock on one side and details on the other) */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-md">
          
          {/* Phone Frame Simulator */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative mx-auto w-[280px] h-[570px] bg-slate-950 rounded-[2.8rem] p-3.5 border-4 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02]">
              {/* Speaker Bar */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-3 border border-slate-800" />
              </div>
              
              {/* Screen Content Wrapper */}
              <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-slate-900 border border-white/5">
                {activeCategory.screenshots[activePhotoIdx] ? (
                  <div className="relative w-full h-full flex items-center justify-center text-slate-500 text-sm p-4 text-center">
                    <Image
                      src={activeCategory.screenshots[activePhotoIdx].src}
                      alt={activeCategory.screenshots[activePhotoIdx].title}
                      fill
                      sizes="(max-width: 320px) 100vw, 280px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900">
                    <span className="text-xs text-slate-500">Image Missing</span>
                  </div>
                )}
              </div>
            </div>

            {/* Photo Gallery Selector */}
            <div className="flex flex-col w-full max-w-[280px] gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Thư viện ảnh màn hình</span>
              <div className="flex w-full gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {activeCategory.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      activePhotoIdx === idx ? "border-sky-400 scale-105" : "border-white/5 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-400 min-h-[40px]">
                <strong className="text-white">{activeCategory.screenshots[activePhotoIdx]?.title}</strong>: {activeCategory.screenshots[activePhotoIdx]?.desc}
              </p>
            </div>
          </div>

          {/* Feature Details Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                {activeCategory.title}
              </div>
              <h4 className="text-2xl font-extrabold text-white leading-tight">
                {activeCategory.tagline}
              </h4>
              <p className="text-sm leading-7 text-slate-300">
                {activeCategory.description}
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">Công Nghệ Lõi</h5>
              <div className="flex flex-wrap gap-2">
                {activeCategory.techStack.map((tech) => (
                  <span key={tech} className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">Tính Năng Cốt Lõi</h5>
              <ul className="space-y-4">
                {activeCategory.highlights.map((point, idx) => {
                  const [boldPart, ...rest] = point.split(":");
                  return (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                        <span className="text-[10px] font-bold">✓</span>
                      </div>
                      <p className="text-sm leading-6 text-slate-300">
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-white">{boldPart}:</strong>
                            {rest.join(":")}
                          </>
                        ) : (
                          point
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {activeCategory.reflection && (
              <div className="rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/10 p-5 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💡</span>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-indigo-300">Developer Insight</h6>
                </div>
                <p className="text-sm italic leading-7 text-slate-300">
                  &quot;{activeCategory.reflection}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
