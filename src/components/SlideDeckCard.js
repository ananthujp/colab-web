import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import {
  ArrowsPointingOutIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { SparklesCore } from "../pages/SliderDeck";
import { findChildObject } from "../pages/StallPreview";
import { cardVar } from "../pages/profData";
import { Progress } from "antd";
const CardData = ({ data, ishover, nav, id, time }) => {
  const fac = data.faculty && findChildObject(cardVar, data.faculty).child;
  const dt = 0.2;
  const [val, setVal] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prevVal) => prevVal + dt);
    }, time * dt * 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        key={`card.slide.${id}`}
        onClick={() => nav(id)}
        className="h-full w-full font-mont gap-2 flex flex-col"
      >
        <div className=" flex flex-row justify-between">
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.5 * 0.3 },
            }}
            className="text-lg text-white border-b pb-2 mb-2 border-slate-300 flex items-center gap-2 ml-2  flex-row font-pop font-semibold "
          >
            {ishover ? (
              <ArrowsPointingOutIcon className=" w-5" />
            ) : (
              <PhotoIcon className="w-5" />
            )}
            <h1>{ishover ? "Expand Slide" : "Slide Deck"}</h1>
          </motion.h1>
          <div className="bg-white/10 mb-2 rounded-full">
            <Progress
              type="circle"
              size={40}
              strokeColor="#ffffff"
              percent={val}
              className="text-white"
              format={(percent) => `${time - parseInt((val * time) / 100)}s`}
            />
          </div>
          <div className="flex gap-2 relative flex-row">
            {/* {time - parseInt((val * time) / 100)} */}

            <div className="relative flex">
              <img
                className="w-8 h-8 z-10 object-cover rounded-full"
                src={fac?.img}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start text-center font-mont">
              <h1 className="text-xs font-medium text-white">{fac?.name}</h1>
              <h1 className="text-xs w-auto overflow-hidden font-light text-white">
                {fac?.dept.length > fac?.name.length
                  ? fac?.dept.slice(0, fac?.name.length + 2) + ".."
                  : fac?.dept}
              </h1>
              {/* <h1 className="text-xs font-light text-white">{fac?.email}</h1> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 overflow-hidden max-h-44 justify-between">
          <div className="flex flex-col  overflow-hidden w-full h-full gap-2 justify-between">
            <div className="flex flex-col rounded-md border  cbg-white/20 border-white/40 w-full  p-2 ">
              <div className="flex gap-1 items-center font-semibold text-white">
                <ChartPieIcon className="w-4 h-4" />
                Approaches Used
              </div>
              <ol className="list-disc  ml-6">
                {data.app?.map((item, i) => (
                  <li key={`dom.${i}`} className="text-xs font-thin text-white">
                    {item.data}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col rounded-md border cbg-white/20 border-white/40 w-full h-full  p-2 ">
              <div className="flex gap-1 items-center font-semibold text-white">
                <ChartPieIcon className="w-4 h-4" />
                Domains
              </div>
              <h1 className="text-xs ml-4 font-thin text-white inline-block">
                {data.domains?.map((item, i) => (
                  <span
                    key={`dom.span.item.${i}`}
                    className="text-xs font-thin text-white"
                  >
                    {item.data},&nbsp;
                  </span>
                ))}
              </h1>
            </div>
          </div>
          <div className="flex flex-col  overflow-hidden h-full rounded-md border cbg-white/20 border-white/40 w-auto p-2 ">
            <div className="flex gap-1 items-center font-semibold text-white">
              <BuildingOffice2Icon className="w-4 h-4" />
              Key Sectors
            </div>
            <ol className="list-disc pt-4 md:py-0 ml-6">
              {data.sect?.map((item, i) => (
                <li key={`dom.${i}`} className="text-xs font-thin text-white">
                  {item.data}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-full">
          <h1 className="xmd:absolute font-pop xtop-4 text-left my-auto font-semibold z-10  px-2 text-white text-lg  ">
            {data.title}
          </h1>
          <h1 className="inline-block px-2 font-mont text-white text-xs font-semibold">
            Objective : <span className="font-thin ">{data.obj}</span>
          </h1>
        </div>
      </div>
    </>
  );
};
function SlideDeckCard({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { setNav, slides } = useReducer();
  const navigate = useNavigate();
  const [ishover, setIsHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNavi = (id) => {
    navigate("/slidedeck/" + id);
  };
  const time = 20;
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * slides.length));
    const interval =
      slides &&
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides?.length);
      }, time * 1000);

    return () => clearInterval(interval);
  }, [slides]);
  return (
    <div ref={ref} className="w-[90%] relative md:w-full md:h-auto">
      <div
        className="absolute w-full h-full z-50 pointer-events-none pattern-wavy pattern-blue-500 pattern-bg-slate-200 
  pattern-size-16 pattern-opacity-5"
      />
      {isInView && (
        <motion.div
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          //   onMouseEnter={() => setIsHover(true)}
          //   onMouseLeave={() => setIsHover(false)}
          initial={{ opacity: 0, translateY: -20 }}
          layout
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.5 * delay },
          }}
          exit={{
            opacity: 0,
            translateY: 20,
            transition: { duration: 0.5 },
          }}
          className="mt-8 md:mt-0 md:h-full cursor-pointer transition-all relative bg-gradient-to-br from-purple-700 to-indigo-600 hover:to-indigo-800  border border-gray-200 hover:border-gray-400 flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="absolute pointer-events-none z-0 top-0 h-full w-full">
            <SparklesCore
              // background="transparent"
              key={`sparkles.${"keyI"}`}
              minSize={0.4}
              maxSize={1}
              particleDensity={50}
              className="opacity-20  -z-0 top-0 h-auto w-full"
              particleColor="rgb(203, 213, 225)"
            />
          </div>
          {slides.length > 1 && (
            <CardData
              key={`card.main.data.${slides[currentIndex].id}`}
              data={slides[currentIndex].data}
              id={slides[currentIndex].id}
              ishover={ishover}
              nav={handleNavi}
              time={time}
            />
          )}
          {/* <div className="flex flex-row mb-2 justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg text-white border-b pb-2 mb-2 border-slate-300 flex items-center gap-2 ml-2  flex-row font-pop font-semibold "
            >
              <PhotoIcon className="w-5" />
              <h1>Slide Deck</h1>
            </motion.h1>
            <div>
              <motion.div
                onClick={() => {
                  setNav({ from: "/", to: "contact" });
                  navigate("/" + "contact");
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                key={`exp.card.btn`}
                className="rounded-full h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
              >
                More
              </motion.div>
            </div>
          </div> */}
        </motion.div>
      )}
    </div>
  );
}

export default SlideDeckCard;
