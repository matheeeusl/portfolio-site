"use client";

import { Card } from "@/components/ui/Card";
import type { Education, Locale } from "@/types";

interface EducationItemProps {
  entry: Education;
  index: number;
  locale: Locale;
}

export const EducationItem = ({ entry, index, locale }: EducationItemProps) => (
  <Card as="li" index={index} className="border-gray-200 bg-gray-50 p-4 dark:border-slate-800">
    <div className="mb-1 flex items-center gap-2">
      <span aria-hidden="true">🎓</span>
      <p className="font-semibold text-gray-900 dark:text-slate-100">{entry.institution[locale]}</p>
    </div>
    <p className="text-sm text-gray-500 dark:text-slate-400">{entry.degree[locale]}</p>
    <p className="mt-1 text-sm text-gray-400 dark:text-slate-500">
      {entry.startYear} – {entry.endYear}
    </p>
    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
      {entry.description[locale]}
    </p>
  </Card>
);
