export default function NavBar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-slate-300">
        <a href="#home" className="font-semibold text-white">
          Duy Luân
        </a>
        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-white transition hover:border-sky-400/80 hover:text-sky-300"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
