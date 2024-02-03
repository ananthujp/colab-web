import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Program", link: "program" },
  { label: "Domains/Themes", link: "" },
  { label: "Speakers", link: "" },
  { label: "Registration", link: "" },
  { label: "Contact", link: "" },
];

function MyDropdown() {
  return (
    <div className=" top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item, i) => (
                <Menu.Item key={`menu.${i}`}>
                  {({ active }) => (
                    <button
                      className={`group relative flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <h1 className={`z-50 ${active && " invert"}`}>{item}</h1>

                      {active && (
                        <motion.div
                          layoutId="mobile.menu"
                          className="absolute inset-0 bg-indigo-400 w-full h-full rounded-md"
                        />
                      )}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function Navbar() {
  const [selected, setSelected] = React.useState(0);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        // initial={{ opacity: 0, translateY: -10 }}
        // animate={{
        //   opacity: 1,
        //   translateY: 0,
        //   transition: { duration: 0.5 },
        // }}
        // exit={{
        //   opacity: 0,
        //   translateY: -20,
        //   transition: { duration: 0.5 },
        // }}
        className=" bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 md:flex hidden mx-2  font-medium flex-row hover:bg-slate-100/20 transition-all rounded-full font-mont"
      >
        {items.map((item, i) => (
          <motion.div
            // initial={{ opacity: 0, translateX: -20 }}
            // animate={{
            //   opacity: 1,
            //   translateX: 0,
            //   transition: { duration: 0.5, delay: 0.1 * i + 0.1 },
            // }}
            // exit={{
            //   opacity: 0,
            //   translateX: -20,
            //   transition: { duration: 0.5, delay: 0.1 * i + 0.1 },
            // }}
            onClick={() => {
              setSelected(i);
              navigate(item.link);
            }}
            className="relative cursor-pointer  py-2 px-4"
          >
            {i === selected && (
              <motion.div
                layoutId="nav_bg"
                style={{ borderRadius: 999999 }}
                className="absolute border border-slate-300 rounded-full inset-0 bg-gradient-to-br from-slate-50 to-slate-200"
              />
            )}
            <span
              className={`z-50 relative xtext-slate-600  ${
                selected === i ? " text-slate-600" : " text-white"
              } `}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <div className="md:hidden flex gap-4 flex-row">
        <MyDropdown />
      </div>
    </AnimatePresence>
  );
}

export default Navbar;
