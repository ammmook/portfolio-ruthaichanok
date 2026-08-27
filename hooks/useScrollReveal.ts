"use client";

import { useEffect, useRef } from "react";

/**
 * Fades an element in the first time it enters the viewport.
 * Attach the returned ref to the element that carries `data-reveal`.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.setAttribute("data-reveal", "in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal", "in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return elementRef;
}
