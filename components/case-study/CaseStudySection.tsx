"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import type { LocalizedText } from "@/types/portfolio";

interface CaseStudySectionProps {
  label: LocalizedText;
  heading: LocalizedText;
  description?: LocalizedText;
  children: ReactNode;
  /** The problem block uses the warning colour for its eyebrow. */
  accent?: "primary" | "warn";
}

/** Numbered block of a case study ("02 — TECH STACK", …). */
export function CaseStudySection({
  label,
  heading,
  description,
  children,
  accent = "primary",
}: CaseStudySectionProps) {
  const { t } = useLanguage();

  return (
    <Reveal className="mb-[clamp(48px,7vw,84px)]">
      <p
        className={`mb-3 font-mono text-xs tracking-[0.18em] ${
          accent === "primary" ? "text-accent" : "text-warn"
        }`}
      >
        {t(label)}
      </p>
      <h2 className="mb-2.5 text-[clamp(24px,3.4vw,36px)] font-semibold tracking-[-0.025em]">
        {t(heading)}
      </h2>
      {description ? (
        <p className="mb-6 max-w-[34em] text-[15.5px] text-muted">{t(description)}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}
