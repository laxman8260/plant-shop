import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop.js";
import Carts from "./components/Carts";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/cart" element={<Carts />} />
</Routes>
  );
}

export default App;