import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
function Card() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const { nav, setNav } = useReducer();

  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlightPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      ref={ref}
      layoutId={`pgm.about`}
      initial={nav.from !== "about" && { opacity: 0, translateY: -20 }}
      animate={
        nav.from !== "about" && {
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }
      }
      exit={
        nav.to !== "about"
          ? {
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }
          : null
      }
      className=" flex flex-col group relative justify-between font-mont transition-all gap-2 p-4 w-[90%] md:w-full  hover:border-orange-100  md:h-64 border border-indigo-400 bg-gradient-to-br from-purple-400 to-indigo-500 hover:to-indigo-600 rounded-lg shadow-md "
    >
      <div
        onMouseMove={handleMouseMove}
        className="absolute hidden group-hover:block rounded-lg top-0 left-0 w-full h-full overflow-hidden"
      >
        <div
          className="pattern-dots pattern-white pattern-size-2 pattern-opacity-80 "
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundImage: `url('https://www.iitgn.ac.in/openhouse/assets/images/index-meta.jpeg')`, // replace 'your-image-url' with your image URL
            backgroundSize: "cover",
            maskImage: `radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, black 0%, transparent 20%)`,
            WebkitMaskImage: `radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, black 0%, transparent 20%)`,
          }}
        />
        {/* Rest of your component */}
      </div>
      {isInView && (
        <div className="flex flex-row relative">
          <div className="flex flex-col gap-2 p-4">
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
                CoLab 2024
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
              className="text-xs text-justify font-base text-white"
            >
              CoLab 2024 is a dynamic convergence of academia and industry at
              the Indian Institute of Technology Gandhinagar. This event aims to
              nurture robust partnerships to create smart solutions for key
              societal challenges. Join us and become a part of a collaborative
              research space where industry professionals, academicians, and
              students pave the way for a better tomorrow
            </motion.h1>
            <motion.button
              onClick={() => {
                setNav({ from: "/", to: "about" });
                navigate("/" + "about");
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
              className="rounded-full font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
            >
              More
            </motion.button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
