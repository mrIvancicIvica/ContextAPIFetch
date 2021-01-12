import React from "react";
import { ContextProvider } from "./Context/UserContext";
import Contacts from './Contacts'

export default function App() {
  return (
    <ContextProvider>
        <h1>Context fetch API</h1>
        <Contacts />
    </ContextProvider>
  );
}
