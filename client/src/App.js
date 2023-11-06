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
        <Route exact path="/api/auth/register" element={<Register />} />
        <Route exact path="/api/auth/login" element={<Login />} />
        <Route exact path="/api/user/add-sales" element={<AddSales />} />
        <Route exact path="/api/user/top-sales" element={<TopSales />} />
        <Route exact path="/api/user/revenue" element={<Revenue />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
