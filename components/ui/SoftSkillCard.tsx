"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { SoftSkill } from "@/types/portfolio";

/** Gradient card describing one aspect of how Ruthaichanok works. */
export function SoftSkillCard({ softSkill }: { softSkill: SoftSkill }) {
  const { t } = useLanguage();

  return (
    <article className="h-full rounded-2xl border border-line bg-gradient-to-b from-surface to-surface-alt p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent-2-soft">
      <div aria-hidden="true" className="mb-3.5 font-mono text-[22px] leading-none text-accent-2">
        {softSkill.mark}
      </div>
      <h3 className="mb-2 text-[17px] font-semibold">{t(softSkill.name)}</h3>
      <p className="text-sm text-muted text-pretty">{t(softSkill.description)}</p>
    </article>
  );
}
