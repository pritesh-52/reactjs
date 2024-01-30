import React, { createContext, useContext, useState } from "react";

export const Mycontext = createContext("");
export const Servicetext = createContext("");
export const Contacttext = createContext("");

export const Contextprovider = ({ children }) => {
  const [value, setvalue] = useState("");
  const [service, setservice] = useState("Service Page Context Provider");
  const [number, setnumber] = useState("9033174261");

  return (
    <>
      <Mycontext.Provider value={{ value, setvalue }}>
        <Servicetext.Provider value={{ service, setservice }}>
          <Contacttext.Provider value={{ number, setnumber }}>
            {children}
          </Contacttext.Provider>
        </Servicetext.Provider>
      </Mycontext.Provider>
    </>
  );
};

export default Contextprovider;
