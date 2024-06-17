// src/services/api/ApiService.ts
import axios from "axios";
import { IApiService } from "./IApiService";
import { UserMainData } from "../../Models/user/UserMainData";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { UserPerformance } from "../../Models/performances/UserPerformance";

/**
 * @class ApiService
 * @implements {IApiService}
 * @description Service for making API calls to the backend.
 */
export class ApiService implements IApiService {
  constructor(private baseUrl: string) {}

  /**
   * Fetches the main data of a user by ID.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<UserMainData | null>} - The main data of the user.
   */
  async getUserMainData(userId: string): Promise<UserMainData | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}`);
    return response.data;
  }

  /**
   * Fetches the activity data of a user by ID.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<UserActivity | null>} - The activity data of the user.
   */
  async getUserActivity(userId: string): Promise<UserActivity | null> {
    const response = await axios.get(`${this.baseUrl}/user/${userId}/activity`);
    return response.data;
  }

  /**
   * Fetches the average sessions data of a user by ID.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<UserAverageSessions | null>} - The average sessions data of the user.
   */
  async getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessions | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/average-sessions`
    );
    return response.data;
  }

  /**
   * Fetches the performance data of a user by ID.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<UserPerformance | null>} - The performance data of the user.
   */
  async getUserPerformance(userId: string): Promise<UserPerformance | null> {
    const response = await axios.get(
      `${this.baseUrl}/user/${userId}/performance`
    );
    return response.data;
  }
}
