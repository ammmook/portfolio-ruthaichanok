import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/constants";
import type { Theme } from "@/types/portfolio";

/**
 * The visitor's colour-theme preference, kept in localStorage and exposed as an
 * external store so React can read it with `useSyncExternalStore`.
 * Like the language preference, it never leaves the browser.
 */

type Listener = () => void;

const listeners = new Set<Listener>();
let cachedTheme: Theme = DEFAULT_THEME;

function isSupportedTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

/** Subscribe to changes, including changes made in another tab. */
export function subscribeToTheme(listener: Listener): () => void {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Current theme on the client, falling back to the default. */
export function getStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    cachedTheme = isSupportedTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    // Storage can be unavailable (private mode); keep the last known value.
  }
  return cachedTheme;
}

/** Theme used while rendering on the server. */
export function getDefaultTheme(): Theme {
  return DEFAULT_THEME;
}

/** Persist a new theme and notify every subscriber. */
export function storeTheme(theme: Theme): void {
  cachedTheme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Preference simply is not remembered when storage is blocked.
  }
  listeners.forEach((listener) => listener());
}

/**
 * Inline script that applies the stored theme before the first paint, so a
 * light-mode visitor never sees a flash of the dark design.
 * Injected in the document head by the root layout.
 */
export const themeBootstrapScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});document.documentElement.dataset.theme=(t==="light"||t==="dark")?t:${JSON.stringify(
  DEFAULT_THEME,
)};}catch(e){document.documentElement.dataset.theme=${JSON.stringify(DEFAULT_THEME)};}})();`;
