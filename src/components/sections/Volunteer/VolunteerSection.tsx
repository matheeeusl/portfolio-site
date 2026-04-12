"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { volunteers } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { VolunteerCard } from "./VolunteerCard";

export const VolunteerSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const { ref: headingRef, className: headingClass, style: headingStyle } =
    useScrollReveal({ delay: 0 });
  const { ref: subtitleRef, className: subtitleClass, style: subtitleStyle } =
    useScrollReveal({ delay: 50 });

  return (
    <section id="volunteer" className="scroll-mt-14 py-16" aria-labelledby="volunteer-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-4 ${headingClass}`} style={headingStyle}>
          <h2 id="volunteer-heading" className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            {t.volunteer.title}
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-teal-500" />
        </div>

        <p
          ref={subtitleRef}
          className={`mb-10 text-gray-500 dark:text-slate-400 ${subtitleClass}`}
          style={subtitleStyle}
        >
          {t.volunteer.subtitle}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {volunteers.map((entry, i) => (
            <VolunteerCard
              key={entry.id}
              entry={entry}
              index={i}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
