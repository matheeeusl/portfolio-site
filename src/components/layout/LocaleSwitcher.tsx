"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";

const FLAGS: Record<string, string> = {
  en: "/flags/us.svg",
  "pt-BR": "/flags/br.svg",
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
      className="cursor-pointer rounded-md px-2 py-1.5 transition-colors duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-slate-800"
    >
      <Image
        src={FLAGS[nextLocale]}
        alt={LABELS[nextLocale]}
        width={24}
        height={16}
        className="rounded-sm"
        style={{ height: "auto" }}
      />
    </button>
  );
};
