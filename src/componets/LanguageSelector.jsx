import React from "react";

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <div>
      <button onClick={() => onSelectLanguage("es")}>Es</button>
      <button onClick={() => onSelectLanguage("en")}>En</button>
    </div>
  );
};

export default LanguageSelector;
