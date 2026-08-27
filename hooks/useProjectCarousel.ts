"use client";

import { useCallback, useEffect, useRef } from "react";

import { CAROUSEL_TRANSITION_MS, EASING } from "@/lib/constants";

interface CarouselMetrics {
  /** Width of one card plus the gap between cards. */
  step: number;
  /** Number of cards in one repetition of the list. */
  pageSize: number;
}

/**
 * Endless horizontal rail: the project list is rendered several times and the
 * track is re-centred on the middle copy, so paging never reaches an edge.
 *
 * @param pageSize number of projects in a single repetition of the list.
 */
export function useProjectCarousel(pageSize: number) {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const readMetrics = useCallback((): CarouselMetrics | null => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-card]");
    if (!track || !firstCard || pageSize < 1) return null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "18") || 18;
    return { step: firstCard.offsetWidth + gap, pageSize };
  }, [pageSize]);

  const applyTransform = useCallback(
    (animate: boolean) => {
      const track = trackRef.current;
      const metrics = readMetrics();
      if (!track || !metrics) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const normalized = ((slideRef.current % metrics.pageSize) + metrics.pageSize) % metrics.pageSize;
      slideRef.current = normalized;

      track.style.transition =
        animate && !prefersReducedMotion ? `transform ${CAROUSEL_TRANSITION_MS}ms ${EASING}` : "none";
      track.style.transform = `translateX(${-(metrics.pageSize + normalized) * metrics.step}px)`;
    },
    [readMetrics],
  );

  const move = useCallback(
    (direction: number) => {
      const track = trackRef.current;
      const metrics = readMetrics();
      if (!track || !metrics || isAnimatingRef.current) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const target = slideRef.current + direction;

      track.style.transition = prefersReducedMotion
        ? "none"
        : `transform ${CAROUSEL_TRANSITION_MS}ms ${EASING}`;
      track.style.transform = `translateX(${-(metrics.pageSize + target) * metrics.step}px)`;
      isAnimatingRef.current = true;

      window.setTimeout(
        () => {
          isAnimatingRef.current = false;
          slideRef.current = target;
          applyTransform(false);
        },
        prefersReducedMotion ? 20 : CAROUSEL_TRANSITION_MS + 20,
      );
    },
    [applyTransform, readMetrics],
  );

  const showNext = useCallback(() => move(1), [move]);
  const showPrevious = useCallback(() => move(-1), [move]);

  // Re-centre whenever the list changes (e.g. a filter was applied).
  useEffect(() => {
    slideRef.current = 0;
    applyTransform(false);
    const settle = window.setTimeout(() => applyTransform(false), 300);
    return () => window.clearTimeout(settle);
  }, [applyTransform, pageSize]);

  // Keep the offset correct while the layout changes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleResize = () => {
      if (!isAnimatingRef.current) applyTransform(false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(track);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [applyTransform]);

  // Touch swiping on the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let touchStartX: number | null = null;
    const onTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartX === null) return;
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(deltaX) > 45) move(deltaX < 0 ? 1 : -1);
    };

    rail.addEventListener("touchstart", onTouchStart, { passive: true });
    rail.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      rail.removeEventListener("touchstart", onTouchStart);
      rail.removeEventListener("touchend", onTouchEnd);
    };
  }, [move]);

  return { railRef, trackRef, showNext, showPrevious };
}
