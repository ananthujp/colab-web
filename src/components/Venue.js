import { MapPinIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import mapImg from "../imgs/venue.avif";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
function Venue({ delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { setNav } = useReducer();
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
          className="mt-8 md:mt-0 md:h-full bg-white  border border-gray-200 hover:border-gray-400 flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="flex flex-row mb-2 justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg border-b pb-2 mb-2 border-slate-300 flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-salte-600"
            >
              <MapPinIcon className="w-5" />
              <h1>Venue</h1>
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
                className="rounded-full h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
              >
                More
              </motion.div>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-3 gap-3">
            <motion.img
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.4 },
              }}
              src={mapImg}
              className="h-full w-full rounded-md scale-150 origin-bottom-left  object-cover border border-slate-100"
              alt=""
            />
            {/* <YoutubeBackground
              className="h-full w-full rounded-md scale-150 origin-bottom-left  object-cover border border-slate-100"
              videoId={"pKehMbvu-zs"}
            /> */}
            <motion.div className="flex flex-col md:w-[80%] mx-auto md:flex-row justify-between h-full">
              <div className="flex flex-col items-start gap-2">
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: 0.5 * delay + 0.5 },
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
                    transition: { duration: 0.5, delay: 0.5 * delay + 0.6 },
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
                    transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                  }}
                  className="flex flex-row gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
                >
                  <MapIcon className="w-5 text-slate-400" />
                  <h1 className="text-xs font-normal font-mont">
                    View in google maps
                  </h1>
                </motion.div>
              </div>
            </motion.div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.072086805178!2d72.68927158334336!3d23.21245895661326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%20Gandhinagar%20(IIT%20Gandhinagar)!5e0!3m2!1sen!2sin!4v1707280576375!5m2!1sen!2sin"
              className="border-0 w-full h-full rounded-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Venue;
