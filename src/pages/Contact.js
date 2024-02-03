import React from "react";
import shape from "./shape.svg";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  EnvelopeIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import mapImg from "../imgs/map-cont.png";
function Contact() {
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
        <div className="flex relative flex-col w-[95%] gap-4 bg-gradient-to-br shadow-md border border-white from-white to-slate-200 mt-4 rounded-lg h-[85%] ">
          <XMarkIcon
            onClick={() => {
              setNav({ from: "contact", to: "/" });
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
              CONTACT
            </motion.p>
          </div>
          <motion.div
            layoutId={`pgm.contact`}
            className="w-full px-24 mt-4 flex flex-col md:flex-wrap h-[90%]"
          >
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className=" bg-gradient-to-br from-slate-100/50 to-slate-200/50 my-auto hover:border-white flex flex-col justify-between p-4 rounded-lg"
            >
              <motion.div className="flex flex-row gap-3 justify-between">
                <motion.img
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: 0.5 + 0.4 },
                  }}
                  src={mapImg}
                  className="h-44 rounded-md origin-bottom-left  object-cover border border-slate-100"
                  alt=""
                />
                <div className="flex flex-col items-start gap-2">
                  <motion.h1
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: 0.5 + 0.5 },
                    }}
                    className="text-lg font-semibold font-pop"
                  >
                    Indian Institute of Technology Gandhinagar
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: 0.5 + 0.6 },
                    }}
                    className="text-xs font-light font-mont"
                  >
                    Palaj, Gandhinagar - 382055, Gujarat
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: 0.5 + 0.7 },
                    }}
                    className="flex flex-row gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
                  >
                    <EnvelopeIcon className="w-5 text-orange-400" />
                    <h1 className="text-xs font-normal font-mont">
                      industryconnect@iitgn.ac.in
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: 0.5 + 0.8 },
                    }}
                    className="flex flex-row gap-2 cursor-pointer items-center bg-gradient-to-br from-orange-400 to-orange-500 hover:to-orange-600 border border-slate-300 p-2 rounded-lg shadow-sm w-full"
                  >
                    <PencilSquareIcon className="w-5 text-white" />
                    <h1 className="text-xs font-normal text-white font-mont">
                      Openhouse Registration form
                    </h1>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute z-50 scale-90 bottom-4 pointer-events-auto">
        <Navbar sel={5} dark />
      </div>
    </motion.div>
  );
}

export default Contact;
