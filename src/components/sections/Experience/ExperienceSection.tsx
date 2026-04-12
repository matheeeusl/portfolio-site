"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { experiences } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExperienceItem } from "./ExperienceItem";

export const ExperienceSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const { ref: headingRef, className: headingClass, style: headingStyle } = useScrollReveal({ delay: 0 });

  return (
    <section id="experience" className="scroll-mt-14 py-16" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-10 ${headingClass}`} style={headingStyle}>
          <h2 id="experience-heading" className="text-3xl font-bold text-gray-900 dark:text-slate-100">
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
              presentLabel={t.experience.present}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
