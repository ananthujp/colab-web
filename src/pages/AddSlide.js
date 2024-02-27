import React from "react";
import Page from "./Page";
import {
  Form,
  Input,
  Button,
  Select,
  Space,
  Cascader,
  Card,
  message,
  Modal,
  Checkbox,
} from "antd";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  MinusCircleOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { domains } from "../components/Speakers";
import { transformData } from "../components/ContactCard";
import { cardVar } from "./profData";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { cardData } from "./profData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import useReducer from "../hook/reducerHook";
import { emails } from "../userData";
const SliderDash = ({ data, handleEdit, handleDelete, handleView }) => (
  <>
    <div className="w-full  h-full overflow-scroll grid border py-2 border-slate-300 text-center gap-2 font-mont px-6 grid-cols-4">
      <h1 className="font-semibold border-b border-slate-300 pb-2">No</h1>
      <h1 className="font-semibold border-b border-slate-300 pb-2">Faculty</h1>
      <h1 className="font-semibold border-b border-slate-300 pb-2">id</h1>
      <h1 className="font-semibold border-b border-slate-300 pb-2">Actions</h1>
      {data?.map((item, index) => (
        <>
          <h1 key={`${index}.slider.dash.item.1`} className="">
            {index}
          </h1>
          <h1 key={`${index}.slider.dash.item.2`} className="">
            {item.data.faculty[1]}
          </h1>
          <h1 key={`${index}.slider.dash.item.3`} className="">
            {item.id}
          </h1>
          <h1
            key={`${index}.slider.dash.item.4`}
            className="flex flex-row justify-center w-full gap-2"
          >
            <EyeIcon
              onClick={() =>
                window.confirm(`Do you want to view ${item.id}`) &&
                handleView(item.id)
              }
              className="w-5 cursor-pointer hover:text-green-300 text-green-400"
            />
            <PencilIcon
              onClick={() =>
                window.confirm(`Do you want to edit ${item.id}`) &&
                handleEdit(item.id)
              }
              className="w-5 cursor-pointer hover:text-blue-300 text-blue-400"
            />
            <TrashIcon
              onClick={() =>
                window.confirm(`Do you want to delete ${item.id}`) &&
                handleDelete(item.id)
              }
              className="w-5 cursor-pointer hover:text-red-300 text-red-400"
            />
          </h1>
        </>
      ))}
    </div>
    <Link
      to="/addslide"
      className="py-2 font-mont px-6 mx-auto bg-gradient-to-br from-green-400 to-green-500 hover:to-green-600 text-white rounded-full"
    >
      Add
    </Link>
  </>
);
function AddSlide() {
  const [form] = Form.useForm();
  const { user, setUser } = useReducer();
  const [login_load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "slides"), (querySnapshot) => {
      setSlides(
        querySnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
      );
    });
  }, []);
  const [dash, setDash] = useState(
    useLocation().pathname.split("/").pop() === "dash"
  );
  const Data = transformData(cardVar);
  const [edit, setEdit] = useState({ edit: false, data: null });
  const handleView = (id) => {
    navigate(`/slidedeck/${id}`);
  };
  const handleEdit = (id) => {
    setEdit({ edit: true, data: slides.find((item) => item.id === id) });
    setDash(false);
  };
  const handleDelete = (id) => {
    deleteDoc(doc(db, "slides", id)).then(() => {
      message.success("Slide Deleted");
      setSlides(slides.filter((item) => item.id !== id));
    });
  };

  const onLogin = (values) => {
    setLoad(true);
    const email = emails.find(
      (email) => email.e === values.username && email.pw === values.password
    );
    if (email) {
      console.log("Success:", email);
      setUser({ role: "user", email: email.e });
      setOpen(false);
      setLoad(false);
    } else {
      message.error("Invalid Credentials");
      setLoad(false);
    }
  };
  const onLoginFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setLoad(false);
  };
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [["link"]],
  };
  useEffect(() => {
    // edit.edit && setOpen(true);
    console.log(edit);
    edit.edit && form.setFieldsValue(edit.data.data);
    edit.edit && setValue(edit.data.data.images);
    // edit.edit && setHover(edit.data.hover);
  }, [edit]);

  const onFinish = (values) => {
    edit?.edit
      ? setDoc(doc(db, "slides", edit.data.id), { ...values, images: value })
          .then(() => {
            message.success("Slide Edited");
            form.setFieldsValue({
              projects: [{}],
              app: [{}],
              domains: [{}],
              sect: [{}],
              obj: "",
              title: "",
            });
            setValue("");
            setDash(true);
          })
          .catch((e) => console.log(e))
      : addDoc(collection(db, "slides"), { ...values, images: value }).then(
          () => {
            message.success("Slide Added");
            form.setFieldsValue({
              projects: [{}],
              app: [{}],
              domains: [{}],
              sect: [{}],
              obj: "",
              title: "",
            });
            setValue("");
            navigate("/addslide/dash");
          }
        );
  };
  const onFinishFailed = (errorInfo) => {
    navigate("/addslide/dash");
    setDash(true);
  };
  return (
    <Page
      page="themes"
      title={dash ? "Slides Dashboard" : "Add Slide"}
      hideBreadcrumb
    >
      <Modal
        title="Login"
        open={open}
        onCancel={() => setOpen(false)}
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
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              //style={{ backgroundColor: "blue" }}
              className={`ml-4 font-pop bg-blue-500 ${
                login_load && "bg-slate-400"
              }`}
              type="primary"
              disabled={login_load}
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {user?.role === "admin" || user?.role === "user" ? (
        <>
          {!dash ? (
            <div className="flex flex-col font-mont items-center h-full overflow-scroll w-[90%]">
              <Form
                form={form}
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  projects: [{}],
                }}
                className="w-full mx-auto"
                // initialValues={edit?.edit ? edit.data : null}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Faculty"
                  name="faculty"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Cascader options={Data} />
                </Form.Item>
                <Form.Item name="obj" label="Objective">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item label="Approaches Used">
                  <Form.List name="app">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <div className="flex flex-row items-center gap-2">
                            <Form.Item
                              {...restField}
                              className="w-full"
                              name={[name, "data"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input.TextArea className="w-full" />
                              {/* <Input placeholder="First Name" /> */}
                            </Form.Item>

                            <MinusCircleOutlined
                              className="mb-auto mt-4 text-red-600"
                              onClick={() => remove(name)}
                            />
                          </div>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
                <Form.Item label="Domains">
                  <Form.List name="domains">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <div className="flex flex-row items-center gap-2">
                            <Form.Item
                              {...restField}
                              className="w-full"
                              name={[name, "data"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Select
                                className="w-full "
                                // style={{
                                //   width: 120,
                                // }}
                                options={domains.map((item, index) => ({
                                  key: index,
                                  value: item,
                                }))}
                              />
                              {/* <Input placeholder="First Name" /> */}
                            </Form.Item>

                            <MinusCircleOutlined
                              className="mb-auto mt-2 text-red-600"
                              onClick={() => remove(name)}
                            />
                          </div>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
                <Form.Item label="Key Sectors">
                  <Form.List name="sect">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <div className="flex flex-row items-center gap-2">
                            <Form.Item
                              {...restField}
                              className="w-full"
                              name={[name, "data"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input className="w-full" />
                              {/* <Input placeholder="First Name" /> */}
                            </Form.Item>

                            <MinusCircleOutlined
                              className="mb-auto mt-4 text-red-600"
                              onClick={() => remove(name)}
                            />
                          </div>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
                <Form.Item label="Projects/Publications">
                  <Form.List name="projects">
                    {(fields, { add, remove }) => (
                      <div className="w-full flex flex-col gap-1">
                        {fields.map((field) => (
                          <Card
                            size="small"
                            title={`Domain ${field.name + 1}`}
                            key={field.key}
                            extra={
                              <CloseOutlined
                                onClick={() => {
                                  remove(field.name);
                                }}
                              />
                            }
                          >
                            <Form.Item
                              label="Domain Name"
                              name={[field.name, "domain"]}
                            >
                              <Input />
                            </Form.Item>

                            {/* Nest Form.List */}
                            <Form.Item label="Project Title">
                              <Form.List name={[field.name, "title"]}>
                                {(subFields, subOpt) => (
                                  <div
                                    className="w-full flex flex-col gap-2"
                                    //   style={{
                                    //     display: "flex",
                                    //     flexDirection: "column",
                                    //     width: "100%",
                                    //     rowGap: 16,
                                    //   }}
                                  >
                                    {subFields.map((subField) => (
                                      <div
                                        className="flex flex-row gap-1"
                                        key={subField.key}
                                      >
                                        <Form.Item
                                          noStyle
                                          className="w-full"
                                          name={[subField.name, "data"]}
                                        >
                                          <Input
                                            className="w-full"
                                            placeholder="Project Title"
                                          />
                                        </Form.Item>

                                        <CloseOutlined
                                          onClick={() => {
                                            subOpt.remove(subField.name);
                                          }}
                                        />
                                      </div>
                                    ))}
                                    <Button
                                      type="dashed"
                                      onClick={() => subOpt.add()}
                                      block
                                    >
                                      + Add Project/Publication
                                    </Button>
                                  </div>
                                )}
                              </Form.List>
                            </Form.Item>
                          </Card>
                        ))}

                        <Button type="dashed" onClick={() => add()} block>
                          + Add Domain
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
                <div
                  className={`ant-row  ant-form-item-row gap-0 css-dev-only-do-not-override-1b0bdye`}
                >
                  <h1
                    className={`ant-col ant-col-8 ant-form-item-label css-dev-only-do-not-override-1b0bdye text-right -ml-4 mr-2 ${
                      value.length / 1024 > 200 && "text-red-500"
                    }`}
                  >
                    Images (Size :{parseInt(value.length / 1024)} kb) :{" "}
                  </h1>
                  <div className="ant-col mb-4 ant-col-16 ant-form-item-control css-dev-only-do-not-override-1b0bdye">
                    <ReactQuill
                      modules={modules}
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button onClick={() => onFinishFailed()}>Cancel</Button>
                  <Button
                    //style={{ backgroundColor: "blue" }}
                    className="ml-4 bg-blue-500"
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <SliderDash
              data={slides}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleView={handleView}
            />
          )}
        </>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="px-6 py-2 cursor-pointer bg-gradient-to-br from-indigo-400 to-indigo-500 hover:to-indigo-600 mx-auto rounded-full text-white"
        >
          Login
        </div>
      )}
    </Page>
  );
}

export default AddSlide;
