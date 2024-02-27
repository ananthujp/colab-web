import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, XMarkIcon } from "@heroicons/react/24/solid";

import useReducer from "../hook/reducerHook";
import ray from "../imgs/ray.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";
function Page({ children, page, no, title, hideBreadcrumb }) {
  const { setNav } = useReducer();
  const navigate = useNavigate();
  const currentRoute = useLocation().pathname;
  return (
    <motion.div
      layoutId="hero.bg.black"
      className="flex justify-center w-full  h-screen bg-gradient-to-br from-slate-900 to-slate-700 bg-no-repeat xbg-[url('tp238-background-03.png')] "
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

      <motion.div className="z-50 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex ">
        <div className="flex relative flex-col w-[95%] gap-4 bg-gradient-to-br h-full shadow-md border border-white from-white to-slate-200 mt-4 rounded-lg mb-32 md:mb-0 md:h-[85%] ">
          <div className="absolute flex flex-row z-10 items-center w-full justify-between p-2 ml-1">
            <div className="md:hidden block" />

            <Breadcrumb separator=">" className="hidden md:block">
              {currentRoute?.split("/").map((item, index, arr) => (
                <Breadcrumb.Item
                  onClick={() =>
                    navigate(`/${arr.slice(0, index + 1).join("")}`)
                  }
                  className={` ${
                    index !== 0 && "px-2 py-1 border border-slate-300"
                  } z-50 bg-gradient-to-br  cursor-pointer rounded-md  ${
                    index === arr.length - 1
                      ? "text-white border-indigo-100   from-indigo-400 to-indigo-600"
                      : "text-slate-600   from-slate-100 to-slate-300"
                  }`}
                >
                  {item === "" ? (
                    <HomeIcon className="w-7 h-7 -mt-1 border border-slate-300 my-auto bg-gradient-to-br p-1 rounded-md" />
                  ) : (
                    item
                  )}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>

            <XMarkIcon
              onClick={() => {
                setNav({ from: page, to: "/" });
                navigate("/");
              }}
              className="cursor-pointer hover:text-slate-400 text-slate-600 right-4 w-8 h-8 m-4"
            />
          </div>
          <div className={`${hideBreadcrumb ? "mt-12" : "mt-2"} relative`}>
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
    </motion.div>
  );
}

export default Page;
