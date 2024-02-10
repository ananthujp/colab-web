import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Carousel } from "antd";
import {
  BuildingOffice2Icon,
  LightBulbIcon,
  MicrophoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import "./why.css";
import { useNavigate } from "react-router-dom";
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
        className={`font-pop hidden group-hover:flex z-50 text-center text-slate-400`}
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
  const items = [
    {
      category: "Innovation",
      icon: (
        <LightBulbIcon className="w-16 text-white group-hover:text-indigo-600 " />
      ),
      bgColor: "rgb(199, 210, 254)",
      bgColorLight: "rgb(238,242,255)",
      textColorHover: "#4C5656",
      textColor: "text-indigo-600",
      boxShadowColor: "rgba(255, 215, 97, 0.48)",
      Tag: "Transforming Ideas into Reality",
    },
    {
      category: "Ecosystem",
      icon: (
        <BuildingOffice2Icon className="w-16 text-white group-hover:text-cyan-600" />
      ),
      bgColor: "#B8F9D3",
      bgColorLight: "#e2fced",
      textColorHover: "#4C5656",
      textColor: "text-green-600",
      boxShadowColor: "rgba(184, 249, 211, 0.48)",
      Tag: "Pioneering Entrepreneurial Frontiers",
    },
    {
      category: "Collaboration",
      icon: (
        <UserGroupIcon className="w-16 text-white group-hover:text-purple-600" />
      ),
      bgColor: "rgb(233,213,255)",
      bgColorLight: "rgb(243,232,255)",
      textColorHover: "#fff",
      textColor: "text-purple-600",
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
      className="relative w-[90%] bg-slate-200/40 h-64 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-200 hover:border-gray-400 md:w-full flex flex-col justify-between rounded-lg"
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
            className="absolute p-4 w-full z-50 text-lg mb-4 md:mb-2 flex items-start gap-2 justify-between  flex-row font-pop font-semibold text-slate-800"
          >
            <div className="flex flex-row gap-2 items-center">
              <LightBulbIcon className="w-6" />
              <h1>Why IITGN</h1>
            </div>
            {/* <motion.button
              onClick={() => {
                setNav({ from: "/", to: "program" });
                navigate("/" + "program");
              }}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className="rounded-full font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
            >
              More
            </motion.button> */}
          </motion.h1>
          <div className="flex flex-row gap-0 w-full justify-between">
            {items.map((item, index) => (
              <Card
                icon={item.icon}
                tag={item.Tag}
                category={item.category}
                bgColor={item.bgColor}
                textColor={item.textColor}
                bgColorLight={item.bgColorLight}
                textColorHover={item.textColorHover}
                boxShadowColor={item.boxShadowColor}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WhyCard;