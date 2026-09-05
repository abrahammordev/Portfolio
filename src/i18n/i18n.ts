import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import de from "./de.json";

const STORAGE_KEY = "portfolio-lang";

export const SUPPORTED_LANGUAGES = ["en", "es", "de"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

function isSupported(value: string | null): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isSupported(stored)) return stored;
  const browser = navigator.language?.toLowerCase().slice(0, 2) ?? "";
  return isSupported(browser) ? browser : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    de: { translation: de },
  },
  lng: detectLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnNull: false,
});

i18n.on("languageChanged", (lng) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore unavailable storage */
  }
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
