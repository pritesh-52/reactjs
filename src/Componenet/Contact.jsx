import React, { useContext } from "react";
import Contextprovider, { Contacttext } from "./Context/Contextprovider";

export const Contact = () => {
    const {number, setnumber}=useContext(Contacttext);
  return (
    <>
      <div className="mt-11 ml-11">
        <h1 className="text-2xl font-semibold">Contact Page</h1>
        <h2 className="mt-11 text-mxl">{number}</h2>
      </div>
    </>
  );
};
