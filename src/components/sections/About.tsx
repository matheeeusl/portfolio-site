"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo, education } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Education, Locale } from "@/types";

function EducationItem({
  entry,
  index,
  locale,
}: {
  entry: Education;
  index: number;
  locale: Locale;
}) {
  const { ref, className, style } = useScrollReveal({ delay: index * 100 });
  return (
    <li
      ref={ref}
      key={entry.id}
      className={`rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900 ${className}`}
      style={style}
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
  );
}

export const About = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  const { ref: headingRef, className: headingClass, style: headingStyle } = useScrollReveal({ delay: 0 });
  const { ref: bioRef, className: bioClass, style: bioStyle } = useScrollReveal({ delay: 100 });
  const { ref: eduHeadingRef, className: eduHeadingClass, style: eduHeadingStyle } = useScrollReveal({ delay: 0 });

  return (
    <section id="about" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-10 ${headingClass}`} style={headingStyle}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.about}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div ref={bioRef} className={bioClass} style={bioStyle}>
            <p className="max-w-2xl leading-relaxed text-gray-500 dark:text-slate-400">
              {personalInfo.bio[locale]}
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.about.downloadResume}
            </a>
          </div>

          <div>
            <h3
              ref={eduHeadingRef}
              className={`mb-6 text-xl font-semibold text-gray-900 dark:text-slate-100 ${eduHeadingClass}`}
              style={eduHeadingStyle}
            >
              {t.sections.education}
            </h3>
            <ul className="space-y-4">
              {education.map((entry, i) => (
                <EducationItem key={entry.id} entry={entry} index={i} locale={locale} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
