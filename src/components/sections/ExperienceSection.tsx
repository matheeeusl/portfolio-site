"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { experiences } from "@/data/resume";

export const ExperienceSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-3xl font-bold">{t.sections.experience}</h2>

        <ol className="relative border-l border-zinc-200 dark:border-zinc-700">
          {experiences.map((experience) => (
            <li key={experience.id} data-testid={`experience-${experience.id}`} className="mb-10 ml-6">
              <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 ring-4 ring-white dark:bg-zinc-700 dark:ring-zinc-900" />

              <p className="mb-1 text-sm text-zinc-500">
                {experience.startDate} – {experience.endDate ?? t.experience.present}
              </p>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {experience.company}
              </h3>

              <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {experience.role[locale]}
              </p>

              <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {experience.description[locale]}
              </p>

              <ul className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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
