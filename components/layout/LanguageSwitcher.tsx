"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { uiTranslations } from "@/data/translations";

/**
 * TH / EN toggle. The choice is stored in localStorage by the provider —
 * nothing is sent to a server.
 */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { currentLanguage, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={currentLanguage === "en" ? "เปลี่ยนเป็นภาษาไทย" : "Switch to English"}
      className={`cursor-pointer rounded-full border border-line px-3 py-[7px] font-mono text-[11.5px] tracking-[0.08em] text-muted transition-colors duration-200 hover:border-accent hover:text-text ${className}`}
    >
      {t(uiTranslations.nav.languageLabel)}
    </button>
  );
}
