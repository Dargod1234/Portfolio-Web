import React from "react";
import "../assests/contact.css";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contacto = () => {
  return (
    <section id="contacto" className=" content-center bg-transparent pb-16">
      <div className="flex justify-center">
        <h1 className="relative bg-gradient-to-t from-pink-500 to-violet-500 bg-clip-text pb-16 text-6xl font-bold text-transparent">
          Contacto
        </h1>
      </div>
      <div className="contacto-container">
        <div className="formulario-container flex justify-center">
          <form className=" w-4/6">
            <div className="form-group">
              <label
                htmlFor="nombre"
                className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 "
              >
                Nombre:
              </label>
              <input type="text" id="nombre" />
            </div>
            <div className="form-group">
              <label
                htmlFor="asunto"
                className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 "
              >
                Asunto:
              </label>
              <input type="text" id="asunto" />
            </div>
            <div className="form-group">
              <label
                htmlFor="mensaje"
                className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 "
              >
                Mensaje:
              </label>
              <textarea id="mensaje" rows="5"></textarea>
            </div>
            <button
              type="submit"
              className="relative z-10 mt-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-2 px-4 font-bold text-white"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="info-container flex w-2/4 flex-col pt-[6px]">
          <div className="info-item flex w-4/6 flex-col pl-28">
            <span className="info-label flex flex-wrap items-center font-bold leading-[3rem] text-violet-800">
              <HiOutlineMail className="info-icon" /> Email:
            </span>
            <div className="info-content">
              <a href="mailto:dargod1234@gmail.com">dargod1234@gmail.com</a>
            </div>
          </div>
          <div className="w-3/4 pl-28 pt-3">
            <hr className="info-divider" />
          </div>
          <div className="info-item flex w-4/6 flex-col pl-28">
            <span className="info-label flex flex-wrap items-center font-bold leading-[3rem] text-violet-800">
              <HiOutlinePhone className="info-icon" /> Teléfono:
            </span>
            <div className="info-content">
              <span>(+57) 3188951928</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
