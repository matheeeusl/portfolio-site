"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";
import { HeroStats } from "./HeroStats";

export const Hero = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  const stats = [
    { value: t.hero.stats.years, label: t.hero.stats.yearsLabel },
    { value: t.hero.stats.projects, label: t.hero.stats.projectsLabel },
    { value: t.hero.stats.languages, label: t.hero.stats.languagesLabel },
  ];

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center py-16 scroll-mt-14" aria-labelledby="hero-name">
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
          {t.hero.greeting}
        </p>
        <h1 id="hero-name" className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100 md:text-7xl">
          {personalInfo.name}
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-blue-500 md:text-3xl">
          {personalInfo.title[locale]}
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-slate-400">
          {t.hero.tagline}
        </p>
        <div className="mb-10">
          <HeroStats stats={stats} />
        </div>
        <a
          href="#projects"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};
