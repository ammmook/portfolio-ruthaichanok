"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { getDefaultTheme, getStoredTheme, storeTheme, subscribeToTheme } from "@/lib/themeStore";
import type { Theme } from "@/types/portfolio";

interface ThemeContextValue {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Publishes the dark/light choice and mirrors it onto <html data-theme>,
 * which is what every colour token in globals.css reacts to.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const currentTheme = useSyncExternalStore(subscribeToTheme, getStoredTheme, getDefaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme;
  }, [currentTheme]);

  const setTheme = useCallback((theme: Theme) => storeTheme(theme), []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      currentTheme,
      setTheme,
      toggleTheme: () => setTheme(currentTheme === "dark" ? "light" : "dark"),
    }),
    [currentTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Access the current theme and the toggle. */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return context;
}
