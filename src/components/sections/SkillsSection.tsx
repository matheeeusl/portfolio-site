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
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.skills}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <section
              key={category}
              aria-label={category}
              className="rounded-xl border border-gray-200 p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 text-lg font-semibold capitalize text-gray-700 dark:text-slate-300">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      data-testid={`skill-${skill.name}`}
                      className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-500/20 hover:text-blue-500 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400"
                    >
                      <span>{skill.name}</span>
                      <div
                        role="img"
                        aria-label={skill.level}
                        className="flex gap-0.5"
                      >
                        {Array.from({ length: 4 }, (_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${
                              i < LEVEL_STEPS[skill.level]
                                ? "bg-blue-500 dark:bg-blue-400"
                                : "bg-gray-300 dark:bg-slate-600"
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
