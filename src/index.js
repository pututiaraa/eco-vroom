import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import axios from "axios";
import "./i18n.js";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback='loading...'>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
