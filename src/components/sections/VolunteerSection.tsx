"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { volunteers } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Volunteer, Locale } from "@/types";

function VolunteerCard({
  entry,
  index,
  locale,
}: {
  entry: Volunteer;
  index: number;
  locale: Locale;
}) {
  const { ref, className, style } = useScrollReveal({ delay: index * 100 });

  return (
    <article
      ref={ref}
      data-testid={`volunteer-${entry.id}`}
      className={`rounded-xl border border-teal-500/20 bg-teal-500/5 p-6 dark:border-teal-500/10 dark:bg-slate-900 ${className}`}
      style={style}
    >
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-slate-100">
          {entry.organization[locale]}
        </h3>
        <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
          {entry.role[locale]}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-slate-400">
        {entry.description[locale]}
      </p>
    </article>
  );
}

export const VolunteerSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const { ref: headingRef, className: headingClass, style: headingStyle } =
    useScrollReveal({ delay: 0 });
  const { ref: subtitleRef, className: subtitleClass, style: subtitleStyle } =
    useScrollReveal({ delay: 50 });

  return (
    <section id="volunteer" className="scroll-mt-14 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-4 ${headingClass}`} style={headingStyle}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
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
