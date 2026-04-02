"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";

const NAV_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "experience" as const, href: "#experience" },
  { key: "projects" as const, href: "#projects" },
  { key: "skills" as const, href: "#skills" },
  { key: "volunteer" as const, href: "#volunteer" },
  { key: "contact" as const, href: "#contact" },
];

export const Header = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const HEADER_HEIGHT = 57;

    const handleScroll = () => {
      const isNearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;

      if (isNearBottom) {
        setActiveSection(NAV_LINKS[NAV_LINKS.length - 1].href.slice(1));
        return;
      }

      let current: string | null = null;
      for (const { href } of NAV_LINKS) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= HEADER_HEIGHT) {
          current = href.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {NAV_LINKS.map(({ key, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  tabIndex={-1}
                  data-active={isActive ? "true" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-slate-400"
                  }`}
                >
                  {t.nav[key]}
                </a>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-1">
            {/* Social links — desktop only, already in footer on mobile */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              data-testid="header-github"
              className="hidden rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 md:block"
            >
              <svg role="img" aria-label="GitHub" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              data-testid="header-linkedin"
              className="hidden rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 md:block"
            >
              <svg role="img" aria-label="LinkedIn" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>

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
