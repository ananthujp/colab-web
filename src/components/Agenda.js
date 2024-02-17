import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CalendarDaysIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Form,
  Button,
  Input,
  Modal,
  Select,
  Progress,
  Popover,
  InputNumber,
  Switch,
  Space,
} from "antd";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import useReducer from "../hook/reducerHook";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { colors, icons } from "../pages/Colors";
import { useNavigate } from "react-router-dom";

function Agenda({ delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const [eei, setI] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [edit, setEdit] = useState({ edit: false, data: null });
  useEffect(() => {
    let timer;
    if (isHovered) {
      let counter = 0;
      timer = setInterval(() => {
        if (counter < 99) {
          counter += 5; // increment by 2.5 every 100ms to reach 100 in 4 seconds
          setProgress(counter);
        }
      }, 1);
    } else {
      setProgress(0);
    }
    return () => clearInterval(timer);
  }, [isHovered]);
  const [open, setOpen] = useState(false);
  const { data, user } = useReducer();
  const [form] = Form.useForm();
  const { setNav } = useReducer();
  const navigate = useNavigate();

  useEffect(() => {
    edit.edit && setOpen(true);
    edit.edit && form.setFieldsValue(edit.data);
    edit.edit && setHover(edit.data.hover);
  }, [edit]);
  const handleDelete = (id) => {
    deleteDoc(doc(db, "agenda", id));
  };
  const onFinish = (values) => {
    edit?.edit
      ? setDoc(doc(db, "agenda", edit.data.id), values)
          .then(() => {
            setOpen(false);
            console.log(edit);
          })
          .catch((e) => console.log(e))
      : addDoc(collection(db, "agenda"), values).then(() => setOpen(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <motion.div
      layoutId={`pgm.agenda`}
      ref={ref}
      initial={
        // nav.from !== "program" &&
        { opacity: 0, translateY: -20 }
      }
      animate={
        // nav.from !== "program" &&
        {
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.5, delay: 0.5 * delay },
        }
      }
      exit={
        // nav.to !== "program"
        // ?
        {
          opacity: 0,
          translateY: 20,
          transition: { duration: 0.5 },
        }
        // : null
      }
      className="bg-slate-50 h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-300 hover:border-gray-400 w-[90%] md:w-full flex flex-col justify-between p-4 rounded-lg"
    >
      {isInView && (
        <div className="flex flex-col gap-3 h-[31rem] ">
          <Modal
            key={`modal.add.item`}
            title="Add an Agenda Item"
            open={open}
            onCancel={() => {
              setOpen(false);
              setEdit({ edit: false, data: null });
            }}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
          >
            <Form
              form={form}
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
              // initialValues={edit?.edit ? edit.data : null}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Key"
                name="key"
                type="number"
                rules={[
                  {
                    required: true,
                    //message: "Please input a number!",
                    type: "number",
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber type="number" />
              </Form.Item>
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
                label="Description"
                name="desc"
                rules={[
                  {
                    required: true,
                    message: "Please input a description!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Time from"
                name="time_f"
                rules={[
                  {
                    required: true,
                    message: "Please input a time!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Time to"
                name="time_t"
                rules={[
                  {
                    required: true,
                    message: "Please input a time!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Icon"
                className="group"
                name="icon"
                rules={[
                  {
                    required: true,
                    message: "Please select an icon!",
                  },
                ]}
              >
                <Select>
                  {icons.map((item, i) => (
                    <Select.Option key={`select.item.ico.${i}`} value={i}>
                      <div className="w-6 text-indigo-400">{item}</div>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Colors"
                name="color"
                rules={[
                  {
                    required: true,
                    message: "Please select a color!",
                  },
                ]}
              >
                <Select>
                  {colors.map((item, i) => (
                    <Select.Option key={`select.item.col.${i}`} value={i}>
                      <div className={`w-6 h-6 ${item[4]}`} />
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Switch" name="hover" valuePropName="checked">
                <Switch
                  checkedChildren="Hover ON"
                  unCheckedChildren="Hover OFF"
                  className="text-blue-400 bg-blue-500"
                  onChange={(e) => setHover(e)}
                />
              </Form.Item>
              {hover && (
                <>
                  <Form.Item name="longdesc" label="Long Description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    label="Venue"
                    name="venue"
                    rules={[
                      {
                        required: true,
                        message: "Please input a venue!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.List name="users">
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
                            <Form.Item
                              {...restField}
                              name={[name, "first"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, "bio"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing bio",
                                },
                              ]}
                            >
                              <Input placeholder="Short bio/Designation" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, "org"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing Organisation",
                                },
                              ]}
                            >
                              <Input placeholder="Organisation" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, "url"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing URL",
                                },
                              ]}
                            >
                              <Input placeholder="Image URL" />
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
                            Add user
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </>
              )}
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button onClick={() => setOpen(false)}>Cancel</Button>
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
          </Modal>
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.5, delay: 0.5 * delay + 0.1 },
            }}
            exit={{
              opacity: 0,
              translateY: 20,
              transition: { duration: 0.5 },
            }}
            className="text-lg mb-4 md:mb-2 flex items-start gap-2 justify-between  flex-row font-pop font-semibold text-slate-800"
          >
            <div className="flex flex-row border-b pb-2 border-slate-300 gap-2 items-center">
              <CalendarDaysIcon className="w-6" />
              <h1>Agenda</h1>
            </div>
            <motion.button
              onClick={() => {
                setNav({ from: "/", to: "program" });
                navigate("/" + "agenda");
              }}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className="rounded-full border font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
            >
              More
            </motion.button>
            {user?.role === "admin" && (
              <motion.button
                //   onClick={() => {
                //     setNav({ from: "/", to: "program" });
                //     navigate("/" + "program");
                //   }}
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, translateY: -20 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                exit={{
                  opacity: 0,
                  translateY: 20,
                  transition: { duration: 0.5 },
                }}
                className="rounded-full font-semibold w-24 text-sm px-2 py-1 text-slate-600 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300"
              >
                Add
              </motion.button>
            )}
          </motion.h1>
          <div className="flex flex-col overflow-scroll gap-6 w-full">
            {data?.map((item, i) => (
              <Popover
                placement="topRight"
                content={
                  <div className="flex flex-col w-48">
                    <p className="w-full border-b border-slate-200 pb-4">
                      {item.hover ? item.longdesc : ""}
                    </p>
                    <div className="flex flex-col">
                      {item.users?.map((user, i) => (
                        <div className="flex flex-row my-2">
                          <img
                            src={user.url}
                            className="w-6 h-6 rounded-full"
                            alt=""
                          />
                          <div className="flex flex-col ml-2">
                            <p className="w-full flex flex-row items-center">
                              {user.first.split("$")[0]}
                              {user.first.split("$").length > 1 && (
                                <div className="px-2 py-0.5 bg-slate-400 text-white ml-2 rounded-full">
                                  {user.first.split("$").length > 1 &&
                                    user.first.split("$")[1]}
                                </div>
                              )}
                            </p>
                            <p className="font-thin italic">{user.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h1 className="flex border-t border-slate-200 pt-2 my-2 flex-row font-mont text-xs font-semibold">
                      Venue :&nbsp;
                      <span className="font-light">{item?.venue}</span>
                    </h1>
                  </div>
                }
                key={`pop.item${i}`}
                title={item.title}
                open={
                  item?.hover && progress === 100 && eei === i ? true : false
                }
                //onOpenChange={handleClickChange}
              >
                <motion.div
                  onClick={() => navigate(`/agenda/${i}`)}
                  onHoverStart={() => {
                    setI(i);
                    setIsHovered(true);
                  }}
                  onHoverEnd={() => setIsHovered(false)}
                  key={`agenda.item.${i}`}
                  // layout
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: 0.5 + i * 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5 },
                  }}
                  className="grid group relative grid-cols-[4em_auto] h-auto"
                >
                  {user?.role === "admin" && (
                    <div className="absolute z-50 bg-slate-200 border border-slate-300 rounded-full p-2 bottom-0 text-red-400 hidden right-1/3 group-hover:flex flex-row gap-2">
                      <TrashIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          window.confirm(
                            `Are you sure you want to delete "${item.title}"?`
                          )
                            ? handleDelete(item.id)
                            : console.log("no");
                        }}
                        className="w-4 cursor-pointer hover:text-blue-400"
                      />
                      <PencilIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          setEdit({ edit: true, data: item });
                        }}
                        className=" ml-4 w-4 cursor-pointer hover:text-blue-400"
                      />
                    </div>
                  )}
                  <div className="flex text-slate-600 text-xs font-mont flex-col justify-between">
                    <h1 className="w-4 mt-1">{item.time_f}</h1>
                    {/* <h1 className="w-4">{item.time_t}</h1> */}
                  </div>
                  <div className="flex flex-col justify-between">
                    <motion.div
                      key={`agenda.item.x.${i}`}
                      layout
                      className={`flex flex-row bg-opacity-90 group hover:bg-opacity-90 justify-between px-4 py-1 relative cursor-pointer h-auto  my-auto rounded-md w-full  border ${
                        colors[item.color][0]
                      }`}
                    >
                      <div className="flex flex-col my-2 w-[80%]">
                        <h1
                          className={`text-xs font-mont ${
                            colors[item.color][1]
                          } font-semibold`}
                        >
                          {item.title}
                        </h1>
                        {isHovered && eei === i && (
                          <motion.h1
                            // initial={{ opacity: 0, translateY: -20 }}
                            // animate={{
                            //   opacity: 1,
                            //   translateY: 0,
                            //   transition: { duration: 0.5, delay: 0.5 + i * 0.3 },
                            // }}
                            // exit={{
                            //   opacity: 0,
                            //   translateY: 20,
                            //   transition: { duration: 0.5 },
                            // }}
                            className={`text-xs xhidden transition-all xgroup-hover:flex font-mont ${
                              colors[item.color][2]
                            } font-light`}
                          >
                            {item.desc}
                          </motion.h1>
                        )}
                      </div>
                      <h1
                        className={`${
                          colors[item.color][3]
                        } w-4 group-hover:w-9 p-2 relative h-4 group-hover:h-9 my-auto transition-all rounded-full`}
                      >
                        {icons[item.icon]}
                        <Progress
                          className="absolute top-0 left-0 transition-all duration-700 opacity-0 group-hover:opacity-100"
                          type="circle"
                          size={isHovered && eei === i ? 36 : 0}
                          format={(percent) => ""}
                          percent={progress}
                          strokeColor={colors[item.color][5]}
                        />
                      </h1>
                    </motion.div>
                    <span
                      className={` rounded-full mt-2 w-8  h-1 ${
                        colors[item.color][4]
                      }`}
                    ></span>
                  </div>
                </motion.div>
              </Popover>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Agenda;
