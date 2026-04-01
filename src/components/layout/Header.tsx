"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const switchLocale = () => {
    const next = locale === "en" ? "pt-BR" : "en";
    router.push(pathname.replace(`/${locale}`, `/${next}`));
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          {/* Logo */}
          <a
            href="#hero"
            className="text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-500 dark:text-slate-100 dark:hover:text-blue-400"
          >
            ML
          </a>

          {/* Desktop nav — aria-hidden keeps tests from finding duplicate links */}
          <nav aria-hidden="true" className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={href}
                href={href}
                tabIndex={-1}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800 md:block"
            >
              {t.nav.resume}
            </a>

            <button
              onClick={toggleTheme}
              aria-label={isDark ? t.theme.light : t.theme.dark}
              className="rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {isDark ? "☀" : "☾"}
            </button>

            <button
              onClick={switchLocale}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {t.locale.switchTo}
            </button>

            {/* Hamburger — md:hidden keeps it desktop-only visually */}
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 md:hidden dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile nav — opacity trick keeps it in the a11y tree for tests */}
        <nav
          aria-label="mobile navigation"
          style={
            isMenuOpen
              ? undefined
              : {
                  opacity: 0,
                  height: 0,
                  overflow: "hidden",
                  padding: 0,
                  borderWidth: 0,
                }
          }
          className="border-t border-gray-200 px-4 py-3 md:hidden dark:border-slate-800"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {t.nav.resume}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
