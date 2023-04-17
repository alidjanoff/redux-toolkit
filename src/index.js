import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import "./assets/scss/index.scss";
// Compontns
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
