import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { Button1 } from "./button/Button1";
import { motion } from "framer-motion";
import prof from "../assets/images/profile1.jpg";
import cover from "../assets/images/cover.png"

export const Social = [
  {
    id: 1,
    icon: FaGithub,
    name: "Github",
    linkTo: "https://github.com/pWar07",
  },
  {
    id: 2,
    icon: FaLinkedin,
    name: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/pwar07/",
  },
];

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] pt-1">
      <div className="textStr mt-40 px-[100px] lg:px-[200px] block justify-between items-center lg:flex">
        <div className="text-content relative z-10">
          {["Pranav Pawar", "I am a", "Web Developer"].map((v, i) => {
            return (
              <div className="masker font-['founder'] overflow-hidden" key={i}>
                <div className="w-fit flex">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[8vw] h-[6vw] rounded-md relative bg-cover bg-center  bg-red-500"
                      style={{backgroundImage : `url(${cover})`}}
                    ></motion.div>
                  )}
                  <h1 className="capitalize leading-[5vw] mb-7 tracking-tight text-[9.5vw]">
                    {v}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="profile-image w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={prof}
            alt="Profile"
            className="w-[300px] h-[320px] object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="mt-20 flex gap-10 px-[200px] py-5 relative z-10">
        {Social.map((v) => {
          const Icon = v.icon;
          return (
            <a
              key={v.id}
              href={v.linkTo}
              className="flex items-center space-x-2 font-['neue'] text-inherit justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <span>{v.name}</span>
            </a>
          );
        })}
        <div className="start flex items-center gap-2">
          <Button1 className="btn1" value="Resume" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
