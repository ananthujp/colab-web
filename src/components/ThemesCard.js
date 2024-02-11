import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bio from "../imgs/bio.png";
import man from "../imgs/man.png";
import ene from "../imgs/energy.png";
import ai from "../imgs/ai.png";
import food from "../imgs/food.png";
import def from "../imgs/def.png";
import pharma from "../imgs/pharma.png";
import climate from "../imgs/climate.png";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
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
function ExpandCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <motion.div
      ref={ref}
      layoutId={`pgm.themes`}
      initial={nav.from !== "themes" && { opacity: 0, translateY: -20 }}
      animate={
        nav.from !== "themes" && {
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }
      }
      exit={
        nav.to !== "themes"
          ? {
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }
          : null
      }
      className=" flex flex-col-reverse md:flex-row mt-6 md:mt-8 justify-between cursor-default transition-all m-1 w-[90%] md:w-full md:h-72 rounded-lg shadow-md border border-gray-100/60"
    >
      {cardVar.map((item, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: { duration: 0.5, delay: index * 0.2 },
                }
              : { opacity: 0 }
          }
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          key={`exp.card.${index}`}
          className={`relative ${
            index === 0 && "rounded-l-lg md:rounded-l-lg"
          } group bg-gradient-to-br group gap-3 hover:bg-opacity-20 from-slate-100 to-slate-300 group flex flex-row md:flex-col md:justify-around text-xs md:text-sm ${
            item.bg
          } text-center font-mont w-full h-24 md:h-auto hover:p-6 transition-all duration-250 text-white flex justify-between items-center`}
        >
          <div>
            {item.img && (
              <img
                key={`img.exp.${index}`}
                src={item.img}
                alt=""
                className="w-12 md:w-24 ml-8 md:ml-0 filter saturate-0 transition-all group-hover:saturate-100 sgroup-hover:w-32 md:-mt-10"
              />
            )}
          </div>
          <h1 className="text-slate-400 font-regular px-2 group-hover:text-slate-600 sgroup-hover:font-medium">
            {item.label}
          </h1>
          <div>
            <motion.div
              onClick={() => {
                setNav({ from: "/", to: "themes" });
                navigate("/themes/" + index);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              key={`exp.card.${index}.btn`}
              className="bg-gradient-to-br group-hover:flex hidden font-mont from-slate-50 to-slate-200 text-slate-600 text-xs px-4 py-1 rounded-full font-medium cursor-pointer hover:to-slate-300"
            >
              Learn More
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div className="flex flex-col items-start justify-start p-2 md:p-0 bg-opacity-75 md:w-8 transition-all rounded-r-lg md:rounded-r-lg bg-gradient-to-br from-indigo-400 to-indigo-400 ">
        <h1 className="whitespace-nowrap font-pop font-medium text-white text-base transform origin-bottom-left md:rotate-90">
          Domains in Focus
        </h1>
      </div>
    </motion.div>
  );
}

export default ExpandCard;
