import React, { useEffect, useState } from "react";
import Page from "./Page";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useReducer from "../hook/reducerHook";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Write.css";
import { db } from "../firebase";
import {
  DocumentIcon,
  LinkIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Alert,
  Avatar,
  FloatButton,
  Input,
  Modal,
  Radio,
  Spin,
  Upload,
} from "antd";
import StallPreview from "./StallPreview";
const provider = new GoogleAuthProvider();
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
  const auth = getAuth();
  const navigate = useNavigate();
  const { user, setUser } = useReducer();
  const params = useParams();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser({ email: user.email, uid: user.uid, role: "author" });
        addDoc(collection(db, "Posts"), {
          user: user.email,
          uid: user.uid,
          title: "",
          photos: [],
          content: {},
        }).then((docRef) => navigate(docRef.id));
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    console.log("virtual", params.virtualId, "posts", params.createId);
    params.createId && setPageLoad(true);
    params.createId &&
      getDoc(doc(db, "virtual", params.virtualId, "posts", params.createId))
        .then((dc) => {
          setTitle(dc.data().title);
          setFileList(dc.data().photos);
          setValue(dc.data().content);
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
    setDoc(doc(db, "virtual", params.virtualId, "posts", params.createId), {
      //   user: user?.uid,
      title: title,
      content: value,
      photos: fileList,
      approved: user?.role === "student" ? false : true,
      role: user?.role === "student" ? "Student" : "Faculty",
    }).then(() => {
      setSaveLoad(false);
      navigate(`/virtual/${params.virtualId}/${params.createId}`);
    });
  };
  return (
    <Page page="themes" title="Create Lab Item">
      <div className="flex flex-col font-mont items-center h-full overflow-scroll w-full">
        {params.createId ? (
          previewmode ? (
            <StallPreview
              InitialValue={{ value: value, title: title, photos: fileList }}
              setPreviewMode={setPreviewMode}
            />
          ) : (
            <div className="flex relative flex-col md:mx-12 h-full  w-full bg-white px-2">
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
                <div className="bg-indigo-50 transition-all hover:bg-indigo-100 border cursor-default border-indigo-100 flex flex-row justify-center items-center px-1 rounded-full">
                  <Avatar
                    //   src={user?.img}
                    className="my-1 border border-indigo-200 bg-blue-400"
                  >
                    {/* {user?.name.slice(0, 1)}{" "} */}
                  </Avatar>
                  <h1 className="ml-1 font-semibold text-xs text-gray-800 pr-2">
                    {/* {user?.name} */}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col transition-all bg-indigo-50 hover:bg-indigo-100 rounded-lg border-indigo-100 border">
                <div className="flex flex-row items-center  p-1">
                  {/* <PencilSquareIcon className="w-4 mr-1 text-indigo-700" /> */}
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
              <div className="flex flex-col mt-2 transition-all hover:bg-indigo-100 bg-indigo-50 rounded-lg border-indigo-100 border">
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
              <div className=" my-2">
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="absolute right-0 bottom-0  flex flex-row gap-2">
                <FloatButton
                  badge={{ dot: true }}
                  onClick={() => setPreviewMode(true)}
                  shape="circle"
                  type="primary"
                  className="relative w-14 h-14 "
                  icon={
                    <div className="flex flex-col items-center">
                      <DocumentIcon />
                    </div>
                  }
                />
                <FloatButton
                  badge={{ dot: true }}
                  onClick={() => handleSave()}
                  shape="circle"
                  type="primary"
                  className="relative w-14 h-14 "
                  //   style={{
                  //     right: 94,
                  //   }}
                  icon={
                    <div className="flex flex-col items-center">
                      {savLoad ? (
                        <Spin className=" filter saturate-200 sepia brightness-200" />
                      ) : (
                        <DocumentIcon />
                      )}
                      {!savLoad && <h1 className="text-xs">Save</h1>}
                    </div>
                  }
                />
              </div>
            </div>
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
