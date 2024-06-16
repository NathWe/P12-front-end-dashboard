// src/services/api/ApiService.ts
import axios from "axios";
import { IApiService } from "./IApiService";
import { UserMainData } from "../../Models/user/UserMainData";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { UserPerformance } from "../../Models/performances/UserPerformance";

export class ApiService implements IApiService {
  constructor(private baseUrl: string) {}

  async getUserMainData(userId: string): Promise<UserMainData | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}`);
    return response.data;
  }

  async getUserActivity(userId: string): Promise<UserActivity | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}/activity`);
    return response.data;
  }

  async getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessions | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/average-sessions`
    );
    return response.data;
  }

  async getUserPerformance(userId: string): Promise<UserPerformance | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/performance`
    );
    return response.data;
  }
}
