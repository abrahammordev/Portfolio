import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

// Configuración de script para seleccionar el idioma

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: "en",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
