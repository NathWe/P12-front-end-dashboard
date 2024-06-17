import React, { createContext } from "react";
import { IApiService } from "../services/api/IApiService";

interface ApiProviderProps {
  api: IApiService;
  children: React.ReactNode;
}

const ApiContext = createContext<IApiService | null>(null);

/**
 * @function ApiProvider
 * @description Provider component for API context.
 * @param {ApiProviderProps} props - Props for the ApiProvider component.
 * @param {IApiService} props.api - API service instance.
 * @param {ReactNode} props.children - Child components.
 * @returns {JSX.Element} The provider component.
 */
export const ApiProvider: React.FC<ApiProviderProps> = ({ api, children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
export { ApiContext };
