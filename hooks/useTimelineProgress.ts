"use client";

import { useEffect, useRef } from "react";

/**
 * Grows the accent line of a timeline as it scrolls through the viewport.
 * Returns refs for the timeline container and for the bar itself.
 */
export function useTimelineProgress() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progressBar = progressBarRef.current;
    if (!timeline || !progressBar) return;

    const updateProgress = () => {
      const bounds = timeline.getBoundingClientRect();
      const visibleRatio = (window.innerHeight * 0.72 - bounds.top) / Math.max(1, bounds.height);
      const clamped = Math.max(0, Math.min(1, visibleRatio));
      progressBar.style.height = `${(clamped * 100).toFixed(1)}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return { timelineRef, progressBarRef };
}
