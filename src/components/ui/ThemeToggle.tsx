"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

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
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? labelLight : labelDark}
      aria-pressed={isDark}
      className="relative h-9 w-9 cursor-pointer rounded-md p-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      <SunIcon
        className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-75 rotate-90 opacity-0"
        }`}
      />
      <MoonIcon
        className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
          isDark
            ? "scale-75 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
    </button>
  );
};
