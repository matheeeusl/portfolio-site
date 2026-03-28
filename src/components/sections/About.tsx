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
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-slate-100">
          <span className="h-8 w-1 rounded-full bg-blue-500" aria-hidden="true" />
          {t.sections.about}
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <p className="leading-relaxed text-gray-500 dark:text-slate-400">
            {personalInfo.bio[locale]}
          </p>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-slate-100">
              {t.sections.education}
            </h3>
            <ul className="space-y-6">
              {education.map((entry) => (
                <li key={entry.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="font-semibold text-gray-900 dark:text-slate-100">
                    {entry.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {entry.degree[locale]}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                    {entry.startYear} – {entry.endYear}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{entry.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
