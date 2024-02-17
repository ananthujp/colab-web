import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { LinkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/colab-logo.svg";
import Page from "./Page";
import lalminar from "../imgs/lalminar.png";
import gitlogo from "../imgs/github-mark.png";
import { Input, Modal, Form, InputNumber, Button, Popover } from "antd";
const confirm = Modal.confirm;

const showConfirm = ({ url }) => {
  confirm({
    title: "External Link",
    icon: <LinkIcon className="w-5 text-gray-400 mr-1" />,
    content: `You are now leaving CoLab's website to an external link("${url}").`,
    okButtonProps: { className: "bg-blue-400 " },
    onOk() {
      window.open(url, "_blank");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
function removeUndefinedFields(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}
const Glinkgen = (form) => {
  const [linkval, setLinkval] = useState("");
  return (
    <div className="flex flex-col p-1 gap-2">
      <Input
        placeholder="Google drive link"
        onChange={(event) => setLinkval(event.target.value)}
      />
      <Button
        onClick={() => {
          form.setFieldValue(
            "img",
            `https://lh3.googleusercontent.com/d/${
              linkval.match(/\/d\/([^/]+)/)[1]
            }`
          );
        }}
        className="bg-blue-500"
        type="primary"
      >
        Ok
      </Button>
    </div>
  );
};
function About() {
  const { nav, setNav, about_data, user } = useReducer();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [Glink, setGlink] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({ edit: false, data: null });
  useEffect(() => {
    edit.edit && setOpen(true);
    edit.edit && form.setFieldsValue(edit.data);
  }, [edit]);
  const handleDelete = (id) => {
    deleteDoc(doc(db, "about", id));
  };

  const onFinish = (values) => {
    edit?.edit
      ? setDoc(doc(db, "about", edit.data.id), removeUndefinedFields(values))
          .then(() => {
            setOpen(false);
          })
          .catch((e) => console.log(e))
      : addDoc(collection(db, "about"), removeUndefinedFields(values)).then(
          () => setOpen(false)
        );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Page no={1} page="about" title="About">
      <Modal
        key={`modal.add.item`}
        title="Add an About Item"
        open={open}
        onCancel={() => {
          setOpen(false);
          setEdit({ edit: false, data: null });
        }}
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
          // initialValues={edit?.edit ? edit.data : null}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Key"
            name="key"
            type="number"
            rules={[
              {
                required: true,
                //message: "Please input a number!",
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber type="number" />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input a name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please input a role!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bio/Designation"
            name="bio"
            rules={[
              {
                required: true,
                message: "Please input a bio!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="img"
            rules={[
              {
                required: true,
                message: "Please input an img url!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="w-full flex flex-row justify-end -mt-4 mb-2 items-end">
            <Popover content={Glinkgen(form)} title="Google drive link">
              <Button className=" bg-blue-500" type="primary">
                Google Drive
              </Button>
            </Popover>
          </div>
          <Form.Item label="Email(Optional)" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Facebook(Optional)" name="facebook">
            <Input />
          </Form.Item>
          <Form.Item label="Instagram(Optional)" name="instagram">
            <Input />
          </Form.Item>
          <Form.Item label="Twitter(Optional)" name="twitter">
            <Input />
          </Form.Item>
          <Form.Item label="LinkedIn(Optional)" name="linkedin">
            <Input />
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
      <motion.div className="w-full overflow-auto px-6 md:px-12 mt-4 gap-6 flex flex-col h-screen md:h-[90%]">
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, translateY: -20, transition: { duration: 0.5 } }}
          className="flex flex-col items-center md:items-start rounded-md border border-indigo-100 bg-indigo-50 p-6"
        >
          <h1 className="font-mont  mb-2 pb-2 border-b border-slate-300  text-lg font-medium text-slate-800">
            About CoLab 2024
          </h1>
          <div className="flex flex-col  md:flex-row gap-4 mt-2">
            <img src={logo} alt="" className="w-32 -mt-2" />
            <p className="font-mont font-base text-justify text-slate-600">
              CoLab 2024 is a dynamic convergence of academia and industry at
              the Indian Institute of Technology Gandhinagar. This event aims to
              nurture robust partnerships to create smart solutions for key
              societal challenges. Join us and become a part of a collaborative
              research space where industry professionals, academicians, and
              students pave the way for a better tomorrow.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          exit={{ opacity: 0, translateY: -20, transition: { duration: 0.5 } }}
          className="flex flex-col items-center md:items-start p-6 rounded-md border border-indigo-100 bg-indigo-50"
        >
          <h1 className="font-mont  mb-2 pb-2 border-b border-slate-300  text-lg font-medium text-slate-800">
            About IIT Gandhinagar
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <img src={lalminar} alt="" className="w-36 h-56 -mt-2" />
            <p className="font-mont font-base text-justify text-slate-600">
              IIT Gandhinagar is a hub of innovation and research excellence
              within the Indian technological and industrial landscapes. From
              notable advancements in renewable energy and sustainable
              infrastructure to discoveries in healthcare and computational
              sciences, the R&D endevours at IITGN are characterized by its
              unwavering pursuit of solutions to critical societal challenges.
              Bolstered by state-of-the-art facilities and a dynamic ecosystem
              of industry partnerships, the Institute is committed to
              spearheading innovation and fostering cutting-edge research in
              diverse interdisciplinary domains.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          exit={{ opacity: 0, translateY: -20, transition: { duration: 0.5 } }}
          className="flex gap-8 items-center justify-center flex-row flex-wrap p-6 mb-5 rounded-md border border-indigo-100 bg-indigo-50"
        >
          <h1 className="font-mont mb-2 pb-2 border-b border-slate-300  flex flex-row text-lg font-semibold text-slate-800 w-full justify-between">
            Core Team
            {user?.role === "admin" && (
              <div
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-slate-400 px-2 py-0.5 text-white text-sm rounded-full my-auto"
              >
                Add
              </div>
            )}
          </h1>
          {about_data?.map((item, i) => (
            <div
              key={`core.about.${i}`}
              className="flex flex-col relative h-44 w-36 py-2  group items-center"
            >
              {user?.role === "admin" && (
                <div className="absolute flex flex-row top-0 right-0 ml-4">
                  <PencilIcon
                    onClick={() => setEdit({ edit: true, data: item })}
                    className=" w-4 text-red-400 cursor-pointer hover:text-blue-400"
                  />
                  <TrashIcon
                    onClick={() =>
                      window.confirm(
                        `Are you sure you want to delete "${item.name}"?`
                      )
                        ? handleDelete(item.id)
                        : console.log("no")
                    }
                    className="w-4 text-red-400 cursor-pointer hover:text-blue-400"
                  />
                </div>
              )}
              <div className="flex w-28 h-28 mb-2 justify-center items-center border-4 rounded-full border-white shadow-md">
                <img
                  className="w-24 h-24 object-cover rounded-full saturate-0 group-hover:saturate-100 transition-all duration-300 ease-in-out"
                  src={item.img}
                  alt=""
                />
              </div>
              <h1 className=" font-mont text-center font-medium">
                {item.name}
              </h1>
              <h1 className="font-mont text-center text-xs text-slate-800">
                {item.role}
              </h1>
              <h1 className="font-mont font-base text-center text-xs text-slate-600">
                {item.bio}
              </h1>
              <div className="group-hover:flex hidden flex-row gap-2 mt-2">
                {item.facebook && (
                  <FacebookOutlined
                    onClick={() =>
                      showConfirm({
                        url: item.facebook,
                      })
                    }
                    className="text-xl text-slate-600"
                  />
                )}
                {item.instagram && (
                  <InstagramOutlined
                    onClick={() =>
                      showConfirm({
                        url: item.instagram,
                      })
                    }
                    className="text-xl text-slate-600"
                  />
                )}
                {item.twitter && (
                  <TwitterOutlined
                    onClick={() =>
                      showConfirm({
                        url: item.twitter,
                      })
                    }
                    className="text-xl text-slate-600"
                  />
                )}
                {item.linkedin && (
                  <LinkedinOutlined
                    onClick={() =>
                      showConfirm({
                        url: item.linkedin,
                      })
                    }
                    className="text-xl text-slate-600"
                  />
                )}
                {item.email && (
                  <MailOutlined
                    onClick={() =>
                      (window.location.href = `mailto:${item.email}`)
                    }
                    className=" w-12 text-slate-600"
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          exit={{ opacity: 0, translateY: -20, transition: { duration: 0.5 } }}
          className="flex flex-col items-center md:items-start gap-3 p-6 mb-5 rounded-md border border-indigo-100 bg-indigo-50"
        >
          <h1 className="font-mont mb-2 pb-2  border-b border-slate-300 text-lg font-semibold text-slate-800">
            About Website
          </h1>
          <div className="flex flex-row gap-2">
            <h1 className="font-mont font-bold">Developer :</h1>
            <h1
              onClick={() =>
                showConfirm({ url: "https://github.com/ananthujp" })
              }
              className="flex flex-row cursor-pointer font-mont font-base text-slate-600"
            >
              Ananthu J P
              <span>
                <img className="w-4 ml-2" src={gitlogo} alt="" />
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="font-mont">
              <b>Tech stack :</b>
              &nbsp;React
              <svg
                onClick={() => showConfirm({ url: "https://react.dev/" })}
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  fill: "#00000",
                  strokeMiterlimit: 2,
                }}
                className="w-6 h-6 inline-block cursor-pointer"
                viewBox="0 0 64 64"
              >
                <path
                  d="M-1088-64H192v800h-1280z"
                  style={{
                    fill: "none",
                  }}
                />
                <circle
                  cx={32.001}
                  cy={31.955}
                  r={4.478}
                  style={{
                    fill: "#00d8ff",
                  }}
                />
                <path
                  d="M32.33 22.516c7.635.052 15.965.609 21.683 5.708.168.15.33.306.488.467 1.349 1.375 2.054 3.595.965 5.422-2.234 3.751-7.23 5.387-12.067 6.394-7.234 1.506-14.798 1.518-22.029.192-4.161-.764-8.416-2.103-11.373-4.904-1.151-1.09-2.135-2.524-1.981-4.12.25-2.582 2.727-4.239 4.812-5.361 5.791-3.116 12.847-3.813 19.502-3.798Zm-.554 1.173c-7.224.049-15.043.51-20.621 5.129-.195.161-.383.33-.564.507-.117.114-.23.233-.339.355-.979 1.1-1.316 2.867-.392 4.188.93 1.329 2.342 2.288 3.796 3.07 5.438 2.924 11.864 3.443 18.129 3.465 6.343.023 12.884-.555 18.487-3.452 2.232-1.155 4.744-2.851 4.655-5.035-.082-2.004-2.036-3.242-3.499-4.126-.396-.239-.803-.46-1.216-.668-5.562-2.787-12.08-3.447-18.436-3.433Z"
                  style={{
                    fill: "#00d8ff",
                  }}
                />
                <path
                  d="M42.115 10.703c2.793.071 4.24 3.429 4.431 5.909.038.493.052.988.046 1.483a21.007 21.007 0 0 1-.082 1.606c-.589 6.612-3.608 12.909-7.163 18.724-3.477 5.688-7.717 11.36-13.485 13.996-1.907.872-4.175 1.41-5.863.437-2.314-1.333-2.567-4.451-2.524-6.816.011-.581.049-1.162.109-1.741.889-8.56 5.228-16.669 10.658-23.655 3.168-4.076 6.937-8.119 11.632-9.583.739-.231 1.326-.371 2.241-.36Zm-.134 1.172c-3.279.052-6.223 2.482-8.83 5.007-6.854 6.637-11.905 15.464-13.937 24.721a26.54 26.54 0 0 0-.386 2.166 20.94 20.94 0 0 0-.159 1.697 16.62 16.62 0 0 0-.017 1.358c.01.354.033.708.072 1.06.029.269.068.537.117.803.037.197.08.393.13.588.041.158.087.315.139.471.409 1.233 1.463 2.411 2.878 2.45 3.301.09 6.409-2.317 9.096-4.933 4.717-4.591 8.232-10.36 10.978-16.424 2.216-4.896 4.243-10.218 3.111-15.607a7.36 7.36 0 0 0-.308-1.089c-.44-1.199-1.475-2.271-2.884-2.268Z"
                  style={{
                    fill: "#00d8ff",
                  }}
                />
                <path
                  d="M22.109 10.747c3.564.069 6.765 2.488 9.607 5.197 5.186 4.943 9.011 11.231 11.913 17.849 2.248 5.127 4.316 10.882 2.478 16.292-.579 1.705-2.044 3.265-3.997 3.305-3.581.072-6.9-2.532-9.78-5.335-7.225-7.034-12.589-16.32-14.427-26.168a25.392 25.392 0 0 1-.309-2.127 20.927 20.927 0 0 1-.106-1.752c-.008-.472.002-.944.035-1.414.022-.314.054-.626.097-.937a10.741 10.741 0 0 1 .304-1.439c.539-1.843 1.941-3.485 4.185-3.471Zm-.135 1.173c-2.087.046-3.042 2.507-3.234 4.234-.039.354-.063.711-.074 1.068-.014.456-.008.913.015 1.369.328 6.599 3.278 12.979 6.838 18.821 3.352 5.5 7.4 10.978 12.968 13.794 1.608.813 3.562 1.452 4.951.684 1.742-.964 1.956-3.261 2.049-4.973.025-.466.028-.934.013-1.401a20.148 20.148 0 0 0-.133-1.753c-.642-5.437-3.05-10.582-5.816-15.444-3.442-6.048-7.659-12.076-13.627-15.225-1.236-.652-2.574-1.185-3.95-1.174Z"
                  style={{
                    fill: "#00d8ff",
                  }}
                />
              </svg>
              , TailwindCSS
              <svg
                onClick={() => showConfirm({ url: "https://tailwindcss.com/" })}
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 cursor-pointer inline-block"
                viewBox="0 0 32 32"
              >
                <title>{"file_type_tailwind"}</title>
                <path
                  d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                  style={{
                    fill: "#44a8b3",
                  }}
                />
              </svg>
              , Framer Motion
              <svg
                onClick={() => showConfirm({ url: "http://framer.com/motion" })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
                className="w-6 inline-block h-6 cursor-pointer"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#05F"
                  fillRule="evenodd"
                  d="M9 20.334h7V27l-7-6.666Z"
                  clipRule="evenodd"
                />
                <path fill="#0AF" d="M16 13.666H9v6.667h14l-7-6.666Z" />
                <path fill="#8DF" d="m9 7 7 6.667h7V7H9Z" />{" "}
              </svg>
              , Firebase
              <svg
                onClick={() => showConfirm({ url: "https://firebase.com/" })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 inline-block cursor-pointer"
              >
                <title>{"file_type_firebase"}</title>
                <path
                  d="m5.8 24.6.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 0 0-1.227.207Z"
                  style={{
                    fill: "#ffc24a",
                  }}
                />
                <path
                  d="m5.9 24.42.128-.25 7.937-15.056-3.526-6.666a.6.6 0 0 0-1.133.206Z"
                  style={{
                    fill: "#ffa712",
                  }}
                />
                <path
                  d="m16.584 14.01 2.632-2.7-2.633-5.021a.678.678 0 0 0-1.195 0l-1.407 2.682V9.2Z"
                  style={{
                    fill: "#f4bd62",
                  }}
                />
                <path
                  d="m16.537 13.9 2.559-2.62-2.559-4.88a.589.589 0 0 0-1.074-.047l-1.414 2.729-.042.139Z"
                  style={{
                    fill: "#ffa50e",
                  }}
                />
                <path
                  d="m5.802 24.601.077-.078.279-.113 10.26-10.222.13-.354-2.559-4.878-8.187 15.645z"
                  style={{
                    fill: "#f6820c",
                  }}
                />
                <path
                  d="m16.912 29.756 9.288-5.179-2.654-16.331a.635.635 0 0 0-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 0 0 1.878 0"
                  style={{
                    fill: "#fde068",
                  }}
                />
                <path
                  d="M26.115 24.534 23.483 8.326a.557.557 0 0 0-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 0 0 1.863 0Z"
                  style={{
                    fill: "#fcca3f",
                  }}
                />
                <path
                  d="M16.912 29.6a1.927 1.927 0 0 1-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 0 0 1.878 0l9.289-5.178-.023-.14Z"
                  style={{
                    fill: "#eeab37",
                  }}
                />
              </svg>
            </h1>
          </div>
          <div className="flex flex-row gap-3 mb-4">
            <h1 className="font-mont ">
              <strong>Vectors courtesy :</strong>&nbsp; macrovector,
              pikisuperstar, upklyak, brgfx, freepik, vectorpocket
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </Page>
  );
}

export default About;
