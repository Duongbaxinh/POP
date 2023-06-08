import { ThemeProvider } from "@mui/material/styles";
import React, { lazy } from "react";
import Header from "./layout/Header";
// import Footer from "./layout/Footer/MyList";
import them from "./theme/theme";
import ListSearch from "./page/ListSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hompage from "./page/Homepage";
import Login from "./layout/Login";
import Register from "./layout/Register";



function App() {
  return (
    // <Test />
    <ThemeProvider theme={them}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          {/* <Route path="/watch/views/:id" element={<Views />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/watch/:id" element={<Watch />} />{" "} */}
          <Route path="/search/:id" element={<ListSearch />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </ThemeProvider>


  );
}

export default App;
