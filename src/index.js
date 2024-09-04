import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Toaster } from "react-hot-toast";
import App from "./App";
import { CartProvider } from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Toaster />
      <App />
    </CartProvider>
  </React.StrictMode>
);
