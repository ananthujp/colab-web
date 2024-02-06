import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Carousel } from "antd";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
const WhyCard = ({ delay }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const navigate = useNavigate();
  const { nav, setNav } = useReducer();
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
      className="bg-yellow-100 h-64 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 hover:border-white w-[90%] md:w-full flex flex-col justify-between p-4 rounded-lg"
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
            className="text-lg mb-4 md:mb-2 flex items-start gap-2 justify-between  flex-row font-pop font-semibold text-slate-800"
          >
            <div className="flex flex-row gap-2 items-center">
              <CalendarDaysIcon className="w-6" />
              <h1>Why IITGN</h1>
            </div>
            <motion.button
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
            </motion.button>
          </motion.h1>
          <div className="flex flex-row gap-4 justify-between">
            <div>Innovation</div>
            <div>Ecosystem</div>
            <div>Collaboration</div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WhyCard;
