import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Highlight from "./Highlight";
import { IconContext } from "react-icons";
import { ScrollParallax } from "react-just-parallax";
import { IoDocumentText } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      className="pt-24 px-[54px] sm:px-[72px] md:px-[20%] bg-gb h-screen flex flex-col justify-center gap-[40px] relative"
      id="home"
    >
      <div>
        <h1 className="text-white text-[2.5rem] md:text-[4rem] leading-[50px] md:leading-[80px] font-normal tracking-normal md:max-w-[900px]">
          Hi, I'm Carlos | <Highlight children="Frontend" />{" "}
          <Highlight children="Developer" />
        </h1>
      </div>
      <div className="flex gap-[20px]">
        <IconContext.Provider
          value={{
            className:
              "text-og w-[28px] h-[30px] transition-transform hover:scale-110",
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
      <div className="max-w-[460px] md:max-w-[520px]">
        <p className="text-xl tracking-normal leading-[27px] md:leading-[35px] text-white font-mulish">
          I love exploring and creating 🚀 I&apos;m a lifelong learner 📖 and I
          might have a thing for an extra spicy Chili Con Carne 🌶️
        </p>
      </div>
      <div className="w-full relative mt-10">
        <div className="w-[150px] h-[55px] md:w-[190px] md:h-[60px] bg-og absolute rounded-sm text-white flex justify-center items-center md:text-[1.125rem] border-2 border-white/20 shadow-xl transition-transform hover:scale-105">
          <a
            href="./carlos-villarta-cv.pdf"
            target="_blank"
            alt="My CV"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center gap-2 font-semibold"
          >
            Download CV
            <IconContext.Provider
              value={{
                className: "w-[20px] h-[20px] md:w-[25px] md:h-[25px]",
              }}
            >
              <IoDocumentText />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
