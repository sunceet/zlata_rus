import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import iconLogo from "@/assets/icon_logo.png";

const faviconEl = document.getElementById("favicon");
if (faviconEl && iconLogo) {
  faviconEl.setAttribute("href", iconLogo);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
