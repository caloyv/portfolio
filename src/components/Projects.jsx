import Highlight from "./Highlight";
import Section from "./Section";

import space from "../assets/space-tourism.png";
import SkillsList from "./SkillsList";
import Button from "./Button";

import { IoQrCodeOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import { projectList } from "../constants/index.js";

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Projects = ({ windowWidth, handleQrImg, handleModal }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const handleClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  
  return (
    <Section id="projects">
      <h1 className="text-4xl text-db font-black font-mulish">
        <Highlight children="Projects" />
      </h1>
      <div className="mt-10 ">
        {projectList.map((project, index) => {
          if (index >= 4 && !showAllProjects) {
            return;
          }
          return (
            <div
              key={project.id}
              className={`mb-28 ${!showAllProjects && index === 3 ? "!mb-10" : ""}${
                index == projectList.length - 1 ? "!mb-10" : ""
              } lg:flex lg:justify-between`}
            >
              <div className=" py-4 flex flex-col justify-between gap-3 h-full lg:w-[40%]">
                <p className="uppercase text-slate-600 mb-4">{project.title}</p>
                <div className="flex justify-between">
                  <h2 className="font-mulish text-4xl  tracking-[1%] font-black mb-2 text-db">
                    {project.name}
                  </h2>
                  <IconContext.Provider
                    value={{
                      className:
                        "hidden xl:block w-5 h-5 md:w-6 md:h-6 text-og border border-og transition-all hover:scale-110 flex-1",
                    }}
                  >
                    <button onClick={() => handleQrImg(project.qr)}>
                      <IoQrCodeOutline />
                    </button>
                  </IconContext.Provider>
                </div>
                <ul className="flex gap-1 flex-wrap mb-10">
                  <SkillsList
                    filter={project.skills}
                    className="!px-[8px] !py-[3px] !text-sm !md:text-base"
                  />
                </ul>
                <div className="flex items-center justify-between flex-1 mb-5">
                  <Button children="View project" link={project.link} target />
                </div>
              </div>
              <div className="border rounded-xl max-w-[200px] sm:max-w-[550px] shadow-lg mx-auto">
                <img
                  className="rounded-xl w-full h-full object-fill transition-transform hover:scale-105"
                  src={windowWidth >= 640 ? project.img : project.mobileImg}
                  alt={project.name}
                />
              </div>
            </div>
          );
        })}
        <div className="w-full text-center mb-20">
          <p
            className="text-og font-bold cursor-pointer inline hover:text-og/80 transition-all"
            onClick={handleClick}
          >
            {showAllProjects ? "show less" : "show more"}
          </p>
        </div>
        <div className="mb-20 md:flex md:justify-center">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] mb-5">
              Let's have a <Highlight children="chat" />
            </h2>
            <div className="mb-10">
              <a
                className="text-og cursor-pointer text-md md:text-xl font-bold"
                href="mailto:villarta.carlos.b.7725@gmail.com"
              >
                villarta.carlos.b.7725@gmail.com
              </a>
            </div>
            <div className="">
              <Button
                children="Get in touch"
                className="cursor-pointer"
                link="mailto:villarta.carlos.b.7725@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
