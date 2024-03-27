import { useOutletContext } from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ModalQR from "../components/ModalQR";

const Homepage = () => {
  const [windowWidth, handleModal, isModalOpen, qrImg, handleQrImg] =
    useOutletContext();
  

  return (
    <main className="bg-cream">
      <Hero />
      <About />
      <Projects
        windowWidth={windowWidth}
        handleModal={handleModal}
        handleQrImg={handleQrImg}
      />
      <Footer />
      <ModalQR
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        qrImg={qrImg}
      />
    </main>
  );
};

export default Homepage;
