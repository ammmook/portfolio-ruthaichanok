"use client";

import Image from "next/image";
import { useState } from "react";

import { StripeArt } from "@/components/ui/StripeArt";

interface ScreenshotFrameProps {
  /** Hue of the project, used by the placeholder artwork. */
  hue: number;
  /** Angle of the placeholder stripes. */
  degrees?: number;
  /** Caption pinned inside the frame. */
  label?: string;
  /** Real screenshot; when missing or unreachable the placeholder is shown instead. */
  imageUrl?: string;
  className?: string;
  /** Loads the image eagerly — set on the cover, which is above the fold. */
  isPriority?: boolean;
  sizes?: string;
}

/**
 * A screenshot slot that shows a real image when one exists and falls back to
 * the generated stripe artwork when it does not, so a missing or broken upload
 * degrades to the placeholder instead of a broken image.
 */
export function ScreenshotFrame({
  hue,
  degrees,
  label,
  imageUrl,
  className = "",
  isPriority = false,
  sizes = "(max-width: 768px) 92vw, 900px",
}: ScreenshotFrameProps) {
  const [hasFailed, setHasFailed] = useState(false);

  if (!imageUrl || hasFailed) {
    return <StripeArt hue={hue} degrees={degrees} label={label} className={className} />;
  }

  return (
    <div className={`relative bg-art-canvas ${className}`}>
      <Image
        src={imageUrl}
        alt={label ?? ""}
        fill
        sizes={sizes}
        priority={isPriority}
        onError={() => setHasFailed(true)}
        className="object-cover"
      />
      {label ? (
        <span className="absolute bottom-3.5 left-3.5 rounded-full border border-line bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur-[6px]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
