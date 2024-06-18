import axios from "axios";
import { IApiService } from "./IApiService";
import { UserMainDataResponse } from "../../Models/user/UserMainData";
import { UserActivityResponse } from "../../Models/user/UserActivity";
import { UserAverageSessionsResponse } from "../../Models/user/UserAverageSessions";
import { UserPerformanceResponse } from "../../Models/performances/UserPerformance";

/**
 * @class ApiService
 * @implements {IApiService}
 * @description Service for making API calls to the backend.
 */
export class ApiService implements IApiService {
  constructor(private baseUrl: string) {}

  async getUserMainData(userId: string): Promise<UserMainDataResponse | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}`);
    return response.data;
  }

  async getUserActivity(userId: string): Promise<UserActivityResponse | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}/activity`);
    return response.data;
  }

  async getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessionsResponse | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/average-sessions`
    );
    return response.data;
  }

  async getUserPerformance(
    userId: string
  ): Promise<UserPerformanceResponse | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/performance`
    );
    return response.data;
  }
}
