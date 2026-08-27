"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { uiTranslations } from "@/data/translations";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3.5 px-6 py-8 font-mono text-xs text-muted">
        <span>{t(uiTranslations.footer.rights)}</span>
        <span>{t(uiTranslations.footer.tagline)}</span>
      </div>
    </footer>
  );
}
