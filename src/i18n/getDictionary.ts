import type { Locale } from "@/types";
import en from "./en/common.json";
import ptBR from "./pt-BR/common.json";

const dictionaries = {
  en,
  "pt-BR": ptBR,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
