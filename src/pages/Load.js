import React, { useEffect, useState } from "react";
import colab from "../imgs/colab-logo.svg";
import { motion } from "framer-motion";
import useReducer from "../hook/reducerHook";
const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  await Promise.all(promises);
};
function Load() {
  const [width, setWidth] = useState(0);
  const { setLoad } = useReducer();
  const imgs = ["../imgs/ray.png", "../imgs/hero.gif"];

  useEffect(() => {
    cacheImages(imgs);
    const timer = setTimeout(() => {
      setWidth(20);
      setTimeout(() => {
        setWidth(100);
        setTimeout(() => {
          setLoad(false);
        }, 500);
      }, 600);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src={colab} alt="" className="w-36 drop-shadow-lg shadow-black" />
        <h1 className="text-2xl font-pop font-black text-slate-900">
          COLAB 2024
        </h1>
        <h1 className="text-xs font-pop font-light -mt-1 text-slate-500">
          Industry Open House
        </h1>
        <div className="relative w-24 h-3 mt-4 rounded-full bg-slate-300">
          <motion.div
            layout
            style={{ borderRadius: 999999, width: `${width}%` }}
            className="absolute left-0 bg-slate-600 w-0 h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Load;
