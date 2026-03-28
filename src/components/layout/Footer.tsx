"use client";

import { personalInfo } from "@/data/resume";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          © {year} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};
