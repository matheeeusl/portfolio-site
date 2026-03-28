"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo, education } from "@/data/resume";

export const About = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="about" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-3xl font-bold">{t.sections.about}</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            {personalInfo.bio[locale]}
          </p>

          <div>
            <h3 className="mb-6 text-xl font-semibold">
              {t.sections.education}
            </h3>
            <ul className="space-y-6">
              {education.map((entry) => (
                <li key={entry.id}>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {entry.institution}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {entry.degree[locale]}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {entry.startYear} – {entry.endYear}
                  </p>
                  <p className="text-sm text-zinc-500">{entry.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
