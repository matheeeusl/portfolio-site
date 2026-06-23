"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo, education } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AboutBio } from "./AboutBio";
import { EducationItem } from "./EducationItem";

export const About = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  const { ref: headingRef, className: headingClass, style: headingStyle } = useScrollReveal({ delay: 0 });
  const { ref: bioRef, className: bioClass, style: bioStyle } = useScrollReveal({ delay: 100 });
  const { ref: eduHeadingRef, className: eduHeadingClass, style: eduHeadingStyle } = useScrollReveal({ delay: 0 });

  const resumeHref =
    locale === "en"
      ? "/Matheus_Laureano_Visual_CV_EN.pdf"
      : "/Matheus_Laureano_Visual_CV.pdf";

  return (
    <section id="about" className="py-16 scroll-mt-14" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-10 ${headingClass}`} style={headingStyle}>
          <h2 id="about-heading" className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.about}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div ref={bioRef} className={bioClass} style={bioStyle}>
            <AboutBio bio={personalInfo.bio[locale]} downloadLabel={t.about.downloadResume} resumeHref={resumeHref} />
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
