import React from "react";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";

const ModalQR = ({ qrImg, isModalOpen, handleModal }) => {
  return (
    <div
      className={`fixed z-50 inset-0 ${
        isModalOpen ? "hidden lg:flex" : "hidden"
      } bg-white/80 flex-col justify-center items-center `}
      onClick={handleModal}
    >
      <div className="flex flex-col gap-10">
        <div className="cursor-pointer self-end transition-transform hover:scale-110" onClick={handleModal}>
          <IconContext.Provider value={{ className: "w-[25px] h-[25px] " }}>
            <GrClose />
          </IconContext.Provider>
        </div>
        <div className="w-[30vw] border shadow">
          <img className="w-full h-full" src={qrImg} alt="QR Image" />
        </div>
      </div>
    </div>
  );
};

export default ModalQR;
