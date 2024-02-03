import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import lalm from "../imgs/lalminar.png";
function Card() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, translateY: 20, transition: { duration: 0.5 } }}
      className=" flex flex-col justify-between font-mont transition-all gap-2 p-4 w-[45%] border border-orange-400 hover:border-orange-100  h-64 bg-gradient-to-br from-orange-400 to-orange-500 hover:to-orange-600 rounded-lg shadow-md "
    >
      {isInView && (
        <div className="flex flex-row relative">
          <div className="flex flex-col gap-4 p-4">
            <div>
              <motion.h1
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
                className="text-sm font-semibold text-white "
              >
                About
              </motion.h1>
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
                className="text-2xl font-semibold text-white "
              >
                IIT Gandhinagar
              </motion.h1>
            </div>
            <motion.h1
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
              className="text-xs text-justify font-light text-white"
            >
              Founded in 2008, the Indian Institute of Technology Gandhinagar
              (IITGN) has made significant strides in academics,
              interdisciplinary research, and institutional governance in just
              15 years...
            </motion.h1>
            <motion.button
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
          </div>
          <motion.img
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
            src={lalm}
            className="w-32 -mt-12"
            alt=""
          />
        </div>
      )}
    </motion.div>
  );
}

export default Card;
