import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import shape from "./shape.svg";

function About() {
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <motion.div
      style={{
        backgroundPosition: "right",
        backgroundSize: "auto",
      }}
      className="flex justify-center w-full h-screen bg-[url('tp238-background-02.png')]"
    >
      <div class="absolute w-full h-full pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />

      {/* <motion.div
        layoutId="blue_rays"
        class="absolute bottom-0 left-0 translate-y-1/2 translate-x-1/5 blur-3xl opacity-90 pointer-events-none"
        aria-hidden="true"
      >
        <img src={shape} class="max-w-none w-[90%]" alt="Illustration" />
      </motion.div> */}
      <motion.div className="z-50 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <motion.div
          layoutId={`pgm.about`}
          className="flex relative flex-col w-[95%] gap-4 border shadow-md  bg-gradient-to-br  from-white to-slate-200 border-gray-200 hover:border-white mt-4 rounded-lg h-[85%] "
        >
          <XMarkIcon
            onClick={() => {
              setNav({ from: "about", to: "/" });
              navigate("/");
            }}
            className="absolute cursor-pointer hover:text-slate-400 text-white right-4 w-8 h-8 m-4"
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
              className="text-base font-semibold font-mont text-slate-200 text-center"
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
              ABOUT
            </motion.p>
          </div>
          <motion.div className="w-full px-24 mt-4 flex flex-col md:flex-wrap h-[90%]"></motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute z-50 scale-90 bottom-4 pointer-events-auto">
        <Navbar sel={1} dark />
      </div>
    </motion.div>
  );
}

export default About;
