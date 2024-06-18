import { UserMainDataResponse } from "../../Models/user/UserMainData";
import { UserActivityResponse } from "../../Models/user/UserActivity";
import { UserAverageSessionsResponse } from "../../Models/user/UserAverageSessions";
import { UserPerformanceResponse } from "../../Models/performances/UserPerformance";

/**
 * @interface IApiService
 * @description Interface for API services.
 */
export interface IApiService {
  getUserMainData(userId: string): Promise<UserMainDataResponse | null>;
  getUserActivity(userId: string): Promise<UserActivityResponse | null>;
  getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessionsResponse | null>;
  getUserPerformance(userId: string): Promise<UserPerformanceResponse | null>;
}
