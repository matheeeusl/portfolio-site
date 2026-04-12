"use client";

import { skills } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/Card";
import type { SkillCategory } from "@/types";

const CATEGORY_TITLES: Record<SkillCategory, string> = {
  frontend: "Frontend & Core",
  backend: "Backend & Data",
  ecommerce: "E-commerce & Platforms",
  devops: "DevOps & Leadership",
};

const categories = [...new Set(skills.map((s) => s.category))] as SkillCategory[];

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const title = CATEGORY_TITLES[category];

  return (
    <Card
      as="section"
      index={index}
      aria-label={title}
      className="border-gray-200 p-6 dark:border-slate-800"
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-slate-300">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skills
          .filter((s) => s.category === category)
          .map((skill) => (
            <li
              key={skill.name}
              data-testid={`skill-${skill.name}`}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:text-blue-500 hover:shadow-sm dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400"
            >
              {skill.name}
            </li>
          ))}
      </ul>
    </Card>
  );
}

export const SkillsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const { ref: headingRef, className: headingClass, style: headingStyle } = useScrollReveal({ delay: 0 });

  return (
    <section id="skills" className="py-16 scroll-mt-14" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-10 ${headingClass}`} style={headingStyle}>
          <h2 id="skills-heading" className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.skills}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, i) => (
            <CategoryCard key={category} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
