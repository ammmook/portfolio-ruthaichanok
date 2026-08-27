"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { navigationItems, personalInformation } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";
import { DESKTOP_NAV_BREAKPOINT } from "@/lib/constants";

/** Sticky header: brand, in-page navigation, language toggle and resume link. */
export function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Never leave the mobile panel open behind a desktop layout.
  useEffect(() => {
    const desktopQuery = window.matchMedia(`(min-width: ${DESKTOP_NAV_BREAKPOINT}px)`);
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsMobileMenuOpen(false);
    };
    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-[14px]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.02em] text-text"
        >
          <span
            aria-hidden="true"
            className="h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_oklch(0.82_0.16_150/.8)]"
          />
          {personalInformation.brandName}
          <span className="text-muted">.dev</span>
        </Link>

        <ul className="hidden gap-[26px] font-mono text-[13.5px] text-muted min-[900px]:flex">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link href={`/#${item.id}`} className="text-inherit transition-colors hover:text-text">
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <a
            href={personalInformation.resumeUrl}
            download={personalInformation.resumeFileName}
            className="hidden rounded-full bg-accent px-4 py-2 font-mono text-[11.5px] tracking-[0.06em] text-bg transition-[filter] hover:brightness-110 min-[560px]:inline-block"
          >
            {t(uiTranslations.nav.resume)}
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={t(
              isMobileMenuOpen ? uiTranslations.nav.closeMenu : uiTranslations.nav.openMenu,
            )}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-text transition-colors hover:border-accent min-[900px]:hidden"
          >
            <span aria-hidden="true" className="font-mono text-[15px] leading-none">
              {isMobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-line min-[900px]:hidden">
          <ul className="mx-auto grid max-w-[1240px] gap-1 px-6 py-4 font-mono text-sm">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-muted transition-colors hover:bg-surface hover:text-text"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={personalInformation.resumeUrl}
                download={personalInformation.resumeFileName}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-1 block rounded-lg bg-accent px-2 py-2.5 text-center text-bg"
              >
                {t(uiTranslations.nav.resume)}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
