import React from "react";
import shape from "./shape.svg";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  EnvelopeIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import mapImg from "../imgs/map-cont.png";
import Page from "./Page";
function Contact() {
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();

  return (
    <Page no={5} page="contact" title="Contact">
      <motion.div
        layoutId={`pgm.contact`}
        className="w-full px-24 mt-4 flex flex-col h-[90vh] md:flex-wrap md:h-[90%]"
      >
        <motion.div
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
          className=" bg-gradient-to-br from-slate-100/50 h-full to-slate-200/50 my-auto hover:border-white flex flex-col justify-between p-4 rounded-lg"
        >
          <motion.div className="flex flex-col xmd:flex-row h-full gap-12 md:gap-3 xjustify-between">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.072086805178!2d72.68927158334336!3d23.21245895661326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%20Gandhinagar%20(IIT%20Gandhinagar)!5e0!3m2!1sen!2sin!4v1707280576375!5m2!1sen!2sin"
              className="border-0 w-full h-full  rounded-md"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-start gap-2">
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 + 0.5 },
                }}
                className="text-lg font-semibold font-pop"
              >
                Indian Institute of Technology Gandhinagar
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 + 0.6 },
                }}
                className="text-xs font-light font-mont"
              >
                Palaj, Gandhinagar - 382055, Gujarat
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 + 0.7 },
                }}
                className="flex flex-row gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <EnvelopeIcon className="w-5 text-orange-400" />
                <h1 className="text-xs font-normal font-mont">
                  industryconnect@iitgn.ac.in
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 + 0.8 },
                }}
                className="flex flex-row gap-2 cursor-pointer items-center bg-gradient-to-br from-orange-400 to-orange-500 hover:to-orange-600 border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <PencilSquareIcon className="w-5 text-white" />
                <h1 className="text-xs font-normal text-white font-mont">
                  Openhouse Registration form
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Page>
  );
}

export default Contact;
