import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, FloatButton, Image } from "antd";
import {
  DocumentIcon,
  EyeIcon,
  EyeSlashIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import "./Read.css";
import "react-quill/dist/quill.snow.css";
import { cardVar } from "./profData";
export function findChildObject(cardVar, fac) {
  const parentObject = cardVar.find((obj) => obj.label === fac[0]);
  if (parentObject) {
    const childObject = parentObject.prof.find(
      (child) => child.name === fac[1]
    );
    return { child: childObject, parent: parentObject };
  }
  return null;
}
export const Domain = ({ fac }) => {
  const author = findChildObject(cardVar, fac);
  return (
    <Link
      to={"/themes/" + cardVar.findIndex((obj) => obj.label === fac[0])}
      className={` mr-0 ml-auto flex flex-row mb-2 float-left items-center bg-gradient-to-br from-indigo-50 to-indigo-100 hover:to-indigo-200 transition-all  border cursor-default border-indigo-200 px-1 rounded-full`}
    >
      <img src={author?.parent?.img} className="w-5 h-5" alt="" />
      <div className="flex flex-col">
        <h1 className="ml-1 font-semibold text-xs text-gray-800 pr-2">
          {author?.parent?.label}
        </h1>
      </div>
    </Link>
  );
};
export const Author = ({ fac }) => {
  const author = findChildObject(cardVar, fac);
  return (
    <Link
      to={"/themes/" + cardVar.findIndex((obj) => obj.label === fac[0])}
      className="z-10 flex flex-row mr-auto mb-2 float-left items-center bg-gradient-to-br from-indigo-50 to-indigo-100 transition-all hover:to-indigo-200 border cursor-default border-indigo-200 px-1 rounded-full"
    >
      <Avatar
        src={author?.child?.img}
        className="my-1 border border-indigo-200 bg-blue-400"
      >
        {author?.child?.name?.slice(0, 1)}{" "}
      </Avatar>
      <div className="flex flex-col">
        <h1 className="ml-1 font-semibold text-xs text-gray-800 pr-2">
          {author?.child?.name}
        </h1>
        <h1 className="ml-1  text-xs text-gray-400 pr-2">
          {author?.child?.designation}
        </h1>
      </div>
    </Link>
  );
};
function StallPreview({ id, setPreviewMode, InitialValue }) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [fac, setFac] = useState("");
  const [author, setAuthor] = useState("");
  const [fileList, setFileList] = useState([]);
  const params = useParams();
  console.log(author);
  useEffect(() => {
    // if (!id) {
    setTitle(InitialValue.title);
    setFileList(InitialValue.photos);
    setValue(InitialValue.content);
    setFac([InitialValue.field, InitialValue.faculty]);
    setAuthor(
      findChildObject(cardVar, [InitialValue.field, InitialValue.faculty])
    );
    // }
    // id &&
    //   getDoc(doc(db, "virtual", params.createId)).then((dc) => {
    //     setTitle(dc.data().title);

    //     setFileList(dc.data().photos);
    //     setValue(dc.data().content);
    //     //   getDoc(
    //     //     doc(
    //     //       db,
    //     //       "People",
    //     //       "TRInjm0tAFTucocoGSvj",
    //     //       dc.data().role,
    //     //       dc.data().user
    //     //     )
    //     //   ).then((dic) =>
    //     //     setAuthor({
    //     //       name: dic.data().name,
    //     //       img: dic.data().img,
    //     //       id: dic.id,
    //     //       email: dic.data().email,
    //     //     })
    //     //   );
    //   });
    // .then(() => setPageLoad(false));
  }, [InitialValue]);

  return (
    <div className="flex relative overflow-scroll w-full h-full flex-col md:mx-48 bg-white px-2">
      {/* <div className="flex flex-row justify-between w-full my-3">
        <h1 className="ml-1 font-semibold text-2xl text-gray-800">{title}</h1>
      </div> */}
      <div className="flex flex-row justify-between w-full ">
        <Author fac={fac} />
        {setPreviewMode ? (
          <div className="flex flex-row justify-center items-center">
            <div
              onClick={() => setPreviewMode(false)}
              className="px-2 items-center cursor-pointer gap-2 flex flex-row py-1 rounded-full font-mont font-medium text-slate-600 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:to-indigo-200 border border-indigo-300 "
            >
              <EyeSlashIcon className="w-5" />

              <h1 className="text-xs">Close Preview</h1>
            </div>
          </div>
        ) : (
          <Domain fac={fac} />
        )}
      </div>
      <div className="flex flex-col gap-2 bg-indigo-100 md:mx-6 mx-2 p-2 rounded-md border border-indigo-200 w-full xoverflow-x-scroll ">
        <h1 className="w-32 whitespace-nowrap font-mont px-2 py-0.5 rounded-md font-medium text-slate-600   text-sm transform origin-bottom  ">
          {/* <Ima className="w-5 inline-block -mt-1 mr-2" /> */}
          <PhotoIcon className="w-4 inline-block mr-1 my-auto" />
          Images :
        </h1>
        <div className="flex flex-row gap-2 items-center justify-start -mt-1">
          <Image.PreviewGroup
          // preview={{
          //   onChange: (current, prev) =>-ml-5 -mr-8 -mt-6 md:-rotate-90
          //     console.log(`current index: ${current}, prev index: ${prev}`),
          // }}
          >
            {fileList &&
              fileList.map((dc) => (
                <Image
                  className="object-cover border-2 rounded-lg shadow-md p-1 border-white"
                  height={100}
                  key={`img.id.${dc.uid}`}
                  src={dc.url}
                />
              ))}
          </Image.PreviewGroup>
        </div>
      </div>
      <div
        className="ql-viewer mx-2 md:mx-6 mb-4 mt-4"
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
