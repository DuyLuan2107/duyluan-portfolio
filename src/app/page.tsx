"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Mail, 
  BookOpen, 
  Award, 
  Cpu, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Volume2, 
  Mic, 
  ArrowRight,
  ExternalLink,
  MessageSquare,
  FileText
} from "lucide-react";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import ProjectShowcase from "@/components/ProjectShowcase";

interface GithubProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

// Custom SVG component for Github icon (since newer versions of Lucide-react do not bundle brand icons)
const Github = ({ size = "1em", ...props }: GithubProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={props.className}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const skillGroups = [
  {
    label: "Mobile & Frontend",
    icon: <Cpu className="text-sky-400" size={18} />,
    skills: ["Kotlin", "Android SDK", "Jetpack Compose", "Material Design 3", "CameraX", "Retrofit"],
  },
  {
    label: "AI & Data Science",
    icon: <Sparkles className="text-indigo-400" size={18} />,
    skills: ["Python", "TensorFlow Lite (Edge AI)", "PyTorch", "YOLOv8", "Gemini API", "OpenCV"],
  },
  {
    label: "Backend & Database",
    icon: <BookOpen className="text-emerald-400" size={18} />,
    skills: ["Room DB (Offline-first)", "SQLite", "Firebase Firestore", "Supabase", "REST API"],
  },
  {
    label: "Tools & Workflows",
    icon: <Award className="text-purple-400" size={18} />,
    skills: ["Git / GitHub Flow", "Docker", "Figma (UI/UX)", "LaTeX (CV crafting)", "Markdown Docs"],
  },
];

const projects = [
  {
    title: "VocabLensAI",
    description:
      "Nền tảng học tiếng Anh Native Android tích hợp AI trên thiết bị. Quét vật thể thực tế qua Camera để học từ vựng, tạo câu chuyện ngữ cảnh với Gemini API và ôn tập bằng thuật toán Spaced Repetition (SM-2).",
    highlights: [
      "Nhận diện vật thể Real-time với CameraX & TensorFlow Lite",
      "Ôn tập từ vựng khoa học với thuật toán SM-2",
      "Đấu trường PvP Arena thời gian thực bằng Firebase",
      "Giao diện chuẩn MVVM, Offline-first với Room DB"
    ],
    tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Firebase"],
    screenshot: "/screenshots/01_home_dashboard.png",
    docsUrl: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/PROJECT_OVERVIEW.md",
    githubUrl: "https://github.com/DuyLuan2107/vocablens-ai",
    apkUrl: "/vocablens.apk",
  },
  {
    title: "Lung X-ray AI Classification",
    description:
      "Hệ thống phân tích và chẩn đoán ảnh X-quang phổi y tế. Ứng dụng kỹ thuật phân vùng (Segmentation-guided Masking) để tự động tách vùng phổi, giúp AI tập trung chẩn đoán chính xác khu vực tổn thương.",
    highlights: [
      "Đạt điểm xuất sắc 9.1/10 cho Đồ án tốt nghiệp Đại học Nha Trang",
      "Tách nền phổi tự động với mô hình U-Net Segmentation",
      "Chẩn đoán bệnh lý độ chính xác cao với ResNet/DenseNet",
      "Trực quan hóa vùng tổn thương bằng heatmap Grad-CAM"
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "U-Net"],
    screenshot: "/lungxray-mockup.png",
    docsUrl: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/AI_PIPELINE.md",
    githubUrl: "https://github.com/DuyLuan2107/lung-xray-ai",
  },
  {
    title: "AI Fitness Form Coach",
    description:
      "Ứng dụng Android chạy offline hỗ trợ lên lịch tập luyện và sửa tư thế tập (Squat, Push-up, Plank) thời gian thực bằng mô hình Pose Estimation trên thiết bị.",
    highlights: [
      "Phát hiện khớp và tư thế khớp thời gian thực với MediaPipe/MLKit",
      "Gợi ý sửa tư thế bằng giọng nói và hiển thị visual trực quan",
      "Lưu trữ lịch sử và tiến độ luyện tập offline 100% qua Room DB"
    ],
    tags: ["Kotlin", "Jetpack Compose", "MediaPipe", "MLKit", "Room DB"],
    screenshot: "/fitness-mockup.png",
    docsUrl: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/ARCHITECTURE.md",
    githubUrl: "https://github.com/DuyLuan2107/AIFitnessCoach",
  },
];

export default function Home() {
  const [chatStep, setChatStep] = useState(0);

  // Loop Aria AI Assistant chat simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 4);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
      <NavBar />
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-slate-900/20 blur-[150px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="grid gap-12 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          
          {/* Hero Content (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                <Sparkles size={12} className="animate-pulse" />
                Sẵn sàng cho công việc & Thực tập
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight">
                Duy Luân
              </h1>
              <p className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent sm:text-3xl leading-tight">
                Software Engineering Student · Android & AI Developer
              </p>
              <p className="text-base leading-8 text-slate-300 sm:text-lg max-w-xl">
                Tôi tập trung xây dựng các ứng dụng di động Android chất lượng cao, tích hợp trí tuệ nhân tạo (Edge AI) chạy offline và đấu trường real-time. Thiết kế portfolio trực quan giúp Tech Lead/HR đánh giá năng lực nhanh nhất.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 grid-cols-3 max-w-lg">
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-center backdrop-blur-sm hover:border-white/10 transition duration-300">
                <p className="text-3xl font-extrabold text-white">02</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Dự án lớn</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-center backdrop-blur-sm hover:border-white/10 transition duration-300">
                <p className="text-3xl font-extrabold text-white">24</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Màn hình app</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-center backdrop-blur-sm hover:border-white/10 transition duration-300">
                <p className="text-3xl font-extrabold text-white">GPA 3.25</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Đại học NT</p>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:scale-105 hover:shadow-sky-500/45 active:scale-95"
              >
                <Download size={16} />
                Tải CV Bản Đầy Đủ
              </a>
              <a
                href="https://github.com/DuyLuan2107"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
              >
                <Github size={16} />
                GitHub Profile
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 transition duration-300 hover:border-sky-400 hover:text-white"
              >
                Liên hệ ngay
              </a>
            </div>
          </motion.div>

          {/* Aria AI Assistant Simulator (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_50px_100px_-20px_rgba(2,6,23,0.9)] backdrop-blur-md"
          >
            {/* Header glow */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Simulator Container */}
            <div className="relative flex h-[390px] flex-col rounded-3xl border border-white/5 bg-slate-900/80 p-5 shadow-inner">
              
              {/* Top Bar / Coach Info */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 font-bold text-white shadow-md">
                      AR
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-white">Aria AI Coach</p>
                      <Sparkles size={12} className="text-sky-400" />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">VocabLensAI Engine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5">
                  <Volume2 size={12} className="text-sky-400 animate-bounce" />
                  <span className="text-[10px] font-bold text-slate-300">TTS Active</span>
                </div>
              </div>

              {/* Chat Dialog Feed */}
              <div className="flex-1 py-4 overflow-hidden flex flex-col justify-end space-y-4">
                
                {/* Aria: Greeting */}
                <AnimatePresence mode="popLayout">
                  {chatStep >= 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 max-w-[85%]"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-xs font-bold text-sky-400">
                        A
                      </div>
                      <div className="rounded-2xl rounded-tl-none border border-white/5 bg-slate-950/60 p-3 text-xs leading-relaxed text-slate-200">
                        Hello Luan! Let's practice speaking today. Try reading the quote on the left.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* User Speech Simulation */}
                <AnimatePresence>
                  {chatStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 max-w-[85%] self-end flex-row-reverse"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-400">
                        U
                      </div>
                      <div className="rounded-2xl rounded-tr-none border border-white/5 bg-gradient-to-br from-indigo-600/90 to-indigo-700/90 p-3 text-xs leading-relaxed text-white shadow-md">
                        "I <span className="underline decoration-red-400 decoration-2">wants</span> to <span className="underline decoration-red-400 decoration-2">apply</span> FPT for internship..."
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mic & Waveform feedback */}
                <AnimatePresence>
                  {chatStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-1.5 py-1"
                    >
                      <Mic size={12} className="text-red-400 animate-pulse" />
                      <div className="flex items-center gap-0.5 h-4">
                        {[0.7, 0.4, 0.9, 0.3, 0.8, 0.5, 0.2, 0.7].map((val, i) => (
                          <motion.span
                            key={i}
                            animate={{ scaleY: [1, val * 3, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                            className="w-0.5 h-full bg-sky-400 rounded-full origin-center"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Aria: Evaluation */}
                <AnimatePresence>
                  {chatStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 max-w-[85%]"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-xs font-bold text-sky-400">
                        A
                      </div>
                      <div className="rounded-2xl rounded-tl-none border border-white/5 bg-slate-950/60 p-3 text-xs leading-relaxed text-slate-200">
                        Good attempt! I detected two grammar mistakes. Let's optimize.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Grammar correction card (Step 3) */}
                <AnimatePresence>
                  {chatStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 space-y-2 shadow-inner"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Grammar Diagnosis</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">CEFR B1 Gained</span>
                      </div>
                      <div className="text-[11px] space-y-1 text-slate-300">
                        <p>❌ "wants" → <strong className="text-emerald-400">"want"</strong> (I / You / We / They)</p>
                        <p>❌ "apply FPT" → <strong className="text-emerald-400">"apply to FPT"</strong> (Preposition rule)</p>
                        <p className="italic text-slate-400 mt-1 font-medium">💡 Suggested sentence: "I want to apply to FPT for the internship."</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 sm:p-12 shadow-xl backdrop-blur-sm"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Biography</span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Giới thiệu bản thân</h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-slate-400 lg:text-right">
                Sinh viên chuyên ngành Công nghệ phần mềm tại Đại học Nha Trang, có tư duy sản phẩm, đam mê thiết kế ứng dụng Android và huấn luyện mô hình AI học máy.
              </p>
            </div>
            
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 font-bold">01</div>
                <h3 className="text-lg font-bold text-white">Tư duy thực tế</h3>
                <p className="text-xs leading-6 text-slate-400">
                  Tôi tin rằng giá trị lớn nhất của lập trình viên là làm ra sản phẩm thực tế, có thể sử dụng được ngay lập tức và giải quyết các bài toán cụ thể.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 font-bold">02</div>
                <h3 className="text-lg font-bold text-white">Cấu trúc rõ ràng</h3>
                <p className="text-xs leading-6 text-slate-400">
                  Dù là đồ án hay dự án cá nhân, tôi đều tuân thủ các quy tắc Clean Architecture, MVVM để code sạch sẽ, dễ dàng bảo trì và mở rộng.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-6 space-y-3 md:col-span-2 lg:col-span-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 font-bold">03</div>
                <h3 className="text-lg font-bold text-white">Sẵn sàng cống hiến</h3>
                <p className="text-xs leading-6 text-slate-400">
                  Mong muốn được thực tập/làm việc tại các công ty công nghệ để cọ xát với các dự án lớn, học hỏi quy trình chuyên nghiệp và đóng góp giá trị của bản thân.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION (HIGHLIGHTED & OTHERS) --- */}
        <section id="projects" className="mt-32 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Portfolio</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Dự án tiêu biểu</h2>
            </div>
            <p className="max-w-md text-sm text-slate-400 md:text-right leading-7">
              Các dự án được đầu tư nghiêm túc về mặt kỹ thuật, kiến trúc và trải nghiệm thực tế.
            </p>
          </motion.div>

          {/* Project 1: VocabLensAI (Stunning Interactive Product Tour) */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-start justify-between gap-6"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping" />
                  Dự Án Trọng Điểm
                </div>
                <h3 className="text-3xl font-extrabold text-white">VocabLensAI</h3>
                <p className="text-slate-300 max-w-3xl text-sm leading-8">
                  Hệ sinh thái học tiếng Anh ứng dụng Edge AI để quét vật thể qua Camera thời gian thực, 
                  tích hợp đàm thoại sửa lỗi ngữ pháp thông minh cùng AI Aria, tự sinh truyện ngắn từ vựng, 
                  sử dụng thuật toán Spaced Repetition (SM-2) để ôn tập và đấu trường từ vựng PvP PvP online.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/DuyLuan2107/vocablens-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  <Github size={14} />
                  Mã nguồn GitHub
                </a>
                <a
                  href="/Portfolio_Assets/vocablens.apk"
                  download
                  className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/20 transition hover:bg-sky-400 hover:shadow-sky-500/35"
                >
                  <Download size={14} />
                  Tải APK Trải Nghiệm
                </a>
              </div>
            </motion.div>

            {/* Showcase Component containing screenshots and local video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ProjectShowcase />
            </motion.div>
          </div>

          {/* Project 2 & Other Research Projects */}
          <div className="space-y-8 pt-16 border-t border-white/10">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu size={18} className="text-indigo-400" />
              Nghiên cứu Trí tuệ Nhân tạo & Giải pháp Y tế
            </h4>
            
            <div className="grid gap-8">
              {projects.filter(p => p.title !== "VocabLensAI").map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Expertise</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Kỹ năng công nghệ</h2>
            </div>
            <p className="text-sm text-slate-400 leading-7">Phân chia rõ ràng theo từng phân vùng kiến trúc.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, idx) => (
              <motion.div 
                key={group.label} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-white/5 bg-slate-900/30 p-6 backdrop-blur-sm shadow-sm hover:border-white/10 transition duration-300"
              >
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                    {group.icon}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-300">{group.label}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/5 bg-slate-950/80 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-sky-500/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION & COURSEWORK --- */}
        <section id="education" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 sm:p-12 shadow-xl backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between border-b border-white/5 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Education</span>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Quá trình học tập</h2>
              </div>
              <p className="max-w-md text-sm text-slate-400 lg:text-right leading-7">
                Đại học Nha Trang, chuyên ngành Công nghệ phần mềm định hướng thực hành.
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-sky-400" size={24} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Đại học chính quy</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Đại học Nha Trang</h3>
                    <p className="mt-2 text-sm font-medium text-slate-300">Chuyên ngành Công nghệ phần mềm</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  <span className="rounded-full bg-sky-500/10 px-4.5 py-1.5 text-xs font-semibold text-sky-400 border border-sky-500/20">
                    GPA: 3.25 / 4.0
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Niên khóa: 2022 - 2026</span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <BookOpen className="text-indigo-400" size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Môn chuyên ngành tiêu biểu</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Phát triển ứng dụng di động",
                    "Trí tuệ nhân tạo & Machine Learning",
                    "Hệ quản trị cơ sở dữ liệu",
                    "Công nghệ phần mềm chuyên sâu",
                    "Kiến trúc hệ thống phần mềm",
                    "Xử lý ngôn ngữ tự nhiên"
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-white/5 bg-slate-900/50 px-3.5 py-2 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECT DOCUMENTATION --- */}
        <section id="docs" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Deep Dive</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Tài liệu kỹ thuật (Docs)</h2>
            </div>
            <p className="max-w-md text-sm text-slate-400 lg:text-right leading-7">
              Hệ thống tài liệu hoàn chỉnh hỗ trợ các Tech Lead kiểm tra chi tiết cấu trúc kiến trúc và thuật toán.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Design & Architecture",
                description: "Kiến trúc hệ thống chi tiết, sơ đồ luồng thành phần và cách thức hoạt động MVVM.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/ARCHITECTURE.md",
              },
              {
                title: "AI Pipeline & Inference",
                description: "Nguyên lý huấn luyện, nén mô hình YOLO/TFLite và cơ chế hoạt động của Gemini API.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/AI_PIPELINE.md",
              },
              {
                title: "Interview Prep Guide",
                description: "Các câu hỏi phỏng vấn thực tế, điểm cốt lõi của dự án và cách kiểm thử hiệu năng.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/INTERVIEW.md",
              },
            ].map((card, idx) => (
              <motion.div 
                key={card.title} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-white/5 bg-slate-900/30 p-8 flex flex-col justify-between backdrop-blur-sm hover:border-white/10 transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <FileText size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-xs leading-6 text-slate-400">{card.description}</p>
                </div>
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-1.5 rounded-full bg-sky-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/10 transition hover:bg-sky-400 hover:scale-105 active:scale-95"
                >
                  Đọc Tài Liệu
                  <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- GOALS & ACHIEVEMENTS --- */}
        <section id="goals" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 sm:p-12 shadow-xl backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between border-b border-white/5 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Objectives</span>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Mục tiêu nghề nghiệp</h2>
              </div>
              <p className="max-w-md text-sm text-slate-400 lg:text-right leading-7">
                Cam kết và lộ trình thực tập cụ thể khi tham gia ứng tuyển tại các doanh nghiệp.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-6 sm:p-8 space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <ArrowRight size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Mục tiêu thực tập</h3>
                <p className="text-xs leading-6 text-slate-400">
                  Tôi mong muốn ứng tuyển vị trí Thực tập sinh/Junior phát triển ứng dụng di động Android hoặc Trí tuệ Nhân tạo tại các doanh nghiệp công nghệ hàng đầu. Định hướng học hỏi thực chiến, cọ xát môi trường chuyên nghiệp và đóng góp năng lực lập trình của mình vào dự án.
                </p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-6 sm:p-8 space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Thành tựu cốt lõi</h3>
                <ul className="text-xs leading-6 text-slate-400 list-disc list-inside space-y-2">
                  <li>Xây dựng hoàn chỉnh ứng dụng native Android VocabLensAI 24 màn hình.</li>
                  <li>Hoàn thành Đồ án phân loại ảnh X-quang phổi xuất sắc (9.1/10 điểm).</li>
                  <li>Làm chủ luồng xử lý mô hình học sâu cục bộ (Edge AI YOLOv8/TFLite).</li>
                  <li>Xây dựng thói quen quản lý Git khoa học và viết tài liệu kỹ thuật hoàn chỉnh.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-8 sm:p-12 shadow-2xl backdrop-blur-sm text-center space-y-8"
          >
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Get In Touch</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Liên hệ ứng tuyển</h2>
              <p className="text-sm leading-7 text-slate-400">
                Hãy kết nối với tôi qua các kênh dưới đây nếu bạn thấy tiềm năng của tôi phù hợp với vị trí thực tập/nhân viên tại doanh nghiệp của bạn.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 space-y-2 hover:border-white/10 transition">
                <Mail className="mx-auto text-sky-400" size={20} />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                <a href="mailto:hello@duyluan.dev" className="block text-sm font-semibold text-white hover:text-sky-400 transition">
                  hello@duyluan.dev
                </a>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 space-y-2 hover:border-white/10 transition">
                <Github className="mx-auto text-indigo-400" size={20} />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">GitHub</p>
                <a href="https://github.com/DuyLuan2107" target="_blank" rel="noreferrer" className="block text-sm font-semibold text-white hover:text-indigo-400 transition">
                  DuyLuan2107
                </a>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 space-y-2 hover:border-white/10 transition">
                <MessageSquare className="mx-auto text-emerald-400" size={20} />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/lu%C3%A2n-duy-743a39422/" target="_blank" rel="noreferrer" className="block text-sm font-semibold text-white hover:text-emerald-400 transition">
                  luan-duy
                </a>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 space-y-2 hover:border-white/10 transition">
                <Award className="mx-auto text-purple-400" size={20} />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Địa chỉ</p>
                <p className="text-sm font-semibold text-white">Quận 8, TP. HCM</p>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
