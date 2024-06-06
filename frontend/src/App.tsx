// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./contexts/ApiContext";
import ApiMock from "./services/api/ApiMocks";
import { ApiReal } from "./services/api/ApiReal";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavHorizontal from "./Componants/nav/horizontal/NavHorizontal";
import Home from "./Pages/home/Home";
import Error from "./Pages/error/Error";
import Profil from "./Pages/Profil/Profil";
import { IApiService } from "./services/api/IApiService";

const apiService: IApiService =
  process.env.REACT_APP_USE_REAL_API === "true" ? ApiReal : ApiMock;

const App: React.FC = () => {
  return (
    <ApiProvider api={apiService}>
      <BrowserRouter>
        <NavHorizontal />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Profil />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
