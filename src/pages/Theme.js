import React from "react";
import { motion } from "framer-motion";
import bio from "../imgs/bio.png";
import man from "../imgs/man.png";
import ene from "../imgs/energy.png";
import ai from "../imgs/ai.png";
import food from "../imgs/food.png";
import def from "../imgs/def.png";
import pharma from "../imgs/pharma.png";
import climate from "../imgs/climate.png";

import Page from "./Page";
function Theme() {
  const cardVar = [
    {
      label: "Bioengineering, Healthcare, Pharma",
      bg: "hover:from-cyan-400 hover:to-blue-300",
      img: bio,
    },
    {
      label: "Manufacturing",
      bg: "hover:from-fuchsia-300 hover:to-purple-400",
      img: man,
    },
    {
      label: "Energy and Water",
      bg: "hover:from-green-400 hover:to-cyan-300",
      img: ene,
    },
    {
      label: "AI and Computing",
      bg: "hover:from-purple-300 hover:to-indigo-300",
      img: ai,
    },
    {
      label: "Agro and Food processing",
      bg: "hover:from-yellow-400 hover:to-orange-300",
      img: food,
    },
    {
      label: "Defence, Military & Space Technology ",
      bg: "hover:from-pink-300 hover:to-rose-300",
      img: def,
    },
    {
      label: "Climate Challange & Solutions",
      bg: "hover:from-blue-400 hover:to-indigo-300",
      img: climate,
    },
    {
      label: "Pharma and Healthcare",
      bg: "hover:from-cyan-400  hover:to-blue-500",
      img: pharma,
    },
  ];
  return (
    <Page no={3} page="themes" title="Themes">
      <motion.div
        layoutId={`pgm.themes`}
        className="w-full overflow-auto px-16 grid grid-cols-1 md:grid-cols-2 xmd:flex-wrap md:h-[90%]"
      >
        {cardVar.map((item, i) => (
          <div className="w-full xmd:w-1/2 mx-4 my-2">
            <div className="flex flex-row items-start gap-4">
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: i * 0.1 },
                }}
                exit={{
                  opacity: 0,
                  translateY: 20,
                  transition: { duration: 0.5, delay: i * 0.1 },
                }}
              >
                <img
                  key={`img.exp.${i}`}
                  src={item.img}
                  alt=""
                  className="w-16 filter "
                />
              </motion.div>

              <div className="flex flex-col ">
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  className="text-xl font-pop font-semibold"
                >
                  {cardVar[i].label}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                  }}
                  className="text-xs mt-2 w-[85%] font-pop text-justify font-light"
                >
                  {/* {cardVar[i].bg} */}
                </motion.h1>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Page>
  );
}

export default Theme;
