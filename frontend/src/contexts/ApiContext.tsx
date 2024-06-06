// src/contexts/ApiContext.tsx
import React, { createContext, useContext } from "react";
import { IApiService } from "../services/api/IApiService";

interface ApiProviderProps {
  api: IApiService;
  children: React.ReactNode;
}

const ApiContext = createContext<IApiService | null>(null);

export const ApiProvider: React.FC<ApiProviderProps> = ({ api, children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};

// Exporter uniquement des composants
export default ApiProvider;
