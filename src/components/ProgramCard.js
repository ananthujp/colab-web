import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Carousel } from "antd";
import {
  BeakerIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
const BlogSlider = ({ delay }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true });
  const theme = "text-white bg-gradient-to-br p-4 rounded-full ";
  const sliderItems = [
    {
      title: "Research Expo",
      description:
        "A showcase of IITGN’s research prowess, tech innovations, and transformative solutions.",

      ico: (
        <LightBulbIcon className={`${theme} from-fuchsia-500 to-purple-600`} />
      ),
    },
    {
      title: "Networking & Collaboration",
      description:
        "Build partnerships, exchange ideas, and explore potential collaborations with industries, start-ups, and researchers.",

      ico: <LinkIcon className={`${theme} from-green-400 to-cyan-500`} />,
    },
    {
      title: "Panel Discussions",
      description:
        "Engage in discussions about current trends, challenges, and opportunities in various fields with industry experts and academic leaders.",

      ico: (
        <MicrophoneIcon className={`${theme} from-purple-500 to-indigo-500`} />
      ),
    },
    {
      title: "Recruitment Insights",
      description:
        "Leverage IITGN’s talent for your organization’s recruitment or internship programs",
      ico: (
        <MagnifyingGlassPlusIcon
          className={`${theme} from-yellow-400 to-orange-500`}
        />
      ),
    },
    {
      title: "CSR Avenues",
      description:
        "Potential opportunities to fulfill your organization’s Corporate Social Responsibility through various IIT Gandhinagar initiatives.",
      ico: (
        <BuildingOffice2Icon className={`${theme} from-pink-500 to-rose-500`} />
      ),
    },
    {
      title: "Lab Tours",
      description:
        "Get first-hand insights about the diverse research at IITGN by visiting various research laboratories. ",
      ico: <BeakerIcon className={`${theme} from-pink-500 to-rose-500`} />,
    },
  ];
  const navigate = useNavigate();
  const { nav, setNav } = useReducer();
  return (
    <motion.div
      key={`pgm.page.card`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layoutId={`pgm.page`}
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
      className="bg-white h-64 bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-300 hover:border-gray-400 w-[90%] md:w-full flex flex-col justify-between p-4 rounded-lg"
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
            <div className="flex flex-row gap-2 border-b pb-2 border-slate-300 items-center">
              <CalendarDaysIcon className="w-6" />
              <h1>Event Highlights</h1>
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
              className="rounded-full border font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
            >
              More
            </motion.button>
          </motion.h1>
          {isHovered ? (
            <div className="grid  grid-cols-2 gap-2">
              {sliderItems.map((item, i) => (
                <motion.div
                  onClick={() => navigate("program")}
                  key={`pgm.card.element.${i}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  className="flex cursor-pointer flex-row items-center gap-2"
                >
                  <h1 className="w-12">{item.ico}</h1>
                  <h1 className="text-sm font-pop font-semibold">
                    {item.title}
                  </h1>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              key={"pgm.card.element"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              <Carousel dotPosition={"right"} autoplay>
                {sliderItems.map((item, i) => (
                  <div kay={`car.card.item.x${i}`} className="h-44 md:h-36">
                    <div className="flex flex-row items-start gap-8">
                      <h1 className="w-44">{item.ico}</h1>

                      <div className="flex flex-col ">
                        <h1 className="text-xl font-pop font-semibold">
                          {sliderItems[i].title}
                        </h1>
                        <h1 className="text-sm mt-4 w-[85%] font-pop text-left font-light">
                          {sliderItems[i].description}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          )}
          <div />
        </>
      )}
    </motion.div>
  );
};

export default BlogSlider;
