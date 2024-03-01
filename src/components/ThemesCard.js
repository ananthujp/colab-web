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
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { cardVar } from "../pages/profData";

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
      className=" flex divide-x divide-slate-200 flex-col md:flex-row mt-6 md:mt-8 justify-between cursor-default transition-all m-1 w-[90%] md:w-full md:h-64 rounded-lg shadow-md border border-slate-200 hover:border-slate-300"
    >
      <div className="flex flex-col items-start justify-end p-2 md:p-0 bg-opacity-75 md:w-12 transition-all md:rounded-l-md bg-gradient-to-br from-indigo-400 to-indigo-400 ">
        <h1 className="whitespace-nowrap font-pop font-semibold text-white ml-2 border-b pr-1 border-white text-base transform origin-top-left md:-rotate-90">
          <BuildingOffice2Icon className="w-5 inline-block -mt-1 mr-2" />
          Domains in Focus
        </h1>
      </div>
      {cardVar?.map((item, index) => (
        <motion.div
          onClick={() => {
            setNav({ from: "/", to: "themes" });
            navigate("/themes/" + index);
          }}
          layout
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
          className={`relative cursor-pointer ${
            index === cardVar.length - 1 && " md:rounded-r-md"
          } group bg-gradient-to-br from-white to-slate-100  group gap-3 xhover:bg-opacity-20 xfrom-slate-100 xto-slate-300 group flex flex-row md:flex-col md:justify-around text-xs md:text-sm ${
            item.bg
          } text-center relative group font-mont w-full h-24 md:h-auto hover:p-6 transition-all duration-250 text-white flex justify-between items-center`}
        >
          <div className="flex relative">
            <div
              className="absolute flex flex-grow z-0 mt-4 h-auto  md:h-full w-full pattern-dots pattern-slate-500 group-hover:pattern-slate-100 pattern-bg-transparent 
  pattern-size-2 pattern-opacity-20"
            />
            {item.img && (
              <img
                key={`img.exp.${index}`}
                src={item.img}
                alt=""
                className="w-12 z-10 md:w-24 ml-8 md:ml-0 filter xsaturate-0 transition-all xgroup-hover:saturate-100 sgroup-hover:w-32 md:-mt-10"
              />
            )}
          </div>
          <div className="flex items-start justify-start md:h-1/4">
            <h1 className="text-slate-400 text-xs mt-2 font-regular px-2 group-hover:text-slate-600 group-hover:font-semibold">
              {item.label}
            </h1>
          </div>
          <div>
            {/* <motion.div
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
            </motion.div> */}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ExpandCard;
