import React, { useState } from "react";
import Page from "./Page";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useReducer from "../hook/reducerHook";
import { Form, Button, Input, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { UserIcon } from "@heroicons/react/24/solid";
const provider = new GoogleAuthProvider();

function CreateLab() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user, setUser, logout } = useReducer();
  const [enableform, setEnableForm] = useState(false);
  const [savLoad, setSaveLoad] = useState(false);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const userD = result.user;
        console.log(user);
        setUser({
          email: userD.email,
          img: userD.photoURL,
          name: userD.displayName,
          uid: userD.uid,
          role: "lab_owner",
        });
        setEnableForm(true);
        // addDoc(collection(db, "Posts"), {
        //   user: user.email,
        //   uid: user.uid,
        //   title: "",
        //   photos: [],
        //   content: {},
        // }).then((docRef) => navigate(docRef.id));
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;

        // ...
      });
  };
  const onFinish = (values) => {
    console.log("Success:", {
      ...values,
      email: user.email,
      time: serverTimestamp(),
    });
    addDoc(collection(db, "virtual"), {
      ...values,
      email: user.email,
      time: serverTimestamp(),
    }).then((docRef) => {
      message.success("Your virtual lab has been sent successfully!");
      navigate("/virtual/" + docRef.id);
    });
  };

  const handleSave = () => {
    setSaveLoad(true);
    // setDoc(doc(db, "Posts", params.createId), {
    //   user: user?.uid,
    //   title: title,
    //   content: value,
    //   photos: fileList,
    //   approved: user?.role === "student" ? false : true,
    //   role: user?.role === "student" ? "Student" : "Faculty",
    // }).then(() => {
    //   setSaveLoad(false);
    //   navigate(`/virtual/create/${params.createId}`);
    // });
  };
  return (
    <Page page="themes" title="Create Stall">
      <div className="w-full h-full gap-4 flex items-center flex-col p-2">
        {user ? (
          <div onClick={() => logout()}>logout</div>
        ) : (
          <button
            onClick={() => signIn()}
            className="w-24 h-6 bg-blue-500 rounded-full text-white font-mont items-center justify-center"
          >
            Login
          </button>
        )}
        <Form
          disabled={!enableform}
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
            label="Stall Name"
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
          <Form.List name="users" header="Contributors">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                      gap: 0,
                    }}
                    align="baseline"
                  >
                    <UserIcon className="w-6 h-6 mr-2 text-slate-600 -mb-2 my-auto" />
                    <Form.Item
                      {...restField}
                      name={[name, "email"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing email",
                        },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Contributor
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item
            className="mt-4 -mb-4"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              //style={{ backgroundColor: "blue" }}
              className={`ml-4 bg-blue-500 `}
              type="primary"
              //disabled={login_load}
              htmlType="submit"
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Page>
  );
}

export default CreateLab;
