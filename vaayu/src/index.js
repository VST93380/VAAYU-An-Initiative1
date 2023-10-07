import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Vaayu";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
