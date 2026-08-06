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
    id: "pose_coach",
    title: "📷 Trợ Lý Tư Thế AI",
    icon: "📷",
    tagline: "Trợ Lý AI Chỉnh Sửa Tư Thế Thời Gian Thực",
    description: "Tích hợp sức mạnh của Edge AI (chạy trực tiếp trên thiết bị) để phân tích 33 điểm khớp xương của cơ thể, tự động đếm số lần tập và sửa lỗi sai tư thế mà không cần kết nối mạng.",
    techStack: ["CameraX", "Google MediaPipe", "MLKit Vision", "3D Vector Math", "Room Database"],
    highlights: [
      "Theo Dõi Camera Trực Tiếp: Xử lý hình ảnh camera 60fps để vẽ khung xương (Skeleton) trực tiếp lên cơ thể người tập.",
      "Thuật Toán Tính Góc: Tự thiết kế các thuật toán đo góc 3D để nhận diện tư thế (VD: Góc gập gối của bài Squat, góc lưng của bài Plank) nhằm đưa ra cảnh báo chấn thương.",
      "Tự Động Đếm Reps: Tự động hoá hoàn toàn việc đếm số lần lặp lại (Reps) và lưu trữ 100% offline."
    ],
    reflection: "Thách thức lớn nhất là đảm bảo tốc độ phản hồi AI dưới 50ms để vẽ khung xương mượt mà. Thay vì đưa ảnh lên Cloud, tôi chọn chạy mô hình Pose Landmarker (Lite) cục bộ hoàn toàn trên GPU/CPU điện thoại bằng MediaPipe, kết hợp với luồng xử lý bất đồng bộ của CameraX để giải quyết bài toán độ trễ và bảo vệ quyền riêng tư người dùng.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/01_pose_analysis.png", title: "Phân Tích Trực Tiếp", desc: "Vẽ lưới xương Skeleton lên người và phân tích tư thế." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/02_exercise_home.png", title: "Trang Chủ Bài Tập", desc: "Giao diện bắt đầu chọn bài tập Squat, Push-up, Plank." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/03_pose_warning.png", title: "Cảnh Báo Lỗi Sai", desc: "Cảnh báo lỗi sai tư thế hiển thị màu đỏ." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/04_form_score.png", title: "Thống Kê", desc: "Thống kê Form Score sau buổi tập." }
    ]
  },
  {
    id: "offline_library",
    title: "📚 Thư Viện Ngoại Tuyến",
    icon: "📚",
    tagline: "Thư Viện Bài Tập Khổng Lồ Siêu Tốc",
    description: "Tra cứu hàng nghìn bài tập, hình ảnh minh hoạ động và dữ liệu khoa học về cơ bắp một cách mượt mà ngay cả khi điện thoại đang ở chế độ Máy bay (Airplane mode).",
    techStack: ["Jetpack Compose LazyList", "Coil-Compose", "JSON Assets Parsing", "Coroutines"],
    highlights: [
      "Cơ Sở Dữ Liệu Đồ Sộ: Tích hợp 873 bài tập chuẩn y khoa, chia theo 7 nhóm cơ và 5 loại thiết bị tập.",
      "Hiệu Ứng Ảnh Động Giả Lập: Xử lý luân phiên 1,746 bức ảnh tĩnh (.jpg) thành dạng ảnh động (GIF) mượt mà để minh họa cách tập mà không làm tràn bộ nhớ RAM.",
      "Truy Vấn Thông Minh: Chức năng tìm kiếm, phân loại đa tầng (Nhóm cơ, Thiết bị, Cấp độ) phản hồi tức thì với cấu trúc dữ liệu tối ưu."
    ],
    reflection: "Thay vì dùng ảnh GIF nặng nề gây tốn hàng trăm MB RAM và lag màn hình cuộn (Scroll), tôi đã thiết kế một hệ thống \"Auto-Flip\" thông minh bằng Compose. Hệ thống này chỉ load 2 tấm ảnh JPG rất nhẹ vào bộ nhớ Cache (Coil) và cross-fade chúng tạo cảm giác động, giúp danh sách cuộn mượt mà ở 120Hz.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/05_exercise_detail.png", title: "Chi Tiết Bài Tập", desc: "Chi tiết bài tập với animation mô phỏng mượt mà." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/06_library_categories.png", title: "Thư Viện", desc: "Giao diện thư viện 7 nhóm cơ nổi bật." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/07_library_filter.png", title: "Bộ Lọc", desc: "Bộ lọc phân loại theo thiết bị, mục tiêu." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/08_offline_list.png", title: "Danh Sách Ngoại Tuyến", desc: "Danh sách thẻ bài tập hiển thị mượt mà offline." }
    ]
  },
  {
    id: "personalized_workout",
    title: "⚙️ Thuật Toán Đề Xuất",
    icon: "⚙️",
    tagline: "Thuật Toán Đề Xuất Giáo Án Cá Nhân Hoá",
    description: "Lên lịch tập luyện hoàn chỉnh trong 7 ngày dựa trên hệ thống chấm điểm đa chiều, tối ưu hoá thời gian nghỉ ngơi và kích thích cơ bắp tối đa.",
    techStack: ["Room SQLite", "DataStore Preferences", "Scoring Algorithm", "MVVM"],
    highlights: [
      "Thuật Toán Chấm Điểm Bài Tập: Tự động chấm điểm và chọn lọc bài tập phù hợp dựa trên trình độ, mục tiêu và nhóm cơ đang cần hồi phục của user.",
      "Lưu Trữ Ưu Tiên Ngoại Tuyến (Room DB): Quản lý toàn bộ tiến trình tập luyện (Weekly Workout Plan), cho phép người dùng tự do tuỳ chỉnh (Thêm, xóa, thay thế) bài tập.",
      "Kiến Trúc Tách Biệt (Clean Architecture): Tách biệt hoàn toàn lớp giao diện (UI) và lớp dữ liệu (Repository), dễ dàng mở rộng và bảo trì."
    ],
    reflection: "Tôi đã xây dựng một thuật toán 'Exercise Scorer' nội bộ (chạy ở background thread) để tự động cân bằng giáo án. Ví dụ: Nếu người dùng chọn tập ở nhà (Home Workout), hệ thống sẽ ưu tiên 100% các bài 'Bodyweight' và loại bỏ các bài tập cần dùng máy móc (Machine) ở Gym, tạo ra trải nghiệm cực kỳ cá nhân hoá.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/09_weekly_plan.png", title: "Lịch Tập Hàng Tuần", desc: "Dashboard với lịch trình tập luyện tuần chi tiết." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/10_onboarding_survey.png", title: "Khảo Sát Cá Nhân", desc: "Khảo sát đầu vào cá nhân hóa giáo trình." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/11_replace_exercise.png", title: "Thay Thế Bài Tập", desc: "Thay thế bài tập tùy chỉnh linh hoạt." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/12_user_profile.png", title: "Hồ Sơ Người Dùng", desc: "Hồ sơ sức khỏe BMI, cân nặng, chiều cao." }
    ]
  },
  {
    id: "oled_player",
    title: "📱 Trình Phát Chế Độ OLED",
    icon: "📱",
    tagline: "Trải Nghiệm Tập Luyện Premium OLED",
    description: "Thiết kế giao diện Dark Mode tối đa hóa hiển thị trên màn hình AMOLED, tiết kiệm pin và mang lại cảm giác sang trọng, tập trung.",
    techStack: ["Jetpack Compose Canvas", "Framer Motion", "Material Design 3", "StateFlow"],
    highlights: [
      "Giao Diện Điều Hướng Tập Luyện: Giao diện điều hướng khi đang tập (Đếm thời gian nghỉ, Next/Prev bài tập) với hiệu ứng chuyển cảnh mượt mà.",
      "Đa Ngôn Ngữ (Localization): Hệ thống tự động dịch thuật và chuẩn hoá thuật ngữ thể hình tiếng Việt.",
      "Thống Kê Chuyên Sâu: Biểu đồ tương tác (Canvas) hiển thị tần suất tập luyện, số Reps thực hiện và tổng khối lượng tạ."
    ],
    reflection: "Tôi áp dụng triết lý thiết kế 'OLED-first' với nền True Black (#000000) kết hợp với các dải màu Neon. Điều này không chỉ giúp UI/UX trông cực kỳ 'Futuristic' giống các SaaS hàng đầu, mà còn tiết kiệm pin đáng kể cho người dùng khi màn hình điện thoại phải sáng liên tục trong suốt 1 giờ tập luyện.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/13_workout_player.png", title: "Trình Phát Tập Luyện", desc: "Trình phát thời gian thực đếm ngược và bài tập kế tiếp." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/14_set_tracker.png", title: "Theo Dõi Hiệp", desc: "Theo dõi số hiệp và khối lượng tập luyện trực tiếp." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/15_rest_timer.png", title: "Đếm Ngược Nghỉ Ngơi", desc: "Màn hình đếm ngược thời gian nghỉ ngơi." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/16_activity_chart.png", title: "Biểu Đồ Tiến Độ", desc: "Biểu đồ tần suất hoạt động hàng tuần." }
    ]
  },
  {
    id: "voice_coach",
    title: "🗣️ Trợ Lý Giọng Nói AI",
    icon: "🗣️",
    tagline: "Huấn Luyện Viên Cá Nhân Tại Gia",
    description: "Ngoài việc quan sát bằng Camera, ứng dụng còn tương tác trực tiếp với bạn thông qua giọng nói (Text-to-Speech), nhắc nhở sửa form và ăn mừng thành tích như một PT (Personal Trainer) thực thụ.",
    techStack: ["Android TTS (Text-To-Speech)", "Room DB Aggregation", "Jetpack Compose Canvas (Charts)"],
    highlights: [
      "Trợ Lý Giọng Nói (VoiceCoach): Tự động phát âm thanh cảnh báo bằng hai ngôn ngữ (Anh/Việt) khi AI phát hiện tư thế sai (VD: 'Hãy giữ lưng thẳng', 'Xuống sâu hơn chút nữa').",
      "Chạy Mô Phỏng (Mock Run): Tích hợp tính năng chạy giả lập dữ liệu cho người dùng test thử AI Form Coach mà không cần bật Camera thực.",
      "Biểu Đồ Nhiệt Tiến Độ (Heatmap): Vẽ biểu đồ thống kê chuyên sâu số lần tập (Reps), điểm số Form (Form Score) và lịch sử tập luyện 30 ngày qua bằng Canvas nguyên bản."
    ],
    reflection: "Tôi muốn biến chiếc điện thoại thành một PT thực sự. Bằng cách nối tín hiệu từ CameraX sang MediaPipe, lấy góc khớp gửi về ViewModel, cuối cùng kích hoạt Android TTS để phát ra âm thanh nhắc nhở, tạo thành một vòng lặp phản hồi thời gian thực khép kín hoàn toàn offline.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/17_progress_summary.png", title: "Tổng Quan Tiến Độ", desc: "Bảng tổng hợp Reps và thành tích tuyệt đẹp." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/18_workout_history.png", title: "Lịch Sử Luyện Tập", desc: "Biểu đồ đường trực quan theo dõi sức bền." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/19_voice_settings.png", title: "Cài Đặt Giọng Nói", desc: "Tùy chỉnh Bật/Tắt huấn luyện viên giọng nói." },
      { src: "/Portfolio_Assets/Screenshots/FitnessCoach/20_ai_tips.png", title: "Mẹo Từ AI", desc: "Lời khuyên AI hiển thị sau mỗi buổi tập hoàn thành." }
    ]
  }
];

export default function FitnessCoachShowcase() {
  const [activeTab, setActiveTab] = useState("pose_coach");
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
            Ứng dụng thể dục đa chức năng với trợ lý ảo. Hãy chọn danh mục bên dưới để xem chi tiết kiến trúc giải pháp.
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
