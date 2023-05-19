import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import Inicio from "../componets/Inicio.jsx";
import Skills from "../componets/skills.jsx";
import Proyectos from "../componets/Proyectos.jsx";
import Contacto from "../componets/Contacto.jsx";
import Header from "../componets/Header.jsx";
import Footer from "../componets/Footer.jsx";
import "../assests/shooting.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[100vh] overflow-auto">
      <div className="stars -z-50">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="z-10">
        <Header />
      </div>
      <div>
        <Element name="inicio" className="section">
          <Inicio />
        </Element>
        <Element name="skills" className="section">
          <Skills />
        </Element>
        <Element name="proyectos" className="section">
          <Proyectos />
        </Element>
        <Element name="contacto" className="section">
          <Contacto />
        </Element>
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
