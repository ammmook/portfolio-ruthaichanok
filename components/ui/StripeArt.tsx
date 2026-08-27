import { stripeBackground } from "@/lib/constants";

interface StripeArtProps {
  /** Hue of the project this artwork belongs to. */
  hue: number;
  /** Angle of the stripes; varied per card so repeated art still reads as distinct. */
  degrees?: number;
  className?: string;
  /** Caption pinned inside the artwork (screenshot label). */
  label?: string;
}

/**
 * Placeholder artwork standing in for a project screenshot.
 * Swap this for a real <Image> once screenshots exist — the layout is unchanged.
 */
export function StripeArt({ hue, degrees = 122, className = "", label }: StripeArtProps) {
  return (
    <div className={`relative ${className}`} style={stripeBackground(hue, degrees)}>
      {label ? (
        <span className="absolute bottom-3.5 left-3.5 rounded-full border border-line bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}
