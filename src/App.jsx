import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderHistory from "./components/OrderHistory";
import Layout from "./containers/Layout";
import "./app.css";

const Products = lazy(() => import("./components/Products"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
