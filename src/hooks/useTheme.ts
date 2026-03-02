import { useEffect, useMemo, useState } from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "sg-theme";

function getSystemPreference(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "dark" || raw === "light") return raw;
    return null;
  } catch {
    return null;
  }
}

function applyThemeToDocument(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => readStoredTheme() ?? getSystemPreference());

  useEffect(() => {
    applyThemeToDocument(theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage failures (private mode, blocked storage, etc.)
    }
  }, [theme]);

  const api = useMemo(() => {
    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    const setLight = () => setTheme("light");
    const setDark = () => setTheme("dark");

    return { theme, toggleTheme, setLight, setDark };
  }, [theme]);

  return api;
}
