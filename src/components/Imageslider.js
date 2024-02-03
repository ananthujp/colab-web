import { PhotoIcon } from "@heroicons/react/24/solid";
import { Carousel } from "antd";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
const Images = [
  {
    url: "https://hss.iitgn.ac.in/newsite/wp-content/uploads/2021/02/IMG_0997.jpg",
  },
  {
    url: "https://hss.iitgn.ac.in/newsite/wp-content/uploads/2021/02/IMG_0997.jpg",
  },
];
function Imageslider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" w-[45%]" ref={ref}>
      {isInView && (
        <motion.div
          className="bg-yellow-100 mt-8 group overflow-hidden relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-200 hover:border-white flex flex-col justify-between rounded-lg"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, translateY: 20, transition: { duration: 0.5 } }}
        >
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="absolute z-50 bottom-2 right-2 text-lg flex items-start gap-2   flex-row font-pop font-semibold text-white"
          >
            <PhotoIcon className="w-6" />
            <h1>Gallery</h1>
          </motion.h1>
          <Carousel className="relative" dotPosition={"top"} autoplay>
            {Images.map((item) => (
              <img
                src={item.url}
                className="w-full h-64 object-cover "
                alt=""
              />
            ))}
          </Carousel>
          <div className="absolute bg-gradient-to-br w-full h-64  from-blue-200/25 group-hover:from-blue-100/25 to-slate-600/40" />
        </motion.div>
      )}
    </div>
  );
}

export default Imageslider;
