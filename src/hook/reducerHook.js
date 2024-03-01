import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { db } from "../firebase";

const WrapContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //role: "admin"
  const [nav, setNav] = useState({ from: null, to: null });
  const [load, setLoad] = useState(true);
  const [data, setAgenda] = useState();
  const [speakers, setSpeakers] = useState();
  const [about_data, setAbout] = useState();
  const [slides, setSlides] = useState([]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    user && localStorage.setItem("user", JSON.stringify(user));
    !user && setUser(JSON.parse(localStorage.getItem("user")));
  }, [user]);
  useEffect(() => {
    getDocs(collection(db, "speakers")).then((querySnapshot) => {
      setSpeakers(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    getDocs(collection(db, "slides")).then((querySnapshot) => {
      setSlides(
        querySnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
      );
    });
    onSnapshot(
      query(collection(db, "agenda"), orderBy("key", "asc")),
      (querySnapshot) => {
        setAgenda(
          querySnapshot.docs.map((doc) => ({
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
      }
    );
    onSnapshot(
      query(collection(db, "about"), orderBy("key", "asc")),
      (querySnapshot) => {
        setAbout(
          querySnapshot.docs.map((doc) => ({
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
      }
    );
  }, []);
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
