import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  screenshot: string;
  docsUrl?: string;
  demoUrl?: string;
  githubUrl: string;
  apkUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  highlights,
  tags,
  screenshot,
  docsUrl,
  demoUrl,
  githubUrl,
  apkUrl,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.75)] transition hover:-translate-y-1 hover:border-[#3b82f6]/50">
      <div className="relative h-64 overflow-hidden bg-slate-800">
        <Image
          src={screenshot}
          alt={`${title} screenshot`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400/90">
            Project
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
        {highlights ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          {docsUrl ? (
            <a
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Project docs
            </a>
          ) : null}
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Demo
            </a>
          ) : null}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
          {apkUrl ? (
            <a
              href={apkUrl}
              download
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download APK
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
