import { useContext } from "react";
import { ApiContext } from "./ApiProvider";
import { IApiService } from "../services/api/IApiService";

/**
 * @function useApi
 * @description Custom hook to use the API context.
 * @returns {IApiService} The API service instance.
 */
export const useApi = (): IApiService => {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
