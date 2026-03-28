"use client";

import { skills } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import type { SkillCategory, SkillLevel } from "@/types";

const LEVEL_STEPS: Record<SkillLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

const categories = [...new Set(skills.map((s) => s.category))] as SkillCategory[];

export const SkillsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="skills" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-slate-100">
          <span className="h-8 w-1 rounded-full bg-blue-500" aria-hidden="true" />
          {t.sections.skills}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <section
              key={category}
              aria-label={category}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 text-lg font-semibold capitalize text-gray-900 dark:text-slate-100">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      data-testid={`skill-${skill.name}`}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <div
                        role="img"
                        aria-label={skill.level}
                        className="flex gap-1"
                      >
                        {Array.from({ length: 4 }, (_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                              i < LEVEL_STEPS[skill.level]
                                ? "bg-blue-500"
                                : "bg-gray-200 dark:bg-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
