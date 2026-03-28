"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/types";

const LocaleContext = createContext<Locale>("pt-BR");

interface LocaleProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
