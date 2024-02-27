import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
import { Collapse } from "antd";
import { showConfirm } from "./Footer";
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
          a: (
            <h1>
              You can register for CoLab 2024 through this
              <div
                className="text-blue-500 inline-block cursor-pointer"
                onClick={() =>
                  showConfirm({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfQp4bK8REhP0ZYBA88kRSSzoCd5jnYBSE8Ui6fUZiMpoa_sQ/viewform",
                  })
                }
              >
                &nbsp;link&nbsp;
              </div>
              or visit this website’s
              <Link
                className="text-blue-500 inline-block cursor-pointer"
                to="contact"
              >
                &nbsp;Contact Page&nbsp;
              </Link>
              for registration. Registered candidates will receive updates from
              the organising team via email.
            </h1>
          ),
        },
        {
          q: "Is there a registration fee for attending CoLab 2024?",
          a: "No, there is no registration fee for CoLab 2024.",
        },
        {
          q: "I am not an industry professional, can I still attend CoLab?",
          a: "Sure! However, as mentioned before, CoLab is an event primarily for industry professionals to build connections with each other and IITGN. If you are a student, academician, or researcher, feel free to visit the campus during the event. Kindly note that the event update emails, kits, guest house, and other logistics are reserved for registered industry professionals.",
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
          a: (
            <h1>
              CoLab 2024 is open to collaborations across various domains,
              promoting diverse partnerships in research areas such as
              Biomedical Engineering, Healthcare and Pharmaceuticals,
              Manufacturing, Sustainability, AI & Computing, and more. Further
              details can be found
              <Link
                className="text-blue-500 inline-block cursor-pointer"
                to="themes"
              >
                &nbsp;here.&nbsp;
              </Link>
            </h1>
          ),
        },
        {
          q: "What will CoLab 2024 offer to participating industries?",
          a: (
            <h1>
              The Industry Open House is a showcase of IITGN’s research prowess
              and provides avenues for the establishment of new sustainable
              industry partnerships. Find out more about the event highlights
              <Link
                className="text-blue-500 inline-block cursor-pointer"
                to="program"
              >
                &nbsp;here.&nbsp;
              </Link>
            </h1>
          ),
        },
        {
          q: "Can I schedule one-on-one meetings with academic researchers during CoLab 2024?",
          a: "Yes, there will be dedicated networking sessions and opportunities to schedule one-on-one meetings with academic researchers to discuss potential collaborations. Please note that all meeting requests are subject to the faculty member's availability on the event day. ",
        },
        {
          q: "How can I stay updated on CoLab 2024 news and announcements?",
          a: "To stay informed about CoLab 2024 updates, please regularly check the official event website and follow IITGN's official communication channels. Regular email updates will be sent to  industrial professionals who have registered for the event via the registration form.",
        },
      ],
    },
    {
      label: "Event Logistics",
      data: [
        {
          q: "Will there be an onsite registration process?",
          a: "Yes. Confirmed participants should report at the Registration Desk between 8:30 am and 9:45 am. You will receive your registration kits and be directed to the event's first session.",
        },
        {
          q: "Are there accommodation options available?",
          a: (
            <>
              Accommodation will be available at the IITGN Guest House on a
              payment basis. Rooms can be booked for Rs 2700 + applicable taxes
              per day. The check-in time is 2:00 pm, and the out time is 12:00
              pm. Payment needs to be made at the reception. To request guest
              house accommodation, please write to us at
              industryconnect@iitgn.ac.in before 25th February or fill out this
              <div
                className="text-blue-500 inline-block cursor-pointer"
                onClick={() =>
                  showConfirm({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSce_JaZobC2LXtRHAkfhljNP_Ld-YxPrK2VwCivk9iRiowLUw/viewform?usp=sharing",
                  })
                }
              >
                &nbsp;form
              </div>
              . Booking will be done on a first-come-first-serve basis.
              Alternatively, you can refer to this
              <div
                className="text-blue-500 inline-block cursor-pointer"
                onClick={() =>
                  showConfirm({
                    url: "https://docs.google.com/document/d/1eQ8l2m86GWUM89t9hgWb4MltY7DLz7al/edit",
                  })
                }
              >
                &nbsp;list&nbsp;
              </div>
              of hotels to find accommodation in nearby areas.
            </>
          ),
        },
        {
          q: "Will there be any parking availability?",
          a: "There will be parking facilities available within the campus. Please enter the campus from Gate 1 and follow the signage.",
        },
        {
          q: "Where can I find the complete event schedule?",
          a: (
            <h1>
              You can find the preliminary details on the{" "}
              <Link
                className="text-blue-500 inline-block cursor-pointer"
                to="agenda"
              >
                &nbsp;website
              </Link>
              . The final schedule will be updated on the website soon.
              Confirmed participants will also be intimated via email.
            </h1>
          ),
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
    <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm xbg-opacity-10 border border-gray-200 hover:border-gray-400 w-[90%] md:w-full flex flex-col justify-between p-4 rounded-lg">
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
        <div className="flex border-b pb-2 mb-2 border-slate-300 flex-row gap-2 items-center">
          <ChatBubbleLeftRightIcon className="w-6" />
          <h1>Frequently Asked Questions</h1>
        </div>
        {/* <motion.button
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
        </motion.button> */}
      </motion.h1>
      <Collapse
        items={items}
        className="w-full min-w-full"
        //defaultActiveKey={["1"]}
      />
    </div>
  );
}

export default FAQCard;
