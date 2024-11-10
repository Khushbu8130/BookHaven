import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider"; // Import your AuthProvider


ReactDOM.render(
  <BrowserRouter>
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
