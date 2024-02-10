import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  HashRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Program from "./pages/Program";
import About from "./pages/About";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
import Speakers from "./pages/Speakers";
import { ConfigProvider } from "antd";
import logo from "./logo.png";
import logo2 from "./imgs/iitgn-logo.png";

import Navbar from "./components/Navbar";
const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "program", element: <Program /> },
  { path: "themes", element: <Theme /> },
  { path: "contact", element: <Contact /> },
  { path: "speakers", element: <Speakers /> },
]);
function App() {
  const location = useLocation();
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
      default:
        return 0;
    }
  };
  return (
    <AnimatePresence mode="wait">
      {/* <HashRouter basename="/"> */}
      <div>
        <motion.div
          key={`top.bar`}
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
              ? "bg-gradient-to-b top-0 border-b"
              : "bg-gradient-to-t bottom-0 -mt-2 border-t"
          }  w-full from-green-200/20 to-transparent bg-clip-padding xbackdrop-filter backdrop-blur-sm bg-opacity-10`}
        >
          <div className="flex w-full mt-2 mx-auto flex-row max-w-5xl justify-between">
            <div className="flex flex-row mx-6 md:mx-0">
              <img src={logo} className="w-8 h-8 mt-0.5" alt="" />
              <div className="flex flex-col ml-1.5">
                <motion.h1 className="text-xs font-pop text-slate-300 xtext-slate-600 font-light">
                  IIT Gandhinagar
                </motion.h1>
                <p className=" font-pop font-bold text-lg -mt-1 text-white">
                  CoLab 2024
                </p>
              </div>
            </div>
            <Navbar
              key={`nav.bar`}
              sel={loc(location.pathname.split("/")[1])}
            />
            <img
              src={logo2}
              className="w-10 h-10 hidden md:block my-auto"
              alt=""
            />
          </div>
        </motion.div>
        <Routes basename="/" location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="program" element={<Program />} />
          <Route path="themes" element={<Theme />}>
            <Route path=":postId" element={<Theme />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="speakers" element={<Speakers />} />
        </Routes>
      </div>
      {/* </HashRouter> */}
      {/* <RouterProvider router={router} /> */}
    </AnimatePresence>
  );
}

export default App;
