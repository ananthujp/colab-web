//Read Me
//Make the bundle.txt from server and put it in public folder.
//Firebase is completely removed from the project. The data is fetched from the bundle.txt file.
import {
  collection,
  getDocs,
  getDocsFromCache,
  loadBundle,
  namedQuery,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
const WrapContext = createContext({});

const xhr = new XMLHttpRequest();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //role: "admin"
  const [nav, setNav] = useState({ from: null, to: null });
  const [load, setLoad] = useState(true);
  const [data, setAgenda] = useState();
  const [speakers, setSpeakers] = useState();
  const [about_data, setAbout] = useState();
  const [slides, setSlides] = useState([]);
  const [queryt, setQuery] = useState();
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const loadData = async () => {
    const agendaColl = await namedQuery(db, "agenda");
    const agnedaSnap = await getDocsFromCache(agendaColl);
    setAgenda(
      agnedaSnap.docs
        .sort((a, b) => a.data().key - b.data().key)
        .map((doc) => ({
          id: doc.id,
          key: doc.data().key,
          time_f: doc.data().time_f,
          time_t: doc.data().time_t,
          title: doc.data().title,
          desc: doc.data().desc,
          icon: doc.data().icon,
          color: doc.data().color,
          hover: doc.data().hover,
          longdesc: doc.data().longdesc,
          venue: doc.data().venue,
          users: doc.data().users,
        }))
    );

    const slidesColl = await namedQuery(db, "slides");
    const slidesSnap = await getDocsFromCache(slidesColl);
    setSlides(slidesSnap.docs.map((doc) => ({ data: doc.data(), id: doc.id })));

    const aboutColl = await namedQuery(db, "about");
    const aboutSnap = await getDocsFromCache(aboutColl);
    setAbout(
      aboutSnap.docs.map((doc) => ({
        id: doc.id,
        key: doc.data().key,
        name: doc.data().name,
        role: doc.data().role,
        bio: doc.data().bio,
        img: doc.data().img,
        facebook: doc.data().facebook,
        instagram: doc.data().instagram,
        linkedin: doc.data().linkedin,
        twitter: doc.data().twitter,
        email: doc.data().email,
      }))
    );
    const speakersColl = await namedQuery(db, "speakers");
    const speakersSnap = await getDocsFromCache(speakersColl);
    setSpeakers(
      speakersSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };
  useEffect(() => {
    // const bundle = JSON.parse(localStorage.getItem("bundle"));

    // fetch("https://colab-server.onrender.com/", { method: "GET" })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return res.arrayBuffer();
    //   })
    //   .then((bundleBuffer) => {
    //     const bundleUint8Array = new Uint8Array(bundleBuffer);
    //     // localStorage.setItem("bundle", JSON.stringify(bundleUint8Array));
    //     return loadBundle(db, bundleUint8Array);
    //   })
    //   .then(async () => await loadData())
    //   .catch((error) => {
    //     console.error(
    //       "There has been a problem with your fetch operation:",
    //       error
    //     );
    //   });
    // xhr.open("GET", "https://colab-server.onrender.com/", true);
    // xhr.responseType = "arraybuffer";

    // xhr.onprogress = function (event) {
    //   if (event.lengthComputable) {
    //     const percentComplete = (event.loaded / event.total) * 100;
    //     console.log(`Download ${percentComplete}% complete`);
    //   }
    // };

    // xhr.onload = function (event) {
    //   if (xhr.status === 200) {
    //     const bundleUint8Array = new Uint8Array(xhr.response);
    //     loadBundle(db, bundleUint8Array)
    //       .then(async () => await loadData())
    //       .catch((error) => {
    //         console.error(
    //           "There has been a problem with your fetch operation:",
    //           error
    //         );
    //       });
    //   } else {
    //     console.error("An error occurred while downloading the bundle");
    //   }
    // };

    // xhr.send();
    db &&
      fetch(process.env.PUBLIC_URL + "/bundle.txt")
        .then((response) => response.arrayBuffer())
        .then((bundleBuffer) => {
          const bundleUint8Array = new Uint8Array(bundleBuffer);
          return loadBundle(db, bundleUint8Array);
        })
        .then(async () => {
          await loadData();
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
  }, []);
  useEffect(() => {
    user && localStorage.setItem("user", JSON.stringify(user));
    !user && setUser(JSON.parse(localStorage.getItem("user")));
  }, [user]);
  // useEffect(() => {
  // onSnapshot(collection(db, "speakers"), (querySnapshot) => {
  //   setSpeakers(
  //     querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  //   );
  // });
  // onSnapshot(collection(db, "slides"), (querySnapshot) => {
  //   setSlides(
  //     querySnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
  //   );
  // });

  // onSnapshot(
  //   query(collection(db, "agenda"), orderBy("key", "asc")),
  //   (querySnapshot) => {
  //     setAgenda(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         key: doc.data().key,
  //         time_f: doc.data().time_f,
  //         time_t: doc.data().time_t,
  //         title: doc.data().title,
  //         desc: doc.data().desc,
  //         icon: doc.data().icon,
  //         color: doc.data().color,
  //         hover: doc.data().hover,
  //         longdesc: doc.data().longdesc,
  //         venue: doc.data().venue,
  //         users: doc.data().users,
  //       }))
  //     );
  //   }
  // );
  // onSnapshot(
  //   query(collection(db, "about"), orderBy("key", "asc")),
  //   (querySnapshot) => {
  //     setAbout(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         key: doc.data().key,
  //         name: doc.data().name,
  //         role: doc.data().role,
  //         bio: doc.data().bio,
  //         img: doc.data().img,
  //         facebook: doc.data().facebook,
  //         instagram: doc.data().instagram,
  //         linkedin: doc.data().linkedin,
  //         twitter: doc.data().twitter,
  //         email: doc.data().email,
  //       }))
  //     );
  //   }
  // );
  // }, []);
  const memoedValue = useMemo(
    () => ({
      user,
      setUser,
      nav,
      setNav,
      load,
      setLoad,
      data,
      logout,
      about_data,
      speakers,
      setSpeakers,
      slides,
    }),
    [load, user, speakers, nav, data, about_data, slides]
  );
  return (
    <WrapContext.Provider value={memoedValue}>{children}</WrapContext.Provider>
  );
};

export default function useReducer() {
  return useContext(WrapContext);
}
