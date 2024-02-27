import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Hompage from "./page/Homepage";
import them from "./theme/theme";
import WatchScreen from "./page/WatchScreen";
import ViewsScreen from "./page/ViewsScreen";



function App() {
  return (
    // <Test />
    <ThemeProvider theme={them}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/watch/:id" element={<WatchScreen />} />
          <Route path="/views/:id" element={<ViewsScreen />} />
          {/* <Route path="/search/:id" element={<ListSearch />} />  */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </ThemeProvider>


  );
}

export default App;
