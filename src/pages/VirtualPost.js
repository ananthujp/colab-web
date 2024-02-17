import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import StallPreview from "./StallPreview";

function VirtualPost() {
  const params = useParams();
  const [stallData, setStallData] = useState({});
  useEffect(() => {
    if (params.virtualId && params.createId) {
      getDoc(doc(db, "virtual", params.virtualId)).then((doc) => {
        if (doc.exists()) {
          setStallData(doc.data());
        } else {
          console.log("No such document!");
        }
      });
    }
  }, []);
  return (
    <Page page="themes" title={stallData ? stallData.name : "Virtual Stalls"}>
      <div className="flex flex-col font-mont items-center h-full overflow-scroll w-full">
        <StallPreview id="asd" />
      </div>
    </Page>
  );
}

export default VirtualPost;
