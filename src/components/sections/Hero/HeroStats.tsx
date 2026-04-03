interface Stat {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats: Stat[];
}

export const HeroStats = ({ stats }: HeroStatsProps) => (
  <div className="flex gap-8">
    {stats.map(({ value, label }) => (
      <div key={label}>
        <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{value}</p>
        <p className="text-sm text-gray-500 dark:text-slate-400">{label}</p>
      </div>
    ))}
  </div>
);
