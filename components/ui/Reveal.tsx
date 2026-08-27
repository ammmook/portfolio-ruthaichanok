"use client";

import type { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger the animation of items inside a grid. */
  delayMs?: number;
}

/** Fades its children in the first time they scroll into view. */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      data-reveal=""
      className={className}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
