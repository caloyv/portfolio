/* eslint-disable react/prop-types */

import { useState } from "react";

const Highlight = ({ children, className, divClassName }) => {
  const [isShown, setIsShown] = useState(false);
  const handleHover = () => {
    setIsShown(true);
    setTimeout(() => {
      setIsShown(false);
    }, 150);
  };
  return (
    <div className="inline relative w-full group " onMouseEnter={handleHover}>
      <span
        className={`${
          className ? className : ""
        } relative z-10 overflow-hidden `}
      >
        {children}
      </span>
      <div
        className={`absolute inset-0 top-[60%] z-1 w-full h-[45%] bg-og transition-all ${
          isShown ? "group-hover:w-0" : ""
        } ${divClassName ? divClassName : ""}`}
      />
    </div>
  );
};

export default Highlight;
