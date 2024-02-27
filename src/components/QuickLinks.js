import { LinkIcon } from "@heroicons/react/24/solid";

import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Modal } from "antd";
function QuickLinks({ delay }) {
  const ref = useRef(null);
  const { confirm } = Modal;
  const isInView = useInView(ref, { once: true });

  const showConfirm = ({ url }) => {
    confirm({
      title: "External Link",
      icon: <LinkIcon className="w-5 text-green-400 mr-1" />,
      content: `You are now leaving CoLab's website to an external link("${url}").`,
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
    <div ref={ref} className="w-[100%] group md:w-full z-50 md:h-auto">
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
          className="mt-8 md:mt-0 md:h-full bg-white  border border-gray-200 hover:border-gray-400 flex flex-col  p-4 rounded-lg"
        >
          <div className="flex flex-row mb-2 justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg flex border-b pb-2 border-slate-300 mb-2 items-center gap-2 ml-2  flex-row font-pop font-semibold text-slate-600"
            >
              <LinkIcon className="w-5" />
              <h1>Quick Links</h1>
            </motion.h1>
            <div></div>
          </div>
          <ol className="flex flex-col ml-4 gap-2 text-gray-400 font-mont">
            {items.map((item, i) => (
              <li
                key={`quick.link.card.${i}`}
                onClick={() => showConfirm({ url: item.link })}
                className="flex flex-row hover:font-semibold hover:text-indigo-600 gap-2 cursor-pointer"
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
