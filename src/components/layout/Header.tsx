"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";

const NAV_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "experience" as const, href: "#experience" },
  { key: "projects" as const, href: "#projects" },
  { key: "skills" as const, href: "#skills" },
];

export const Header = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          ML
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? t.theme.light : t.theme.dark}
            className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {isDark ? "☀" : "☾"}
          </button>

          <button className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
            {t.locale.switchTo}
          </button>

          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav
        aria-label="mobile navigation"
        style={isMenuOpen ? undefined : { opacity: 0 }}
        className="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800"
      >
        <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
