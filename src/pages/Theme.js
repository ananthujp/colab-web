import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVar } from "./profData";
import { Link, useNavigate, useParams } from "react-router-dom";

import Page from "./Page";
import {
  ArrowLeftIcon,
  LinkIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Button, Input, Modal, Form, message } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const { confirm } = Modal;
const showConfirm = ({ url }) => {
  confirm({
    title: "External Link",
    icon: <LinkIcon className="w-5 text-gray-400 mr-1" />,
    content: `You are now leaving CoLab's website to an external link"${url}".`,
    okButtonProps: { className: "bg-blue-400 " },
    onOk() {
      window.open(url, "_blank");
    },
    // onCancel() {
    //   console.log('Cancel');
    // },
  });
};
function Theme() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState({ fac: "", visible: false });

  const onFinish = (values) => {
    console.log("Success:", values);
    addDoc(collection(db, "requests"), {
      ...values,
      prof: isModalOpen.fac,
      facEmail: isModalOpen.facEmail,
    }).then(() => {
      message.success("Your request has been sent successfully!");
      setIsModalOpen({ ...isModalOpen, visible: false });
    });
  };

  const params = useParams();
  return (
    <Page
      no={3}
      page="themes"
      title="Themes"
      backButton={
        params.postId && (
          <ArrowLeftIcon
            className="w-7 absolute left-4 top-4 text-slate-600 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )
      }
    >
      <Modal
        title="Request to meet"
        open={isModalOpen.visible}
        onCancel={() => setIsModalOpen({ ...isModalOpen, visible: false })}
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
          <h1 className="font-mont text-xs italic">
            Enter your email address and contact number so that our team can
            contact you to facilitate the meeting with Prof.{" "}
            <bold className="font-bold">{isModalOpen.fac}</bold>.
          </h1>
          <Form.Item
            className="mt-4 -mb-4"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              onClick={() => setIsModalOpen({ ...isModalOpen, visible: false })}
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
      <motion.div
        layoutId={`pgm.themes`}
        className={
          "w-full overflow-auto px-6 md:px-16 h-[75vh] md:h-[90%] " +
          (!params.postId &&
            " grid grid-cols-1 relative md:grid-cols-2 md:gap-4")
        }
      >
        {params.postId && params.postId < cardVar.length ? (
          <div className="flex md:mb-0 flex-col w-full">
            <div className="flex flex-row items-start gap-4">
              <div className="flex flex-col ">
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5 },
                  }}
                  className="text-2xl text-center md:text-left font-pop font-semibold"
                >
                  {cardVar[params.postId].label}
                </motion.h1>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className="absolute pointer-events-none bottom-0 right-4"
            >
              <img
                key={`img.exp.${params.postId}`}
                src={cardVar[params.postId].img}
                alt=""
                className="w-full opacity-40 filter "
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 mt-4">
              {cardVar[params.postId].prof.map((item, i) => (
                <motion.div
                  onClick={() => item?.link && showConfirm({ url: item?.link })}
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.05 },
                  }}
                  className="grid cursor-pointer  md:grid-cols-[5em_auto_3em] w-full text-slate-600 p-3 rounded-md bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 gap-4  font-pop "
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={
                        <UserIcon className="w-16 h-16 p-2 bg-indigo-600 rounded-full text-white mr-2" />
                      }
                      className="w-16 h-16 mx-auto object-cover bg-indigo-500 rounded-full"
                    />
                  ) : (
                    <div className=" mx-auto">
                      <UserIcon className="w-16 h-16 p-2 bg-indigo-600 rounded-full text-white mr-2" />
                    </div>
                  )}
                  <div className="flex flex-col items-center md:items-start">
                    <h1 className="font-semibold">{item.name}</h1>
                    <h1 className="font-medium">{item.designation}</h1>
                    <h1 className="font-light">{item.dept}</h1>
                    <h1 className="font-light italic">{"e : " + item.email}</h1>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen({
                        fac: item.name,
                        facEmail: item.email,
                        visible: true,
                      });
                    }}
                    className="bg-gradient-to-br  py-2 border border-slate-300 hover:shadow-md hover:border-indigo-100 text-center cursor-pointer from-white to-slate-200 hover:text-white hover:from-indigo-400 hover:to-indigo-500 text-xs flex group md:flex-col items-center justify-around  md:w-20 md:-ml-10 rounded-lg bg-indigo-400"
                  >
                    <UserPlusIcon className="w-8 text-slate-600 group-hover:text-white" />
                    Meet
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          cardVar.map((item, i) => (
            <div
              onClick={() => navigate(`${i}`)}
              className="w-full cursor-pointer xmd:w-1/2 mx-4 my-2 p-2 rounded-md transition-all bg-indigo-100 border hover:shadow-lg border-indigo-200 hover:border-indigo-300 hover:bg-indigo-200"
            >
              <div className="flex flex-row items-center text-slate-700 gap-4">
                <motion.div
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                >
                  <img
                    key={`img.exp.${i}`}
                    src={item.img}
                    alt=""
                    className="w-16 filter "
                  />
                </motion.div>

                <div className="flex flex-col ">
                  <motion.h1
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      translateY: 20,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    }}
                    className="text-xl font-pop font-semibold"
                  >
                    {cardVar[i].label}
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      translateY: 20,
                      transition: { duration: 0.5, delay: i * 0.1 + 0.1 },
                    }}
                    className="text-xs mt-2 w-[85%] font-pop text-justify font-light"
                  >
                    {/* <Link to={`${i}`}>
                      <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full flex px-2 py-1 w-12">
                        More
                      </div>
                    </Link> */}
                  </motion.h1>
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </Page>
  );
}

export default Theme;
