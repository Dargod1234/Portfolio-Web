import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../../build/translate/en/en.json";
import esTranslation from "../../build/translate/es/es.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
