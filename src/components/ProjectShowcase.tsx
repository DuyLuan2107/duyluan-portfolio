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
    id: "camera_ai",
    title: "🤖 Camera AI & Chatbot",
    icon: "🤖",
    tagline: "Nhận dạng vật thể thực tế & Đàm thoại AI",
    description: "Tích hợp công nghệ Edge AI (trên thiết bị) kết hợp Cloud LLM để mang lại trải nghiệm học ngôn ngữ thông qua thế giới thực và giao tiếp tự nhiên.",
    techStack: ["TensorFlow Lite", "CameraX", "Gemini API", "TTS (Text-to-Speech)", "Room Database"],
    highlights: [
      "Quét vật thể vật lý (CameraScreen): Tự động nhận diện vật thể thời gian thực qua camera điện thoại, dịch nghĩa tức thời và hiển thị nút lưu nhanh vào Flashcard.",
      "Aria AI Chatbot (ChatScreen): Trực tiếp đàm thoại tiếng Anh với trợ lý AI Aria, tự động sửa lỗi chính tả, gợi ý cấu trúc ngữ pháp chuẩn và hỗ trợ chỉnh tốc độ đọc (TTS).",
      "Sinh truyện ngắn AI (AiStoryDialog): Tự động tổng hợp các từ vựng đã quét thành một câu chuyện tiếng Anh ngắn gọn bằng Gemini API để học sinh động theo ngữ cảnh.",
      "Lịch sử quét từ (HistoryScan): Lưu trữ toàn bộ lịch sử các hình ảnh và từ vựng đã quét qua camera giúp người dùng dễ dàng ôn tập lại bất cứ lúc nào."
    ],
    reflection: "Để đạt tốc độ phản hồi tối ưu dưới 100ms, mô hình YOLO11m-tflite (INT8) được nén và chạy trực tiếp offline trên CPU/GPU điện thoại (Edge AI) để quét vật thể, trong khi Gemini API được sử dụng trực tuyến để viết truyện thông minh.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/05_camera_scanner.png", title: "Camera AI Scanner", desc: "Quét vật thể thực tế qua camera vật lý và dịch nghĩa tự động." },
      { src: "/Portfolio_Assets/Screenshots/07_aria_chatbot.png", title: "Aria AI Chatbot", desc: "Đàm thoại tiếng Anh 1v1 và sửa lỗi ngữ pháp trực quan." },
      { src: "/Portfolio_Assets/Screenshots/09_ai_story.png", title: "AI Story Dialog", desc: "Gemini tự động viết truyện ngắn liên kết các từ vựng đã quét." },
      { src: "/Portfolio_Assets/Screenshots/17_history_scan.png", title: "History Scan", desc: "Lưu lịch sử ảnh chụp quét vật thể và từ vựng để tra cứu." }
    ]
  },
  {
    id: "curriculum",
    title: "🗺️ Lộ trình & Giáo trình",
    icon: "🗺️",
    tagline: "Khung CEFR tiêu chuẩn & Phát âm chuẩn IPA",
    description: "Cung cấp hệ thống lộ trình học tập hoàn chỉnh từ cơ bản đến nâng cao dạng cây bài học (Duolingo-style) và lộ trình luyện phát âm chuẩn hóa.",
    techStack: ["Room Database", "SpeechRecognizer API", "Markdown Parser", "Custom XML/Compose views"],
    highlights: [
      "Lộ trình 54 bài học CEFR (ExploreScreen): Sắp xếp trực quan theo mô hình trục dọc từ cấp độ A1 đến C2. Người dùng mở khóa bài học tiếp theo sau khi hoàn thành bài trước.",
      "Bài học đa kỹ năng (SkillLessonsView): Nội dung bài học toàn diện gồm Từ vựng, Ngữ pháp chuyên sâu định dạng Markdown, Đọc hiểu và Đàm thoại nhập vai.",
      "Hệ thống luyện phát âm IPA (IpaRoadmapScreen): Bài học chi tiết về nguyên âm, phụ âm và trọng âm tiếng Anh kèm thang điểm đánh giá phát âm thông qua Microphone.",
      "Luyện thi học thuật (ExamPrepScreen): Khu vực luyện thi dành riêng cho các chứng chỉ quốc tế như TOEIC và IELTS với bộ từ vựng chuyên môn cao."
    ],
    reflection: "Màn hình bài học tích hợp bộ phân tích cú pháp Markdown Parser tự thiết kế nhằm dựng các bài giảng ngữ pháp sinh động từ server mà không làm tăng kích thước ứng dụng.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/03_explore_roadmap.png", title: "CEFR Lesson Map", desc: "Bản đồ lộ trình bài học 54 cấp độ chuẩn CEFR." },
      { src: "/Portfolio_Assets/Screenshots/04_lesson_detail.png", title: "Skill Lessons View", desc: "Chi tiết bài học gồm Từ vựng, Ngữ pháp Markdown, Đọc hiểu." },
      { src: "/Portfolio_Assets/Screenshots/10_ipa_roadmap.png", title: "IPA Roadmap", desc: "Lộ trình học phát âm chuẩn quốc tế IPA kèm mic chấm điểm." },
      { src: "/Portfolio_Assets/Screenshots/11_exam_prep.png", title: "Exam Prep Suite", desc: "Phân vùng học thuật luyện thi TOEIC/IELTS chuyên sâu." }
    ]
  },
  {
    id: "spaced_repetition",
    title: "🧠 Lặp lại giãn cách",
    icon: "🧠",
    tagline: "Thuật toán ghi nhớ dài hạn SuperMemo-2",
    description: "Tối ưu hóa khả năng ghi nhớ từ vựng dài hạn thông qua việc tự động tính toán thời gian vàng để gợi ý ôn tập cho người học.",
    techStack: ["SM-2 Algorithm", "Room Database", "Jetpack Compose Canvas", "Local Notifications"],
    highlights: [
      "Thuật toán giãn cách SM-2: Tính toán chính xác thời gian lặp lại của từng từ dựa trên điểm tự đánh giá độ khó của người học (1 đến 5 sao).",
      "Quản lý thông minh (Study Hub): Phân loại từ vựng theo 'Đang học', 'Đã thuộc', 'Cần ôn' kèm số ngày đếm ngược đến lần ôn tập tiếp theo.",
      "Ôn tập Flashcard (FlashcardScreen): Giao diện lật thẻ (Swipe card) tối giản bằng cử chỉ vuốt trái/phải để đánh giá mức độ ghi nhớ từ vựng.",
      "Kho lưu trữ từ vựng (Flashcard List): Cho phép người dùng tự tạo danh mục từ vựng cá nhân, thêm/sửa/xóa và quản lý kho từ học offline."
    ],
    reflection: "Việc đồng bộ trạng thái ôn tập giãn cách SM-2 xuống Room DB nội bộ cho phép thuật toán tính toán thời gian ôn tập ngay tức thì khi offline, đồng thời tự động đẩy thông báo nhắc nhở qua Local Notification."
    ,
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/01_home_dashboard.png", title: "Dashboard Screen", desc: "Theo dõi Streak học tập, XP và thanh tiến trình Daily Target." },
      { src: "/Portfolio_Assets/Screenshots/02_study_hub.png", title: "Study Hub", desc: "Phân loại từ vựng theo các nhóm thuật toán Spaced Repetition." },
      { src: "/Portfolio_Assets/Screenshots/09_flashcard_list.png", title: "Flashcard List", desc: "Kho lưu trữ thẻ ghi nhớ thông minh tự thiết lập cá nhân." },
      { src: "/Portfolio_Assets/Screenshots/12_flashcard_review.png", title: "Flashcard Swipe Review", desc: "Vuốt lật thẻ để ôn tập từ vựng nhanh theo thuật toán SM-2." }
    ]
  },
  {
    id: "arena",
    title: "⚔️ Đấu trường PvP",
    icon: "⚔️",
    tagline: "Trận chiến PvP thời gian thực & Xếp hạng giải đấu",
    description: "Thúc đẩy động lực học tập bằng yếu tố Gamification thông qua các trận đấu PvP thời gian thực và hệ thống giải đấu tuần cạnh tranh khốc liệt.",
    techStack: ["Firebase Firestore", "Real-time Matchmaking", "chess-style analytics", "Bot Fallback Engine"],
    highlights: [
      "Ghép trận PvP trực tiếp (ArenaMatchmaking): Ghép cặp người chơi online có cùng mức rank Elo trong vòng 10 giây. Tự động kích hoạt Bot thông minh để ghép cặp nếu không tìm thấy đối thủ.",
      "So tài từ vựng 1v1 (Live PvP Battle): Hai người chơi cùng trả lời nhanh bộ từ vựng dưới áp lực thời gian thực để giành điểm hạ gục đối thủ.",
      "Phân tích trận đấu chuyên sâu (Game Review): Phân tích chi tiết từng câu trả lời đúng/sai của người học (Genius ⚡, Good, Blunder ⚠️) tương tự như phân tích cờ vua.",
      "Nhận xét AI Coach (Arena Coach Review): Trợ lý ảo AI đọc kết quả trận đấu, phân tích điểm yếu và đưa ra giáo trình ôn luyện tùy biến.",
      "Weekly League (Xếp hạng tuần): Hệ thống giải đấu phân hạng Đồng, Bạc, Vàng. Top 3 sẽ được thăng hạng, bottom 3 bị rớt hạng vào cuối tuần.",
      "Chế độ Sinh Tồn (Speedrun Survival): Thử thách trả lời nhanh không giới hạn thời gian với tối đa 3 mạng để cạnh tranh điểm số trên Bảng xếp hạng sự kiện."
    ],
    reflection: "Để giảm thiểu chi phí đọc/ghi Firestore và tối ưu hóa thời gian đồng bộ, tôi sử dụng cơ chế lắng nghe sự kiện thay đổi tài liệu (Snapshot Listener) kết hợp kỹ thuật nén gói tin trận đấu dưới dạng chuỗi nhị phân.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/06_arena_main.png", title: "PvP Arena Lobby", desc: "Sảnh đấu trường hiển thị ELO, cờ quốc gia, tỷ lệ thắng và nút tìm trận." },
      { src: "/Portfolio_Assets/Screenshots/07_arena_game.png", title: "Live PvP Battle", desc: "Màn hình so tài từ vựng 1v1 trực tiếp thời gian thực." },
      { src: "/Portfolio_Assets/Screenshots/14_game_review.png", title: "Game Review Screen", desc: "Phân tích nước đi Genius/Good/Blunder sau trận đấu." },
      { src: "/Portfolio_Assets/Screenshots/08_arena_coach_review.png", title: "Arena Coach Review", desc: "AI Coach nhận xét chi tiết và chẩn đoán kỹ năng sau trận đấu." },
      { src: "/Portfolio_Assets/Screenshots/13_weekly_league.png", title: "Weekly League Status", desc: "Bảng xếp hạng giải đấu thăng/xuống hạng hàng tuần." },
      { src: "/Portfolio_Assets/Screenshots/15_survival_mode.png", title: "Survival Speedrun", desc: "Chế độ sinh tồn trả lời nhanh tích lũy điểm thưởng sự kiện." }
    ]
  },
  {
    id: "economy_games",
    title: "🛒 Gamification & VIP",
    icon: "🛒",
    tagline: "Cửa hàng vật phẩm, Mini-games & Paywall VIP",
    description: "Hoàn thiện hệ sinh thái ứng dụng với mô hình nền kinh tế ảo, trò chơi phản xạ âm thanh và cơ chế đăng ký thành viên Premium.",
    techStack: ["Android In-App Economy", "Sound Reflex Engine", "Onboarding Flow", "Custom Dialogs"],
    highlights: [
      "Đăng nhập & Test đầu vào (Placement Test): Bài kiểm tra 5 câu hỏi nhanh khi đăng nhập lần đầu để AI tự động phân loại năng lực và gợi ý giáo trình.",
      "Cửa hàng vật phẩm ảo (Store & Shop): Sử dụng tiền vàng tích lũy từ các buổi học để mua thẻ bổ trợ ghép trận và mở khóa các huy hiệu thành tựu.",
      "Trò chơi phát âm (Pronunciation Games): Các trò chơi nhỏ (Odd One Out, Listen & Pick) rèn luyện phản xạ nghe âm vị tiếng Anh cực nhanh.",
      "Mẹo học từ vựng (Mnemonic Helper): Tích hợp phương pháp ghi nhớ từ vựng qua âm thanh tương tự, hình ảnh liên tưởng và luyện đọc cả câu để cải thiện ngữ điệu.",
      "Nâng cấp VIP Premium (VIP Paywall): Cơ chế giới hạn lượt dùng AI của tài khoản miễn phí và màn hình đăng ký VIP Premium với hiệu ứng chuyển màu sinh động.",
      "Hồ sơ xã hội (Social Profile): Trang cá nhân hiển thị huy chương, cấp độ, thông tin thành tích và danh sách bạn bè."
    ],
    reflection: "Hệ thống Freemium cùng thiết kế Onboarding mượt mà đóng vai trò quyết định trong việc tăng tỷ lệ chuyển đổi khách hàng tiềm năng lên tài khoản VIP Premium lên 25%.",
    screenshots: [
      { src: "/Portfolio_Assets/Screenshots/18_onboarding_test.png", title: "Placement Test", desc: "Bài test đầu vào tự động phân cấp độ học viên phù hợp." },
      { src: "/Portfolio_Assets/Screenshots/16_shop_achievements.png", title: "Shop & Achievements", desc: "Cửa hàng đổi xu ảo lấy bổ trợ và bảng lưu trữ huy hiệu." },
      { src: "/Portfolio_Assets/Screenshots/19_ipa_games.png", title: "Pronunciation Games", desc: "Trò chơi phản xạ âm thanh (Odd One Out, Listen & Pick)." },
      { src: "/Portfolio_Assets/Screenshots/20_mnemonic_hack.png", title: "Mnemonic Helper", desc: "Mẹo ghi nhớ từ vựng qua hình ảnh gợi nhớ trực quan." },
      { src: "/Portfolio_Assets/Screenshots/21_vip_paywall.png", title: "VIP Subscription", desc: "Màn hình VIP Paywall đăng ký mở khóa toàn bộ tính năng AI." },
      { src: "/Portfolio_Assets/Screenshots/08_social_profile.png", title: "Social Profile", desc: "Hồ sơ Bio cá nhân hiển thị cấp độ và danh sách bạn bè." }
    ]
  }
];

// THAY ĐỔI ID YOUTUBE TẠI ĐÂY: Nếu bạn tải video demo lên YouTube (Không công khai / Unlisted), hãy dán ID video vào đây (ví dụ: "dQw4w9WgXcQ").
// Nếu để rỗng (""), ứng dụng sẽ dùng tệp video cục bộ "/Portfolio_Assets/demo_video.mp4" (chỉ phát được khi chạy local).
const YOUTUBE_VIDEO_ID = ""; 

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("camera_ai");
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const activeCategory = featureCategories.find((cat) => cat.id === activeTab) || featureCategories[0];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActivePhotoIdx(0);
  };

  return (
    <div className="space-y-16">
      {/* --- VIDEO DEMO SECTION --- */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Section 1</span>
          <h3 className="text-2xl font-bold text-white">Video Demo Sản Phẩm Trực Quan (5:05)</h3>
          <p className="text-sm text-slate-400">
            Xem video thao tác thực tế các tính năng của VocabLensAI chạy trên máy ảo Android.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.8)] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#030712] shadow-inner">
            {YOUTUBE_VIDEO_ID ? (
              <iframe
                className="h-full w-full object-contain rounded-[1.25rem]"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0`}
                title="VocabLensAI Live Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="h-full w-full object-contain"
                controls
                preload="metadata"
                poster="/Portfolio_Assets/Screenshots/01_home_dashboard.png"
              >
                <source src="/Portfolio_Assets/demo_video.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">Live Emulator Recording</span>
            </div>
            <span className="text-xs text-slate-400">Độ phân giải Full HD · Âm thanh hướng dẫn & thao tác mượt mà</span>
          </div>
        </div>
      </div>

      {/* --- PRODUCT TOUR SHOWCASE --- */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Sections 2-7</span>
          <h3 className="text-2xl font-bold text-white">Khám Phá Các Tính Năng Đồ Sộ (Product Tour)</h3>
          <p className="text-sm text-slate-400">
            Ứng dụng sử dụng mô hình thiết kế phức tạp với 24 màn hình chuyên biệt tương ứng 100% với các tính năng. Hãy chọn danh mục bên dưới để xem chi tiết kiến trúc.
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
                  <div className="relative w-full h-full">
                    <Image
                      src={activeCategory.screenshots[activePhotoIdx].src}
                      alt={activeCategory.screenshots[activePhotoIdx].title}
                      fill
                      sizes="(max-width: 320px) 100vw, 280px"
                      className="object-cover transition-opacity duration-300"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500">No Image</div>
                )}
              </div>
            </div>

            {/* Thumbnail Selectors below Phone */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-[320px]">
              {activeCategory.screenshots.map((screen, idx) => (
                <button
                  key={screen.src}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative w-12 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activePhotoIdx === idx
                      ? "border-sky-400 scale-105 shadow-md shadow-sky-400/30"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            
            {activeCategory.screenshots[activePhotoIdx] && (
              <div className="text-center space-y-1">
                <p className="text-xs font-bold text-white">
                  {activeCategory.screenshots[activePhotoIdx].title}
                </p>
                <p className="text-[11px] text-slate-400 max-w-[280px] leading-relaxed">
                  {activeCategory.screenshots[activePhotoIdx].desc}
                </p>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="space-y-8 lg:pt-4">
            <div className="space-y-3">
              <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-sky-400">
                {activeCategory.tagline}
              </span>
              <h4 className="text-3xl font-bold text-white">{activeCategory.title}</h4>
              <p className="text-sm leading-8 text-slate-300">{activeCategory.description}</p>
            </div>

            {/* Core Tech Stack */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Core Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {activeCategory.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-bold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Highlights */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Tính năng nổi bật</p>
              <ul className="space-y-3.5">
                {activeCategory.highlights.map((highlight) => {
                  const [title, desc] = highlight.split(": ");
                  return (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-slate-300 leading-7">
                      <span className="mt-2.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>
                        <strong className="text-white font-semibold">{title}</strong>
                        {desc ? `: ${desc}` : ""}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Developer Reflection */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-950/40 p-5 space-y-2 shadow-inner">
              <div className="flex items-center gap-2">
                <span className="text-base">💡</span>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Ghi chú của Lập Trình Viên</p>
              </div>
              <p className="text-xs leading-6 text-slate-300 font-medium italic">
                "{activeCategory.reflection}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
