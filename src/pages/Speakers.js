import React, { useEffect, useState } from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { GlobalOutlined, MailOutlined } from "@ant-design/icons";
import useReducer from "../hook/reducerHook";
import { AddSpeaker } from "../components/Speakers";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
export const items = ["Panellist", "Speaker", "Moderator"];
const SpeakerCard = ({ data }) => (
  <>
    <img
      className=" w-full h-36 md:w-36 md:h-full  object-cover border-2 border-white shadow-md"
      src={data?.img}
      alt=""
    />

    <div className="flex flex-col  px-6 py-8 gap-2">
      <h1 className="text-lg font-semibold  border-b border-slate-600 pb-1 ">
        {data?.name}
      </h1>
      <p className="text-xs font-mont ">{data?.bio}</p>
      <p className="text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5">
        {items[data?.type]}
      </p>
      <div className="flex flex-col gap-">
        <p className="flex flex-row text-xs">
          <MailOutlined className="w-4 inline-block" /> &nbsp;: &nbsp;{" "}
          {data?.mail}
        </p>
        <p className="flex flex-row text-xs">
          <GlobalOutlined className="w-4 inline-block" /> &nbsp;: &nbsp;
          {data?.website}
        </p>
      </div>
    </div>
  </>
);
function Speakers() {
  const { speakers, user } = useReducer();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteDoc(doc(db, "speakers", id));
  };
  const [edit, setEdit] = useState({ edit: false, data: {} });
  return (
    <Page no={4} page="speakers" title="Speakers & Panellists">
      <AddSpeaker
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        edit={edit}
      />
      {params.speakerId ? (
        <motion.div className="w-full font-mont items-center relative overflow-scroll gap-3 px-6 mt-4 flex flex-col h-full md:h-[90%]">
          <motion.img
            layoutId={`image.speaker.${params.speakerId}`}
            // initial={{ opacity: 0, translateY: -20 }}
            // animate={{
            //   opacity: 1,
            //   translateY: 0,
            //   transition: { duration: 0.5 },
            // }}
            // exit={{
            //   opacity: 0,
            //   translateY: -20,
            //   transition: { duration: 0.5 },
            // }}
            className=" h-1/2 aspect-square rounded-full object-cover border-2 border-white shadow-md"
            src={speakers[params.speakerId]?.img}
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{
              opacity: 0,
              translateY: -20,
              transition: { duration: 0.5 },
            }}
            className="text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5"
          >
            {items[speakers[params.speakerId]?.type]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            exit={{
              opacity: 0,
              translateY: -20,
              transition: { duration: 0.5 },
            }}
            className="flex flex-col  px-6 py-8 gap-2"
          >
            <h1 className="text-lg font-semibold  border-b border-slate-600 pb-1 ">
              {speakers[params.speakerId]?.name}
            </h1>
            <p className="text-xs font-mont ">
              {speakers[params.speakerId]?.bio}
            </p>

            <div className="flex flex-col gap-">
              <p className="flex flex-row text-xs">
                <MailOutlined className="w-4 inline-block" /> &nbsp;: &nbsp;{" "}
                {speakers[params.speakerId]?.mail}
              </p>
              <p className="flex flex-row text-xs">
                <GlobalOutlined className="w-4 inline-block" /> &nbsp;: &nbsp;
                {speakers[params.speakerId]?.website}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div className="w-full relative overflow-scroll gap-6 px-6 mt-4 flex flex-col md:flex-row md:flex-wrap h-full md:h-[90%]">
          {speakers?.map((speaker, index) => (
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              exit={{
                opacity: 0,
                translateY: -20,
                transition: { duration: 0.5 },
              }}
              key={speaker.id}
              onClick={() => navigate(`${index}`)}
              className="flex cursor-pointer flex-col md:flex-row items-start relative md:w-[48%]  font-mont rounded-lg overflow-hidden text-slate-600 border-indigo-200 hover:bg-indigo-200 transition-all bg-indigo-100 border shadow-md gap-4"
            >
              {user?.role === "admin" && (
                <div className="absolute flex flex-row bg-slate-100 rounded-full px-2 py-1 top-2 right-2 ml-4">
                  <PencilIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setEdit({ edit: true, data: speaker });
                    }}
                    className=" w-5 text-red-400 cursor-pointer hover:text-blue-400"
                  />
                  <TrashIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      window.confirm(
                        `Are you sure you want to delete "${speaker.name}"?`
                      )
                        ? handleDelete(speaker.id)
                        : console.log("no");
                    }}
                    className="w-5 text-red-400 cursor-pointer hover:text-blue-400"
                  />
                </div>
              )}
              <SpeakerCard data={speaker} key={`speaker.page.${speaker.id}`} />
            </motion.div>
          ))}
          {user?.role === "admin" && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center justify-center text-xl font-semibold md:w-[48%]  font-mont rounded-lg overflow-hidden text-white flex-row bg-gradient-to-br from-green-900 via-green-800 to-green-600 border border-indigo-300 shadow-md gap-4"
            >
              <PlusIcon className="w-24 text-white" />
              Add New
            </div>
          )}
        </motion.div>
      )}
    </Page>
  );
}

export default Speakers;
