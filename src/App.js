import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
import useReducer from "./hook/reducerHook";
import Load from "./pages/Load";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import PageLoad from "./pages/PageLoad";
const Create = React.lazy(() => import("./pages/Create"));
const Theme = React.lazy(() => import("./pages/Theme"));
const TopComponent = React.lazy(() => import("./components/TopComponent"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Dash = React.lazy(() => import("./pages/Dashboard"));
const Speakers = React.lazy(() => import("./pages/Speakers"));
const Virtual = React.lazy(() => import("./pages/Virtual"));
const VirtualPost = React.lazy(() => import("./pages/VirtualPost"));
const Program = React.lazy(() => import("./pages/Program"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Agenda = React.lazy(() => import("./pages/Agenda"));
const Home = React.lazy(() => import("./pages/Home"));
const SliderDeck = React.lazy(() => import("./pages/SliderDeck"));
const AddSlide = React.lazy(() => import("./pages/AddSlide"));
function App() {
  ReactGA.initialize("G-5JCED7TBZT");
  const location = useLocation();
  const { load } = useReducer();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: location.pathname,
    });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {!load ? (
        <div>
          {location.pathname.split("/")[1] !== "slidedeck" && (
            <React.Suspense fallback={<></>}>
              <TopComponent location={location} setOpen={setOpen} />
            </React.Suspense>
          )}
          <Routes basename="/" location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <React.Suspense
                  fallback={<PageLoad whiteScreen title="About" />}
                >
                  <Home open={open} setOpen={setOpen} />
                </React.Suspense>
                // <Home open={open} setOpen={setOpen} />
              }
            />
            <Route path="load" element={<PageLoad />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<PageLoad title="About" />}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="program"
              element={
                <React.Suspense
                  fallback={<PageLoad title="Event Highlights" />}
                >
                  <Program />
                </React.Suspense>
              }
            />
            <Route
              path="themes"
              element={
                <React.Suspense
                  fallback={<PageLoad title="Domains in focus" />}
                >
                  <Theme />
                </React.Suspense>
              }
            >
              <Route
                path=":postId"
                element={
                  <React.Suspense
                    fallback={<PageLoad title="Domains in focus" />}
                  >
                    <Theme />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="contact"
              element={
                <React.Suspense fallback={<PageLoad title="Contact" />}>
                  <Contact />
                </React.Suspense>
              }
            />
            <Route
              path="addslide"
              element={
                <React.Suspense fallback={<PageLoad title="Add Slide" />}>
                  <AddSlide />
                </React.Suspense>
              }
            >
              <Route
                path="dash"
                element={
                  <React.Suspense fallback={<PageLoad title="Add Slide" />}>
                    <AddSlide />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="slidedeck"
              element={
                <React.Suspense fallback={<PageLoad whiteScreen />}>
                  <SliderDeck />
                </React.Suspense>
              }
            >
              <Route
                path=":slideId"
                element={
                  <React.Suspense fallback={<PageLoad whiteScreen />}>
                    <SliderDeck />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="speakers"
              element={
                <React.Suspense fallback={<PageLoad title="Speakers" />}>
                  <Speakers />
                </React.Suspense>
              }
            >
              <Route
                path=":speakerId"
                element={
                  <React.Suspense fallback={<PageLoad title="Speakers" />}>
                    <Speakers />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="admin"
              element={
                <React.Suspense fallback={<PageLoad title="Dashboard" />}>
                  <Dash />
                </React.Suspense>
              }
            />
            <Route
              path="privacy"
              element={
                <React.Suspense fallback={<PageLoad title="Privacy Policy" />}>
                  <Privacy />
                </React.Suspense>
              }
            />
            <Route path="virtual">
              <Route
                path=""
                element={
                  <React.Suspense
                    fallback={<PageLoad title="Virtual Stalls" />}
                  >
                    <Virtual />
                  </React.Suspense>
                }
              />
              <Route
                path=":createId"
                element={
                  <React.Suspense
                    fallback={<PageLoad title="Virtual Stalls" />}
                  >
                    <VirtualPost />
                  </React.Suspense>
                }
              />
              <Route
                path="create"
                element={
                  <React.Suspense fallback={<PageLoad title="Loading.." />}>
                    <Create />
                  </React.Suspense>
                }
              >
                <Route
                  path=":createId"
                  element={
                    <React.Suspense fallback={<PageLoad title="Loading.." />}>
                      <Create />
                    </React.Suspense>
                  }
                />
              </Route>
            </Route>
            <Route
              path="agenda"
              element={
                <React.Suspense fallback={<PageLoad title="Agenda" />}>
                  <Agenda />
                </React.Suspense>
              }
            >
              <Route
                path=":postId"
                element={
                  <React.Suspense fallback={<PageLoad title="Agenda" />}>
                    <Theme />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </div>
      ) : (
        <Load />
      )}
    </AnimatePresence>
  );
}

export default App;
