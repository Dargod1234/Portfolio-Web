import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useCookies } from "react-cookie";

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

export const useTranslationWithCookies = () => {
  const [cookies, setCookie] = useCookies(["language"]);

  if (
    cookies.language &&
    (cookies.language === "en" || cookies.language === "es")
  ) {
    i18n.changeLanguage(cookies.language);
  }

  const changeLanguage = (lng) => {
    setCookie("language", lng);
    i18n.changeLanguage(lng);
  };

  return { t: i18n.t, changeLanguage };
};

export default i18n;
