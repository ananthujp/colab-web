import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import shape from "./shape.svg";
import Page from "./Page";

function About() {
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <Page no={1} page="about" title="About">
      <motion.div className="w-full px-24 mt-4 flex flex-col md:flex-wrap h-screen md:h-[90%]"></motion.div>
    </Page>
  );
}

export default About;
