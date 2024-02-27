import React, { useEffect, useState } from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import useReducer from "../hook/reducerHook";
import { colors, icons } from "./Colors";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Popover, Progress } from "antd";
import avatar from "../imgs/user.png";

function Agenda() {
  const { data } = useReducer();
  const params = useParams();
  const [progress, setProgress] = useState(0);
  const [eei, setI] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
  return (
    <Page no={4} page="speakers" title="Agenda">
      <motion.div className="w-full overflow-y-auto px-6 md:px-24 mt-4 flex flex-col md:flex-wrap h-screen md:h-[90%]">
        {params.postId && params.postId < data.length ? (
          <div className="flex md:mb-0 flex-col w-full">
            <div className="flex flex-row items-start gap-4">
              <div className="flex flex-col ">
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5 },
                  }}
                  className={`text-2xl font-pop ${
                    colors[data[params.postId].color][1]
                  } font-semibold`}
                >
                  {data[params.postId].title}
                </motion.h1>
                <motion.h1
                  className={`text-sm xhidden transition-all xgroup-hover:flex font-mont ${
                    colors[data[params.postId].color][2]
                  } font-light`}
                >
                  {data[params.postId].desc}
                </motion.h1>
                <h1 className="font-mont mt-2 text-center border border-slate-300 text-xs px-2 py-1  bg-slate-50 w-24 rounded-full">
                  {"Time : " + data[params.postId].time_f}
                </h1>
              </div>
            </div>
            {data[params.postId].hover && (
              <div className={`flex flex-col my-2`}>
                <h1 className="font-medium font-mont">
                  {data[params.postId]?.longdesc}
                </h1>
                {data[params.postId]?.users &&
                  data[params.postId]?.users.map((item, i) => (
                    <div
                      className={`grid grid-cols-[6em_auto_6em] w-1/2 justify-items-center gap-2 m-4 p-2 ${
                        colors[data[params.postId].color][0]
                      } rounded-md`}
                    >
                      <img
                        src={item.url === " " ? avatar : item.url}
                        alt=""
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex flex-col w-full  items-start">
                        <h1 className="font-mont font-semibold">
                          {item.first.split("$")[0]}
                        </h1>
                        <h1 className="font-mont font-thin italic">
                          {item.bio}
                        </h1>
                        <h1 className="font-mont font-thin italic">
                          {item.org}
                        </h1>
                      </div>
                      {item.first.split("$").length > 1 && (
                        <div className="px-2 py-1 h-auto rounded-full my-auto bg-slate-100 font-mont">
                          {item.first.split("$")[1]}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { duration: 0.5 },
              }}
              className={`absolute bottom-8 right-8 bg-opacity-0 w-24 ${
                colors[data[params.postId].color][3]
              }`}
            >
              {icons[data[params.postId].icon]}
            </motion.div>
            <div className="grid grid-cols-2 w-full gap-2 mt-4">
              {/* {cardVar[params.postId].prof.map((item, i) => (
                <motion.h1
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 20,
                    transition: { duration: 0.5, delay: i * 0.05 },
                  }}
                  className="text-base font-medium flex text-slate-600 flex-row font-pop "
                >
                  <UserIcon className="w-8 h-8 p-2 bg-indigo-600 rounded-full text-white mr-2" />{" "}
                  {item.name}
                </motion.h1>
              ))} */}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {data.map((item, i) => (
              <Popover
                placement="topRight"
                content={
                  <div className="flex z-50 flex-col w-48">
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
                key={`pop.i.tem${i}`}
                title={item.title}
                open={
                  item?.hover && progress === 100 && eei === i ? true : false
                }
                //onOpenChange={handleClickChange}
              >
                <motion.div
                  onHoverStart={() => {
                    setI(i);
                    setIsHovered(true);
                  }}
                  onHoverEnd={() => setIsHovered(false)}
                  className="group"
                >
                  <Link
                    to={`${i}`}
                    className={`w-full gap-2 ${
                      colors[item.color][0]
                    } p-4 rounded-lg border cursor-pointer bg-opacity-50 hover:bg-opacity-100 grid grid-cols-[4em_auto]`}
                  >
                    <div
                      className={`w-16 relative h-16 text-white rounded-full p-2 ${
                        colors[item.color][3]
                      }`}
                    >
                      {icons[item.icon]}
                      <Progress
                        className="absolute group-hover:-top-0.5  group-hover:-left-0.5 top-0 left-0 transition-all duration-700 opacity-0 group-hover:opacity-100"
                        type="circle"
                        size={isHovered && eei === i ? 68 : 0}
                        format={(percent) => ""}
                        percent={progress}
                        strokeWidth={8}
                        strokeColor={colors[item.color][5]}
                      />
                    </div>
                    <div className="flex flex-col ml-2">
                      <h1
                        className={`text-xs font-mont ${
                          colors[item.color][1]
                        } font-semibold`}
                      >
                        {item.title}
                      </h1>
                      <motion.h1
                        className={`text-xs xhidden transition-all xgroup-hover:flex font-mont ${
                          colors[item.color][2]
                        } font-light`}
                      >
                        {item.desc}
                      </motion.h1>
                      <h1 className="font-mont text-center border border-slate-300 text-xs px-2 py-1 w-24 bg-slate-50 rounded-full">
                        {"Time : " + item.time_f}
                      </h1>
                    </div>
                  </Link>
                </motion.div>
              </Popover>
            ))}
          </div>
        )}
      </motion.div>
    </Page>
  );
}

export default Agenda;
