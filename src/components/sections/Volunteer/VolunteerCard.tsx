"use client";

import { Card } from "@/components/ui/Card";
import type { Volunteer, Locale } from "@/types";

interface VolunteerCardProps {
  entry: Volunteer;
  index: number;
  locale: Locale;
}

export const VolunteerCard = ({ entry, index, locale }: VolunteerCardProps) => {
  return (
    <Card
      as="article"
      index={index}
      data-testid={`volunteer-${entry.id}`}
      className="border-teal-500/20 bg-teal-500/5 p-6 dark:border-teal-500/10"
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
    </Card>
  );
};
