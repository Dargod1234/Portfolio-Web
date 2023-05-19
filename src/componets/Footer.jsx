import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex justify-center p-5">
      <div className="flex flex-col">
        <div className="footer-section">
          <h3 className=" mb-3 text-4xl font-bold text-violet-800">
            Gracias por su visita!
          </h3>
        </div>
        <div className="footer-section flex flex-col items-center">
          <button
            type="submit"
            className=" relative z-10 mt-4 w-36 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-2 px-4 font-bold text-white "
          >
            Contactame
          </button>
          <p className="pt-2 pb-2">Tambien puedes contactarme atra vez de:</p>
        </div>
        <div className="footer-section flex justify-center">
          <a
            href="https://github.com/Dargod1234"
            target="_blank"
            className=" m-2"
          >
            <AiFillGithub className=" text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/damian-arguello-8a6199177/"
            target="_blank"
            className=" m-2"
          >
            <AiFillLinkedin className="text-3xl" />
          </a>
          <a href="https://wa.me/573188951928" target="_blank" className="m-2">
            <BsWhatsapp className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
