// src/services/api/ApiMocks.ts
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/data";
import { IApiService } from "./IApiService";
import { UserMainData } from "../../Models/user/UserMainData";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { UserPerformance } from "../../Models/performances/UserPerformance";

const ApiMocks: IApiService = {
  async getUserMainData(userId: string): Promise<UserMainData | null> {
    const user = USER_MAIN_DATA.find((user) => user.id.toString() === userId);
    return user || null;
  },

  async getUserActivity(userId: string): Promise<UserActivity | null> {
    const activity = USER_ACTIVITY.find(
      (activity) => activity.userId.toString() === userId
    );
    return activity || null;
  },

  async getUserAverageSessions(
    userId: string
  ): Promise<UserAverageSessions | null> {
    const sessions = USER_AVERAGE_SESSIONS.find(
      (session) => session.userId.toString() === userId
    );
    return sessions || null;
  },

  async getUserPerformance(userId: string): Promise<UserPerformance | null> {
    const performance = USER_PERFORMANCE.find(
      (performance) => performance.userId.toString() === userId
    );
    return performance || null;
  },
};

export default ApiMocks;
