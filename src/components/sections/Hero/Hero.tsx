"use client";

import Image from "next/image";
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
    <section
      id="hero"
      className="flex min-h-screen scroll-mt-14 flex-col justify-center py-16"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Photo — top on mobile (small circle), right on desktop (large rounded rect) */}
          <div className="flex justify-center lg:order-last lg:justify-end">
            <Image
              src="/me.jpg"
              alt={personalInfo.name}
              width={384}
              height={384}
              priority
              className="h-24 w-24 rounded-full object-cover object-top shadow-lg ring-2 ring-blue-500/20 lg:h-96 lg:w-96 lg:shadow-xl dark:ring-blue-400/20"
            />
          </div>

          {/* Text content */}
          <div className="text-center lg:order-first lg:text-left">
            <p className="mb-3 text-sm font-medium tracking-widest text-blue-500 uppercase">
              {t.hero.greeting}
            </p>
            <h1
              id="hero-name"
              className="mb-3 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl dark:text-slate-100"
            >
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
              className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
