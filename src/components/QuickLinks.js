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
import { Modal } from "antd";
function QuickLinks({ delay }) {
  const ref = useRef(null);
  const { confirm } = Modal;
  const isInView = useInView(ref, { once: true });
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  const showConfirm = ({ url }) => {
    confirm({
      title: "External Link",
      icon: <LinkIcon className="w-5 text-green-400 mr-1" />,
      content: "You are now leaving CoLab's website to an external link.",
      okButtonProps: { className: "bg-blue-400 " },
      onOk() {
        window.open(url, "_blank");
      },
      // onCancel() {
      //   console.log('Cancel');
      // },
    });
  };
  const items = [
    {
      label: "IITGN Main Page",
      link: "https://iitgn.ac.in/",
    },
    {
      label: "IITGN Research",
      link: "https://iitgn.ac.in/research",
    },
    {
      label: "Research Facilities",
      link: "https://iitgn.ac.in/research/facilities",
    },
    {
      label: "Research Park",
      link: "https://iitgnrp.com/",
    },
    {
      label: "Incubation Center",
      link: "https://iieciitgn.com/",
    },
    {
      label: "Career Development Services",
      link: "https://cds.iitgn.ac.in/",
    },
    {
      label: "Industrial Relations & Projects",
      link: "https://students.iitgn.ac.in/irp-council-repository/",
    },
  ];
  return (
    <div ref={ref} className="w-[100%] md:w-full z-50 md:h-auto">
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
          className="mt-8 md:mt-0 md:h-full bg-gradient-to-br from-slate-100/50 to-slate-200/50  border border-gray-200 hover:border-white flex flex-col  p-4 rounded-lg"
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
            <div></div>
          </div>
          <ol className="flex flex-col ml-4 gap-2 text-gray-400 font-mont">
            {items.map((item) => (
              <li
                onClick={() => showConfirm({ url: item.link })}
                className="flex flex-row gap-2 group cursor-pointer"
              >
                {item.label}
                <span>
                  <LinkIcon className="w-4 hidden  group-hover:block" />
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      )}
    </div>
  );
}

export default QuickLinks;
