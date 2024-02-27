import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import StallPreview from "./StallPreview";

function VirtualPost() {
  const params = useParams();
  const [InitialValue, setInitialValue] = useState({});
  useEffect(() => {
    if (params.createId) {
      getDoc(doc(db, "virtual", params.createId)).then((dc) => {
        setInitialValue(dc.data());
      });
    }
  }, []);
  // useEffect(() => {
  //   if (params.virtualId && params.createId) {
  //     getDoc(doc(db, "virtual", params.virtualId)).then((doc) => {
  //       if (doc.exists()) {
  //         setStallData(doc.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     });
  //   }
  // }, []);
  return (
    <Page
      hideBreadcrumb
      page="themes"
      title={InitialValue ? InitialValue.title : "Virtual Stalls"}
    >
      <div className="flex flex-col font-mont items-center h-full overflow-scroll w-full">
        <StallPreview InitialValue={InitialValue} />
      </div>
    </Page>
  );
}

export default VirtualPost;
