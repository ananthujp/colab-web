import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { Author, findChildObject } from "./StallPreview";
import { cardVar } from "./profData";
// import { domains } from "../components/Speakers";
import { Dropdown, Select, Space, Tag } from "antd";
import { CloseCircleOutlined, DownOutlined } from "@ant-design/icons";
const Card = ({ url, navigate, data, user, handleDelete }) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(data?.content, "text/html");
  const spanElement = htmlDoc.querySelector("span");
  const cardBg = findChildObject(cardVar, [data.field, data.faculty])?.parent
    .card;
  return (
    <div
      onClick={() => navigate(url)}
      className="flex relative cursor-pointer  border border-slate-300 flex-row w-[48%] h-60 overflow-hidden rounded-lg shadow-lg "
    >
      {user?.role === "admin" && (
        <div className="absolute top-2 z-50 bg-slate-300 px-2 py-1 rounded-full right-2 flex flex-row gap-2">
          <PencilIcon
            onClick={(e) => {
              e.stopPropagation();
              window.confirm(`Are you sure you want to edit "${data.title}"?`)
                ? navigate("create/" + url)
                : console.log("no");
            }}
            className="w-6 cursor-pointer h-6 text-blue-400"
          />
          <TrashIcon
            onClick={(e) => {
              e.stopPropagation();
              window.confirm(`Are you sure you want to delete "${data.title}"?`)
                ? handleDelete(url)
                : console.log("no");
            }}
            className="w-6 cursor-pointer h-6  text-red-400"
          />
        </div>
      )}
      <img
        className="h-full w-36 bg-gray-200 object-cover"
        src={
          data.photos?.[0]
            ? data.photos[0].url
            : "https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
        }
        alt=""
      />
      <div
        className={`relative w-full gap-6 p-4 font-mont bg-gradient-to-br ${cardBg} transition-all  hover:to-blue-300 flex flex-col h-full `}
      >
        <div
          className="w-full -z-0 h-full top-0 left-0 absolute pattern-dots pattern-slate-500 pattern-bg-white 
  pattern-size-2 pattern-opacity-10"
        />
        <Author fac={[data.field, data.faculty]} />
        <div className="flex flex-col gap-2">
          <p className="text-xl text-slate-800 leading-tight font-semibold">
            {data.title}
          </p>
          <p className="text-xs text-slate-600 font-base">
            {Object.keys(data?.content).length !== 0 &&
              spanElement.textContent.slice(0, 73) + ".."}
          </p>
        </div>
      </div>
    </div>
  );
};
const domains = cardVar.map((obj) => ({ label: obj.label, card: obj.card }));

function Virtual() {
  const navigate = useNavigate();
  const { user } = useReducer();
  const [load, setLoad] = useState(true);
  const [stallPosts, setStallPosts] = useState(null);
  const [filters, setFilters] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleDelete = (url) => {
    setStallPosts(stallPosts.filter((post) => post.id !== url));
    deleteDoc(doc(db, "virtual", url));
  };

  const CreatePost = () => {
    addDoc(collection(db, "virtual"), {
      title: "",
      photos: [],
      content:
        '<h2><strong style="background-color: transparent; color: rgb(233, 0, 111);">Research Background</strong></h2><p><strong style="background-color: transparent; color: rgb(38, 38, 38);">Objective: </strong></p><p><br></p><p><strong style="background-color: transparent; color: rgb(38, 38, 38);">Approaches Used</strong><span style="background-color: transparent; color: rgb(38, 38, 38);">:</span></p><ul><li><br></li></ul><p><br></p><h2><strong style="color: rgb(233, 0, 111); background-color: transparent;">Key Sectors</strong></h2><ul><li><br></li></ul><p><br></p><h2><strong style="background-color: transparent; color: rgb(233, 0, 111);">Domains</strong></h2><ul><li><br></li></ul><p><br></p><h2><strong style="background-color: transparent; color: rgb(233, 0, 111);">Project Title(s) (Kindly provide titles the of a maximum of two projects and mention the domain(s) they fall under)</strong></h2><p><br></p>',
      field: "",
      faculty: "",
    }).then((docRef) => navigate("create/" + docRef.id));
  };
  useEffect(() => {
    setLoad(true);
    getDocs(collection(db, "virtual")).then((items) =>
      setStallPosts(items.docs.map((dic) => ({ id: dic.id, data: dic.data() })))
    );
  }, []);
  useEffect(() => {
    if (filters.length > 0) {
      setFilteredPosts(
        stallPosts.filter((obj) => filters.includes(obj?.data?.field))
      );
    } else {
      setFilteredPosts(stallPosts);
    }
  }, [filters, stallPosts]);

  const addValue = (value) => {
    if (!filters.includes(value)) {
      setFilters((prevArray) => [...prevArray, value]);
    }
  };
  const removeTag = (value) => {
    if (filters.includes(value)) {
      setFilters((prevArray) => prevArray.filter((item) => item !== value));
    }
  };
  const items = domains.map((item, index) => ({
    key: index,
    label: <div onClick={() => addValue(item.label)}>{item.label}</div>,
  }));
  // function filterPosts(stallPosts, fields) {
  //   return stallPosts.filter(post => fields.includes(post.data.field));
  // }
  // const filteredPosts = filterPosts(stallPosts, ['field1', 'field2']);
  return (
    <Page page="themes" title={"Virtual Stalls"}>
      <div className="w-full h-full overflow-scroll flex flex-col justify-start">
        <div className="flex h-12 flex-row overflow-scroll items-center  justify-start gap-3 w-full bg-indigo-100 border border-indigo-200 mx-0 px-4 rounded-md py-3">
          <Dropdown
            className="font-mont whitespace-nowrap flex flex-row text-xs cursor-pointer py-1 px-2 rounded-full bg-slate-50 border-slate-400 border"
            menu={{ items }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <PlusIcon className="w-4 h-4" />
                Add Filter
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <div className="flex flex-row w-full">
            {filters?.map((tag) => (
              <Tag
                key={`tag.${tag}`}
                closeIcon={<CloseCircleOutlined />}
                onClose={() => removeTag(tag)}
                className={`${
                  domains.filter((obj) => obj.label === tag)[0].card
                } px-2 bg-gradient-to-br py-0.5 rounded-full border border-slate-400`}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-row flex-wrap gap-4 m-8">
          {filteredPosts?.map((post) => (
            <Card
              key={`${post.id}.card`}
              user={user}
              navigate={navigate}
              url={post.id}
              data={post.data}
              handleDelete={handleDelete}
            />
          ))}

          {user?.role === "admin" && (
            <div
              onClick={() => CreatePost()}
              className="flex cursor-pointer text-xl font-bold text-white font-mont items-center justify-center h-60 rounded-md w-[48%] bg-gradient-to-br from-green-400 to-green-600 "
            >
              <PlusIcon className="w-12 h-12" />
              New
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default Virtual;
