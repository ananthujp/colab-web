import {
  ArrowUturnLeftIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { loadSlim } from "@tsparticles/slim";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { findChildObject } from "./StallPreview";
import { cardVar } from "./profData";
import { useNavigate, useParams } from "react-router-dom";

const directionFunction = (ind) => {
  switch (ind) {
    case 0:
      return {
        opacity: 0,
        translateX: 0,
        translateY: 80,
        transition: { duration: ind * 0.1 },
      };
    case 1:
      return {
        opacity: 0,
        translateX: 0,
        translateY: 80,
        transition: { duration: ind * 0.1 },
      };
    case 2:
      return {
        opacity: 0,
        translateX: 100,
        translateY: 0,
        transition: { duration: ind * 0.1 },
      };
    case 3:
      return {
        opacity: 1,
        translateX: 0,
        translateY: 0,
        transition: { delay: 0.0 },
      };
    case 4:
      return {
        opacity: 0,
        translateX: -100,
        translateY: 0,
        transition: { duration: ind * 0.1 },
      };
    case 5:
      return {
        opacity: 0,
        translateX: 0,
        translateY: -80,
        transition: { duration: ind * 0.1 },
      };
    case 6:
      return {
        opacity: 0,
        translateX: 0,
        translateY: -80,
        transition: { duration: ind * 0.1 },
      };
    case 7:
      return {
        opacity: 0,
        translateX: 0,
        translateY: -80,
        transition: { duration: ind * 0.1 },
      };
    default:
      return {
        opacity: 0,
        translateX: 0,
        translateY: -80,
        transition: { duration: ind * 0.1 },
      };
  }
};
const GradientTop = () => (
  <>
    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  </>
);
const SparklesCore = ({ minSize, maxSize, particleDensity, particleColor }) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };
  return (
    init && (
      <Particles
        id="tsparticles"
        className="h-auto w-full z-50"
        particlesLoaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fullScreen: {
            enable: false,
            zIndex: 1,
          },

          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            bounce: {
              horizontal: {
                value: 1,
              },
              vertical: {
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: particleColor || "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
              },
            },
            effect: {
              close: true,
              fill: true,
              options: {},
              type: {},
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
              },
              random: false,
              size: false,
              speed: {
                min: 0.1,
                max: 1,
              },
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 400,
                height: 400,
              },
              limit: {
                mode: "delete",
                value: 0,
              },
              value: particleDensity || 120,
            },
            opacity: {
              value: {
                min: 0.1,
                max: 1,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 4,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {},
              type: "circle",
            },
            size: {
              value: {
                min: minSize || 1,
                max: maxSize || 3,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  value: 3,
                },
                rate: {
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            life: {
              count: 0,
              delay: {
                value: 0,
                sync: false,
              },
              duration: {
                value: 0,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "#fff",
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};
const TextGradient = ({ text, keyID }) => {
  return (
    <div className="bg-slate-800 border relative  border-slate-50/20 rounded-lg p-4 w-full h-full">
      <GradientTop />
      {/* Core component */}

      <h1 className="absolute top-4 font-extrabold z-10  p-2 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
        {text}
      </h1>
    </div>
  );
};

const Timer = ({ time }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dt = 0.2;
  const [val, setVal] = useState(0);

  const dashoffset = (x) => ((100 - x) / 100) * circumference;
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prevVal) => prevVal + dt);
    }, time * dt * 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      key={`timer.${val}`}
      onClick={() => setVal(dashoffset(10))}
      className="flex  flex-col items-center justify-around p-4 w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800"
    >
      <motion.svg width="100" height="100">
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth="8"
          r={radius}
          cx="50"
          cy="50"
          className="stroke-slate-700"
        />
        <motion.circle
          // animate={{ strokeDashoffset: [251.2, 200, 150, 75, 0] }}
          transition={{ ease: "easeOut", duration: 5 }}
          fill="transparent"
          strokeWidth="8"
          className="-rotate-90 stroke-slate-400 transform origin-center transition-all duration-1000 ease-in-out"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: dashoffset(val) }}
          r={radius}
          cx="50"
          cy="50"
        />
      </motion.svg>
      <h1 className="text-lg font-medium text-white text-center">
        Next slide in {time - parseInt((val * time) / 100)}s..
      </h1>
    </div>
  );
};
const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <div
      key={`timer.back`}
      onClick={() => navigate(-1)}
      className="flex  flex-col cursor-pointer items-center justify-around p-4 w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800"
    >
      <ArrowUturnLeftIcon className="w-16 text-slate-100" />
      <h1 className="text-lg font-medium text-white text-center">Back</h1>
    </div>
  );
};
const Papers = ({ data }) => (
  <div className="flex  flex-col justify-between p-4 w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800">
    <div className="flex flex-col gap-1">
      {data?.map((item, j) => (
        <div key={`pap.main.${j}`} className="flex flex-col gap-0">
          <h1 className="text-xs font-medium text-slate-200">{item.domain}</h1>
          <ol>
            {item.title?.map((ite, i) => (
              <li
                key={`paper.${i}`}
                className="text-xs font-light text-slate-400"
              >
                {ite.data}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>

    <div className="flex flex-row items-end justify-between gap-2">
      <h1 className="text-lg font-medium text-white text-left">
        Projects/Publications
      </h1>
      <DocumentTextIcon className="w-12 h-12 text-white" />
    </div>
  </div>
);
const SideCards = ({ sect, domain, title, icon }) => (
  <div className="flex flex-col relative justify-between w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800">
    <div
      className="absolute w-full h-full  pattern-wavy pattern-blue-500 pattern-bg-slate-200 
  pattern-size-16 pattern-opacity-5"
    />
    <div className="flex flex-col w-full h-full justify-between p-4 ">
      <div className="w-8 h-8 text-white">{icon}</div>
      {sect && (
        <ol className="list-disc ml-4">
          {sect.map((item, i) => (
            <li key={`sd.${i}`} className="text-xs text-slate-400">
              {item.data}
            </li>
          ))}
        </ol>
      )}
      {domain && (
        <ol className="list-disc ml-4">
          {domain.map((item, i) => (
            <li key={`dom.${i}`} className="text-xs text-slate-400">
              {item.data}
            </li>
          ))}
        </ol>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium text-white text-left">{title}</h1>
      </div>
    </div>
  </div>
);
const ResearchBackground = ({ title, content, icon, obj, app }) => (
  <div className="flex relative flex-col justify-between p-4 w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800">
    <div
      className="absolute left-0 w-full h-2/3 pattern-dots pattern-slate-500 pattern-bg-transparent 
  pattern-size-2 pattern-opacity-20"
    />
    {app && (
      <ol className="list-disc ml-8 mt-8">
        {app.map((item, i) => (
          <li key={`app.${i}`} className="text-xs text-slate-200">
            {item.data}
          </li>
        ))}
      </ol>
    )}
    {obj && (
      <h1 className="ml-4 mt-8 text-xs font-light text-slate-200">{obj}</h1>
    )}
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium text-white text-left">{title}</h1>
        <h1 className="text-xs font-light text-slate-400 text-left">
          Research Background
        </h1>
      </div>
      <div className="w-12 h-12 text-white">{icon}</div>
    </div>
  </div>
);
const AuthorCard = ({ facArray }) => {
  const fac = facArray && findChildObject(cardVar, facArray).child;
  return (
    <div className="relative bg-slate-800 flex flex-col py-4 gap-4 items-center justify-between rounded-lg w-full h-full overflow-hidden border border-slate-400/30">
      {/* <div
      className="absolute w-full h-full  pattern-wavy pattern-blue-500 pattern-bg-white 
  pattern-size-16 pattern-opacity-5"
    /> */}

      <div className="h-full flex items-center justify-center">
        <div className="absolute border border-slate-300/5 scale-95 rounded-full h-28 w-28 bg-slate-400/10" />
        <div className="absolute border border-slate-300/5 scale-95 rounded-full h-36 w-36 bg-slate-400/5" />
        <img
          className="w-20 h-20 z-10 object-cover rounded-full"
          src={fac?.img}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-0 text-center font-mont">
        <h1 className="text-lg font-medium text-white">{fac?.name}</h1>
        <h1 className="text-sm font-light text-slate-400 ">{fac?.dept}</h1>
        <h1 className="text-xs font-light text-slate-400 ">{fac?.email}</h1>
      </div>
    </div>
  );
};

const Card = ({ children, i, keyID }) => {
  return children ? (
    <motion.div
      key={`card.${i}.${keyID}`}
      initial={directionFunction(i)}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
        transition: { duration: 1, delay: i === 3 ? 0 : 1 + i * 0.1 },
      }}
      exit={directionFunction(i)}
      className="w-full h-full "
    >
      {children}
    </motion.div>
  ) : (
    <div className="flex  flex-col justify-between p-4 w-full h-full bg-gradient-to-br rounded-lg border border-slate-400/5 from-slate-800  to-slate-700 via-slate-800">
      <BuildingOffice2Icon className="w-12 h-12 text-white" />
      <ol>
        <li className="text-sm text-white">Manufacturing</li>
        <li className="text-sm text-white">Defense, military, and space</li>
      </ol>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium text-white text-left">Domains</h1>
      </div>
    </div>
  );
};
function CardMain({ keyID, time, data }) {
  return (
    <motion.div
      key={`card.main.${keyID}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1, delay: 0 } }}
      exit={{ opacity: 1, transition: { duration: 0.1, delay: 0.5 } }}
      className="max-w-5xl mx-auto  z-50 py-8 h-full gap-4 flex flex-col items-center justify-between w-full"
    >
      <div className="flex flex-row h-full w-full gap-4">
        <Card keyID={keyID} i={0}>
          <ResearchBackground
            title="Objective"
            obj={data?.obj}
            icon={<PresentationChartBarIcon />}
          />
        </Card>
        <Card keyID={keyID} i={1}>
          <ResearchBackground
            title="Approaches Used"
            app={data?.app}
            icon={<ChartPieIcon />}
          />
        </Card>
      </div>
      <div className="flex flex-row h-full w-full gap-4">
        <div className="w-1/5">
          <Card keyID={keyID} i={2}>
            <SideCards
              title="Domains"
              icon={<BuildingOffice2Icon />}
              domain={data?.domains}
            />
          </Card>
        </div>
        <Card xkeyID={keyID} i={3}>
          <TextGradient keyID={keyID} text={data?.title} />
        </Card>
        <div className="w-2/5">
          <Card keyID={keyID} i={4}>
            <SideCards
              title="Key Sectors"
              icon={<QueueListIcon />}
              sect={data?.sect}
            />
          </Card>
        </div>
      </div>
      <div className="flex flex-row h-full w-full gap-4">
        <div className="w-2/6">
          <Card keyID={keyID} i={5}>
            <AuthorCard facArray={data?.faculty} />
          </Card>
        </div>
        <div className="w-3/6">
          <Card keyID={keyID} i={6}>
            <Papers data={data?.projects} />
          </Card>
        </div>
        <div className="w-1/6">
          <Card keyID={keyID} i={7}>
            {time !== 0 ? <Timer time={time} /> : <Backbutton />}
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
function SliderDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const [slides, setSlides] = useState([]);
  const handle = useFullScreenHandle();
  const time = 30;
  useEffect(() => {
    params.slideId
      ? getDoc(doc(db, "slides", params.slideId)).then((item) =>
          setSlides({ data: item.data(), id: item.id })
        )
      : getDocs(collection(db, "slides")).then((querySnapshot) => {
          setSlides(
            querySnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
          );
        });
  }, []);
  useEffect(() => {
    const interval =
      slides &&
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides?.length);
      }, time * 1000);

    return () => clearInterval(interval);
  }, [slides]);
  return (
    <FullScreen handle={handle}>
      <div className="bg-gradient-to-br relative from-slate-900 to-slate-900 w-full h-screen">
        {/* <img
        src={glow}
        alt=""
        className="absolute rotate-180 z-0 blur-3xl opacity-20 -top-0 w-full"
      /> */}
        <SparklesCore
          // background="transparent"
          key={`sparkles.${"keyI"}`}
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="absolute opacity-20 z-50 bottom-0 h-auto w-full"
          particleColor="rgb(203, 213, 225)"
        />
        {/* <ArrowsPointingOutIcon
            onClick={() => handle.enter()}
            className="absolute right-4 top-4 z-50 w-8 h-8 text-white"
          /> */}
        <div className="absolute   h-full top-0  w-full">
          {params.slideId ? (
            <CardMain
              time={0}
              data={slides?.data}
              key={slides?.id}
              keyID={slides?.id}
            />
          ) : (
            <AnimatePresence mode="wait">
              {slides && (
                <CardMain
                  time={time}
                  data={slides[currentIndex]?.data}
                  key={slides[currentIndex]?.id}
                  keyID={slides[currentIndex]?.id}
                />
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </FullScreen>
  );
}
export default SliderDeck;
