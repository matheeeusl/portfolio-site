"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { experiences } from "@/data/resume";

export const ExperienceSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="experience" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-slate-100">
          <span className="h-8 w-1 rounded-full bg-blue-500" aria-hidden="true" />
          {t.sections.experience}
        </h2>

        <ol className="relative border-l border-gray-200 dark:border-slate-800">
          {experiences.map((experience) => (
            <li
              key={experience.id}
              data-testid={`experience-${experience.id}`}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950" />

              <p className="mb-1 text-sm text-gray-500 dark:text-slate-400">
                {experience.startDate} – {experience.endDate ?? t.experience.present}
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-slate-100">
                {experience.company}
              </h3>

              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-slate-400">
                {experience.role[locale]}
              </p>

              <p className="mb-3 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
                {experience.description[locale]}
              </p>

              <ul className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
