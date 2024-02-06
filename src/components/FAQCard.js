import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
import { Collapse } from "antd";
function FAQCard({ delay = 0 }) {
  const Data = [
    {
      label: "About CoLab 2024",
      data: [
        {
          q: "What is CoLab 2024?",
          a: "CoLab 2024 is a dynamic convergence of academia and industry at the Indian Institute of Technology Gandhinagar (IITGN). In its inaugural edition, the event aims to foster robust partnerships to create smart solutions for key societal challenges.",
        },
        {
          q: "When and where is CoLab 2024 taking place?",
          a: "CoLab 2024 is scheduled to take place on March 2nd at the IITGN.",
        },
        {
          q: "Who should attend CoLab 2024?",
          a: "CoLab 2024 welcomes industry professionals and start-ups keen on engaging in collaborative research with IITGN to tackle societal challenges. The event will also benefit industry professionals interested in understanding the IITGN academic and research ecosystems.",
        },
        {
          q: "How can I register for CoLab 2024?",
          a: "You can register for CoLab 2024 through this link or visit the official event website for registration. Registered candidates will receive a confirmatory email",
        },
        {
          a: "Is there a registration fee for attending CoLab 2024?",
          q: "No.",
        },
      ],
    },

    {
      label: "Event Details",
      data: [
        {
          q: "How will CoLab 2024 facilitate industry-academia engagements?",
          a: "CoLab 2024 will provide structured sessions, workshops, and networking opportunities to promote meaningful interactions and collaborations between industry professionals and academic researchers.",
        },
        {
          q: "Are there specific themes or areas of interest for industry-academia collaborations at CoLab 2024?",
          a: "CoLab 2024 is open to collaborations across various domains, promoting diverse partnerships in research areas such as Biomedical Engineering, Healthcare and Pharmaceuticals, Manufacturing, Sustainability, AI & Computing, and more. Further details can be found here. ",
        },
        {
          q: "What will CoLab 2024 offer to participating industries?",
          a: "The Industry Open House is a showcase of IITGN’s research prowess and provides avenues for the establishment of new sustainable industry partnerships. Find out more about the event highlights here.",
        },
        {
          q: "Can I schedule one-on-one meetings with academic researchers during CoLab 2024?",
          a: "Yes, there will be dedicated networking sessions and opportunities to schedule one-on-one meetings with academic researchers to discuss potential collaborations.",
        },
        {
          q: "How can I stay updated on CoLab 2024 news and announcements?",
          a: "To stay informed about CoLab 2024 updates, please regularly check the official event website and follow IITGN's official communication channels. Regular email updates will be sent to those who have registered for the event.",
        },
      ],
    },
    {
      label: "Event Logistics",
      data: [
        {
          q: "Will there be an onsite registration process?",
          a: "Yes. Confirmed participants should report at the Registration Desk set-up outside Jasubhai Auditorium between 9:00 am and 9:30 am. You will receive your registration kits and be directed to the event's first session.",
        },
        {
          q: "Are there accommodation options available?",
          a: "Accommodation will be available at the IITGN Guest House on a payment basis. You can check the details here and reach out to us at industryconnect@iitgn.ac.in if you wish to avail yourself of the accommodation. Alternatively, you can write to us to enquire about alternate accommodation in the campus vicinity.",
        },
        {
          q: "Will there be any parking availability?",
          a: "There will be parking facilities available within the campus. Please enter the campus from Gate 1 and follow the signage",
        },
        {
          q: "Where can I find the complete event schedule?",
          a: "You can find the preliminary details on the website. The final schedule will be updated on the website soon. Confirmed participants will also be intimated via email.",
        },
      ],
    },
  ];
  const navigate = useNavigate();

  const items = Data.map((item, index) => {
    return {
      key: index,
      label: item.label,
      children: (
        <Collapse
          className="bg-transparent"
          items={item.data.map((data, indexj) => {
            return {
              key: `faq.child${(index, indexj)}`,
              label: data.q,
              children: data.a,
            };
          })}
          defaultActiveKey={["1"]}
        />
      ),
    };
  });
  const { nav, setNav } = useReducer();
  return (
    <div className="bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 hover:border-white w-[90%] md:w-full flex flex-col justify-between p-4 rounded-lg">
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
        className="text-lg mb-4 md:mb-2 flex items-start gap-2 justify-between  flex-row font-pop font-semibold text-slate-800"
      >
        <div className="flex flex-row gap-2 items-center">
          <CalendarDaysIcon className="w-6" />
          <h1>FAQ</h1>
        </div>
        <motion.button
          //   onClick={() => {
          //     setNav({ from: "/", to: "program" });
          //     navigate("/" + "program");
          //   }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          exit={{
            opacity: 0,
            translateY: 20,
            transition: { duration: 0.5 },
          }}
          className="rounded-full font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
        >
          More
        </motion.button>
      </motion.h1>
      <Collapse
        items={items}
        className="w-full min-w-full"
        defaultActiveKey={["1"]}
      />
    </div>
  );
}

export default FAQCard;
