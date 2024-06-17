// src/services/api/ApiReal.ts
import { ApiService } from "./ApiService";

const BASE_URL = "http://localhost:3000"; // Adresse du backend

/**
 * @constant {ApiService} ApiReal
 * @description Instance of ApiService pointing to the real backend.
 */
export const ApiReal: ApiService = new ApiService(BASE_URL);
