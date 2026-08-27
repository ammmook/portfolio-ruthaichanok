"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import type { LocalizedText } from "@/types/portfolio";

interface SectionHeadingProps {
  /** Small monospace eyebrow, e.g. "03 — TECHNICAL SKILLS". */
  label: LocalizedText;
  heading: LocalizedText;
  description?: LocalizedText;
  /** Accent colour of the eyebrow. */
  accent?: "primary" | "secondary";
  headingLevel?: "h2" | "h3";
  className?: string;
}

/** The label + title + intro block that opens every section. */
export function SectionHeading({
  label,
  heading,
  description,
  accent = "primary",
  headingLevel = "h2",
  className = "",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const HeadingTag = headingLevel;

  return (
    <div className={className}>
      <Reveal>
        <p
          className={`font-mono text-xs tracking-[0.18em] ${
            accent === "primary" ? "text-accent" : "text-accent-2"
          }`}
        >
          {t(label)}
        </p>
      </Reveal>
      <Reveal>
        <HeadingTag
          className={`mt-3.5 max-w-[20em] font-semibold tracking-[-0.025em] text-balance ${
            headingLevel === "h2"
              ? "text-[clamp(28px,4vw,44px)] leading-[1.12]"
              : "text-[clamp(22px,3vw,32px)] leading-[1.15]"
          }`}
        >
          {t(heading)}
        </HeadingTag>
      </Reveal>
      {description ? (
        <Reveal>
          <p className="mt-3 max-w-[34em] text-[16.5px] text-muted">{t(description)}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
