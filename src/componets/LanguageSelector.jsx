import React from "react";
import i18n from "i18next";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

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

const getSelectedLanguageFromCookie = () => {
  const language = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("language="));

  if (language) {
    const [, value] = language.split("=");
    return value;
  }
  return "es";
};

const LanguageSelector = ({ onSelectLanguage }) => {
  const { changeLanguage } = useTranslationWithCookies();

  const handleLanguageChange = (language) => {
    document.cookie = `firebase-language-override=${language}`;
    console.log(`Seleccionado idioma: ${language}`);
    onSelectLanguage(language);
  };

  useEffect(() => {
    const selectedLanguage = getSelectedLanguageFromCookie();
    changeLanguage(selectedLanguage);
  }, []);

  return (
    <div>
      <button onClick={() => handleLanguageChange("es")}>Es</button>
      <button onClick={() => handleLanguageChange("en")}>En</button>
    </div>
  );
};

export default LanguageSelector;
