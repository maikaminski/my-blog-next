"use client"; // precisa porque usamos useState/useEffect

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // ícones do lucide

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Quando a página carrega, checa o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // fallback: segue o tema do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Alterna tema e salva no localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:scale-110"
      aria-label="Alternar tema"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}