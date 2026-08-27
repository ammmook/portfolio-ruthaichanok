"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { LocalizedText } from "@/types/portfolio";

interface InfoCardProps {
  /** Glyph or icon shown above the title. */
  badge: ReactNode;
  title: LocalizedText;
  description: LocalizedText;
  /** Colour the card borders on hover. */
  accent?: "primary" | "secondary";
}

/** Compact card used for the About traits and the additional-learning grid. */
export function InfoCard({ badge, title, description, accent = "primary" }: InfoCardProps) {
  const { t } = useLanguage();

  return (
    <article
      className={`h-full rounded-[14px] border border-line bg-surface p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 ${
        accent === "primary" ? "hover:border-accent-soft" : "hover:border-[oklch(0.45_0.09_65)]"
      }`}
    >
      <div className="mb-3 flex h-[30px] items-center">{badge}</div>
      <h3 className="mb-1.5 text-[15.5px] font-semibold">{t(title)}</h3>
      <p className="text-[13.5px] text-muted text-pretty">{t(description)}</p>
    </article>
  );
}
