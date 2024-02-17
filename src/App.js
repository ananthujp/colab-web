import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  HashRouter,
  RouterProvider,
  createHashRouter,
  Form,
  Link,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Home from "./pages/Home";
import Program from "./pages/Program";
import About from "./pages/About";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
import Speakers from "./pages/Speakers";
import { Dropdown, Popover } from "antd";
import logo from "./logo.png";
import logo2 from "./imgs/iitgn-logo.png";

import Navbar from "./components/Navbar";
import useReducer from "./hook/reducerHook";
import Load from "./pages/Load";
import Agenda from "./pages/Agenda";
import { useEffect, useState } from "react";
import Dash from "./pages/Dashboard";
import Privacy from "./pages/Privacy";
import Virtual from "./pages/Virtual";
import Create from "./pages/Create";
import CreateLab from "./pages/CreateLab";
import VirtualPost from "./pages/VirtualPost";
import ReactGA from "react-ga4";
ReactGA.initialize("G-5JCED7TBZT");

function App() {
  const location = useLocation();
  const { load, user, logout } = useReducer();
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: location.pathname,
    });

    console.log(location.pathname + location.search);
  }, [location]);
  const [hidden, setHidden] = useState(false);

  const items = [
    {
      key: "1",
      label: <div onClick={() => logout()}>Logout</div>,
    },
  ];
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current > 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
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
  return (
    <AnimatePresence mode="wait">
      {/* <HashRouter basename="/"> */}
      {!load ? (
        <div>
          <motion.div
            key={`top.bar`}
            //layoutId="top.bar.id"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
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
                  className={`flex flex-row mx-6 ${
                    hidden && " md:hidden"
                  } md:mx-0`}
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
          <Routes basename="/" location={location} key={location.pathname}>
            <Route path="/" element={<Home open={open} setOpen={setOpen} />} />
            <Route path="about" element={<About />} />
            <Route path="program" element={<Program />} />
            <Route path="themes" element={<Theme />}>
              <Route path=":postId" element={<Theme />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="speakers" element={<Speakers />}>
              <Route path=":speakerId" element={<Speakers />} />
            </Route>
            <Route path="admin" element={<Dash />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="virtual">
              <Route path="" element={<Virtual />} />
              <Route path="create" element={<CreateLab />} />

              <Route path=":virtualId">
                <Route path="" element={<Virtual />} />
                <Route path="create" element={<Create />}>
                  <Route path=":createId" element={<Create />} />
                </Route>
                <Route path=":createId" element={<VirtualPost />} />
              </Route>
            </Route>
            <Route path="agenda" element={<Agenda />}>
              <Route path=":postId" element={<Theme />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <Load />
      )}
      {/* </HashRouter> */}
      {/* <RouterProvider router={router} /> */}
    </AnimatePresence>
  );
}

export default App;
