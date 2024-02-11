import React, { useState } from "react";
import { motion } from "framer-motion";
import bio from "../imgs/bio.png";
import man from "../imgs/man.png";
import ene from "../imgs/energy.png";
import ai from "../imgs/ai.png";
import food from "../imgs/food.png";
import def from "../imgs/def.png";
import pharma from "../imgs/pharma.png";
import climate from "../imgs/climate.png";
import { Link, useNavigate, useParams } from "react-router-dom";

import Page from "./Page";
import {
  ArrowLeftIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Button, Input, Modal, Form } from "antd";
function Theme() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState({ fac: "", visible: false });

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen({ ...isModalOpen, visible: false });
  };
  const cardVar = [
    {
      label: "Bioengineering, Healthcare, Pharma",
      bg: "hover:from-cyan-400 hover:to-blue-300",
      img: bio,
      prof: [
        {
          name: "Dhiraj Bhatia",
          link: "https://iitgn.ac.in/faculty/bioe/fac-dhiraj",
          img: "https://iitgn.ac.in/media/pages/faculty/bioe/fac-dhiraj/396853053-1679554160/dhiraj.JPG",
          designation: "Associate Professor",
          dept: "Biological Engineering",
          email: "dhiraj.bhatia@iitgn.ac.in",
        },
        {
          name: "Jhuma Saha ",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sharad Gupta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Himanshu",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Karla",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Prachi Thareja",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pratik Mutha",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sameer Dalvi",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Abhijit Mishra",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Krishna Kanti Dey",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Mithun Radhakrishnan",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Bhaskar Dutta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Manufacturing",
      bg: "hover:from-fuchsia-300 hover:to-purple-400",
      img: man,
      prof: [
        {
          name: "Madhu Vadali (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Hari Ganesh ",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pradipta Ghosh",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Raghavan Ranganathan",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Chinmay Ghoroi",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Superb Misra",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Emila Panda",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Ravi Shashtri",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Amit Arora",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Chandan Misra",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pratyush Dayal",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Prachi Thareja",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Tarun Agarwal",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sandeep Lashkare",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Energy and Water",
      bg: "hover:from-green-400 hover:to-cyan-300",
      img: ene,
      prof: [
        {
          name: "Atul Bhargav",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Soumyadip Sett",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sriharitha Rowthu",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Gopinadhan Kalon",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sudhanshu Sharma",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Naran M Pindoriya",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Saumyakanti Khatua",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pallavi Bharadwaj",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Raghavan (elec)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Ravi Hegde",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Tarun Agrawal",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Abinaya Sampat (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sameer Patel",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "AI and Computing",
      bg: "hover:from-purple-300 hover:to-indigo-300",
      img: ai,
      prof: [
        {
          name: "Shanmuganathan Raman",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Mayank Singh",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Yogesh Kumar Meena",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Ashutosh Srivastava",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Anirban Mondal",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Rajat Moona",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Neeldhara (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Anirban Dasgupta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Nipun Batra",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Manoj Gupta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Krishna Miyapuram",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Uttama Lahiri",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sushoban",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Joycee",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Dilip Sundaram",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Agro and Food processing",
      bg: "hover:from-yellow-400 hover:to-orange-300",
      img: food,
      prof: [
        {
          name: "Subramanian Sankaranarayana",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Bhaskar Dattta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Prachi Thareja",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Souymadip Sett",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Kabeer Jasuja",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Biswajeet Saha",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Defence, Military & Space Technology ",
      bg: "hover:from-pink-300 hover:to-rose-300",
      img: def,
      prof: [
        {
          name: "Biswajit Saha ",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Kabeer Jasuja (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Vineet Vashista ",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Harish P M",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Arup Lal Chakraborty",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Manish Kumar",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Nithin George",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Dilip Sundaram",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Joycee",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Nihar Ranjan",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pratyush Dayal",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Vinod Narayan",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Climate Challange & Solutions",
      bg: "hover:from-blue-400 hover:to-indigo-300",
      img: climate,
      prof: [
        {
          name: "Utsav Mannu",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Vimal Mishra",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Pankaj Khanna",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Udit Bhatia (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Gaurav Srivastava",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Vikrant Jain",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Amit Prashant",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sameer Patel",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
    {
      label: "Pharma and Healthcare",
      bg: "hover:from-cyan-400  hover:to-blue-500",
      img: pharma,
      prof: [
        {
          name: "Uttama Lahiri",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Iti Gupta",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Chandrakumar Appayee",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sairam",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Himanshu & Karla",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sivapriya (lead)",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sudipta Basu",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
        {
          name: "Sriram Kanvah",
          link: "",
          img: "",
          designation: "",
          dept: "",
          email: "",
        },
      ],
    },
  ];
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
          "w-full overflow-auto px-16 h-[75vh] md:h-[90%] " +
          (!params.postId && " grid grid-cols-1 relative md:grid-cols-2 gap-4")
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
                  className="text-2xl font-pop font-semibold"
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
                  className="grid grid-cols-[5em_auto_3em] w-full text-slate-600 p-3 rounded-md bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 gap-4  font-pop "
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  ) : (
                    <UserIcon className="w-16 h-16 p-2 bg-indigo-600 rounded-full text-white mr-2" />
                  )}
                  <div className="flex flex-col">
                    <h1 className="font-semibold">{item.name}</h1>
                    <h1 className="font-medium">{item.designation}</h1>
                    <h1 className="font-light">{item.dept}</h1>
                    <h1 className="font-light italic">{"e : " + item.email}</h1>
                  </div>
                  <div
                    onClick={() =>
                      setIsModalOpen({ fac: item.name, visible: true })
                    }
                    className="bg-gradient-to-br border border-slate-300 hover:shadow-md hover:border-indigo-100 text-center cursor-pointer from-white to-slate-200 hover:text-white hover:from-indigo-400 hover:to-indigo-500 text-xs flex group flex-col items-center justify-around  w-20 -ml-10 rounded-lg bg-indigo-400"
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
            <div className="w-full xmd:w-1/2 mx-4 my-2 p-2 rounded-md bg-indigo-100 border border-indigo-200">
              <div className="flex flex-row items-start gap-4">
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
                    <Link to={`${i}`}>
                      <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full flex px-2 py-1 w-12">
                        More
                      </div>
                    </Link>
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
