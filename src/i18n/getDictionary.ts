import type { Locale } from "@/types";

const dictionaries = {
  en: () => import("./en/common.json").then((m) => m.default),
  "pt-BR": () => import("./pt-BR/common.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
