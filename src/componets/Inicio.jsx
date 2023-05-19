import React from "react";
import { GiHand } from "react-icons/gi";
import img from "../../public/img/Damian.jpeg";

const inicio = () => {
  return (
    <section
      id="inicio"
      className="grid h-[90vh] grid-cols-1 content-center justify-center bg-transparent lg:grid-cols-2"
    >
      <div className=" flex h-auto w-full justify-end px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap content-center text-center lg:w-1/2 lg:text-justify">
          <div className=" w-full">
            <span className=" m-[0.30rem] flex items-center justify-center text-sm lg:justify-start">
              Hola &nbsp;
              <GiHand className="text-orange-300" />, yo soy
            </span>
          </div>
          <div className="relative w-full">
            <h1 className="relative z-40 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-6xl font-bold text-transparent ">
              Damian
            </h1>
          </div>
          <div className=" w-full">
            <h3 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
              Desarrollador web
            </h3>
          </div>
          <div className=" flex w-full justify-center">
            <p className="m-[0.30rem] mt-4 w-2/3 max-w-2xl lg:w-full">
              Soluciones de desarrollo front-end a medida para satisfacer tus
              necesidades
            </p>
          </div>
          <div className="w-full">
            <button className="relative z-10 mt-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-2 px-4 font-bold text-white">
              Descargar HV
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-8 pt-16 lg:justify-start lg:pt-0">
        <img
          src={img}
          alt="Damian"
          className="relative z-10 h-80 rounded-full"
        ></img>
      </div>
    </section>
  );
};

export default inicio;
