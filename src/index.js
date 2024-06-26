import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// https://bit.ly/CRA-vitals
// reportWebVitals();
