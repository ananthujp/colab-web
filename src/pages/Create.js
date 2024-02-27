import React, { useEffect, useState } from "react";
import Page from "./Page";
import useReducer from "../hook/reducerHook";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Write.css";
import { db } from "../firebase";
import {
  DocumentIcon,
  EyeIcon,
  LinkIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Cascader,
  FloatButton,
  Input,
  Modal,
  Radio,
  Spin,
  Upload,
  message,
} from "antd";
import StallPreview from "./StallPreview";
import { transformData } from "../components/ContactCard";
import { cardVar } from "./profData";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const isValidURL = (url) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};
function Create() {
  const navigate = useNavigate();
  const { user } = useReducer();
  const params = useParams();
  const signIn = () => {
    if (user?.role === "admin") {
      addDoc(collection(db, "virtual"), {
        title: "",
        photos: [],
        content: {},
        field: "",
        faculty: "",
      }).then((docRef) => navigate(docRef.id));
    } else {
      message.error("You are not authorized to create a post");
    }
  };
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    console.log("posts", params.createId);
    params.createId && setPageLoad(true);
    params.createId &&
      getDoc(doc(db, "virtual", params.createId))
        .then((dc) => {
          setTitle(dc.data().title);
          setFileList(dc.data().photos);
          setValue(dc.data().content);
          setFac([dc.data().field, dc.data().faculty]);
        })
        .then(() => setPageLoad(false));
  }, []);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [previewmode, setPreviewMode] = useState(false);
  const [savLoad, setSaveLoad] = useState(false);
  const [size, setSize] = useState("url");
  const modules = {
    toolbar: [
      //[{ font: [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      //   ["link", "image", "video"],
      ["link"],
      //   ["clean"],
    ],
  };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fac, setFac] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleCancel = () => setPreviewOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState();
  const [Glink, setGLink] = useState();
  useEffect(() => {
    if (size !== "url") {
      const fileId = Glink.match(/\/d\/([^/]+)/)[1];

      // Constructing the desired URL

      setLink(`https://lh3.googleusercontent.com/d/${fileId}`);
    }
  }, [Glink]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    isValidURL(link) &&
      setFileList([
        ...fileList,
        {
          uid: fileList.length,
          name: link.substring(link.lastIndexOf("/") + 1),
          status: "done",
          url: link,
        },
      ]);
    setSize("url");
    setGLink("");
    setLink("");
  };
  const handleCancelM = () => {
    setIsModalOpen(false);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleSave = () => {
    setSaveLoad(true);
    setDoc(doc(db, "virtual", params.createId), {
      //   user: user?.uid,
      title: title,
      content: value,
      photos: fileList,
      field: fac[0],
      faculty: fac[1],
      //approved: user?.role === "student" ? false : true,
      // role: user?.role === "student" ? "Student" : "Faculty",
    }).then(() => {
      setSaveLoad(false);
      navigate(`/virtual/${params.createId}`);
    });
  };
  return (
    <Page page="themes" title="Create Lab Item" hideBreadcrumb>
      <div className="flex flex-col font-mont items-center h-full overflow-scroll w-full">
        {params.createId ? (
          previewmode ? (
            <StallPreview
              InitialValue={{
                content: value,
                title: title,
                photos: fileList,
                field: fac[0],
                faculty: fac[1],
              }}
              setPreviewMode={setPreviewMode}
            />
          ) : (
            user?.role === "admin" && (
              <div className="flex gap-2 relative flex-col md:mx-12 h-full  w-full bg-white px-2">
                <Modal
                  title="Add Images"
                  open={isModalOpen}
                  onOk={handleOk}
                  okButtonProps={{ className: "bg-blue-400 " }}
                  onCancel={handleCancelM}
                >
                  <p className="my-1">
                    {size === "url"
                      ? "Add image URL"
                      : "Google drive sharable link"}
                  </p>
                  {size !== "url" && (
                    <Input
                      onChange={(e) => setGLink(e.target.value)}
                      value={Glink}
                      prefix={
                        <div className="flex flex-row bg-indigo-100 rounded-sm text-xs py-0.5 px-2">
                          Drive link :
                          {/* <LinkIcon className="w-4 text-gray-400" /> */}
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
                    <Radio.Group
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      <Radio.Button value="url">URL</Radio.Button>
                      <Radio.Button value="gdrive">Google Drive</Radio.Button>
                    </Radio.Group>
                  </div>
                </Modal>
                <div className="flex flex-row justify-between w-full my-3">
                  <h1 className="ml-1 font-semibold font-mont text-2xl text-gray-800">
                    Create a new post
                  </h1>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                      <div
                        onClick={() => setPreviewMode(true)}
                        className="px-2 items-center cursor-pointer gap-2 flex flex-row py-1 rounded-full font-mont font-medium text-slate-600 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:to-indigo-200 border border-indigo-300 "
                      >
                        <EyeIcon className="w-5" />

                        <h1 className="text-xs">Preview</h1>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <div
                        onClick={() => handleSave()}
                        className="px-2 items-center cursor-pointer gap-2 flex flex-row py-1 rounded-full font-mont font-medium text-slate-600 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:to-indigo-200 border border-indigo-300 "
                      >
                        {savLoad ? (
                          <Spin className="w-5 filter saturate-200 " />
                        ) : (
                          <DocumentIcon className="w-5" />
                        )}
                        {!savLoad && <h1 className="text-xs">Save</h1>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition-all bg-indigo-50 hover:bg-indigo-100 rounded-lg border-slate-300 border">
                  <div className="flex flex-row items-center  p-1">
                    <h1 className="font-semibold ml-2 text-sm text-slate-800">
                      Title :
                    </h1>
                  </div>
                  <Input
                    className="mx-2 mb-2 w-[98%]"
                    size="large"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title of the post"
                    prefix={
                      <PencilSquareIcon className="w-4 mr-1 text-indigo-700" />
                    }
                  />
                </div>
                <div className="flex flex-col transition-all bg-indigo-50 hover:bg-indigo-100 rounded-lg border-slate-300 border">
                  <div className="flex flex-row items-center  p-1">
                    <h1 className="font-semibold ml-2 text-sm text-slate-800">
                      Faculty :
                    </h1>
                  </div>
                  <Cascader
                    value={fac}
                    onChange={(value) => setFac(value)}
                    className="px-2 w-full mb-2"
                    options={transformData(cardVar)}
                  />
                </div>
                <div className="flex flex-col  transition-all hover:bg-indigo-100 bg-indigo-50 rounded-lg border-slate-300 border">
                  <div className="flex flex-row items-center  p-1">
                    {/* <PencilSquareIcon className="w-4 mr-1 text-indigo-700" /> */}
                    <h1 className="font-semibold ml-2 text-sm text-slate-800">
                      Images :
                    </h1>
                  </div>
                  <Upload
                    //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    openFileDialogOnClick={false}
                    className="ml-2"
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : (
                      <div
                        className="w-full h-full items-center justify-center flex bg-white rounded-md"
                        onClick={showModal}
                      >
                        <PlusIcon className="w-5" />
                      </div>
                    )}
                  </Upload>
                  <div></div>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{
                        width: "100%",
                      }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
                <div className=" mb-2">
                  <ReactQuill
                    modules={modules}
                    theme="snow"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            )
          )
        ) : (
          <button
            onClick={() => signIn()}
            className="w-24 h-6 bg-blue-500 rounded-full text-white font-mont items-center justify-center"
          >
            Login
          </button>
        )}
      </div>
    </Page>
  );
}

export default Create;
