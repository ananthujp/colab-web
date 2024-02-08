import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { db } from "../firebase";

const WrapContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //role: "admin"
  const [nav, setNav] = useState({ from: null, to: null });
  const [load, setLoad] = useState(true);
  const [data, setAgenda] = useState();
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    user && localStorage.setItem("user", JSON.stringify(user));
    !user && setUser(JSON.parse(localStorage.getItem("user")));
  }, [user]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "agenda"), orderBy("key", "asc")),
      (querySnapshot) => {
        setAgenda(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            time_f: doc.data().time_f,
            time_t: doc.data().time_t,
            title: doc.data().title,
            desc: doc.data().desc,
            icon: doc.data().icon,
            color: doc.data().color,
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
    }),
    [load, user, nav, data]
  );
  return (
    <WrapContext.Provider value={memoedValue}>{children}</WrapContext.Provider>
  );
};

export default function useReducer() {
  return useContext(WrapContext);
}
