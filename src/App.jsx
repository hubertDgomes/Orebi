import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
