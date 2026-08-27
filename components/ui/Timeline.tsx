"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { TagPill } from "@/components/ui/TagPill";
import { useTimelineProgress } from "@/hooks/useTimelineProgress";
import type { TimelineEntry } from "@/types/portfolio";

interface TimelineProps {
  entries: TimelineEntry[];
}

/** Vertical timeline whose accent line fills as the section scrolls past. */
export function Timeline({ entries }: TimelineProps) {
  const { timelineRef, progressBarRef } = useTimelineProgress();

  return (
    <div ref={timelineRef} className="relative pl-[34px]">
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-line" />
      <span
        ref={progressBarRef}
        aria-hidden="true"
        className="absolute top-2 left-[7px] h-0 w-0.5 bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_14px_var(--glow-accent)]"
      />
      <ol className="grid gap-[22px]">
        {entries.map((entry) => (
          <li key={entry.id} className="relative">
            <TimelineCard entry={entry} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const { t, tList } = useLanguage();
  const bullets = tList(entry.bullets);
  const highlights = tList(entry.highlights);

  return (
    <Reveal>
      <span
        aria-hidden="true"
        className="absolute top-[22px] -left-[34px] h-4 w-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--color-bg)]"
      />
      <article className="rounded-2xl border border-line bg-surface p-[clamp(20px,3vw,28px)] transition-[transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-accent-soft">
        <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2.5">
          <h3 className="text-[clamp(18px,2.1vw,22px)] font-semibold">{t(entry.title)}</h3>
          <span className="font-mono text-[11.5px] tracking-[0.06em] text-accent">
            {t(entry.period)}
          </span>
        </div>
        <p className="mb-4 font-mono text-[12.5px] text-muted">{t(entry.organization)}</p>

        {bullets.length > 0 ? (
          <ul className="mb-4 grid gap-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex max-w-[46em] gap-3 text-[14.8px] text-muted">
                <span aria-hidden="true" className="pt-1 font-mono text-[11px] text-accent">
                  —
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {highlights.length > 0 ? (
          <ul className="mb-4 grid gap-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex max-w-[46em] gap-3 text-[14.5px] text-text">
                <span aria-hidden="true" className="font-mono text-xs text-accent-2">
                  ✦
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {entry.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((technology) => (
              <TagPill key={technology}>{technology}</TagPill>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}
