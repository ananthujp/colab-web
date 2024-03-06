import React from "react";

import { motion } from "framer-motion";
import ray from "../imgs/ray.png";
import hero from "../imgs/hero.gif";
import logo from "../imgs/colab-logo.svg";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <motion.div
      layoutId="hero.bg.black"
      className={
        " md:h-[60vh] px-6 relative overflow-hidden pb-8 md:pb-0 md:px-24 w-full justify-center items-center  border-b-4 border-green-100   xbg-white/40 flex " +
        " bg-slate-900"
      }
    >
      <div className="absolute w-full h-screen pointer-events-none pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />
      <div
        className="absolute  blur-2xl opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={ray}
          className="max-w-none -hue-rotate-30	"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div className="flex flex-col-reverse mt-24  md:mt-0 md:flex-row w-full md:h-[80%] items-center max-w-5xl justify-between">
        <div className="flex flex-col w-[90%] md:w-1/2 h-full justify-center">
          {/* <div className="h-2" /> */}
          <div className="w-full ml-auto mr-0">
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className=" shadow-red-600 mr-0 ml-auto flex flex-row md:justify-end items-end font-pop font-black bg-white xbg-gradient-to-tl from-green-300 via-blue-600 to-purple-800 bg-clip-text text-transparent"
            >
              {/* <span className="text-7xl ">C</span> */}
              <img
                src={logo}
                className="inline-block w-16 md:w-24 h-16 md:h-24 -mr-3 -mb-2 -ml-2"
                alt=""
              />
              <span className="text-3xl md:text-5xl mx-0.5">O</span>
              <span className="text-5xl md:text-7xl mx-0.5 -mb-0.5">L</span>
              <span className="text-3xl md:text-5xl mx-0.5">AB</span>
              <span className="text-5xl md:text-7xl ml-4">2024</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className="font-mont md:text-right text-center font-semibold text-base md:text-lg mt-0.5 text-slate-300 xtext-slate-600 "
            >
              An IIT Gandhinagar Industry Open House&nbsp;
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className=" font-mont text-center md:text-right mt-4 xtext-slate-500 text-slate-400 text-xs "
            >
              CoLab 2024 is a dynamic convergence of academia and industry at
              the Indian Institute of Technology Gandhinagar.
            </motion.p>

            <motion.div
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
              className="flex flex-row gap-2 items-center mt-10 md:mt-6 justify-center md:justify-end md:gap-4 md:items-center"
            >
              <div
                onClick={() => navigate("slidedeck")}
                className="bg-white cursor-pointer font-mont text-slate-800 ml-2 px-4 rounded-full py-1"
              >
                March 2, 2024
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfQp4bK8REhP0ZYBA88kRSSzoCd5jnYBSE8Ui6fUZiMpoa_sQ/viewform"
                  )
                }
                className="bg-green-400 flex w-24 py-1 cursor-pointer font-pop px-4 md:flex items-center hover:bg-opacity-75 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-green-300 rounded-full  text-white"
              >
                Register
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
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
          className="w-[80%] md:w-1/2"
        >
          <img
            src={hero}
            className="scale-100 pointer-events-none mix-blend-lighten object-contain ml-auto"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
