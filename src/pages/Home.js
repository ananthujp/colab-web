import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Card from "../components/AboutCard";
import ExpandCard from "../components/ThemesCard";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BlogSlider from "../components/ProgramCard";
import Contact from "../components/ContactCard";
import { lazy, useEffect, useState } from "react";
import useReducer from "../hook/reducerHook";
import Footer from "../components/Footer";
import Load from "./Load";
import FAQCard from "../components/FAQCard";
import logo from "../logo.png";
import Agenda from "../components/Agenda";
import { Button, Checkbox, Dropdown, Form, Input, Modal, message } from "antd";
import WhyCard from "../components/WhyCard";
import Speakers from "../components/Speakers";
import QuickLinks from "../components/QuickLinks";
import Venue from "../components/Venue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo2 from "../imgs/iitgn-logo.png";
import ray from "../imgs/ray.png";
import SlideDeckCard from "../components/SlideDeckCard";

function Home({ open, setOpen }) {
  const [hidden, setHidden] = useState(false);
  const [login_load, setLoad] = useState(false);
  const { setNav, setUser, user, logout } = useReducer();
  // const [open, setOpen] = useState(false);
  const auth = getAuth();

  const onFinish = (values) => {
    setLoad(true);
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        message.success(
          "Logged in successfully! Welcome," + userCredential.user.email
        );
        setOpen(false);
        setUser({ role: "admin", email: userCredential.user.email });
        setLoad(false);
      })
      .catch((err) => {
        err && message.error(err.message);
        setLoad(false);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setLoad(false);
  };
  useEffect(() => {
    setNav({ from: null, to: null });
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      key={`main`}
      className="flex relative bg-slate-200 overflow-hidden xbg-opacity-20  xbg-[url('tp238-background-02.png')] min-h-screen  flex-col items-center justify-between "
    >
      <Modal
        title="Login"
        open={open}
        onCancel={() => setOpen(false)}
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
              className={`ml-4 bg-blue-500 ${login_load && "bg-slate-400"}`}
              type="primary"
              disabled={login_load}
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className="z-10 flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <Hero />

        <div className="flex bg-gradient-to-br  relative pt-4 justify-center bg-cover bg-no-repeat bg-opacity-20 xbg-[url('tp238-background-03.png')] w-full">
          <div className="absolute z-0 top-0 w-full h-full pattern-boxes pattern-gray-100 pattern-size-6 pattern-opacity-20" />
          <div className="absolute top-0 inset-x-0 blur-3xl opacity-40 -hue-rotate-90 bg-top xbg-[url('imgs/rayss.png')] h-[512rem] w-full xl:top-8" />

          <div className="flex z-50 flex-wrap w-full gap-4 justify-center md:justify-between max-w-5xl">
            <ExpandCard />
            <motion.div className="flex flex-col  md:w-full md:flex-row gap-6">
              <div className="flex flex-col items-center gap-6 w-full md:w-[60%]">
                <WhyCard delay={1} />
                <Card delay={2} />
              </div>
              <div className="w-full flex justify-center md:w-[40%]">
                <Agenda delay={3} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 justify-items-center md:w-full md:grid-cols-2 md:gap-6">
              <BlogSlider delay={1} />
              <Speakers />
            </div>
            <Venue />
            <div className="grid grid-cols-1 justify-items-center md:w-full md:grid-cols-[43%_55%] md:gap-6">
              <FAQCard />
              <SlideDeckCard />
            </div>
            <div className="grid grid-cols-1 w-[90%] justify-items-center md:w-full md:grid-cols-[55%_43%] md:gap-6">
              <Contact delay={1} />
              <QuickLinks />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}

export default Home;
