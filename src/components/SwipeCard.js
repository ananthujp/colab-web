import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Carousel } from "antd";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
const BlogSlider = ({ delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const theme = "w-32 text-white bg-gradient-to-br p-4 rounded-full ";
  const sliderItems = [
    {
      title: "Innovative Showcase",
      description:
        "Immerse yourself in a showcase of innovative projects and research endeavors led by IITGN students and faculty. Witness firsthand the ground-breaking solutions emerging from the institute.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <LightBulbIcon className={`${theme} from-fuchsia-500 to-purple-600`} />
      ),
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry leaders, professionals, and IITGN's academic community. Build relationships, exchange ideas, and explore potential collaborations in a relaxed and interactive setting.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: <LinkIcon className={`${theme} from-green-400 to-cyan-500`} />,
    },
    {
      title: "Panel Discussions",
      description:
        "Engage in insightful discussions led by industry experts and academic leaders. Explore current trends, challenges, and opportunities in various fields, gaining valuable perspectives from both sectors.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <MicrophoneIcon className={`${theme} from-purple-500 to-indigo-500`} />
      ),
    },
    {
      title: "Recruitment Insights",
      description:
        "For companies seeking talent, gain insights into the caliber of IITGN students. Discover potential candidates for recruitment or internship programs, fostering a talent pipeline for your organization.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <MagnifyingGlassPlusIcon
          className={`${theme} from-yellow-400 to-orange-500`}
        />
      ),
    },
    {
      title: "Collaboration Possibilities",
      description:
        "Explore avenues for collaboration between industry and academia. Identify common areas of interest and potential projects that align with your organization's goals.",
      image: "https://pbs.twimg.com/media/FHHfJKCVgAIt_wp.jpg:large",
      ico: (
        <BuildingOffice2Icon className={`${theme} from-pink-500 to-rose-500`} />
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
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
      className="bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 hover:border-white w-[53%] flex flex-col justify-between p-4 rounded-lg"
    >
      {isInView && (
        <>
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.5 * delay + 0.1 },
            }}
            exit={{
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }}
            className="text-lg flex items-start gap-2   flex-row font-pop font-semibold text-slate-600"
          >
            <CalendarDaysIcon className="w-6" />
            <h1>Event Highlights</h1>
          </motion.h1>
          <Carousel dotPosition={"right"} autoplay>
            {sliderItems.map((item, i) => (
              <div className="h-36">
                <div className="flex flex-row items-start gap-8">
                  {item.ico && item.ico}

                  <div className="flex flex-col ">
                    <h1 className="text-xl font-pop font-semibold">
                      {sliderItems[i].title}
                    </h1>
                    <h1 className="text-sm mt-4 w-[85%] font-pop text-justify font-light">
                      {sliderItems[i].description}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div />
        </>
      )}
    </motion.div>
  );
};

export default BlogSlider;
