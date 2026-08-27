"use client";

import { useEffect, useState } from "react";

export interface PointerPosition {
  /** 0 = left edge, 1 = right edge. */
  x: number;
  /** 0 = top edge, 1 = bottom edge. */
  y: number;
  /** False on touch devices or when reduced motion is requested. */
  isPointerFine: boolean;
}

const INITIAL_POSITION: PointerPosition = { x: 0.5, y: 0.4, isPointerFine: false };

/**
 * Tracks the pointer as a 0–1 ratio of the viewport, used for the hero
 * parallax and the cursor glow. Stays still on touch devices.
 */
export function usePointerPosition(): PointerPosition {
  const [position, setPosition] = useState<PointerPosition>(INITIAL_POSITION);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    // `isPointerFine` flips on the first move, so the glow fades in with it.
    const handlePointerMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
        isPointerFine: true,
      });
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return position;
}
