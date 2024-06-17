import { ActivitySession } from "../activity/ActivitySession";

/**
 * @interface UserActivity
 * @description Represents the activity data of a user.
 * @property {string} userId - The ID of the user.
 * @property {ActivitySession[]} sessions - An array of activity sessions.
 */

export interface UserActivity {
  userId: string;
  sessions: ActivitySession[];
}
