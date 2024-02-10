import React from "react";
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
import { ArrowLeftIcon, UserIcon } from "@heroicons/react/24/solid";
function Theme() {
  const navigate = useNavigate();
  const cardVar = [
    {
      label: "Bioengineering, Healthcare, Pharma",
      bg: "hover:from-cyan-400 hover:to-blue-300",
      img: bio,
      prof: [
        { name: "Dhiraj Bhatia", link: "" },
        { name: "Jhuma Saha ", link: "" },
        { name: "Sharad Gupta", link: "" },
        { name: "Himanshu", link: "" },
        { name: "Karla", link: "" },
        { name: "Prachi Thareja", link: "" },
        { name: "Pratik Mutha", link: "" },
        { name: "Sameer Dalvi", link: "" },
        { name: "Abhijit Mishra", link: "" },
        { name: "Krishna Kanti Dey", link: "" },
        { name: "Mithun Radhakrishnan", link: "" },
        { name: "Bhaskar Dutta", link: "" },
      ],
    },
    {
      label: "Manufacturing",
      bg: "hover:from-fuchsia-300 hover:to-purple-400",
      img: man,
      prof: [
        { name: "Madhu Vadali (lead)", link: "" },
        { name: "Hari Ganesh ", link: "" },
        { name: "Pradipta Ghosh", link: "" },
        { name: "Raghavan Ranganathan", link: "" },
        { name: "Chinmay Ghoroi", link: "" },
        { name: "Superb Misra", link: "" },
        { name: "Emila Panda", link: "" },
        { name: "Ravi Shashtri", link: "" },
        { name: "Amit Arora", link: "" },
        { name: "Chandan Misra", link: "" },
        { name: "Pratyush Dayal", link: "" },
        { name: "Prachi Thareja", link: "" },
        { name: "Tarun Agarwal", link: "" },
        { name: "Sandeep Lashkare", link: "" },
      ],
    },
    {
      label: "Energy and Water",
      bg: "hover:from-green-400 hover:to-cyan-300",
      img: ene,
      prof: [
        { name: "Atul Bhargav", link: "" },
        { name: "Soumyadip Sett", link: "" },
        { name: "Sriharitha Rowthu", link: "" },
        { name: "Gopinadhan Kalon", link: "" },
        { name: "Sudhanshu Sharma", link: "" },
        { name: "Naran M Pindoriya", link: "" },
        { name: "Saumyakanti Khatua", link: "" },
        { name: "Pallavi Bharadwaj", link: "" },
        { name: "Raghavan (elec)", link: "" },
        { name: "Ravi Hegde", link: "" },
        { name: "Tarun Agrawal", link: "" },
        { name: "Abinaya Sampat (lead)", link: "" },
        { name: "Sameer Patel", link: "" },
      ],
    },
    {
      label: "AI and Computing",
      bg: "hover:from-purple-300 hover:to-indigo-300",
      img: ai,
      prof: [
        { name: "Shanmuganathan Raman", link: "" },
        { name: "Mayank Singh", link: "" },
        { name: "Yogesh Kumar Meena", link: "" },
        { name: "Ashutosh Srivastava", link: "" },
        { name: "Anirban Mondal", link: "" },
        { name: "Rajat Moona", link: "" },
        { name: "Neeldhara (lead)", link: "" },
        { name: "Anirban Dasgupta", link: "" },
        { name: "Nipun Batra", link: "" },
        { name: "Manoj Gupta", link: "" },
        { name: "Krishna Miyapuram", link: "" },
        { name: "Uttama Lahiri", link: "" },
        { name: "Sushoban", link: "" },
        { name: "Joycee", link: "" },
        { name: "Dilip Sundaram", link: "" },
      ],
    },
    {
      label: "Agro and Food processing",
      bg: "hover:from-yellow-400 hover:to-orange-300",
      img: food,
      prof: [
        { name: "Subramanian Sankaranarayana", link: "" },
        { name: "Bhaskar Dattta", link: "" },
        { name: "Prachi Thareja", link: "" },
        { name: "Souymadip Sett", link: "" },
        { name: "Kabeer Jasuja", link: "" },
        { name: "Biswajeet Saha", link: "" },
      ],
    },
    {
      label: "Defence, Military & Space Technology ",
      bg: "hover:from-pink-300 hover:to-rose-300",
      img: def,
      prof: [
        { name: "Biswajit Saha ", link: "" },
        { name: "Kabeer Jasuja (lead)", link: "" },
        { name: "Vineet Vashista ", link: "" },
        { name: "Harish P M", link: "" },
        { name: "Arup Lal Chakraborty", link: "" },
        { name: "Manish Kumar", link: "" },
        { name: "Nithin George", link: "" },
        { name: "Dilip Sundaram", link: "" },
        { name: "Joycee", link: "" },
        { name: "Nihar Ranjan", link: "" },
        { name: "Pratyush Dayal", link: "" },
        { name: "Vinod Narayan", link: "" },
      ],
    },
    {
      label: "Climate Challange & Solutions",
      bg: "hover:from-blue-400 hover:to-indigo-300",
      img: climate,
      prof: [
        { name: "Utsav Mannu", link: "" },
        { name: "Vimal Mishra", link: "" },
        { name: "Pankaj Khanna", link: "" },
        { name: "Udit Bhatia (lead)", link: "" },
        { name: "Gaurav Srivastava", link: "" },
        { name: "Vikrant Jain", link: "" },
        { name: "Amit Prashant", link: "" },
        { name: "Sameer Patel", link: "" },
      ],
    },
    {
      label: "Pharma and Healthcare",
      bg: "hover:from-cyan-400  hover:to-blue-500",
      img: pharma,
      prof: [
        { name: "Uttama Lahiri", link: "" },
        { name: "Iti Gupta", link: "" },
        { name: "Chandrakumar Appayee", link: "" },
        { name: "Sairam", link: "" },
        { name: "Himanshu & Karla", link: "" },
        { name: "Sivapriya (lead)", link: "" },
        { name: "Sudipta Basu", link: "" },
        { name: "Sriram Kanvah", link: "" },
      ],
    },
  ];
  let params = useParams();
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
      <motion.div
        layoutId={`pgm.themes`}
        className={
          "w-full overflow-auto px-16 h-[75vh] md:h-[90%] " +
          (!params.postId && " grid grid-cols-1 relative md:grid-cols-2 gap-4")
        }
      >
        {params.postId ? (
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
              className="absolute bottom-0 right-4"
            >
              <img
                key={`img.exp.${params.postId}`}
                src={cardVar[params.postId].img}
                alt=""
                className="w-full opacity-40 filter "
              />
            </motion.div>
            <div className="grid grid-cols-2 w-full gap-2 mt-4">
              {cardVar[params.postId].prof.map((item, i) => (
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
                    transition: { duration: 0.5, delay: i * 0.05 },
                  }}
                  className="text-base font-medium flex text-slate-600 flex-row font-pop "
                >
                  <UserIcon className="w-8 h-8 p-2 bg-indigo-600 rounded-full text-white mr-2" />{" "}
                  {item.name}
                </motion.h1>
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
