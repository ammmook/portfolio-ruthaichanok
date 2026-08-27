import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from "@/lib/constants";
import type { Language } from "@/types/portfolio";

/**
 * The visitor's language preference, kept in localStorage and exposed as an
 * external store so React can read it with `useSyncExternalStore`.
 * This is the only value the site persists in the browser.
 */

type Listener = () => void;

const listeners = new Set<Listener>();
let cachedLanguage: Language = DEFAULT_LANGUAGE;

function isSupportedLanguage(value: string | null): value is Language {
  return value === "en" || value === "th";
}

/** Subscribe to changes, including changes made in another tab. */
export function subscribeToLanguage(listener: Listener): () => void {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Current language on the client, falling back to the default. */
export function getStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    cachedLanguage = isSupportedLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    // Storage can be unavailable (private mode); keep the last known value.
  }
  return cachedLanguage;
}

/** Language used while rendering on the server. */
export function getDefaultLanguage(): Language {
  return DEFAULT_LANGUAGE;
}

/** Persist a new language and notify every subscriber. */
export function storeLanguage(language: Language): void {
  cachedLanguage = language;
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Preference simply is not remembered when storage is blocked.
  }
  listeners.forEach((listener) => listener());
}
