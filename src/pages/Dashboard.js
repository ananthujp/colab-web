import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import Page from "./Page";
import { Link } from "react-router-dom";

function Dash() {
  const [data, setData] = useState();
  useEffect(() => {
    getDocs(collection(db, "requests")).then((item) =>
      setData(item.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <Page page="about" title="Admin Dashboard">
      <motion.div className="w-full overflow-auto px-12 mt-4 gap-6 flex flex-col h-screen md:h-[90%]">
        <div className="flex flex-col p-6 rounded-md border border-indigo-100 bg-indigo-50">
          <h1 className="font-mont flex flex-row items-end gap-4 text-lg font-medium text-slate-800">
            <UserPlusIcon className="w-8 h-8 text-slate-400" />
            One-on-one meeting requests
          </h1>
          <div className="flex flex-col w-full xmd:flex-row gap-4 mt-2">
            {data ? (
              <div className="grid grid-cols-[2em_auto_auto_auto_auto] px-4 py-1 font-mont w-full bg-indigo-100">
                <h1 className="py-1 font-semibold border-b border-slate-400 mb-2">
                  No
                </h1>
                <h1 className="py-1 font-semibold border-b border-slate-400 mb-2">
                  Contact Email
                </h1>
                <h1 className="py-1 font-semibold border-b border-slate-400 mb-2">
                  Contact Phone
                </h1>
                <h1 className="py-1 font-semibold border-b border-slate-400 mb-2">
                  Professor
                </h1>
                <h1 className="py-1 font-semibold border-b border-slate-400 mb-2">
                  Professor Email
                </h1>
                {data.map((item, i) => (
                  <>
                    <h1>{i + 1}</h1>
                    <h1>{item.data.email}</h1>
                    <h1>{item.data.number}</h1>
                    <h1>
                      {item.data.prof ? item.data.prof : item.data.faculty[1]}
                    </h1>
                    <h1>{item.data.facEmail}</h1>
                  </>
                ))}
              </div>
            ) : (
              <div className="p-1 font-mont italic w-full bg-indigo-100">
                {" "}
                No data
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col p-6 rounded-md border border-indigo-100 bg-indigo-50">
          <h1 className="font-mont justify-between flex flex-row items-end gap-4 text-lg font-medium text-slate-800">
            {/* <UserPlusIcon className="w-8 h-8 text-slate-400" /> */}
            <h1>Add Slides </h1>
            <div className="flex gap-2">
              <Link
                to="/addslide"
                className="p-2 bg-gradient-to-br from-green-400 to-green-500 hover:to-green-600 text-white px-4 rounded-full"
              >
                Add
              </Link>
              <Link
                to="/addslide/dash"
                className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 hover:to-blue-600 text-white px-4 rounded-full"
              >
                Dashboard
              </Link>
            </div>
          </h1>
          {/* <div className="flex flex-col w-full xmd:flex-row gap-4 mt-2">
          
          </div> */}
          {/* <Agenda /> */}
        </div>
      </motion.div>
    </Page>
  );
}

export default Dash;
