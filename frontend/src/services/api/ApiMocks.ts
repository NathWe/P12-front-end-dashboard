import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/data";
import { IApiService } from "./IApiService";
import { UserMainDataResponse } from "../../Models/user/UserMainData";
import { UserActivityResponse } from "../../Models/user/UserActivity";
import { UserAverageSessionsResponse } from "../../Models/user/UserAverageSessions";
import { UserPerformanceResponse } from "../../Models/performances/UserPerformance";

/**
 * @class ApiMock
 * @implements {IApiService}
 * @description Mock API service for fetching user data.
 */
const ApiMocks: IApiService = {
  async getUserMainData(userId: string): Promise<UserMainDataResponse | null> {
    // Return mock data for user main data
    const user = USER_MAIN_DATA.find((user) => user.id.toString() === userId);
    return user ? { data: user } : null;
  },

  async getUserActivity(userId: string): Promise<UserActivityResponse | null> {
    // Return mock data for user activity
    const activity = USER_ACTIVITY.find(
      (activity) => activity.userId.toString() === userId
    );
    return activity ? { data: activity } : null;
  },

  async getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessionsResponse | null> {
    // Return mock data for user average sessions
    const sessions = USER_AVERAGE_SESSIONS.find(
      (session) => session.userId.toString() === userId
    );
    return sessions ? { data: sessions } : null;
  },

  async getUserPerformance(
    userId: string
  ): Promise<UserPerformanceResponse | null> {
    // Return mock data for user performance
    const performance = USER_PERFORMANCE.find(
      (performance) => performance.userId.toString() === userId
    );
    return performance ? { data: performance } : null;
  },
};

export default ApiMocks;
