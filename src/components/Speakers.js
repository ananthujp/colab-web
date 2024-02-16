import {
  MicrophoneIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  MapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import mapImg from "../imgs/map-cont.png";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
import { Button, Carousel, Form, Input, Modal, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { items } from "../pages/Speakers";
import { GlobalOutlined, MailOutlined } from "@ant-design/icons";
export const AddSpeaker = ({
  isModalOpen,
  setIsModalOpen,
  edit = { edit: false, data: {} }, // Set default value here
}) => {
  const items = ["Panellist", "Speaker", "Moderator"];
  const [form] = Form.useForm();
  useEffect(() => {
    edit.edit && setIsModalOpen(true);
    edit.edit && form.setFieldsValue(edit.data);
    console.log(edit);
  }, [edit]);
  const onFinish = (values) => {
    console.log("Success:", values);

    edit?.edit
      ? setDoc(doc(db, "speakers", edit.data.id), values)
          .then(() => {
            setIsModalOpen(false);
          })
          .catch((e) => console.log(e))
      : addDoc(collection(db, "speakers"), {
          ...values,
        }).then(() => {
          message.success("Your request has been sent successfully!");
          setIsModalOpen(false);
        });
  };
  return (
    <Modal
      title="Add Speaker"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <Form
        form={form}
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
        <Form.Item
          label="Name"
          name="name"
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
          label="Image"
          name="img"
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
          label="Type"
          className="group"
          name="type"
          rules={[
            {
              required: true,
              message: "Please select an icon!",
            },
          ]}
        >
          <Select>
            {items.map((item, i) => (
              <Select.Option key={`select.item.ico.${i}`} value={i}>
                <div className="w-6 ">{item}</div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Designation"
          name="bio"
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
          label="Email"
          name="mail"
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
          label="Website"
          name="website"
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
          className="mt-4 -mb-4"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button
            //style={{ backgroundColor: "blue" }}
            className={`ml-4 bg-blue-500 `}
            type="primary"
            //disabled={login_load}
            htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
function Speakers({ delay }) {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true });
  const { nav, setNav, speakers, user } = useReducer();
  const chunkSize = 6;
  const chunks = Array(Math.ceil(speakers?.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => speakers?.slice(begin, begin + chunkSize));
  console.log(chunks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div ref={ref} className="w-[90%] md:w-full md:h-auto">
      <AddSpeaker isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {isInView && (
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
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
          className={`mt-8 md:mt-0 relative md:h-full bg-gradient-to-br from-slate-100/70 to-slate-200/70  border border-gray-200 hover:border-gray-400 flex flex-col xjustify-between p-4 rounded-lg`}
        >
          <div className="absolute z-50 w-[90%] top-4 flex flex-row  justify-between">
            <motion.h1
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.5 * delay + 0.3 },
              }}
              className="text-lg flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-slate-600"
            >
              <MicrophoneIcon className="w-5" />
              <h1>Speakers</h1>
            </motion.h1>
            <div className="flex flex-row gap-1">
              {user?.role === "admin" && (
                <motion.div
                  onClick={() => setIsModalOpen(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  key={`exp.card.btn`}
                  className="bg-gradient-to-br flex font-mont from-slate-50 to-slate-200 text-slate-600 text-xs px-4 py-1 rounded-full font-medium cursor-pointer hover:to-slate-300"
                >
                  Add
                </motion.div>
              )}
              <motion.div
                onClick={() => {
                  setNav({ from: "/", to: "speakers" });
                  navigate("/" + "speakers");
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
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 10,
                transition: { duration: 0.5 },
              }}
              className=" h-56 pt-12 overflow-scroll"
            >
              {/* <Carousel dotPosition={"right"} autoplay> */}
              {
                // chunks.map((chunk, i) => (
                //   <div
                //     key={i}
                //     className="items-center justify-center gap-4 md:flex-wrap"
                //   >
                <motion.div className="grid grid-cols-3 gap-6 group">
                  {speakers?.map((item, j) => (
                    <motion.div
                      onClick={() => navigate(`/speakers/${j}`)}
                      key={`chunk.item.${j}`}
                      layout
                      className={`flex cursor-pointer scale-100 transition-all flex-col items-center ${
                        hoveredIndex !== null && hoveredIndex !== j
                          ? "opacity-50 saturate-50"
                          : "opacity-100 saturate-100"
                      } hover:scale-[1.1]`}
                      onMouseEnter={() => setHoveredIndex(j)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img
                        src={item.img}
                        className="w-16 border-2 shadow-md border-white h-16 rounded-full object-cover"
                        alt="speaker"
                      />
                      <h1 className="text-xs font-mont text-center mt-1 xborder-tx xborder-slate-600 pb-1 ">
                        {item?.name}
                      </h1>
                    </motion.div>
                  ))}
                </motion.div>
                // </div>
                // ))
              }
              {/* </Carousel> */}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 10,
                transition: { duration: 0.5 },
              }}
              className="mt-4 pt-10"
            >
              <Carousel dotPosition={"right"} autoplay>
                {speakers?.map((item, i) => (
                  <div className="h-44 my-auto md:h-36">
                    <div className="flex flex-row items-start gap-4">
                      <img
                        src={item.img}
                        className="w-36 h-36 rounded-full object-cover"
                        alt="speaker"
                      />
                      <div className="flex flex-col items-start gap-1">
                        <h1 className="text-base md:text-lg font-semibold  border-b border-slate-600 pb-1 ">
                          {item?.name}
                        </h1>
                        <p className="text-xs font-mont md:block hidden">
                          {item?.bio}
                        </p>
                        <p className="text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5">
                          {items[item?.type]}
                        </p>
                        <div className="flex flex-col gap-">
                          <p className="flex flex-row text-xs">
                            <MailOutlined className="w-4 inline-block" />{" "}
                            &nbsp;: &nbsp; {item?.mail}
                          </p>
                          <p className="flex flex-row text-xs">
                            <GlobalOutlined className="w-4 inline-block" />{" "}
                            &nbsp;: &nbsp;
                            {item?.website}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default Speakers;
