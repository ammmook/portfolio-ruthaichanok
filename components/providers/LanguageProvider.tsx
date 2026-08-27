"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  getDefaultLanguage,
  getStoredLanguage,
  storeLanguage,
  subscribeToLanguage,
} from "@/lib/languageStore";
import type { Language, LocalizedList, LocalizedText } from "@/types/portfolio";

interface LanguageContextValue {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  /** Reads a localized string in the current language. */
  t: (text: LocalizedText) => string;
  /** Reads a localized list in the current language. */
  tList: (list: LocalizedList) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Publishes the visitor's language choice to the whole tree.
 * The choice lives in localStorage only — nothing is sent to a server.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const currentLanguage = useSyncExternalStore(
    subscribeToLanguage,
    getStoredLanguage,
    getDefaultLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = useCallback((language: Language) => storeLanguage(language), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      currentLanguage,
      setLanguage,
      toggleLanguage: () => setLanguage(currentLanguage === "en" ? "th" : "en"),
      t: (text: LocalizedText) => text[currentLanguage],
      tList: (list: LocalizedList) => list[currentLanguage],
    }),
    [currentLanguage, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Access the current language and the translation helpers. */
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}
