"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { uiTranslations } from "@/data/translations";

/**
 * Dark / light toggle. The choice is stored in localStorage by the provider —
 * nothing is sent to a server.
 */
export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { currentTheme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={!isDark}
      aria-label={t(isDark ? uiTranslations.nav.switchToLight : uiTranslations.nav.switchToDark)}
      title={t(isDark ? uiTranslations.nav.switchToLight : uiTranslations.nav.switchToDark)}
      className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-text ${className}`}
    >
      <span aria-hidden="true" className="font-mono text-[13px] leading-none">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
