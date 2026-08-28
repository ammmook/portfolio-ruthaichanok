"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { uiTranslations } from "@/data/translations";
import type { Activity } from "@/types/portfolio";

interface ActivityTileProps {
  activity: Activity;
  /** Stagger inside a year row. */
  delayMs?: number;
  onOpen: (id: string) => void;
}

/**
 * One photo tile in the mosaic. The artwork zooms and a gradient caption fades
 * in on hover; clicking opens the activity in the lightbox.
 */
export function ActivityTile({ activity, delayMs = 0, onOpen }: ActivityTileProps) {
  const { t } = useLanguage();
  const [cover] = activity.photos;

  return (
    <Reveal from={activity.revealFrom} delayMs={delayMs}>
      <button
        type="button"
        onClick={() => onOpen(activity.id)}
        aria-label={`${t(activity.title)} — ${activity.caption}`}
        style={{ aspectRatio: activity.aspectRatio }}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-art-canvas text-left text-text transition-[transform,border-color] duration-400 ease-out hover:-translate-y-1 hover:border-accent-soft"
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <ScreenshotFrame
            hue={cover.hue}
            degrees={activity.degrees}
            imageUrl={cover.imageUrl}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="h-full w-full"
          />
        </div>

        {activity.photos.length > 1 ? (
          <span className="absolute top-3 right-3 rounded-full border border-accent-soft bg-bg/85 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.1em] text-accent">
            {activity.photos.length} {t(uiTranslations.activities.photoCount)}
          </span>
        ) : null}

        <span className="absolute bottom-3.5 left-3.5 rounded-full border border-line bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-muted transition-opacity duration-300 group-hover:opacity-0">
          {t(cover.label)}
        </span>

        <span className="absolute inset-0 flex flex-col justify-end gap-1.5 bg-linear-to-t from-surface-deep/95 to-transparent to-68% p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <span className="text-[clamp(16px,1.9vw,20px)] leading-[1.25] font-semibold tracking-[-0.015em]">
            {t(activity.tileTitle)}
          </span>
          <span className="font-mono text-[11.5px] tracking-[0.06em] text-accent">
            {activity.caption}
          </span>
        </span>
      </button>
    </Reveal>
  );
}
