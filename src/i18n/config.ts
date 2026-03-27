import type { Locale } from "@/types";

export const defaultLocale: Locale = "pt-BR";
export const locales: Locale[] = ["en", "pt-BR"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
};
