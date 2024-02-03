import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Program from "./pages/Program";
import About from "./pages/About";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="program" element={<Program />} />
        <Route path="themes" element={<Theme />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
