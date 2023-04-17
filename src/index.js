import React from "react";
import ReactDOM from "react-dom/client";

// style
import "./assets/scss/index.scss";

// router
import { BrowserRouter } from "react-router-dom";

// main-component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
