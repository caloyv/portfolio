import React from "react";
import Highlight from "./Highlight";
import gradPic from "../assets/gradpic-trim.png";
import SkillsList from "./SkillsList";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about">
      <h1 className="text-4xl text-db font-black font-mulish">
        My <Highlight children="Skills" />
      </h1>
      <div className="mt-10 flex flex-col items-center gap-[25px] w-full md:flex-row md:justify-between md:gap-20">
        <div className="w-[238px] h-[307px] md:min-w-[250px] xl:min-w-[300px] md:h-[320px] xl:h-[400px] shadow-lg rounded-[35px]">
          <img
            className="rounded-[35px] h-full w-full object-cover transition-transform hover:scale-105"
            src={gradPic}
            alt="Graduation Picture"
          />
        </div>
        <div className="w-full flex flex-col gap-10 ">
          <ul className="flex flex-wrap justify-center gap-[6px] md:gap-2 max-w-[500px] mx-auto md:justify-start md:max-w-none">
            <SkillsList />
          </ul>
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-extrabold font-mulish text-xl tracking-normal leading-[60px]">
              I love building stuff 📱
            </h2>
            <p className="font-mulish font-light text-db tracking-[1%] leading-[25px] text-xl">
              I started playing with computers when I was 5 years-old. This
              early interest has led to a lifelong exploration across diverse
              fields like automotive, electronics, and robotics. Along this
              journey, I've found my passion for frontend development, where I
              thrive on developing intuitive user interfaces and immersive
              experiences.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
