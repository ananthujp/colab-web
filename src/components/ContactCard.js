import {
  PhoneArrowDownLeftIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  MapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import mapImg from "../imgs/map-cont.png";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
import { Button, Cascader, Form, Input, Modal, Select, message } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { cardVar } from "../pages/profData";
import TextArea from "antd/es/input/TextArea";

function Contact({ delay }) {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState({ visible: false });

  function transformData(inputArray) {
    return inputArray.map((theme, i) => ({
      value: theme.label,
      label: theme.label,
      children: theme.prof.map((prof, j) => ({
        value: `${prof.name}`,
        label: ` ${prof.name}`,
      })),
    }));
  }
  const Data = transformData(cardVar);
  const onFinish = (values) => {
    console.log("Success:", values);
    addDoc(collection(db, "requests"), {
      ...values,
    }).then(() => {
      message.success("Your request has been sent successfully!");
      setIsModalOpen({ ...isModalOpen, visible: false });
    });
  };
  const isInView = useInView(ref, { once: true });
  const { nav, setNav } = useReducer();
  const navigate = useNavigate();
  return (
    <div ref={ref} className="w-[100%] group z-50 md:w-full md:h-auto">
      {isInView && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.5 * delay },
          }}
          exit={{
            opacity: 0,
            translateY: 20,
            transition: { duration: 0.5 },
          }}
          className="mt-8 md:mt-0 md:h-full bg-gradient-to-br from-slate-100/50 to-slate-200/50  border border-gray-200 hover:border-gray-400 flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="flex flex-row mb-2 justify-between">
            <Modal
              title="Request to meet"
              open={isModalOpen.visible}
              onCancel={() =>
                setIsModalOpen({ ...isModalOpen, visible: false })
              }
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
                onFinishFailed={onFinish}
                autoComplete="off"
              >
                <h1 className="font-mont text-xs italic">
                  Select the faculty member you want to meet from the dropdown
                </h1>
                <Form.Item
                  label="Faculty"
                  name="faculty"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Cascader options={Data} />
                </Form.Item>

                <h1 className="font-mont text-xs italic">
                  Enter your email address and contact number so that our team
                  can contact you to facilitate the meeting with Prof.{" "}
                  <bold className="font-bold">{isModalOpen.fac}</bold>.
                </h1>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Contact number"
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your message!",
                    },
                  ]}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item
                  className="mt-4 -mb-4"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    onClick={() =>
                      setIsModalOpen({ ...isModalOpen, visible: false })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    //style={{ backgroundColor: "blue" }}
                    className={`ml-4 bg-blue-500 `}
                    type="primary"
                    //disabled={login_load}
                    htmlType="submit"
                  >
                    Request
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-indigo-600"
            >
              <PhoneArrowDownLeftIcon className="w-5" />
              <h1>Contact</h1>
            </motion.h1>
            <div>
              <motion.div
                onClick={() => {
                  setNav({ from: "/", to: "contact" });
                  navigate("/" + "contact");
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                key={`exp.card.btn`}
                className="bg-gradient-to-br flex font-mont from-slate-50 to-slate-200 text-slate-600 text-xs px-4 py-1 rounded-full font-medium cursor-pointer hover:to-slate-300"
              >
                More
              </motion.div>
            </div>
          </div>

          <motion.div className="flex flex-col w-full md:flex-row justify-between h-full">
            <div className="flex flex-col md:group-hover:flex-row items-start w-full gap-2">
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.5 },
                }}
                className="text-lg group-hover:hidden font-semibold font-pop"
              >
                Indian Institute of Technology Gandhinagar
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.6 },
                }}
                className="text-xs group-hover:hidden font-light font-mont"
              >
                Palaj, Gandhinagar - 382055, Gujarat
              </motion.h1>
              <motion.div
                onClick={() =>
                  setIsModalOpen({ ...isModalOpen, visible: true })
                }
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                }}
                className="flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <UsersIcon className="w-5 md:group-hover:w-16 text-indigo-400" />
                <h1 className="text-xs font-normal font-mont">
                  One-to-One meeting with faculty
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                }}
                onClick={() => window.open("tel:+917923952136")}
                className="flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <PhoneIcon className="w-5 md:group-hover:w-16 text-indigo-400" />
                <h1 className="text-xs font-normal font-mont">
                  +91 7923952136
                </h1>
              </motion.div>
              <motion.div
                onClick={() =>
                  window.open("mailto:industryconnect@iitgn.ac.in")
                }
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.7 },
                }}
                className="flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full  group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <EnvelopeIcon className="w-5 md:group-hover:w-16 text-indigo-400" />
                <h1 className="text-xs font-normal font-mont">
                  industryconnect @iitgn.ac.in
                </h1>
              </motion.div>
              <motion.div
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfQp4bK8REhP0ZYBA88kRSSzoCd5jnYBSE8Ui6fUZiMpoa_sQ/viewform"
                  )
                }
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.5 * delay + 0.8 },
                }}
                className="flex flex-row group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 cursor-pointer items-center bg-gradient-to-br from-indigo-400 to-indigo-500 transition-all hover:from-indigo-300 hover:to-indigo-400 border border-slate-300 p-2 rounded-lg shadow-sm w-full"
              >
                <PencilSquareIcon className="w-5 md:group-hover:w-16 text-white" />
                <h1 className="text-xs font-normal  group-hover:text-center text-white font-mont">
                  CoLab 2024 Registration form
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
