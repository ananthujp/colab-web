import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import ray from "../imgs/ray.png";
import { useNavigate } from "react-router-dom";
function Page({ children, page, no, title, backButton }) {
  const { setNav } = useReducer();
  const navigate = useNavigate();

  return (
    <motion.div
      // style={{
      //   backgroundPosition: "right",
      //   backgroundSize: "auto",
      // }}
      layoutId="hero.bg.black"
      className="flex justify-center w-full h-full md:h-screen bg-gradient-to-br from-slate-900 to-slate-700 bg-no-repeat xbg-[url('tp238-background-03.png')] "
    >
      <div class="absolute w-full h-full pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />
      <div
        className="absolute top-0 right-0 w-full h-full z-100 blur-2xl opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={ray}
          className="max-w-none -hue-rotate-30 h-full	w-full"
          // width="852"
          // height="582"
          alt="Illustration"
        />
      </div>

      <motion.div className="z-50 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex relative flex-col w-[95%] gap-4 bg-gradient-to-br shadow-md border border-white from-white to-slate-200 mt-4 rounded-lg mb-32 md:mb-0 md:h-[85%] ">
          {backButton}
          <XMarkIcon
            onClick={() => {
              setNav({ from: page, to: "/" });
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
              class="text-5xl font-pop uppercase text-center font-black bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent"
            >
              {title}
            </motion.p>
          </div>
          {children}
        </div>
      </motion.div>
      {/* <div className="fixed md:absolute h-24 -mb-2 bottom-0 border border-slate-200/40 bg-gradient-to-t w-full from-slate-500/70 to-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50 pointer-events-auto">
        <div className=" flex mt-6 w-auto items-end justify-center scale-90">
          <Navbar sel={no} dark />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Page;