import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import React from "react";
import Hompage from "./components/macromolecule/Homepage";
import them from "./components/theme/them";
import Register from "./layout/Register";
import Login from "./layout/Login";
import Watch from "./components/macromolecule/Watch";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Views from "./components/macromolecule/Views";
import Admind from "./components/Amind";
import ListSearch from "./components/macromolecule/ListSearch";
function App() {
  const path = window.location.pathname;
  return (
    <ThemeProvider theme={them}>
      {path !== "/admin" ? <Header /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/watch/views/:id" element={<Views />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch/:id" element={<Watch />} />{" "}
          <Route path="/admin" element={<Admind />} />
          <Route path="/search/:id" element={<ListSearch />} />
        </Routes>
      </BrowserRouter>
      {path !== "/admin" ? <Footer /> : ""}
    </ThemeProvider>
  );
}

export default App;
