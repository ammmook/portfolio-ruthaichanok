"use client";

import { usePointerPosition } from "@/hooks/usePointerPosition";

/** Soft accent light that follows the cursor on pointer devices. */
export function CursorGlow() {
  const { x, y, isPointerFine } = usePointerPosition();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-400"
      style={{
        opacity: isPointerFine ? 1 : 0,
        background: `radial-gradient(520px circle at ${(x * 100).toFixed(1)}% ${(y * 100).toFixed(
          1,
        )}%, oklch(0.82 0.16 150 / .07), transparent 70%)`,
      }}
    />
  );
}
