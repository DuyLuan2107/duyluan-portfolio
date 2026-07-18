import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  "Python",
  "Kotlin",
  "Java",
  "SQL",
  "Git",
  "Android",
  "Compose",
  "Supabase",
  "TensorFlow",
  "PyTorch",
];

const projects = [
  {
    title: "VocabLensAI",
    description:
      "Ứng dụng Android giúp học từ vựng tiếng Anh bằng camera OCR, flashcard và đồng bộ Supabase. Thiết kế để học nhanh, lưu từ và kiểm tra tiến trình học.",
    tags: ["Kotlin", "Compose", "Supabase", "YOLO"],
    screenshot: "/vocablens-screenshot.svg",
    githubUrl: "https://github.com/DuyLuan2107/vocablens-ai",
    apkUrl: "/vocablens.apk",
  },
  {
    title: "Lung X-ray AI",
    description:
      "Proof-of-concept AI cho phân tích X-ray phổi với GradCAM và UNet. Hỗ trợ trực quan hóa vùng tổn thương và tối ưu mô hình y tế.",
    tags: ["Python", "TensorFlow", "PyTorch", "UNet"],
    screenshot: "/lungxray-screenshot.svg",
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
                Tôi xây dựng portfolio rõ ràng với dự án thực tế, mô tả ngắn gọn và sản phẩm có thể mở nhanh khi HR hỏi.
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
              Tôi thích xây dựng sản phẩm tập trung vào người dùng, có tính thực tế, dễ triển khai và dễ trình bày khi ứng tuyển.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-slate-300 leading-8">
                Hiện là sinh viên Công nghệ phần mềm tại Đại học Nha Trang, tôi tập trung vào sản phẩm Android và AI có giá trị thực tế. Portfolio này trình bày dự án rõ ràng để HR hiểu đúng năng lực kỹ thuật.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Focus</p>
                <p className="mt-3 text-slate-300 leading-8">
                  Xây dựng app mobile, backend cơ bản và AI proof-of-concept, phù hợp bài tập lớn và thực tập.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Approach</p>
                <p className="mt-3 text-slate-300 leading-8">
                  Thiết kế portfolio tối giản, hiệu năng cao và dễ đọc, phù hợp mở nhanh trên điện thoại hoặc máy tính.
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
            <p className="text-sm text-slate-400">Thể hiện các công nghệ phù hợp với dự án và vị trí.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-3xl border border-white/10 bg-slate-900/60 px-5 py-4 text-center text-sm font-semibold text-white shadow-sm shadow-slate-950/20"
              >
                {skill}
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
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/60 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Đại học</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">Đại học Nha Trang</h3>
                <p className="mt-2 text-slate-300">Chuyên ngành Công nghệ phần mềm</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                GPA 3.25 • 2022 - 2026
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/90">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Dự án tiêu biểu</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 md:text-right">
              Hai dự án minh họa năng lực Android và AI, thể hiện phần mềm và giải pháp kỹ thuật.
            </p>
          </div>
          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
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
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Facebook</p>
              <a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-lg font-semibold text-sky-400"
              >
                facebook.com/your-profile
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">LinkedIn</p>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-lg font-semibold text-sky-400"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
