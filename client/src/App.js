import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard"; // Dashboard page
import AddSales from "./pages/AddSales"; // AddSales page
import TopSales from "./pages/TopSales"; // TopSales page
import Revenue from "./pages/Revenue"; // Revenue page
import Login from "./pages/Login"; // Login page
import Register from "./pages/Register"; // Register page
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* <Route exact path="/" element={<Dashboard />} /> */}
        <Route exact path="/addsales" element={<AddSales />} />
        <Route exact path="/topsales" element={<TopSales />} />
        <Route exact path="/revenue" element={<Revenue />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
