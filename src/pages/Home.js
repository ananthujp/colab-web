import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Card from "../components/Card";
// import Carousel from "./components/Carousel";
import ExpandCard from "../components/Expand";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BlogSlider from "../components/SwipeCard";
// import BlogSlider from "./components/SwipeCard";
import shape from "./shape.svg";
import Imageslider from "../components/Imageslider";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
function Home() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  });
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      key={`main`}
      style={{
        backgroundPosition: "right",
        backgroundSize: "auto",
      }}
      className="flex bg-opacity-20 bg-[url('tp238-background-02.png')] min-h-screen  flex-col items-center justify-between py-12 px-24"
    >
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
          class="max-w-none"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div className="z-10 max-w-5xl flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        {!hidden && (
          <motion.div
            key={`top.bar`}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            className="fixed z-[100] py-6 top-0 bg-gradient-to-b w-full from-slate-400/50 to-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          >
            <div className="flex w-full mt-4 mx-auto flex-row max-w-5xl justify-between">
              <div>Logo</div>
              <Navbar key={`nav.bar`} />
            </div>
          </motion.div>
        )}
        <div className="mt-4" />
        <Hero />
        <div className="flex flex-wrap w-full gap-4 justify-between">
          <Card />
          <BlogSlider delay={2} />
          <ExpandCard />
          <Imageslider />
          <Contact delay={2} />
          {/* <SwipeCard /> */}
          {/* <Carousel /> */}
        </div>
      </div>
    </motion.main>
  );
}

export default Home;
