import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WrapContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [nav, setNav] = useState({ from: null, to: null });
  useEffect(() => {
    user && localStorage.setItem("user", JSON.stringify(user));
    !user && setUser(JSON.parse(localStorage.getItem("user")));
  }, [user]);
  const memoedValue = useMemo(
    () => ({
      user,
      setUser,
      nav,
      setNav,
    }),
    [user, nav]
  );
  return (
    <WrapContext.Provider value={memoedValue}>{children}</WrapContext.Provider>
  );
};

export default function useReducer() {
  return useContext(WrapContext);
}
