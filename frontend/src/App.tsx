import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Error from "./Pages/error/Error";
import NavHorizontal from "./componants/nav/horizontal/NavHorizontal";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavHorizontal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
