import React, { useContext } from "react";
import { Servicetext } from "./Context/Contextprovider";

export const Service = () => {
    const {service, setservice}=useContext(Servicetext);
  return (
    <>
      <div className="mt-11 ml-11">
        <h1 className="text-2xl font-semibold">Service Page</h1>
        <h2 className="text-3xl mt-11">{service}</h2>
      </div>
    </>
  );
};
