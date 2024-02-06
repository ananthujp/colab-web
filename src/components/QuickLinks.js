import { LinkIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
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
function QuickLinks({ delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <div ref={ref} className="w-[90%] md:w-full md:h-auto">
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
          className="mt-8 md:mt-0 md:h-full bg-gradient-to-br from-slate-100/50 to-slate-200/50  border border-gray-200 hover:border-white flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="flex flex-row mb-2 justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-slate-600"
            >
              <LinkIcon className="w-5" />
              <h1>Quick Links</h1>
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
          <div className="flex flex-col text-gray-400 font-mont">
            <h1>IITGN Research Page</h1>
            <h1>IITGNRP</h1>
            <h1>IIEC</h1>
            <h1>IR&P</h1>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default QuickLinks;
