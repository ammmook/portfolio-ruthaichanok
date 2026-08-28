"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { uiTranslations } from "@/data/translations";
import { stripeBackground } from "@/lib/constants";

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

/** Decorative pile of photos beside the title that fans out on hover. */
export function PhotoStack() {
  const { t } = useLanguage();

  return (
    <div
      aria-hidden="true"
      className="group relative hidden h-[196px] lg:block"
    >
      {STACK_CARDS.map((card) => (
        <span
          key={card.position}
          style={
            {
              ...stripeBackground(card.hue, card.degrees),
              "--rest": card.rest,
              "--fan": card.fan,
            } as React.CSSProperties
          }
          className={`absolute h-[150px] w-[118px] rounded-xl border border-line shadow-[var(--shadow-soft)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] [transform:var(--rest)] group-hover:[transform:var(--fan)] ${card.position}`}
        />
      ))}
      <span className="absolute -bottom-1 left-4 font-mono text-[10.5px] tracking-[0.08em] text-muted">
        {t(uiTranslations.activities.stackHint)}
      </span>
    </div>
  );
}
