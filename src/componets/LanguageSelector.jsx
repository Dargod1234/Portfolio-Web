import React from "react";
import { useTranslationWithCookies } from "../componets/i18n.jsx";

const LanguageSelector = () => {
  const { changeLanguage } = useTranslationWithCookies();

  const handleLanguageChange = (language) => {
    const updateLanguage = () => {
      changeLanguage(language);
    };

    updateLanguage();
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("es")}>Es</button>
      <button onClick={() => handleLanguageChange("en")}>En</button>
    </div>
  );
};

export default LanguageSelector;
