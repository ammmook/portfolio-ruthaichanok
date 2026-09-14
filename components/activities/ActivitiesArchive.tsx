"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import { ActivityLightbox } from "@/components/activities/ActivityLightbox";
import { ActivityTile } from "@/components/activities/ActivityTile";
import { PhotoStack } from "@/components/activities/PhotoStack";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { activities, activitiesByYear, activityYearRange } from "@/data/activities";
import { uiTranslations } from "@/data/translations";

/**
 * The /activities page: a mosaic of photo tiles grouped by year, with a
 * lightbox for the story behind each one. Reached from the experience section.
 */
export function ActivitiesArchive() {
  const { t } = useLanguage();
  const [openActivityId, setOpenActivityId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openActivity = activities.find((activity) => activity.id === openActivityId) ?? null;

  const open = useCallback((id: string) => {
    setOpenActivityId(id);
    setPhotoIndex(0);
  }, []);

  const close = useCallback(() => setOpenActivityId(null), []);

  /** Moves to the neighbouring activity, wrapping at both ends. */
  const step = useCallback((direction: 1 | -1) => {
    setOpenActivityId((currentId) => {
      const index = activities.findIndex((activity) => activity.id === currentId);
      if (index === -1) return currentId;
      return activities[(index + direction + activities.length) % activities.length].id;
    });
    setPhotoIndex(0);
  }, []);

  const showPrevious = useCallback(() => step(-1), [step]);
  const showNext = useCallback(() => step(1), [step]);

  return (
    <>
      <section className="relative mx-auto max-w-[1240px] px-6 pt-[clamp(36px,6vw,72px)] pb-[clamp(28px,4vw,44px)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-10 -bottom-20 z-0 hidden md:block"
        >
          <span className="animate-floaty absolute top-[24%] right-[32%] h-[150px] w-[150px] rounded-full border border-dashed border-accent-2-soft opacity-35" />
        </div>

        <div className="relative z-1 grid items-end gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <Reveal>
              <Link
                href="/#experience"
                className="mb-7 inline-flex items-center gap-2.5 font-mono text-[12.5px] text-muted transition-colors hover:text-accent"
              >
                {t(uiTranslations.activities.backToExperience)}
              </Link>
            </Reveal>
            <Reveal>
              <p className="mb-3.5 font-mono text-xs tracking-[0.18em] text-accent">
                {t(uiTranslations.activities.label)}
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mb-3.5 text-[clamp(38px,6.4vw,70px)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance">
                {t(uiTranslations.activities.heading)}
              </h1>
            </Reveal>
            <Reveal>
              <p className="max-w-[33em] text-[clamp(16px,1.9vw,19px)] text-muted text-pretty">
                {t(uiTranslations.activities.description)}
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-6.5 flex flex-wrap gap-5.5 font-mono text-xs text-muted">
                <span>
                  <span className="text-text">{activities.length}</span>{" "}
                  {t(uiTranslations.activities.countUnit)}
                </span>
                <span className="text-text">{activityYearRange}</span>
              </div>
            </Reveal>
          </div>

          <PhotoStack />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-[clamp(40px,5vw,72px)] px-6 pt-[clamp(28px,4vw,44px)] pb-[clamp(56px,8vw,110px)]">
        {activitiesByYear.map((group) => (
          <div key={group.year}>
            <Reveal>
              <div className="mb-5 flex items-baseline gap-4">
                <span className="font-mono text-[clamp(22px,3vw,34px)] tracking-[-0.02em] text-text">
                  {group.year}
                </span>
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted">
                  {group.items.length}{" "}
                  {t(
                    group.items.length === 1
                      ? uiTranslations.activities.moment
                      : uiTranslations.activities.moments,
                  )}
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
              {group.items.map((activity, index) => (
                <ActivityTile
                  key={activity.id}
                  activity={activity}
                  delayMs={index * 60}
                  onOpen={open}
                />
              ))}
            </div>
          </div>
        ))}

        <Reveal>
          <p className="font-mono text-xs text-muted">{t(uiTranslations.activities.photoNote)}</p>
        </Reveal>
      </section>

      {openActivity ? (
        <ActivityLightbox
          activity={openActivity}
          photoIndex={photoIndex}
          onSelectPhoto={setPhotoIndex}
          onClose={close}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
