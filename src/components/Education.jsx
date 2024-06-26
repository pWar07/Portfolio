import React from "react";
import sncs from "../assets/images/sncs.png";
import git from "../assets/images/git.jpg";
import { CiCalendar } from "react-icons/ci";

const Edu = [
  {
    id: 1,
    icon: git,
    name: "Gandhinagar Institute of Technology, Gandhinagar",
    stream: "Information Technology",
    date: "2020 - 2024",
    cal: CiCalendar,
    cgpa: "8.50",
  },
  {
    id: 2,
    icon: sncs,
    name: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(XII), Science with Computer",
    date: "May 2019 - May 2020",
    cal: CiCalendar,
    cgpa: "8.00",
  },
  {
    id: 3,
    icon: sncs,
    name: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(X), Science with Computer",
    date: "May 2017 - May 2018",
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
      <div className="px-[200px] pt-10 flex flex-col items-center gap-[30px] justify-center">
        {Edu.map((v, i) => {
          let Calend = v.cal;
          return (
            // ${i % 2 === 0 ? "hover:-ml-[200px]" : "hover:-mr-[200px]"}
            <div
              className={`relative card border-[1px] border-zinc-900 rounded-xl min-w-[650px] p-8 duration-1000 transition-all`}
            >
              <div className="header gap-6 flex items-center">
                <img
                  alt=""
                  className="w-20 h-20 bg-cover bg-center"
                  style={{ backgroundImage: `url(${v.icon})` }}
                />
                <div className="content">
                  <h1 className='text-xl font-["neue"]'>{v.name}</h1>
                  <h1 className="text-sm font-['neue'] text-zinc-700">
                    {v.stream}
                  </h1>
                  <h1 className="text-sm flex items-center gap-1 font-['neue'] text-zinc-700">
                    <Calend />
                    {v.date}
                  </h1>
                  <h1 className="text-md text-zinc-700 font-['neue']">
                    CGPA : {v.cgpa}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
