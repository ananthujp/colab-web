import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/colab-logo.svg";
import Page from "./Page";
import lalminar from "../imgs/lalminar.png";
import gitlogo from "../imgs/github-mark.png";
function About() {
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <Page no={1} page="about" title="About">
      <motion.div className="w-full overflow-auto px-24 mt-4 gap-6 flex flex-col h-screen md:h-[90%]">
        <div className="flex flex-col ">
          <h1 className="font-mont text-lg font-medium text-slate-800">
            About CoLab 2024
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <img src={logo} alt="" className="w-32 -mt-2" />
            <p className="font-mont font-base text-justify text-slate-600">
              CoLab 2024 is a dynamic convergence of academia and industry at
              the Indian Institute of Technology Gandhinagar. This event aims to
              nurture robust partnerships to create smart solutions for key
              societal challenges. Join us and become a part of a collaborative
              research space where industry professionals, academicians, and
              students pave the way for a better tomorrow.
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-mont text-lg font-medium text-slate-800">
            About IIT Gandhinagar
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <img src={lalminar} alt="" className="w-36 h-56 -mt-2" />
            <p className="font-mont font-base text-justify text-slate-600">
              Founded in 2008, the Indian Institute of Technology Gandhinagar
              (IITGN) has made significant strides in academics,
              interdisciplinary research, and institutional governance in just
              15 years. We offer diverse programs in engineering, sciences, and
              humanities, creating an intellectually stimulating environment to
              equip students with essential skills for societal challenges.
              Recognized for research quality, IITGN ranks among India's best.
              Our faculty has received prestigious awards like the Swarnajayanti
              Fellowship and Shanti Swarup Bhatnagar. Philanthropic support aids
              unique initiatives benefiting students, faculty, and the
              community. IITGN actively promotes interdisciplinary research
              through specialized centers like the Center for Biomedical
              Engineering, Creative Learning (CCL), Archaeological Sciences,
              Design and Innovation, Safety Engineering, Cognitive and Brain
              Sciences, and Sustainable Development. Experts collaborate on
              real-world problems, as seen in our Center for Biomedical
              Engineering uniting robotics, medical, and electronics
              professionals for Automated Rehabilitation and Prosthetic
              Techniques. With research funded by over 35 agencies,
              collaboration extends beyond our institute. Driven by a vision to
              be a premier institution in science, technology, and humanities,
              IIT Gandhinagar aims to produce outstanding scientists, engineers,
              leaders, and entrepreneurs to meet society's evolving needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-mont text-lg font-semibold text-slate-800">
            About Website
          </h1>
          <div className="flex flex-row gap-2">
            <h1 className="font-mont font-medium">Developer :</h1>
            <h1
              onClick={() => window.open("https://github.com/ananthujp")}
              className="flex flex-row cursor-pointer font-mont font-base text-slate-600"
            >
              Ananthu J P
              <span>
                <img className="w-4 ml-2" src={gitlogo} alt="" />
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-3 mb-4">
            <h1 className="font-mont font-medium">Vectors courtesy :</h1>
            <h1 className="font-mont font-base text-slate-500">
              macrovector, pikisuperstar, upklyak, brgfx, freepik, vectorpocket
            </h1>
          </div>
        </div>
      </motion.div>
    </Page>
  );
}

export default About;
