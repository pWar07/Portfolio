import React from "react";
import sncs from "../assets/images/sncs.png";
import git from "../assets/images/git.jpg";
import { CiCalendar } from "react-icons/ci";

const Edu = [
  {
    id: 1,
    img: git,
    title: "Gandhinagar Institute of Technology, Gandhinagar",
    stream: "Information Technology",
    duration: "August 2020 - May 2024",
    cal: CiCalendar,
    cgpa: "8.50",
  },
  {
    id: 2,
    img: sncs,
    title: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(XII), Science with Computer",
    duration: "May 2019 - May 2020",
    cal: CiCalendar,
    cgpa: "8.00",
  },
  {
    id: 3,
    img: sncs,
    title: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(X), Science with Computer",
    duration: "May 2017 - May 2018",
    cal: CiCalendar,
    cgpa: "9.21",
  },
];

export const Education = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#F1F1F1]">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-10 border-zinc-500 font-['neue']">
        <h1 className="px-[200px] text-6xl tracking-tight">Education</h1>
      </div>
      <div className="timeline relative max-w-[1200px] my-[100px] mx-auto font-['neue']">
        {Edu.map((v, i) => {
          let Calend = v.cal;
          return (
            // ${i % 2 === 0 ? "hover:-ml-[200px]" : "hover:-mr-[200px]"}
            <div
              className={`contain card px-[50px] py-[10px] relative w-1/2 ${i % 2 === 0 ? "left-0" : "left-1/2"}`}
            >
              <img className={`absolute h-[55px] w-[55px] object-scale-down top-[32px] rounded-xl z-10 ${i % 2 === 0 ? "-right-[28px]" : "-left-[28px]"}`} src={v.img} alt="" />
              <div className="textBox bg-white relative px-[30px] py-[20px] rounded-xl text-lg">
                <h2>{v.title}</h2>
                <small>{v.duration}</small>
                <p>{v.description}</p>
                <span className={`${i%2 === 0 ? "leftArrow" : "rightArrow" }`}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
