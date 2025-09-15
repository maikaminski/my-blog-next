import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Github, Linkedin, Instagram } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Maíra",
  description: "Blog pessoal com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <header
          className="
            border-b px-6 py-4 mb-8 flex justify-between items-center
            bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800
          "
        >
          <h1 className="text-xl font-bold">Blog Maíra</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer
          className="
            border-t px-6 py-6 mt-8 text-center text-sm
            bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800
          "
        >
          <p className="mb-4">© {new Date().getFullYear()} Blog Maíra</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/maikaminski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/maikaminski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/maikaminski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}