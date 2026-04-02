"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";

const FLAGS: Record<string, string> = {
  en: "🇺🇸",
  "pt-BR": "🇧🇷",
};

const LABELS: Record<string, string> = {
  en: "English",
  "pt-BR": "Português",
};

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "pt-BR" : "en";

  const switchLocale = () => {
    router.push(pathname.replace(`/${locale}`, `/${nextLocale}`));
  };

  return (
    <button
      onClick={switchLocale}
      aria-label={`Switch to ${LABELS[nextLocale]}`}
      title={`Switch to ${LABELS[nextLocale]}`}
      className="rounded-md px-2 py-1.5 text-base transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-800"
    >
      {FLAGS[locale]}
    </button>
  );
};
