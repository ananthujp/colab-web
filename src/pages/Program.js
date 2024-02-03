import React from "react";
import shape from "./shape.svg";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  LightBulbIcon,
  LinkIcon,
  MagnifyingGlassPlusIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
function Program() {
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
    <div className="flex justify-center w-full h-screen bg-slate-50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-200/60 before:to-transparent ">
      <div
        class="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={shape}
          class="max-w-none -hue-rotate-30	"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div
        class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={shape}
          class="max-w-none opacity-50 hue-rotate-90	"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div className="z-50 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full p-24 flex flex-col md:flex-wrap h-[90%] bg-gradient-to-br from-white to-white">
          {sliderItems.map((item, i) => (
            <div className="h-36 w-1/2 m-4">
              <div className="flex flex-row items-start gap-6">
                {item.ico && item.ico}

                <div className="flex flex-col ">
                  <h1 className="text-xl font-pop font-semibold">
                    {sliderItems[i].title}
                  </h1>
                  <h1 className="text-sm mt-2 w-[85%] font-pop text-justify font-light">
                    {sliderItems[i].description}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-50 bottom-4 pointer-events-auto">
        <Navbar />
      </div>
    </div>
  );
}

export default Program;
