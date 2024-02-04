import React from "react";
import hero from "../imgs/herox.png";
import qrcode from "../imgs/qrcode.png";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className=" md:h-[80vh] px-6 pb-8 md:pb-0 md:px-24 w-full justify-center items-center border-b border-slate-100/40 bg-white/40 flex ">
      <div className="flex flex-col-reverse mt-24  md:mt-0 md:flex-row w-full md:h-[60%] items-center max-w-5xl justify-between">
        <div className="flex flex-col w-[90%] md:w-1/2 h-full justify-between">
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
              className="text-base font-mont text-slate-600 font-medium"
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
              class="text-7xl shadow-red-600 font-pop font-black bg-gradient-to-tl from-green-300 via-blue-600 to-purple-800 bg-clip-text text-transparent"
            >
              COLAB 2024
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
              className="font-mont font-semibold text-lg mt-0.5 text-slate-600 "
            >
              Industry Openhouse&nbsp;
              <span className="bg-white px-2 rounded-full p-1">
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
            className=" font-mont text-slate-500 text-xs text-justify"
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
          <img src={hero} className=" object-contain ml-auto" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
