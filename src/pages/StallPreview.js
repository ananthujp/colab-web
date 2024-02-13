import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, FloatButton, Image } from "antd";
import { PencilIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import "./Read.css";
import "react-quill/dist/quill.snow.css";

function StallPreview({ id, setPreviewMode, InitialValue }) {
  const [pageLoad, setPageLoad] = useState(false);
  // const [author, setAuthor] = useState({});
  // const { user } = useReducer();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const params = useParams();
  const nav = useNavigate();
  const author = null;
  useEffect(() => {
    setPageLoad(true);
    if (!id) {
      setValue(InitialValue.value);
      setTitle(InitialValue.title);
      setFileList(InitialValue.photos);
    }
    id &&
      getDoc(doc(db, "Posts", id)).then((dc) => {
        setTitle(dc.data().title);

        setFileList(dc.data().photos);
        setValue(dc.data().content);
        //   getDoc(
        //     doc(
        //       db,
        //       "People",
        //       "TRInjm0tAFTucocoGSvj",
        //       dc.data().role,
        //       dc.data().user
        //     )
        //   ).then((dic) =>
        //     setAuthor({
        //       name: dic.data().name,
        //       img: dic.data().img,
        //       id: dic.id,
        //       email: dic.data().email,
        //     })
        //   );
      });
    // .then(() => setPageLoad(false));
  }, []);

  return (
    <div className="flex relative overflow-scroll w-full h-full flex-col md:mx-48 bg-white px-2">
      <div className="absolute right-0 bottom-0  flex flex-row gap-2">
        <FloatButton
          badge={{ dot: true }}
          onClick={() => setPreviewMode(false)}
          shape="circle"
          type="primary"
          className="relative w-14 h-14 "
          icon={
            <div className="flex flex-col items-center">
              <DocumentIcon />
            </div>
          }
        />
      </div>
      <div className="flex flex-row justify-between w-full my-3">
        <h1 className="ml-1 font-semibold text-2xl text-gray-800">{title}</h1>
      </div>
      <Link
        to={"/People/Faculty/" + author?.email}
        className=" flex flex-row mr-auto mb-2 float-left items-center bg-indigo-50 transition-all hover:bg-indigo-100 border cursor-default border-indigo-100 px-1 rounded-full"
      >
        <Avatar
          src={author?.img}
          className="my-1 border border-indigo-200 bg-blue-400"
        >
          {author?.name?.slice(0, 1)}{" "}
        </Avatar>
        <div className="flex flex-col">
          <h1 className="ml-1 font-semibold text-xs text-gray-800 pr-2">
            {author?.name}
          </h1>
          <h1 className="ml-1  text-xs text-gray-400 pr-2">Author</h1>
        </div>
      </Link>
      <div className="flex flex-row w-full xoverflow-x-scroll items-center justify-center bg-indigo-50">
        <Image.PreviewGroup
        // preview={{
        //   onChange: (current, prev) =>
        //     console.log(`current index: ${current}, prev index: ${prev}`),
        // }}
        >
          {fileList &&
            fileList.map((dc) => (
              <Image
                className="object-cover border border-indigo-100"
                height={150}
                key={`img.id.${dc.uid}`}
                src={dc.url}
              />
            ))}
        </Image.PreviewGroup>
      </div>
      <div
        className="ql-viewer mx-2 mb-4 mt-4"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
      {/* {user?.id === author?.id && (
        <FloatButton
          badge={{ dot: true }}
          onClick={() => nav(`/Posts/Create/${params.id}`)}
          shape="circle"
          type="primary"
          className="w-14 h-14 "
          style={{
            right: 94,
          }}
          icon={
            <div className="flex flex-col items-center">
              <PencilIcon className="w-5" />
              <h1 className="text-xs">Edit</h1>{" "}
            </div>
          }
        />
      )} */}
    </div>
  );
}

export default StallPreview;
