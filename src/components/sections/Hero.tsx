"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";

export const Hero = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center py-16">
      <div className="mx-auto max-w-4xl px-4">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.hero.greeting}
        </p>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
          {personalInfo.name}
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-zinc-500 md:text-3xl">
          {personalInfo.title[locale]}
        </h2>
        <p className="mb-10 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          {personalInfo.bio[locale]}
        </p>
        <a
          href="#projects"
          className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};
