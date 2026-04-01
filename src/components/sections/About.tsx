"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo, education } from "@/data/resume";

export const About = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="about" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.about}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <p className="leading-relaxed text-gray-500 dark:text-slate-400">
            {personalInfo.bio[locale]}
          </p>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-slate-100">
              {t.sections.education}
            </h3>
            <ul className="space-y-4">
              {education.map((entry) => (
                <li
                  key={entry.id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span aria-hidden="true">🎓</span>
                    <p className="font-semibold text-gray-900 dark:text-slate-100">
                      {entry.institution}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {entry.degree[locale]}
                  </p>
                  <p className="mt-1 text-sm text-gray-400 dark:text-slate-500">
                    {entry.startYear} – {entry.endYear}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-slate-500">{entry.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
