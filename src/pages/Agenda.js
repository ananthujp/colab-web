import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import useReducer from "../hook/reducerHook";
import { colors, icons } from "./Colors";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
function Agenda() {
  const { data, user } = useReducer();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Page
      no={4}
      page="speakers"
      title="Agenda"
      backButton={
        params.postId && (
          <ArrowLeftIcon
            className="w-7 absolute left-4 top-4 text-slate-600 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )
      }
    >
      <motion.div className="w-full overflow-y-auto px-24 mt-4 flex flex-col md:flex-wrap h-screen md:h-[90%]">
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
                        src={item.url}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex flex-col">
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
          <div className="grid grid-cols-2 gap-4">
            {data.map((item, i) => (
              <Link
                to={`${i}`}
                className={`w-full gap-2 ${
                  colors[item.color][0]
                } p-4 rounded-lg border cursor-pointer bg-opacity-50 hover:bg-opacity-100 grid grid-cols-[4em_auto]`}
              >
                <div
                  className={`w-16  h-16 text-white rounded-full p-2 ${
                    colors[item.color][3]
                  }`}
                >
                  {icons[item.icon]}
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
            ))}
          </div>
        )}
      </motion.div>
    </Page>
  );
}

export default Agenda;
