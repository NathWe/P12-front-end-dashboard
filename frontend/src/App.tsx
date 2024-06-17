import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApiProvider } from "./contexts/ApiContext";
import ApiMock from "./services/api/ApiMocks";
import { ApiReal } from "./services/api/ApiReal";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavHorizontal from "./Componants/nav/horizontal/NavHorizontal";
import Home from "./Pages/home/Home";
import Error from "./Pages/error/Error";
import Profil from "./Pages/Profil/Profil";
import Communaute from "./Pages/Communaute/communaute";
import Reglage from "./Pages/reglage/reglage";
import { IApiService } from "./services/api/IApiService";

const useRealApi = import.meta.env.VITE_USE_REAL_API === "true";
const apiService: IApiService = useRealApi ? ApiReal : ApiMock;

const App: React.FC = () => {
  return (
    <ApiProvider api={apiService}>
      <BrowserRouter>
        <NavHorizontal />
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="/reglage" element={<Reglage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
