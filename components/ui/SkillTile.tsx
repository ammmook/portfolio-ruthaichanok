"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { TechIcon } from "@/components/ui/TechIcon";
import type { TechnicalSkill } from "@/types/portfolio";

interface SkillTileProps {
  skill: TechnicalSkill;
  /** Open state is controlled by the parent so only one tile opens on touch. */
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * One technology. The detail panel expands on hover (pointer devices) and on
 * tap (touch devices) — no progress bars, exactly like the template.
 */
export function SkillTile({ skill, isOpen, onToggle }: SkillTileProps) {
  const { t } = useLanguage();

  return (
    <div
      data-tile=""
      data-open={isOpen ? "" : undefined}
      className="rounded-[10px] border border-line px-3.5 py-3"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full min-w-0 cursor-pointer items-center gap-3 text-left"
      >
        <TechIcon name={skill.name} iconSlug={skill.iconSlug} />
        <span
          data-name=""
          className="truncate text-[14.2px] font-medium text-text"
        >
          {skill.name}
        </span>
      </button>
      <div data-panel="">
        <div>
          <p className="mb-1.5 font-mono text-[9.5px] tracking-[0.12em] text-accent uppercase">
            {skill.level} · {t(skill.category)}
          </p>
          <p className="text-[13px] leading-[1.55] text-muted text-pretty">
            {t(skill.description)}
          </p>
        </div>
      </div>
    </div>
  );
}
