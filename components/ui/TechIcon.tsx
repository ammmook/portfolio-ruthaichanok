"use client";

/* eslint-disable @next/next/no-img-element -- remote SVG icons with an
   initials fallback; the Next image optimizer does not process SVG. */

import { useState } from "react";

import { technologyIconUrl, technologyInitials } from "@/lib/constants";

interface TechIconProps {
  name: string;
  /** simple-icons slug; when null the initials badge is shown instead. */
  iconSlug: string | null;
  size?: number;
  /** Colour of the initials fallback. */
  accent?: "primary" | "secondary";
}

/**
 * Technology logo with a monospace initials badge as fallback — used for
 * skills, project stacks and the floating hero icons.
 */
export function TechIcon({ name, iconSlug, size = 20, accent = "primary" }: TechIconProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const iconUrl = technologyIconUrl(iconSlug);
  const showImage = iconUrl !== null && !hasFailed;

  return (
    <span
      data-icon=""
      className="relative inline-flex flex-none items-center justify-center"
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <img
          src={iconUrl}
          alt={`${name} logo`}
          width={size}
          height={size}
          loading="lazy"
          onError={() => setHasFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`font-mono font-bold ${
            accent === "primary" ? "text-accent" : "text-accent-2"
          }`}
          style={{ fontSize: Math.max(8, Math.round(size * 0.42)) }}
        >
          {technologyInitials(name)}
        </span>
      )}
    </span>
  );
}
