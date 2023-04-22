import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import React from "react";
import Hompage from "./components/Homepage";
import them from "./components/theme/them";
import Register from "./layout/Register";
import Login from "./layout/Login";
import Watch from "./components/macromolecule/Watch";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
  return (
    <ThemeProvider theme={them}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
