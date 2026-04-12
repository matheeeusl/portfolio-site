"use client";

import { useState, useEffect } from "react";

interface ThemeToggleProps {
  labelLight: string;
  labelDark: string;
}

export const ThemeToggle = ({ labelLight, labelDark }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? labelLight : labelDark}
      className="rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
};
