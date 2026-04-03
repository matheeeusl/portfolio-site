"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Experience, Locale } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  locale: Locale;
  presentLabel: string;
}

export const ExperienceItem = ({
  experience,
  index,
  locale,
  presentLabel,
}: ExperienceItemProps) => {
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
        {experience.startDate} – {experience.endDate ?? presentLabel}
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
};
