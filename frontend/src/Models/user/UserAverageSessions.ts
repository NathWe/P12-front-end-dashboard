import { AverageSession } from "../activity/AverageSession";

/**
 * @interface UserAverageSessions
 * @description Represents the average sessions data of a user.
 * @property {string} userId - The ID of the user.
 * @property {AverageSession[]} sessions - An array of average sessions.
 */

export interface UserAverageSessions {
  userId: string;
  sessions: AverageSession[];
}
