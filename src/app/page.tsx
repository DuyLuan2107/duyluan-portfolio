import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import ProjectShowcase from "@/components/ProjectShowcase";

const skillGroups = [
  {
    label: "Mobile & Frontend",
    skills: ["Kotlin", "Android", "Jetpack Compose", "Material Design"],
  },
  {
    label: "AI & Data",
    skills: ["Python", "TensorFlow", "PyTorch", "YOLO"],
  },
  {
    label: "Backend & Database",
    skills: ["Supabase", "Firebase", "SQL", "REST API"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "Docker", "Figma"],
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
    screenshot: "/vocablens-mockup.png",
    docsUrl: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/PROJECT_OVERVIEW.md",
    githubUrl: "https://github.com/DuyLuan2107/vocablens-ai",
    apkUrl: "/vocablens.apk",
  },
  {
    title: "Lung X-ray AI Classification",
    description:
      "Hệ thống phân tích và chẩn đoán ảnh X-quang phổi y tế. Ứng dụng kỹ thuật phân vùng (Segmentation-guided Masking) để tự động tách vùng phổi, giúp AI tập trung chẩn đoán chính xác khu vực tổn thương.",
    highlights: [
      "Đạt điểm xuất sắc 9.1/10 cho Đồ án tốt nghiệp Đại học",
      "Tách nền phổi tự động với U-Net Segmentation",
      "Chẩn đoán bệnh lý độ chính xác cao với ResNet/DenseNet",
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "U-Net"],
    screenshot: "/lungxray-mockup.png",
    docsUrl: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/AI_PIPELINE.md",
    githubUrl: "https://github.com/DuyLuan2107/lung-xray-ai",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <section id="home" className="grid gap-10 pt-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:gap-16">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Xin chào, mình là</p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Duy Luân
              </h1>
              <p className="text-2xl font-medium leading-tight text-slate-200 sm:text-3xl">
                Software Engineering Student · Android Developer · AI Developer
              </p>
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                Tôi xây dựng portfolio rõ ràng, sản phẩm thực tế và demo nhanh để HR dễ đánh giá năng lực khi ứng tuyển.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-center shadow-sm shadow-slate-950/20">
                <p className="text-3xl font-semibold text-white">2</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">Dự án</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-center shadow-sm shadow-slate-950/20">
                <p className="text-3xl font-semibold text-white">4+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">Công nghệ</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-center shadow-sm shadow-slate-950/20">
                <p className="text-3xl font-semibold text-white">2022-2026</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">Học vấn</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Download CV
              </a>
              <a
                href="https://github.com/DuyLuan2107"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Xem GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/80 hover:text-sky-300"
              >
                Liên hệ
              </a>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_45px_120px_-40px_rgba(15,23,42,0.8)]">
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col gap-5 rounded-[1.75rem] border border-white/5 bg-[#111827]/95 p-6">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl font-semibold text-sky-400/90">
                  DL
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Software Engineering Student</p>
                  <p className="mt-2 text-xl font-semibold text-white">Đại học Nha Trang</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Specialty</p>
                  <p className="mt-3 text-lg font-semibold text-white">Android & AI</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Goal</p>
                  <p className="mt-3 text-lg font-semibold text-white">Ứng tuyển FPT / thực tập</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/95 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Quote</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Tôi muốn portfolio trở thành tài liệu mở nhanh nhất khi HR hỏi dự án, để họ thấy sản phẩm và năng lực lập trình ngay lập tức.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Giới thiệu ngắn gọn</h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-400 xl:text-right">
              Sinh viên CNTT Đại học Nha Trang, xây dựng ứng dụng Android và giải pháp AI có thể trình bày nhanh cho HR.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-slate-300 leading-8">
                Tôi đang học năm cuối chuyên ngành Công nghệ phần mềm. Tôi tập trung tạo sản phẩm có giá trị thực tế, dễ dùng và dễ trình bày, đồng thời có cấu trúc code rõ ràng.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Giá trị</p>
                <p className="mt-3 text-slate-300 leading-8">
                  Dự án có thể mở nhanh, demo trực tiếp và nói được rõ vai trò của mình trong sản phẩm.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mục tiêu</p>
                <p className="mt-3 text-slate-300 leading-8">
                  Ứng tuyển thực tập / junior tại FPT, tham gia dự án Android hoặc AI với tư duy sản phẩm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Kỹ năng công nghệ</h2>
            </div>
            <p className="text-sm text-slate-400">Kỹ năng được nhóm rõ ràng theo hướng sản phẩm và công nghệ.</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-sm shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{group.label}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Education</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Học vấn</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 lg:text-right">
              Đại học Nha Trang, chuyên ngành Công nghệ phần mềm, với định hướng học tập và dự án thực chiến.
            </p>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Đại học</p>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">Đại học Nha Trang</h3>
                <p className="mt-2 text-slate-300">Chuyên ngành Công nghệ phần mềm</p>
                <div className="mt-4 inline-flex rounded-3xl bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                  GPA 3.25 • 2022 - 2026
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Relevant coursework</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Mobile App Development",
                  "Machine Learning",
                  "Database Systems",
                  "Software Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="docs" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Docs</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Project Documentation</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 lg:text-right">
              Full project docs for technical review, architecture, AI pipeline and interview prep.
            </p>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {[
              {
                title: "Design & Architecture",
                description: "System architecture, component flow and tech stack overview.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/ARCHITECTURE.md",
              },
              {
                title: "AI Pipeline",
                description: "Model flow, inference strategy and data processing.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/AI_PIPELINE.md",
              },
              {
                title: "Interview Prep",
                description: "Technical questions, project talking points and testing notes.",
                url: "https://github.com/DuyLuan2107/duyluan-portfolio/blob/main/docs/INTERVIEW.md",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{card.title}</p>
                <p className="mt-4 text-slate-300 leading-7">{card.description}</p>
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Read doc
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="goals" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Goals</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Internship & Achievements</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 lg:text-right">
              Mục tiêu thực tập rõ ràng, đạt thành tựu bằng sản phẩm và kinh nghiệm học hỏi.
            </p>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Internship goal</p>
              <p className="mt-4 text-slate-300 leading-8">
                Ứng tuyển vị trí thực tập Android/AI tại FPT hoặc công ty phần mềm, mong muốn tham gia dự án sản phẩm thực tế, gia tăng kinh nghiệm teamwork và quy trình phát triển chuyên nghiệp.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Key achievements</p>
              <ul className="mt-4 list-inside space-y-3 text-slate-300">
                <li>Phát triển VocabLensAI: app học từ vựng camera OCR + Supabase.</li>
                <li>Xây dựng Lung X-ray AI: phân tích ảnh y tế với GradCAM và UNet.</li>
                <li>Ứng dụng Git workflow, code review và tối ưu UI/UX mobile.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24 space-y-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Dự án tiêu biểu</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 md:text-right">
              Các dự án thực chiến nổi bật tích hợp AI, Mobile và khoa học máy tính.
            </p>
          </div>

          {/* Project 1 Showcase: VocabLensAI */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Featured Project</span>
                <h3 className="text-3xl font-bold text-white mt-1">VocabLensAI</h3>
                <p className="text-slate-300 mt-2 max-w-2xl text-sm leading-7">
                  Hệ sinh thái học từ vựng tiếng Anh thông minh với Edge AI (TFLite) trên thiết bị, 
                  tích hợp đàm thoại và sinh truyện tự động (Gemini API), ôn tập lặp lại giãn cách (SM-2) 
                  và đấu trường PvP trực tuyến (Firebase).
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/DuyLuan2107/vocablens-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub Repository
                </a>
                <a
                  href="/Portfolio_Assets/vocablens.apk"
                  download
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Tải APK Trải Nghiệm
                </a>
              </div>
            </div>

            <ProjectShowcase />
          </div>

          {/* Other Projects */}
          <div className="space-y-8 pt-8 border-t border-white/10">
            <h4 className="text-xl font-bold text-white">Dự án Nghiên cứu & Trí Tuệ Nhân Tạo khác</h4>
            <div className="grid gap-8">
              {projects.filter(p => p.title !== "VocabLensAI").map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Liên hệ</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 md:text-right">
              Email, GitHub và LinkedIn để HR dễ mở ngay khi cần liên hệ.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
              <p className="mt-3 text-lg font-semibold text-white">hello@duyluan.dev</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">GitHub</p>
              <a
                href="https://github.com/DuyLuan2107"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-lg font-semibold text-sky-400"
              >
                github.com/DuyLuan2107
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/lu%C3%A2n-duy-743a39422/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-lg font-semibold text-sky-400"
              >
                linkedin.com/in/lu%C3%A2n-duy-743a39422
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
              <p className="mt-3 text-lg font-semibold text-white">Quận 8, TP. HCM</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
