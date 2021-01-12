import { createContext, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, { data: null });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
