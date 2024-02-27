import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  BuildingOffice2Icon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import "./why.css";
import useReducer from "../hook/reducerHook";
const Card = ({
  category,
  bgColor,
  bgColorLight,
  textColorHover,
  boxShadowColor,
  textColor,
  icon,
  tag,
}) => {
  return (
    <div
      key={`${category}`}
      className={`card ${category} group cursor-pointer `}
      style={{
        width: "100%",
        "--bg-color": bgColor,
        "--bg-color-light": bgColorLight,
        "--text-color-hover": textColorHover,
        "--box-shadow-color": boxShadowColor,
      }}
    >
      <div className="overlay scale-75"></div>
      <div className="circle scale-75">{icon}</div>
      <p
        className={`font-mont ${textColor} group-hover:text-slate-600 font-semibold`}
      >
        {category}
      </p>
      <h1
        className={`font-pop text-xs md:text-sm hidden group-hover:flex z-50 text-center text-slate-400`}
      >
        {tag}
      </h1>
    </div>
  );
};
const WhyCard = ({ delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { nav } = useReducer();
  const [active, setActive] = useState(null);
  const items = [
    {
      category: "Innovation",
      icon: <LightBulbIcon className="  w-20 mx-auto " />,
      hoverColor: "bg-white border-yellow-500",
      textColor: "text-yellow-500",
      bgColor: "rgb(199, 210, 254)",
      bgColorLight: "rgb(238,242,255)",
      textColorHover: "#4C5656",
      boxShadowColor: "rgba(255, 215, 97, 0.48)",
      Tag: "Transforming Ideas into Reality",
    },
    {
      category: "Ecosystem",
      icon: <BuildingOffice2Icon className=" w-20 mx-auto " />,
      hoverColor: "bg-white border-green-500",
      textColor: "text-green-500",
      bgColor: "#B8F9D3",
      bgColorLight: "#e2fced",
      textColorHover: "#4C5656",
      boxShadowColor: "rgba(184, 249, 211, 0.48)",
      Tag: "Pioneering Entrepreneurial Frontiers",
    },
    {
      category: "Collaboration",
      icon: <UserGroupIcon className=" w-20 mx-auto" />,
      hoverColor: "bg-white border-indigo-500",
      textColor: "text-indigo-500",
      bgColor: "rgb(245 208 254)",
      bgColorLight: "rgb(253 244 255)",
      textColorHover: "#fff",
      boxShadowColor: "rgba(206, 178, 252, 0.48)",
      Tag: "Crafting Success through Industry Partnerships",
    },
  ];
  return (
    <motion.div
      layoutId={`pgm.why`}
      ref={ref}
      initial={nav.from !== "program" && { opacity: 0, translateY: -20 }}
      animate={
        nav.from !== "program" && {
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.5, delay: 0.5 * delay },
        }
      }
      exit={
        nav.to !== "program"
          ? {
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }
          : null
      }
      className="relative w-[90%] bg-white xbg-slate-100/40 h-64 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-300 hover:border-gray-400 md:w-full flex flex-col justify-between rounded-lg"
    >
      {isInView && (
        <>
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.5 * delay + 0.1 },
            }}
            exit={{
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }}
            className=" px-4 pt-4 pb-2 w-full z-50 text-lg  flex items-start   flex-row font-pop font-semibold text-slate-800"
          >
            <div className="flex flex-row gap-2 border-b pb-2 border-slate-300 items-center">
              <LightBulbIcon className="w-6" />
              <h1>Why IITGN</h1>
            </div>
          </motion.h1>
          <div className="h-full w-full flex item flex-col">
            <div className="flex flex-row justify-between   items-center relative w-full h-full">
              <div
                className="h-full absolute w-full pattern-dots pattern-slate-500 pattern-bg-white 
  pattern-size-2 pattern-opacity-20"
              />
              {items.map((item, index) => (
                <motion.h1
                  onHoverStart={() => setActive(index)}
                  onHoverEnd={() => setActive(null)}
                  className={` z-50 ${
                    active === index ? item.textColor : "text-slate-600"
                  } w-full flex transition-all flex-col`}
                >
                  {item.icon}
                </motion.h1>
              ))}
            </div>
            <div className="flex flex-row justify-between  items-center font-mont font-semibold pb-6 pt-3  w-full">
              {items.map((item, index) => (
                <motion.h1
                  onHoverStart={() => setActive(index)}
                  onHoverEnd={() => setActive(null)}
                  className="relative text-center cursor-pointer w-full"
                >
                  {active === index && (
                    <motion.span
                      layoutId="why.card.hover"
                      className={`absolute inset-0 border w-[90%] ${item.hoverColor} mx-auto my-auto h-16 rounded-md`}
                    />
                  )}
                  <h1
                    className={`relative flex flex-col items-center ${
                      active === index && "text-slate-600 "
                    }  z-10`}
                  >
                    <h1>{item.category}</h1>
                    <h1 className="text-center text-slate-400 text-xs w-[80%] h-8 font-mont font-normal">
                      {item.Tag}
                    </h1>
                  </h1>
                </motion.h1>
                // <Card
                //   key={index}
                //   category={item.category}
                //   bgColor={item.bgColor}
                //   bgColorLight={item.bgColorLight}
                //   textColorHover={item.textColorHover}
                //   textColor={item.textColor}
                //   boxShadowColor={item.boxShadowColor}
                //   icon={item.icon}
                //   tag={item.Tag}
                // />
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WhyCard;
