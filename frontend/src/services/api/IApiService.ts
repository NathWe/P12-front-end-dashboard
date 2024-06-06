// src/services/api/IApiService.ts
import { UserMainData } from "../../Models/user/UserMainData";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { PerformanceData } from "../../Models/performances/PerformanceData";

export interface IApiService {
  getUserMainData(userId: string): Promise<UserMainData | null>;
  getUserActivity(userId: string): Promise<UserActivity | null>;
  getUserAverageSessions(userId: string): Promise<UserAverageSessions | null>;
  getUserPerformance(userId: string): Promise<PerformanceData | null>;
}
