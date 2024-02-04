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
import bio from "../imgs/bio.png";
import man from "../imgs/man.png";
import ene from "../imgs/energy.png";
import ai from "../imgs/ai.png";
import food from "../imgs/food.png";
import def from "../imgs/def.png";
import pharma from "../imgs/pharma.png";
import climate from "../imgs/climate.png";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import Page from "./Page";
function Theme() {
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
        className="w-full px-16 flex flex-col md:flex-wrap md:h-[90%]"
      >
        {cardVar.map((item, i) => (
          <div className="w-full md:w-1/2 mx-4 my-2">
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
                  {cardVar[i].bg}
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
