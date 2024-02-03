import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Program from "./pages/Program";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<div>About</div>} />
        <Route path="program" element={<Program />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
