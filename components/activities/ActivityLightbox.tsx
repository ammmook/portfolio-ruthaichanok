"use client";

import { useEffect, useRef } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { TagPill } from "@/components/ui/TagPill";
import { uiTranslations } from "@/data/translations";
import { stripeBackground } from "@/lib/constants";
import type { Activity } from "@/types/portfolio";

interface ActivityLightboxProps {
  activity: Activity;
  /** Index of the photo currently shown. */
  photoIndex: number;
  onSelectPhoto: (index: number) => void;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

/** Distance (px) a horizontal swipe must cover before it pages the photos. */
const SWIPE_THRESHOLD = 48;

/**
 * Full-screen detail view for one activity: photo carousel, story, highlights
 * and meta. Escape closes it, the arrow keys move between activities, and a
 * horizontal swipe pages the photos on touch.
 */
export function ActivityLightbox({
  activity,
  photoIndex,
  onSelectPhoto,
  onClose,
  onPrevious,
  onNext,
}: ActivityLightboxProps) {
  const { t, tList } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const photo = activity.photos[Math.min(photoIndex, activity.photos.length - 1)];

  // Keyboard control and a scroll lock, both released when the panel closes.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  const handleTouchEnd = (endX: number) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null || activity.photos.length < 2) return;

    const distance = endX - startX;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    const step = distance < 0 ? 1 : -1;
    onSelectPhoto((photoIndex + step + activity.photos.length) % activity.photos.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(activity.title)}
      className="fixed inset-0 z-50 overflow-y-auto bg-bg/97 backdrop-blur-[10px] animate-fade-in"
    >
      <div className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-6 py-3.5">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center gap-2.5 font-mono text-[12.5px] text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">←</span>
            {t(uiTranslations.activities.closeDetail)}
          </button>

          <div className="flex gap-2">
            <ArrowButton
              label={t(uiTranslations.activities.previousActivity)}
              glyph="←"
              onClick={onPrevious}
            />
            <ArrowButton
              label={t(uiTranslations.activities.nextActivity)}
              glyph="→"
              onClick={onNext}
            />
          </div>
        </div>
      </div>

      <article
        key={activity.id}
        className="mx-auto max-w-[1080px] px-6 pt-[clamp(28px,5vw,52px)] pb-[clamp(48px,8vw,96px)] animate-rise-in"
      >
        <p className="mb-3 font-mono text-[11.5px] tracking-[0.16em] text-accent">
          {activity.year} · {t(activity.category).toUpperCase()}
        </p>
        <h1 className="mb-7 max-w-[20em] text-[clamp(28px,4.6vw,52px)] leading-[1.06] font-semibold tracking-[-0.03em] text-balance">
          {t(activity.title)}
        </h1>

        <div
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          className="relative mb-3.5 overflow-hidden rounded-[18px] border border-line"
        >
          <ScreenshotFrame
            key={`${activity.id}-${photoIndex}`}
            hue={photo.hue}
            degrees={activity.degrees}
            imageUrl={photo.imageUrl}
            label={t(photo.label)}
            sizes="(max-width: 1080px) 92vw, 1080px"
            isPriority
            className="aspect-16/9 w-full animate-fade-in"
          />
          {activity.photos.length > 1 ? (
            <span className="absolute right-3.5 bottom-3.5 rounded-full border border-line bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-muted">
              {photoIndex + 1} / {activity.photos.length}
            </span>
          ) : null}
        </div>

        {activity.photos.length > 1 ? (
          <div className="mb-9 flex flex-wrap gap-2.5">
            {activity.photos.map((thumbnail, index) => (
              <button
                key={thumbnail.label.en}
                type="button"
                aria-label={t(thumbnail.label)}
                aria-current={index === photoIndex}
                onClick={() => onSelectPhoto(index)}
                style={stripeBackground(thumbnail.hue, activity.degrees)}
                className={`h-[52px] w-[74px] cursor-pointer rounded-lg border transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 ${
                  index === photoIndex ? "border-accent" : "border-line hover:border-accent-soft"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="mb-9" />
        )}

        <div className="grid gap-[clamp(28px,4vw,52px)] md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-6 text-[clamp(15.5px,1.8vw,17.5px)] text-muted text-pretty">
              {t(activity.description)}
            </p>
            <ul className="grid gap-3">
              {tList(activity.highlights).map((highlight) => (
                <li key={highlight} className="flex gap-3 text-[15px] text-text">
                  <span aria-hidden="true" className="font-mono text-accent">
                    ◇
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-[14px] border border-line bg-surface p-5">
            <p className="mb-4 font-mono text-[10.5px] tracking-[0.14em] text-muted">
              {t(uiTranslations.activities.detailsLabel)}
            </p>
            <dl className="mb-5 grid gap-3.5">
              <div>
                <dt className="mb-1 font-mono text-[10.5px] tracking-[0.12em] text-muted">
                  {t(uiTranslations.activities.yearLabel)}
                </dt>
                <dd className="text-[14.5px]">{activity.year}</dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-[10.5px] tracking-[0.12em] text-muted">
                  {t(uiTranslations.activities.placeLabel)}
                </dt>
                <dd className="text-[14.5px]">{t(activity.place)}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-1.5">
              {activity.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}

function ArrowButton({
  label,
  glyph,
  onClick,
}: {
  label: string;
  glyph: "←" | "→";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line font-mono text-[15px] text-text transition-[transform,border-color,color] duration-250 hover:border-accent hover:text-accent ${
        glyph === "←" ? "hover:-translate-x-0.5" : "hover:translate-x-0.5"
      }`}
    >
      <span aria-hidden="true">{glyph}</span>
    </button>
  );
}
