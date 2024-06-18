import { AverageSession } from "../activity/AverageSession";

/**
 * @interface UserAverageSessions
 * @description Represents the average sessions data of a user.
 * @property {string} userId - The ID of the user.
 * @property {AverageSession[]} sessions - The average sessions of the user.
 */
export interface UserAverageSessions {
  userId: string;
  sessions: AverageSession[];
}

/**
 * @interface UserAverageSessionsResponse
 * @description Represents the response containing the average sessions data of a user.
 * @property {UserAverageSessions} data - The average sessions data of the user.
 */
export interface UserAverageSessionsResponse {
  data: UserAverageSessions;
}
