import React from "react";
import { motion } from "framer-motion";
import {
  BeakerIcon,
  BuildingOffice2Icon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

import Page from "./Page";

function Program() {
  const theme =
    "lg:w-16 w-12 md:w-12 text-white bg-gradient-to-br p-4 rounded-full ";
  const sliderItems = [
    {
      title: "Research Expo",
      description:
        "A showcase of IITGN’s research prowess, tech innovations, and transformative solutions.",

      ico: (
        <LightBulbIcon className={`${theme} from-fuchsia-500 to-purple-600`} />
      ),
    },
    {
      title: "Networking & Collaboration",
      description:
        "Build partnerships, exchange ideas, and explore potential collaborations with industries, start-ups, and researchers.",

      ico: <LinkIcon className={`${theme} from-green-400 to-cyan-500`} />,
    },
    {
      title: "Panel Discussions",
      description:
        "Engage in discussions about current trends, challenges, and opportunities in various fields with industry experts and academic leaders.",

      ico: (
        <MicrophoneIcon className={`${theme} from-purple-500 to-indigo-500`} />
      ),
    },
    {
      title: "Recruitment Insights",
      description:
        "Leverage IITGN’s talent for your organization’s recruitment or internship programs",
      ico: (
        <MagnifyingGlassPlusIcon
          className={`${theme} from-yellow-400 to-orange-500`}
        />
      ),
    },
    {
      title: "CSR Avenues",
      description:
        "Potential opportunities to fulfill your organization’s Corporate Social Responsibility through various IIT Gandhinagar initiatives.",
      ico: (
        <BuildingOffice2Icon className={`${theme} from-pink-500 to-rose-500`} />
      ),
    },
    {
      title: "Lab Tours",
      description:
        "Get first-hand insights about the diverse research at IITGN by visiting various research laboratories. ",
      ico: <BeakerIcon className={`${theme} from-pink-500 to-rose-500`} />,
    },
  ];
  return (
    <Page no={2} page="program" title="Event Highlights">
      <motion.div
        layoutId={`pgm.theme`}
        className="w-full overflow-y-auto px-6 mb-4 gap-2 md:px-24 mt-4 grid grid-cols-1 md:grid-cols-2 md:h-[90%]"
      >
        {sliderItems.map((item, i) => (
          <div className="h-auto flex w-full border p-4 rounded-md border-indigo-100 bg-indigo-50 mx-4">
            <div className="flex h-16 flex-row items-start gap-4">
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: i * 0.1 },
                }}
                exit={{
                  opacity: 0,
                  translateY: 20,
                  transition: { duration: 0.5, delay: i * 0.1 },
                }}
              >
                {item.ico}
              </motion.div>

              <div className="flex flex-col ">
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  className="text-xl font-pop font-semibold"
                >
                  {sliderItems[i].title}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                  }}
                  className="text-xs mt-2 w-[85%] text-slate-400 font-pop text-left font-light"
                >
                  {sliderItems[i].description}
                </motion.h1>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Page>
  );
}

export default Program;
