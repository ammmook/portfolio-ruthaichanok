"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { activityPhotoPool } from "@/data/activities";
import { uiTranslations } from "@/data/translations";
import { stripeBackground } from "@/lib/constants";
import type { ActivityPhoto } from "@/types/portfolio";

/** Resting and fanned-out transform of each card in the stack. */
const STACK_CARDS = [
  {
    hue: 220,
    degrees: 118,
    position: "top-3.5 left-3.5",
    rest: "rotate(-4deg)",
    fan: "rotate(-8deg) translate(-64px, 10px)",
  },
  {
    hue: 65,
    degrees: 122,
    position: "top-6 left-8.5",
    rest: "rotate(3deg)",
    fan: "rotate(4deg) translate(0px, -6px)",
  },
  {
    hue: 150,
    degrees: 114,
    position: "top-8.5 left-13.5",
    rest: "rotate(8deg)",
    fan: "rotate(12deg) translate(64px, 14px)",
  },
];

/** Deterministic trio rendered on the server and during hydration. */
const SERVER_PHOTOS = activityPhotoPool.slice(0, STACK_CARDS.length);

/** Drawn once per page load, then reused so the stack does not reshuffle on re-render. */
let clientPhotos: ActivityPhoto[] | null = null;

/** Picks `count` distinct photos at random. */
function pickRandomPhotos(count: number): ActivityPhoto[] {
  const pool = [...activityPhotoPool];
  const picked: ActivityPhoto[] = [];
  while (picked.length < count && pool.length > 0) {
    picked.push(...pool.splice(Math.floor(Math.random() * pool.length), 1));
  }
  return picked;
}

/** The stack never changes after the first draw, so nothing ever notifies. */
const subscribeToNothing = () => () => {};

/**
 * Decorative pile of photos beside the title that fans out on hover.
 * The first render matches the server (the first photos in the archive), then
 * a fresh random trio is drawn on the client so the stack varies per visit.
 */
export function PhotoStack() {
  const { t } = useLanguage();
  const photos = useSyncExternalStore(
    subscribeToNothing,
    () => (clientPhotos ??= pickRandomPhotos(STACK_CARDS.length)),
    () => SERVER_PHOTOS,
  );

  return (
    <div aria-hidden="true" className="group relative hidden h-[196px] lg:block">
      {STACK_CARDS.map((card, index) => {
        const photo = photos[index];
        return (
          <span
            key={card.position}
            style={
              {
                ...(photo?.imageUrl ? undefined : stripeBackground(card.hue, card.degrees)),
                "--rest": card.rest,
                "--fan": card.fan,
              } as React.CSSProperties
            }
            className={`absolute h-[150px] w-[118px] overflow-hidden rounded-xl border border-line bg-art-canvas shadow-[var(--shadow-soft)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] [transform:var(--rest)] group-hover:[transform:var(--fan)] ${card.position}`}
          >
            {photo?.imageUrl ? (
              <Image src={photo.imageUrl} alt="" fill sizes="118px" className="object-cover" />
            ) : null}
          </span>
        );
      })}
      <span className="absolute -bottom-1 left-4 font-mono text-[10.5px] tracking-[0.08em] text-muted">
        {t(uiTranslations.activities.stackHint)}
      </span>
    </div>
  );
}
