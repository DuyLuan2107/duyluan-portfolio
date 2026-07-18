import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duy Luân | Portfolio",
  description:
    "Portfolio cá nhân của Duy Luân - Software Engineering Student, Android Developer và AI Developer.",
  keywords: [
    "portfolio",
    "Duy Luân",
    "software engineering",
    "Android",
    "AI",
    "FPT",
    "CV",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex min-h-screen flex-col bg-[#0f172a] text-slate-100">
        {children}
      </body>
    </html>
  );
}
