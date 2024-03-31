import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Router from "routes";

const root = ReactDOM.createRoot(document.getElementById("root") || document.createElement("div"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
