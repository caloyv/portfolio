import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const Layout = () => {
  const [windowWidth, setWindowWitdh] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrImg, setQrImg] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWitdh((prevState) => window.innerWidth);
    });
  }, [window.innerWidth]);

  // Turns on and off the Modal
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  // Sets the image for the modal
  const handleQrImg = (src) => {
    setQrImg((prevState) => src);
    setIsModalOpen(true);
  };



  return (
    <>
      <Header />
      <Outlet
        context={[windowWidth, handleModal, isModalOpen, qrImg, handleQrImg]}
      />
    </>
  );
};

export default Layout;
