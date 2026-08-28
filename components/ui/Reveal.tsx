"use client";

import type { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger the animation of items inside a grid. */
  delayMs?: number;
  /** Direction the element travels from; "up" (the default) rises into place. */
  from?: "up" | "left" | "right";
}

/** Fades its children in the first time they scroll into view. */
export function Reveal({ children, className, delayMs = 0, from = "up" }: RevealProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      data-reveal=""
      data-reveal-from={from === "up" ? undefined : from}
      className={className}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
