import React from "react";
import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:h-[30vh] bg-db w-full p-10 sm:p-14 md:px-24 lg:px-36">
      <div className="flex flex-wrap justify-between gap-5 font-semibold">
        <div className="basis-[45%] shrink-0 sm:flex-1">
          <a href="#home" className="text-white text-2xl">
            Carlos
            <br />
            Villarta
          </a>
        </div>

        <div className="text-white/70 basis-[45%]  shrink-0 sm:flex-1">
          <p className="mb-2">Links</p>
          <ul className="text-og flex flex-col gap-5 ">
            <li className="transition-colors hover:text-og/80">
              <a href="#about">About</a>
            </li>
            <li className="transition-colors hover:text-og/80">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition-colors hover:text-og/80">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white/70 mb-5 basis-0 sm:flex-1">Get in touch</p>
          <div className="flex gap-[20px]">
            <IconContext.Provider
              value={{
                className:
                  "text-og w-[35px] h-[35px] transition-transform hover:scale-110",
              }}
            >
              <a href="https://github.com/caloyv" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-villarta-1b7654250/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:villarta.carlos.b.7725@gmail.com">
                <FaEnvelope />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
