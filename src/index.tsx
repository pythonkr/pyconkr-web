import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import Router from "routes";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") || document.createElement("div"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
