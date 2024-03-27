import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHover, isSetHover] = useState(false);

  const handleClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  };

  const handleHover = () => {
    isSetHover(true);
    setTimeout(() => {
      isSetHover(false);
    }, 100);
  };

  const hoverStyle = `relative before:absolute before:content-[''] before:-bottom-1 before:left-0 before:h-[3px] before:w-full before:bg-og before:transition-all ${
    isHover ? "hover:before:w-0" : ""
  }`;

  return (
    <header className="absolute top-0 left-0 w-full z-10 h-8 font-mulish pt-[26px] md:pt-10">
      <div className="flex justify-center items-center h-full">
        <h1 className=" text-white text-xl font-extrabold w-full text-center">
          Carlos Villarta
        </h1>
        <div className="cursor-pointer md:hidden" onClick={handleClick}>
          {isNavOpen ? (
            <IconContext.Provider
              value={{
                className: `text-white absolute top-6 right-12 scale-110`,
              }}
            >
              <GrClose />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ className: `text-white absolute top-6 right-12` }}
            >
              <FaBars />
            </IconContext.Provider>
          )}
        </div>
        <div
          className={`absolute top-16 left-0 w-full h-16 transition-all md:hidden ${
            isNavOpen ? "" : ""
          }`}
        >
          <nav
            className={`bg-og h-full  flex items-center w-0 overflow-hidden transition-all ${
              isNavOpen ? "w-[100%]" : ""
            }`}
          >
            <ul className="flex gap-10 w-full justify-center text-white font-bold">
              <li className="transition-transform hover:text-white/60">
                <a href="#about">about</a>
              </li>
              <li className="transition-transform hover:text-white/60">
                <a href="#projects">projects</a>
              </li>
              <li className="transition-transform hover:text-white/60">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-10 w-full justify-evenly text-white font-bold mt-10">
          <li className="transition-transform ">
            <a className={hoverStyle} href="#about" onMouseEnter={handleHover}>
              about
            </a>
          </li>
          <li className="transition-transform ">
            <a
              className={hoverStyle}
              href="#projects"
              onMouseEnter={handleHover}
            >
              projects
            </a>
          </li>
          <li className="transition-transform ">
            <a
              className={hoverStyle}
              href="#contact"
              onMouseEnter={handleHover}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
