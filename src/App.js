import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  HashRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Program from "./pages/Program";
import About from "./pages/About";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
import Speakers from "./pages/Speakers";
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

  return (
    <AnimatePresence mode="wait">
      {/* <HashRouter basename="/"> */}
      <Routes basename="/" location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="program" element={<Program />} />
        <Route path="themes" element={<Theme />} />
        <Route path="contact" element={<Contact />} />
        <Route path="speakers" element={<Speakers />} />
      </Routes>
      {/* </HashRouter> */}
      {/* <RouterProvider router={router} /> */}
    </AnimatePresence>
  );
}

export default App;
