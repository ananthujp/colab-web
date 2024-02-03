import React from "react";
import shape from "./shape.svg";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";

function Program() {
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  const theme = "w-16 text-white bg-gradient-to-br p-4 rounded-full ";
  const sliderItems = [
    {
      title: "Innovative Showcase",
      description:
        "Immerse yourself in a showcase of innovative projects and research endeavors led by IITGN students and faculty. Witness firsthand the ground-breaking solutions emerging from the institute.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <LightBulbIcon className={`${theme} from-fuchsia-500 to-purple-600`} />
      ),
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry leaders, professionals, and IITGN's academic community. Build relationships, exchange ideas, and explore potential collaborations in a relaxed and interactive setting.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: <LinkIcon className={`${theme} from-green-400 to-cyan-500`} />,
    },
    {
      title: "Panel Discussions",
      description:
        "Engage in insightful discussions led by industry experts and academic leaders. Explore current trends, challenges, and opportunities in various fields, gaining valuable perspectives from both sectors.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <MicrophoneIcon className={`${theme} from-purple-500 to-indigo-500`} />
      ),
    },
    {
      title: "Recruitment Insights",
      description:
        "For companies seeking talent, gain insights into the caliber of IITGN students. Discover potential candidates for recruitment or internship programs, fostering a talent pipeline for your organization.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <MagnifyingGlassPlusIcon
          className={`${theme} from-yellow-400 to-orange-500`}
        />
      ),
    },
    {
      title: "Collaboration Possibilities",
      description:
        "Explore avenues for collaboration between industry and academia. Identify common areas of interest and potential projects that align with your organization's goals.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <BuildingOffice2Icon className={`${theme} from-pink-500 to-rose-500`} />
      ),
    },
  ];
  return (
    <motion.div
      style={{
        backgroundPosition: "right",
        backgroundSize: "auto",
      }}
      className="flex justify-center w-full h-screen bg-[url('tp238-background-02.png')] "
    >
      <div class="absolute w-full h-full pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />

      <motion.div className="z-50 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex relative flex-col w-[95%] gap-4 shadow-md border border-white bg-gradient-to-br from-white to-slate-200 mt-4 rounded-lg h-[85%] ">
          <XMarkIcon
            onClick={() => {
              setNav({ from: "program", to: "/" });
              navigate("/");
            }}
            className="absolute cursor-pointer hover:text-slate-400 text-slate-600 right-4 w-8 h-8 m-4"
          />
          <div className="mt-4">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className="text-base font-semibold font-mont text-gray-400 text-center"
            >
              COLAB 2024
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              class="text-5xl font-pop text-center font-black bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent"
            >
              EVENT HIGHLIGHTS
            </motion.p>
          </div>
          <motion.div
            layoutId={`pgm.theme`}
            className="w-full px-24 mt-4 flex flex-col md:flex-wrap h-[90%]"
          >
            {sliderItems.map((item, i) => (
              <div className="h-36 w-1/2 m-4">
                <div className="flex flex-row items-start gap-6">
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
                    {item.ico}
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
                      {sliderItems[i].title}
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
                      className="text-xs mt-2 w-[85%] text-slate-400 font-pop text-justify font-light"
                    >
                      {sliderItems[i].description}
                    </motion.h1>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute z-50 scale-90 bottom-4 pointer-events-auto">
        <Navbar sel={2} dark />
      </div>
    </motion.div>
  );
}

export default Program;
