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
        <h2 className="mb-10 text-3xl font-bold">{t.sections.skills}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <section
              key={category}
              aria-label={category}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="mb-4 text-lg font-semibold capitalize text-zinc-700 dark:text-zinc-300">
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
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div
                        role="img"
                        aria-label={skill.level}
                        className="flex gap-1"
                      >
                        {Array.from({ length: 4 }, (_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < LEVEL_STEPS[skill.level]
                                ? "bg-zinc-800 dark:bg-zinc-200"
                                : "bg-zinc-200 dark:bg-zinc-700"
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
