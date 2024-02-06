import React from "react";

import qrcode from "../imgs/qrcode.png";
import { motion } from "framer-motion";
import ray from "../imgs/ray.svg";
import hero from "../imgs/hero.gif";
function Hero() {
  return (
    <div
      className={
        " md:h-[75vh] px-6 pb-8 md:pb-0 md:px-24 w-full justify-center items-center  border-b-4 border-slate-100   xbg-white/40 flex " +
        " bg-slate-900"
      }
    >
      <div class="absolute w-full h-screen pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />
      <div
        class="absolute  blur-2xl opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={ray}
          class="max-w-none -hue-rotate-30	"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div className="flex flex-col-reverse mt-24  md:mt-0 md:flex-row w-full md:h-[70%] items-center max-w-5xl justify-between">
        <div className="flex flex-col w-[90%] md:w-2/3 h-full justify-between">
          <div />
          <div>
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
              className="text-base font-mont text-slate-300 xtext-slate-600 font-medium"
            >
              IIT Gandhinagar
            </motion.h1>
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
              class=" shadow-red-600 font-pop font-black bg-gradient-to-tl from-green-300 via-blue-600 to-purple-800 bg-clip-text text-transparent"
            >
              <span className="text-7xl ">C</span>
              <span className="text-5xl mx-0.5">O</span>
              <span className="text-7xl mx-0.5">L</span>
              <span className="text-5xl mx-0.5">AB</span>
              <span className="text-7xl mx-4">2024</span>
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
              className="font-mont font-semibold text-lg mt-0.5 text-slate-300 xtext-slate-600 "
            >
              Industry Openhouse&nbsp;
              <span className="bg-white text-slate-800 ml-2 px-2 rounded-full p-1">
                March 2, 2024
              </span>
            </motion.h1>
          </div>
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
            className=" font-mont xtext-slate-500 text-slate-400 text-xs text-justify"
          >
            Join us for a dynamic convergence of academia and industry at the
            CoLab 2024, Industry Open House hosted by the Indian Institute of
            Technology Gandhinagar (IITGN). This brief yet impactful event is
            designed to bridge the gap between theoretical knowledge and
            real-world applications, fostering collaboration, innovation, and
            meaningful partnerships.
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
          >
            <h2 className="text-xs font-mont mb-2 text-gray-600">
              For Registration :
            </h2>
            <img src={qrcode} className="w-24" alt="" />
          </motion.div>
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
            className="scale-150 sfilter mix-blend-lighten object-contain ml-auto"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
