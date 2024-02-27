import React from "react";
import Page from "./Page";
import colab from "../imgs/colab-logo.svg";
import { motion } from "framer-motion";
const Load = () => (
  <div className="flex flex-col items-center mx-auto my-auto">
    <img src={colab} alt="" className="w-36 drop-shadow-lg shadow-black" />
    <div className="relative w-36 h-3 mt-4 rounded-full bg-slate-300">
      <motion.div
        layout
        style={{ borderRadius: 999999 }}
        animate={{ x: [0, 112, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute left-0 w-8 bg-slate-600 h-full rounded-full"
      />
    </div>
  </div>
);
function PageLoad({ title, whiteScreen }) {
  return whiteScreen ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Load />
    </div>
  ) : (
    <Page title={title}>
      <Load />
    </Page>
  );
}

export default PageLoad;
