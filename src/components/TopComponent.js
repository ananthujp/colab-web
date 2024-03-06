import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../logo.png";
import logo2 from "../imgs/iitgn-logo.png";
import { Popover, Dropdown } from "antd";
import Navbar from "../components/Navbar";
import useReducer from "../hook/reducerHook";
import { Link } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "framer-motion";

function TopComponent({ location, setOpen }) {
  const { scrollY } = useScroll();
  const { user, logout } = useReducer();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current > 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const items = [
    {
      key: "1",
      label: <div onClick={() => logout()}>Logout</div>,
    },
  ];
  const loc = (val) => {
    switch (val) {
      case "about":
        return 1;
        break;
      case "program":
        return 2;
        break;
      case "themes":
        return 3;
        break;
      case "contact":
        return 5;
        break;
      case "speakers":
        return 4;
        break;
      case "agenda":
        return 1;
        break;
      default:
        return 0;
    }
  };
  const loginScreen = !user ? (
    <div
      onClick={() => setOpen(true)}
      className="bg-green-400 cursor-pointer font-pop px-4 hidden md:flex items-center hover:bg-opacity-75 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-green-300 rounded-full  text-white"
    >
      Login
    </div>
  ) : (
    <>
      <Link to="admin">Admin Dashboard</Link>
      <Dropdown menu={{ items }}>
        <div className="bg-green-400 cursor-pointer font-pop px-4 hidden md:flex items-center hover:bg-opacity-75 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-green-300 rounded-full  text-white">
          {user?.email}
        </div>
      </Dropdown>
    </>
  );
  return (
    <motion.div
      key={`top.bar`}
      //layoutId="top.bar.id"
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { duration: 0.5 },
      // }}
      // exit={{
      //   opacity: 0,
      //   transition: { duration: 0.5, delay: 0.1 },
      // }}
      className={`fixed z-[100] py-4  border-slate-200/40 ${
        location.pathname === "/"
          ? `bg-gradient-to-b  to-transparent ${
              !hidden
                ? "top-0 w-full from-green-200/20"
                : "md:right-0 md:w-auto md:from-transparent from-slate-500/90 w-full md:top-1/3 "
            } border-b`
          : "bg-gradient-to-t w-full  from-slate-700/60 md:from-green-200/20 to-transparent bottom-0 -mt-2 border-t"
      }   bg-clip-padding xbackdrop-filter backdrop-blur-sm bg-opacity-10`}
    >
      <div
        className={`flex w-full mt-2 mx-auto flex-row max-w-5xl ${
          location.pathname === "/" ? "justify-between" : "justify-center"
        }`}
      >
        {location.pathname === "/" && (
          <div
            className={`flex flex-row mx-6 ${hidden && " md:hidden"} md:mx-0`}
          >
            <img src={logo} className="w-8 h-8 mt-0.5" alt="" />
            <div className="flex flex-col mt-auto mb-1 ml-1.5">
              <motion.h1 className="text-xs font-pop text-slate-300 xtext-slate-600 font-light">
                IIT Gandhinagar
              </motion.h1>
              <p className=" font-pop font-bold text-xs md:text-lg -mt-1 text-white">
                CoLab 2024
              </p>
            </div>
          </div>
        )}
        <Navbar
          key={`nav.bar`}
          vert={hidden && location.pathname === "/"}
          sel={loc(location.pathname.split("/")[1])}
        />
        {location.pathname === "/" && !hidden && (
          <Popover content={loginScreen} title="Admin Login">
            <img
              src={logo2}
              className="w-10 h-10 saturate-0 brightness-200 hidden md:block my-auto"
              alt=""
            />
          </Popover>
        )}
      </div>
    </motion.div>
  );
}

export default TopComponent;
