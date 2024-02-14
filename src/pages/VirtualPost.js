import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function VirtualPost() {
  const params = useParams();
  const [postData, setPostData] = useState({});
  useEffect(() => {
    if (params.virtualId && params.createId) {
      getDoc(
        doc(db, "virtual", params.virtualId, "posts", params.createId)
      ).then((doc) => {
        setPostData(doc.data());
      });
    }
  }, []);
  return (
    <Page
      page="themes"
      title={postData ? postData.title : "Virtual Stalls"}
    ></Page>
  );
}

export default VirtualPost;
