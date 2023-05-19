import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { RiContrast2Line } from "react-icons/ri";
import LanguageSelector from "./LanguageSelector.jsx";
import { useTranslation } from "react-i18next";
import LanguageContext from "./LanguageContext.jsx";

const Header = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = React.useState(false);
  const [language, setLanguage] = React.useState("es");

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = (event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    setShowMenu(false);
  };

  const handleLanguageChange = (languageCode) => {
    // Aquí puedes realizar cualquier acción adicional necesaria
    console.log(`Seleccionado idioma: ${languageCode}`);
  };

  React.useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <header className="fixed z-50 flex h-[10vh] w-full items-center justify-around p-10 shadow-md xl:justify-start">
      <button className="static">
        <RiContrast2Line />
      </button>
      <nav
        className={`
        ${
          showMenu ? "left-0" : "-left-full"
        } x fixed top-0 flex h-full w-[100%] flex-1 flex-col items-center justify-center gap-10 bg-white transition-all duration-500 xl:static xl:w-full xl:flex-row
      `}
      >
        <button
          onClick={handleMenuClick}
          className="absolute top-8 right-4 p-2 xl:hidden"
        >
          <HiX />
        </button>
        <a
          href="#inicio"
          className={`text-lg font-semibold hover:text-[#581c87] active:text-[#581c87]`}
          onClick={(event) => handleNavLinkClick(event, "inicio")}
        >
          {t("home")}
        </a>
        <a
          href="#skills"
          className={`text-lg font-semibold hover:text-[#581c87] active:text-[#581c87]`}
          onClick={(event) => handleNavLinkClick(event, "skills")}
        >
          Skills
        </a>
        <a
          href="#proyectos"
          className={`text-lg font-semibold hover:text-[#581c87] active:text-[#581c87]`}
          onClick={(event) => handleNavLinkClick(event, "proyectos")}
        >
          {t("project")}
        </a>
        <a
          href="#contacto"
          className={`text-lg font-semibold hover:text-[#581c87] active:text-[#581c87]`}
          onClick={(event) => handleNavLinkClick(event, "contacto")}
        >
          {t("contact")}
        </a>
      </nav>
      <button onClick={handleMenuClick} className="p-2 text-2xl xl:hidden">
        <HiMenu />
      </button>
      <LanguageSelector onSelectLanguage={handleLanguageChange} />
      <h1 className="static">&nbsp;/&nbsp;</h1>
    </header>
  );
};

export default Header;
