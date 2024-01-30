import React from "react";
import { Home } from "./Componenet/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Componenet/Navbar";
import { About } from "./Componenet/About";
import { Service } from "./Componenet/Service";
import { Contact } from "./Componenet/Contact";
import Errorpage from "./Componenet/Errorpage";

export const App = () => {
  const name = {
    fname: ["Pritesh", "Bhatiya", "Hareshbhai"],
    clg: ["GLS", "SSCCS", "Nirma"],
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home fname={name.fname} clg={name.clg} />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>
    </div>
  );
};
