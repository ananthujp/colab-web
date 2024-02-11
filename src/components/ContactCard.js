import { PhoneArrowDownLeftIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  MapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import mapImg from "../imgs/map-cont.png";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
function Contact({ delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <div ref={ref} className="w-[100%] group z-50 md:w-full md:h-auto">
      {isInView && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.5 * delay },
          }}
          exit={{
            opacity: 0,
            translateY: 20,
            transition: { duration: 0.5 },
          }}
          className="mt-8 md:mt-0 md:h-full bg-gradient-to-br from-slate-100/50 to-slate-200/50  border border-gray-200 hover:border-gray-400 flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="flex flex-row mb-2 justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-indigo-600"
            >
              <PhoneArrowDownLeftIcon className="w-5" />
              <h1>Contact</h1>
            </motion.h1>
            <div>
              <motion.div
                onClick={() => {
                  setNav({ from: "/", to: "contact" });
                  navigate("/" + "contact");
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                key={`exp.card.btn`}
                className="bg-gradient-to-br flex font-mont from-slate-50 to-slate-200 text-slate-600 text-xs px-4 py-1 rounded-full font-medium cursor-pointer hover:to-slate-300"
              >
                More
              </motion.div>
            </div>
          </div>

          <motion.div className="flex flex-col w-full md:flex-row justify-between h-full">
            <div className="flex flex-col group-hover:flex-row items-start w-full gap-2">
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.5 },
                }}
                className="text-lg group-hover:hidden font-semibold font-pop"
              >
                Indian Institute of Technology Gandhinagar
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.6 },
                }}
                className="text-xs group-hover:hidden font-light font-mont"
              >
                Palaj, Gandhinagar - 382055, Gujarat
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                }}
                className="flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <PhoneIcon className="w-5 group-hover:w-16 text-indigo-400" />
                <h1 className="text-xs font-normal font-mont">
                  +91 7923952136
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                }}
                className="flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <EnvelopeIcon className="w-5 group-hover:w-16 text-indigo-400" />
                <h1 className="text-xs font-normal font-mont">
                  industryconnect@iitgn.ac.in
                </h1>
              </motion.div>
              <motion.div
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfQp4bK8REhP0ZYBA88kRSSzoCd5jnYBSE8Ui6fUZiMpoa_sQ/viewform"
                  )
                }
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.8 },
                }}
                className="flex flex-row group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 cursor-pointer items-center bg-gradient-to-br from-indigo-400 to-indigo-500 transition-all hover:from-indigo-300 hover:to-indigo-400 border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <PencilSquareIcon className="w-5 group-hover:w-16 text-white" />
                <h1 className="text-xs font-normal  group-hover:text-center text-white font-mont">
                  CoLab 2024 Registration form
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
