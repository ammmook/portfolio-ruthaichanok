"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { CAROUSEL_TRANSITION_MS, EASING } from "@/lib/constants";

interface CarouselMetrics {
  /** Width of one card plus the gap between cards. */
  step: number;
  /** Offset at which the last card sits flush with the right edge of the rail. */
  maxOffset: number;
  /** Highest slide index; the last step is short whenever it does not divide evenly. */
  maxSlide: number;
}

/**
 * Horizontal rail with hard ends: paging is clamped between the first card and
 * the last full page, so the list never wraps back around to the start.
 *
 * @param cardCount number of cards currently rendered on the rail.
 */
export function useProjectCarousel(cardCount: number) {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef(0);
  const [slide, setSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const readMetrics = useCallback((): CarouselMetrics | null => {
    const rail = railRef.current;
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-card]");
    if (!rail || !track || !firstCard || cardCount < 1) return null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "18") || 18;
    const step = firstCard.offsetWidth + gap;
    // Stop once the rail is full rather than once the cards run out, so the
    // final page ends flush with the last card instead of trailing blank space.
    const maxOffset = Math.max(0, track.scrollWidth - rail.clientWidth);
    return { step, maxOffset, maxSlide: Math.ceil(maxOffset / step) };
  }, [cardCount]);

  const applyTransform = useCallback(
    (animate: boolean) => {
      const track = trackRef.current;
      const metrics = readMetrics();
      if (!track || !metrics) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clamped = Math.min(Math.max(slideRef.current, 0), metrics.maxSlide);
      slideRef.current = clamped;
      setSlide(clamped);
      setMaxSlide(metrics.maxSlide);

      track.style.transition =
        animate && !prefersReducedMotion ? `transform ${CAROUSEL_TRANSITION_MS}ms ${EASING}` : "none";
      track.style.transform = `translateX(${-Math.min(clamped * metrics.step, metrics.maxOffset)}px)`;
    },
    [readMetrics],
  );

  const move = useCallback(
    (direction: number) => {
      const metrics = readMetrics();
      if (!metrics) return;

      const target = Math.min(Math.max(slideRef.current + direction, 0), metrics.maxSlide);
      if (target === slideRef.current) return;

      slideRef.current = target;
      applyTransform(true);
    },
    [applyTransform, readMetrics],
  );

  const showNext = useCallback(() => move(1), [move]);
  const showPrevious = useCallback(() => move(-1), [move]);

  // Return to the first card whenever the list changes (e.g. a filter was applied).
  useEffect(() => {
    slideRef.current = 0;
    applyTransform(false);
    const settle = window.setTimeout(() => applyTransform(false), 300);
    return () => window.clearTimeout(settle);
  }, [applyTransform, cardCount]);

  // Keep the offset and the end stop correct while the layout changes.
  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;

    const handleResize = () => applyTransform(false);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(rail);
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

  return {
    railRef,
    trackRef,
    showNext,
    showPrevious,
    canShowPrevious: slide > 0,
    canShowNext: slide < maxSlide,
  };
}
