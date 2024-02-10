import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
function Speakers() {
  return (
    <Page no={4} page="speakers" title="Speakers & Panellists">
      <motion.div className="w-full px-24 mt-4 flex flex-col md:flex-wrap h-screen md:h-[90%]"></motion.div>
    </Page>
  );
}

export default Speakers;
