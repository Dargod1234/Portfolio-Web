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
