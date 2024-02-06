import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Card from "../components/AboutCard";
// import Carousel from "./components/Carousel";
import ExpandCard from "../components/ThemesCard";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BlogSlider from "../components/ProgramCard";
// import BlogSlider from "./components/SwipeCard";
import shape from "./shape.svg";
import Imageslider from "../components/Imageslider";
import Contact from "../components/ContactCard";
import { useEffect, useState } from "react";
import useReducer from "../hook/reducerHook";
import Footer from "../components/Footer";
import Load from "./Load";
import FAQCard from "../components/FAQCard";
import logo from "../logo.png";
import colab from "../imgs/colab-logo.svg";
import Agenda from "../components/Agenda";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import WhyCard from "../components/WhyCard";

function Home() {
  const [hidden, setHidden] = useState(false);

  const { load, nav, setNav } = useReducer();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  });
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    setNav({ from: null, to: null });
  }, []);
  return !load ? (
    <motion.main
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      key={`main`}
      style={{
        backgroundPosition: "right",
        backgroundSize: "auto",
      }}
      className="flex relative overflow-hidden bg-opacity-20  bg-[url('tp238-background-02.png')] min-h-screen  flex-col items-center justify-between "
    >
      <Modal
        title="Login"
        open={open}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              //style={{ backgroundColor: "blue" }}
              className="ml-4 bg-blue-500"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div class="absolute w-full h-full pattern-boxes pattern-gray-500 pattern-size-6 pattern-opacity-5" />
      <div
        class="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={shape}
          class="max-w-none -hue-rotate-30	"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div
        class="absolute top-1/3 right-1/2 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={shape}
          class="max-w-none"
          width="852"
          height="582"
          alt="Illustration"
        />
      </div>
      <div className="z-10 flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        {!hidden && (
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
            className="fixed z-[100] py-4 top-0 border-b border-slate-200/40 bg-gradient-to-b w-full from-green-200/20 to-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          >
            <div className="flex w-full mt-2 mx-auto flex-row max-w-5xl justify-between">
              <div className="flex flex-row">
                <img src={logo} className="w-8 h-8 mt-0.5" alt="" />
                <div className="flex flex-col ml-1.5">
                  <motion.h1 className="text-xs font-pop text-slate-300 xtext-slate-600 font-light">
                    IIT Gandhinagar
                  </motion.h1>
                  <p class=" font-pop font-bold text-lg -mt-1 text-white">
                    CoLab 2024
                    {/* <span className="text-xl ">C</span>
                    <span className="text-md mx-0.5">o</span>
                    <span className="text-xl mx-0.5">L</span>
                    <span className="text-md mx-0.5">ab</span>
                    <span className="text-xl mx-4">2024</span> */}
                  </p>
                </div>
              </div>
              <Navbar key={`nav.bar`} />
              <div
                onClick={showModal}
                className="bg-green-400 cursor-pointer font-pop px-4 hidden md:flex items-center hover:bg-opacity-75 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-green-300 rounded-full  text-white"
              >
                Register
              </div>
            </div>
          </motion.div>
        )}
        <Hero />
        <div className="mt-4" />

        <div className="flex  max-w-5xl flex-wrap w-full gap-4 justify-center md:justify-between">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-6 w-[60%]">
              <Card />
              <WhyCard delay={2} />
            </div>
            <div className="w-[35%]">
              <Agenda />
            </div>
          </div>
          <BlogSlider delay={2} />
          <ExpandCard />
          <FAQCard />
          <Imageslider />
          <Contact delay={2} />
          {/* <SwipeCard /> */}
          {/* <Carousel /> */}
        </div>
      </div>
      <Footer />
    </motion.main>
  ) : (
    <Load />
  );
}

export default Home;
