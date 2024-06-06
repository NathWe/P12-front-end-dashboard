// src/services/api/ApiReal.ts
import { ApiService } from "./ApiService";

const BASE_URL = "http://localhost:3000"; // Adresse du backend

export const ApiReal: ApiService = new ApiService(BASE_URL);
