import { motion, useAnimation } from "framer-motion";
import travel from "../assets/images/travel.png";
import urban from "../assets/images/urbansole.png";
import { useState } from "react";
import { Button2 } from "./button/Button2";

export const Projects = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (i) => {
    cards[i].start({ y: "0" });
  };

  const handleHoverEnd = (i) => {
    cards[i].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#F1F1F1]">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-10 border-zinc-500 font-['neue']">
        <h1 className="text-6xl px-[200px] tracking-tight">My Works</h1>
      </div>
      <div className="px-[200px]">
        <div className="cards flex gap-10 w-full mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardCont relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute overflow-hidden flex translate-x-1/2 top-1/2 -translate-y-1/2 right-0 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tight font-['founder']">
              {"TRAVELO'PEDIA".split("").map((v, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="inline-block"
                >
                  {v}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full overflow-hidden rounded-xl"
              whileHover={{ scale: 0.95 }}
            >
              <img
                className="w-full h-full object-cover"
                src={travel}
                alt="travelopedia"
              />
            </motion.div>
            <div className="techUsed font-['neue'] w-full mt-3 gap-2 flex">
              <Button2 value="html/css" />
              <Button2 value="js" />
              <Button2 value="bootstrap" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardCont relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden right-full text-[#CDEA68] z-[9] text-8xl leading-none tracking-tight font-['founder']">
              {"URBANSOLE".split("").map((v, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="inline-block"
                >
                  {v}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full overflow-hidden rounded-xl"
              whileHover={{ scale: 0.95 }} // Add hover effect for the image
            >
              <img
                className="w-full h-full object-cover"
                src={urban}
                alt="urban"
              />
            </motion.div>
            <div className="techUsed font-['neue'] w-full mt-3 gap-2 flex">
              <Button2 value="react" />
              <Button2 value="gsap" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
