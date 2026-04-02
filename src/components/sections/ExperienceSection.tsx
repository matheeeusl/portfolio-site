"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { experiences } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Experience, Locale } from "@/types";

type Dictionary = ReturnType<typeof getDictionary>;

function ExperienceItem({
  experience,
  index,
  locale,
  t,
}: {
  experience: Experience;
  index: number;
  locale: Locale;
  t: Dictionary;
}) {
  const { ref, className, style } = useScrollReveal({ delay: index * 100 });
  const isCurrent = experience.endDate === null;

  return (
    <li
      ref={ref}
      data-testid={`experience-${experience.id}`}
      className={`relative mb-10 pl-8 ${className}`}
      style={style}
    >
      <span
        className={`absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-950 ${
          isCurrent ? "bg-blue-500" : "bg-gray-200 dark:bg-slate-700"
        }`}
      />

      <p
        className={`mb-1 text-sm font-medium ${
          isCurrent ? "text-blue-500" : "text-gray-500 dark:text-slate-500"
        }`}
      >
        {experience.startDate} – {experience.endDate ?? t.experience.present}
      </p>

      <h3 className="font-semibold text-gray-900 dark:text-slate-100">
        {experience.company}
      </h3>

      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-slate-400">
        {experience.role[locale]}
      </p>

      <p className="mb-3 max-w-5xl text-sm leading-relaxed text-gray-500 dark:text-slate-400">
        {experience.description[locale]}
      </p>

      <ul className="flex max-w-5xl flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500 dark:text-blue-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

export const ExperienceSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const {
    ref: headingRef,
    className: headingClass,
    style: headingStyle,
  } = useScrollReveal({ delay: 0 });

  return (
    <section id="experience" className="scroll-mt-14 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div
          ref={headingRef}
          className={`mb-10 ${headingClass}`}
          style={headingStyle}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            {t.sections.experience}
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <ol className="relative border-l border-gray-200 dark:border-slate-700">
          {experiences.map((experience, i) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={i}
              locale={locale}
              t={t}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
