import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Input, Modal, Radio } from "antd";
import { LinkIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
const Card = ({ url, navigate }) => (
  <div
    onClick={() => navigate(url)}
    className="flex cursor-pointer flex-col w-56 h-80 overflow-hidden rounded-lg shadow-lg "
  >
    <img
      className="h-36 w-full bg-gray-200 object-cover"
      src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
      alt=""
    />
    <div className="w-full gap-6 p-4 font-mont bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col h-full ">
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl text-white font-semibold">Title</h1>
        <h1 className="text-sm text-white font-base">Description</h1>
      </div>
    </div>
  </div>
);
const StallCard = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(id)}
      className="flex flex-row w-96 h-56 overflow-hidden rounded-lg shadow-lg "
    >
      <img
        className="w-36 h-full bg-gray-200 object-cover"
        src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
        alt=""
      />
      <div className="w-full gap-6 p-4 font-mont bg-gradient-to-br from-green-600 to-green-400 flex flex-col h-full ">
        <div className="flex flex-row justify-start gap-4 bg-white p-2 rounded-full">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-sm text-gray-800 font-semibold">Author</h1>
            <h1 className="text-xs text-gray-600 font-semibold">Role</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl text-white font-semibold">Title</h1>
          <h1 className="text-sm text-white font-semibold">Description</h1>
        </div>
      </div>
    </div>
  );
};
const isValidURL = (url) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};
function Virtual() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useReducer();
  const [load, setLoad] = useState(true);
  const [stallData, setStallData] = useState(null);
  const [stallPosts, setStallPosts] = useState(null);
  const [stalls, setStalls] = useState(null);
  const [size, setSize] = useState("url");
  const [Glink, setGLink] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState();
  useEffect(() => {
    if (size !== "url") {
      setLink(
        Glink?.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1")
      );
    }
  }, [Glink]);
  const CreatePost = () => {
    addDoc(collection(db, "virtual", params.virtualId, "posts"), {
      user: user.email,
      uid: user.uid,
      title: "Sample title",
      photos: [],
      content: {},
    }).then((docRef) => navigate("create/" + docRef.id));
  };
  const handleCancelM = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    isValidURL(link) &&
      setDoc(
        doc(db, "virtual", params.virtualId),
        { cover: link },
        { merge: true }
      );
    setSize("url");
    setGLink("");
    setLink("");
  };

  useEffect(() => {
    setLoad(true);
    params.virtualId
      ? onSnapshot(doc(db, "virtual", params.virtualId), (doc) => {
          if (doc.exists()) {
            setStallData(doc.data());
            getDocs(collection(db, "virtual", params.virtualId, "posts")).then(
              (items) =>
                setStallPosts(
                  items.docs.map((dic) => ({ id: dic.id, data: dic.data() }))
                )
            );
          } else {
            console.log("No such document!");
          }
          setLoad(false);
        })
      : getDocs(collection(db, "virtual")).then((items) =>
          setStalls(items.docs.map((dic) => ({ id: dic.id, data: dic.data() })))
        );
  }, []);
  return (
    <Page
      page="themes"
      title={params.virtualId ? stallData?.name : "Virtual Stalls"}
    >
      <Modal
        title="Add Images"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ className: "bg-blue-400 " }}
        onCancel={handleCancelM}
      >
        <p className="my-1">
          {size === "url" ? "Add image URL" : "Google drive sharable link"}
        </p>
        {size !== "url" && (
          <Input
            onChange={(e) => setGLink(e.target.value)}
            value={Glink}
            prefix={
              <div className="flex flex-row bg-indigo-100 rounded-sm text-xs py-0.5 px-2">
                Drive link :{/* <LinkIcon className="w-4 text-gray-400" /> */}
              </div>
            }
          />
        )}
        <Input
          className="mt-2"
          onChange={(e) => setLink(e.target.value)}
          value={link}
          disabled={size !== "url" ? true : false}
          prefix={<LinkIcon className="w-4 text-gray-400" />}
        />
        <div className="w-full flex justify-center mt-2">
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value="url">URL</Radio.Button>
            <Radio.Button value="gdrive">Google Drive</Radio.Button>
          </Radio.Group>
        </div>
      </Modal>
      {params.virtualId ? (
        !stallData ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full h-full overflow-scroll flex flex-col justify-start">
            <div className="flex flex-row justify-between shadow-inner shadow-slate-500 w-full">
              {stallData?.cover ? (
                <div className="flex relative items-center justify-center w-full h-36 bg-gradient-to-br from-gray-400 group to-gray-300">
                  <h1
                    onClick={() => setIsModalOpen(true)}
                    className="hidden absolute cursor-pointer group-hover:flex justify-center border border-slate-300 rounded-md items-center bg-slate-200 w-36 text-center font-mont h-8 "
                  >
                    Change Cover
                  </h1>
                  <img
                    className="w-full h-full object-cover"
                    src={stallData?.cover}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-36 bg-gradient-to-br from-gray-400 group to-gray-300">
                  <h1
                    onClick={() => setIsModalOpen(true)}
                    className="hidden cursor-pointer group-hover:flex justify-center border border-slate-300 rounded-md items-center bg-slate-200 w-36 text-center font-mont h-8 "
                  >
                    Add Cover
                  </h1>
                </div>
              )}
            </div>
            <div className="flex flex-row flex-wrap gap-4 m-8">
              {stallPosts?.map((post) => (
                <Card navigate={navigate} url={post.id} />
              ))}

              {stallData.email === user.email && (
                <div
                  onClick={() => CreatePost()}
                  className="flex cursor-pointer text-lg text-white font-mont items-center justify-center h-80 rounded-md w-56 bg-gradient-to-br from-green-400 to-green-600 "
                >
                  New
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="w-full h-full m-8 flex flex-row gap-4 flex-wrap justify-center">
          {stalls?.map((item) => (
            <StallCard id={item.id} />
          ))}
        </div>
      )}
    </Page>
  );
}

export default Virtual;
