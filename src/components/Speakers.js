import { MicrophoneIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useReducer from "../hook/reducerHook";
import { Button, Carousel, Form, Input, Modal, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { items } from "../pages/Speakers";
import { cardVar } from "../pages/profData";
import avatar from "../imgs/user.png";
export const domains = cardVar.map((obj) => obj.label);
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
          label="Domain"
          className="group"
          name="domain"
          rules={[
            {
              required: true,
              message: "Please select an icon!",
            },
          ]}
        >
          <Select>
            {domains.map((item, i) => (
              <Select.Option key={`select.item.ico.${i}`} value={i}>
                <div className="w-6 ">{item}</div>
              </Select.Option>
            ))}
          </Select>
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
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      key={`about.card.home`}
      ref={ref}
      className="w-[90%] md:w-full md:h-auto overflow-hidden"
    >
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
          className={`mt-8 md:mt-0 relative md:h-full ${
            isHovered && "rotate-[90]"
          } bg-white  border border-gray-300 hover:border-gray-400 flex flex-col xjustify-between p-4 rounded-lg`}
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
              <div className="flex flex-row gap-2 border-b pb-2 border-slate-300 items-center">
                <MicrophoneIcon className="w-5" />
                <h1>Speakers</h1>
              </div>
            </motion.h1>
            <div className="flex flex-row gap-1">
              {user?.role === "admin" && (
                <motion.div
                  onClick={() => setIsModalOpen(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  key={`exp.card.btn.1`}
                  className="rounded-full cursor-pointer h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
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
                key={`exp.card.btn.2`}
                className="rounded-full cursor-pointer h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
              >
                More
              </motion.div>
            </div>
          </div>
          {isHovered ? (
            <motion.div
              // initial={{ opacity: 0, translateY: -10 }}
              // animate={{
              //   opacity: 1,
              //   translateY: 0,
              //   transition: { duration: 0.5 },
              // }}
              // exit={{
              //   opacity: 0,
              //   translateY: 10,
              //   transition: { duration: 0.5 },
              // }}
              className="flex h-56 pt-12 relative "
            >
              <div className="bg-gradient-to-b from-white to-transparent z-10 h-16 absolute top-0 w-full " />

              <div className=" absolute top-0 overflow-y-auto h-full">
                <motion.div className="grid pt-10 grid-cols-3 gap-6 group">
                  {speakers?.map((item, j) => (
                    <motion.div
                      initial={{ opacity: 0, translateY: -10 }}
                      animate={{
                        opacity: 1,
                        translateY: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 + 0.1 * j,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        translateY: 10,
                        transition: { duration: 0.5 },
                      }}
                      onClick={() => navigate(`/speakers/${j}`)}
                      key={`chunk.item.${j}`}
                      layout
                      className={`flex cursor-pointer  transform rounded-md pt-2 hover:border hover:border-indigo-200 hover:bg-indigo-100 scale-100 transition-all flex-col items-center ${
                        hoveredIndex !== null && hoveredIndex !== j
                          ? "opacity-50 saturate-0"
                          : "opacity-100  saturate-100"
                      } `}
                      onMouseEnter={() => setHoveredIndex(j)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <motion.img
                        layoutId={`image.speaker.${j}`}
                        src={item?.img === " " ? avatar : item?.img}
                        className="w-16 border-2 bg-gradient-to-br from-slate-50 to-slate-200 shadow-md border-white h-16 rounded-full object-cover"
                        alt="speaker"
                      />
                      <h1 className="text-xs font-mont text-center mt-1 xborder-tx font-semibold xborder-slate-600 pb-1 ">
                        {item?.name}
                      </h1>
                      <p className="text-xs font-mont w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-1 py-0">
                        {items[item?.type]}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
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
                        src={item.img === " " ? avatar : item.img}
                        className="w-36 bg-gradient-to-br from-slate-50 to-slate-200 h-36 rounded-full object-cover"
                        alt="speaker"
                      />
                      <div className="flex flex-col items-start gap-1">
                        <h1 className="text-base md:text-lg font-semibold  border-b border-slate-600 pb-1 ">
                          {item?.name}
                        </h1>
                        <p className="text-xs font-mont md:block hidden">
                          {item?.bio}
                        </p>
                        <p className="text-xs w-auto origin-left scale-90 text-center bg-opacity-75 border border-green-300 text-green-600 bg-white rounded-full px-2 py-0.5">
                          {domains[item?.domain]}
                        </p>
                        <p className="text-xs w-20 origin-left scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5">
                          {items[item?.type]}
                        </p>
                        {/* <div className="flex flex-col gap-">
                          <p className="flex flex-row text-xs">
                            <MailOutlined className="w-4 inline-block" />{" "}
                            &nbsp;: &nbsp; {item?.mail}
                          </p>
                          <p className="flex flex-row text-xs">
                            <GlobalOutlined className="w-4 inline-block" />{" "}
                            &nbsp;: &nbsp;
                            {item?.website}
                          </p>
                        </div> */}
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
