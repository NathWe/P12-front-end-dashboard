// src/services/api/IApiService.ts
import { UserMainData } from "../../Models/user/UserMainData";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { UserPerformance } from "../../Models/performances/UserPerformance";

/**
 * @interface IApiService
 * @description Interface for API services.
 */
export interface IApiService {
  getUserMainData(userId: string): Promise<UserMainData | null>;
  getUserActivity(userId: string): Promise<UserActivity | null>;
  getUserAverageSessions(userId: string): Promise<UserAverageSessions | null>;
  getUserPerformance(userId: string): Promise<UserPerformance | null>;
}
