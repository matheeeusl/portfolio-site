"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";

export const Hero = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center py-16 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
          {t.hero.greeting}
        </p>
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100 md:text-7xl">
          {personalInfo.name}
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-blue-500 md:text-3xl">
          {personalInfo.title[locale]}
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-slate-400">
          {t.hero.tagline}
        </p>
        <div className="mb-10 flex gap-8">
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{t.hero.stats.years}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">{t.hero.stats.yearsLabel}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{t.hero.stats.projects}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">{t.hero.stats.projectsLabel}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{t.hero.stats.languages}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">{t.hero.stats.languagesLabel}</p>
          </div>
        </div>
        <a
          href="#projects"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-400"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};
