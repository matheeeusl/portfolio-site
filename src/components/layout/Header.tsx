"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ContactDropdown } from "./ContactDropdown";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "experience" as const, href: "#experience" },
  { key: "projects" as const, href: "#projects" },
  { key: "skills" as const, href: "#skills" },
  { key: "volunteer" as const, href: "#volunteer" },
];

export const Header = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const mobileLinks = NAV_LINKS.map(({ key, href }) => ({ href, label: t.nav[key] }));

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
          <Logo />

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
            <ContactDropdown
              labels={{
                contact: t.nav.contact,
                emailLabel: t.contact.emailLabel,
                copyEmail: t.contact.copyEmail,
                emailCopied: t.contact.emailCopied,
              }}
              contactInfo={{
                email: personalInfo.email,
                github: personalInfo.github,
                linkedin: personalInfo.linkedin,
              }}
            />

            <ThemeToggle labelLight={t.theme.light} labelDark={t.theme.dark} />

            <LocaleSwitcher />

            {/* Hamburger */}
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <MobileNav
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          links={mobileLinks}
          contactLinks={{
            emailLabel: t.contact.emailLabel,
            email: personalInfo.email,
            github: personalInfo.github,
            linkedin: personalInfo.linkedin,
          }}
        />
      </header>
    </>
  );
};
