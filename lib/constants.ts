/**
 * Shared design + behaviour constants.
 * Colour tokens themselves live in `app/globals.css` (@theme) so Tailwind
 * utilities such as `bg-surface` or `text-accent` stay the single source of truth.
 */

/** localStorage key holding the visitor's language choice. */
export const LANGUAGE_STORAGE_KEY = "portfolio-language";

/** Language used before the visitor has chosen one. */
export const DEFAULT_LANGUAGE = "en" as const;

/** localStorage key holding the visitor's colour-theme choice. */
export const THEME_STORAGE_KEY = "portfolio-theme";

/** Theme used before the visitor has chosen one — the original dark design. */
export const DEFAULT_THEME = "dark" as const;

/**
 * Width (px) at which the desktop navigation replaces the mobile menu.
 * Keep in sync with the `min-[900px]:` utilities in `components/layout/Navbar.tsx`.
 */
export const DESKTOP_NAV_BREAKPOINT = 900;

/** Shared easing + durations, mirroring the original template's motion. */
export const EASING = "cubic-bezier(.2,.7,.2,1)";
export const CAROUSEL_TRANSITION_MS = 550;

/** How many times the project list is repeated to fake an endless carousel. */
export const CAROUSEL_REPEAT = 4;

/** Colour used for the remote technology icons. */
const ICON_TINT = "9fe8bf";

/** Public CDN URL for a simple-icons slug (null slug -> initials fallback). */
export function technologyIconUrl(slug: string | null): string | null {
  return slug ? `https://cdn.simpleicons.org/${slug}/${ICON_TINT}` : null;
}

/** Two-letter fallback badge shown while (or instead of) an icon. */
export function technologyInitials(name: string): string {
  return name
    .replace(/[^A-Za-z0-9+#. ]/g, "")
    .trim()
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Diagonal stripe artwork used as a placeholder for project screenshots,
 * exactly as in the source template.
 */
export function stripeBackground(hue: number, degrees = 122): React.CSSProperties {
  // Lightness comes from the active theme, hue from the project.
  return {
    backgroundImage: `repeating-linear-gradient(${degrees}deg, oklch(var(--art-stripe-lightness) 0.02 ${hue}) 0 2px, transparent 2px 11px)`,
    backgroundColor: `oklch(var(--art-base-lightness) 0.01 ${hue})`,
  };
}
