import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserState } from "./context/context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserState>
  </React.StrictMode>,
  document.getElementById("root")
);
