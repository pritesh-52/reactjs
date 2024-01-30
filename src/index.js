import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Contextprovider from "./Componenet/Context/Contextprovider";

ReactDOM.render(
  <Contextprovider>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Contextprovider>,
  document.getElementById("root")
);
