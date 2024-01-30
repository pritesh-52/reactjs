import React, { useContext } from "react";
import { Mycontext } from "./Context/Contextprovider";



export const About = () => {
  const { value, setvalue } = useContext(Mycontext);
  const adddata=()=>{
    setvalue("Pritesh");
  }
  return (
    <>
      <div className="mt-11 ml-11">
        <h1 className="text-2xl font-semibold">About Page</h1>
        <h1 className="mt-11">{value}</h1>
        <button onClick={adddata}>Click</button>
      </div>
    </>
  );
};

export default About;
