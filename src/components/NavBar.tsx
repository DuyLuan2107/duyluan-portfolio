"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Docs", href: "#docs" },
    { label: "Goals", href: "#goals" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "border-b border-white/5 bg-slate-950/70 py-3 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(2,6,23,0.5)]"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 font-bold text-white shadow-md shadow-sky-500/20 transition-transform group-hover:scale-105">
            DL
          </div>
          <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-sky-400">
            Duy Luân
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 rounded-full border border-white/5 bg-slate-900/40 p-1.5 backdrop-blur-md">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:scale-105 hover:shadow-sky-500/35 active:scale-95"
          >
            <Download size={14} />
            Tải CV PDF
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 transition hover:bg-slate-800 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-400 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/20"
              >
                <Download size={16} />
                Tải CV PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
