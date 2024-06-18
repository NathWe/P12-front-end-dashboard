/**
 * @interface ActivitySession
 * @description Represents a single activity session.
 * @property {string} day - The day of the activity session.
 * @property {number} kilogram - The weight lifted in kilograms.
 * @property {number} calories - The calories burned.
 */
export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

/**
 * @interface UserActivity
 * @description Represents the activity data of a user.
 * @property {string} userId - The ID of the user.
 * @property {ActivitySession[]} sessions - The activity sessions of the user.
 */
export interface UserActivity {
  userId: string;
  sessions: ActivitySession[];
}

/**
 * @interface UserActivityResponse
 * @description Represents the response containing the activity data of a user.
 * @property {UserActivity} data - The activity data of the user.
 */
export interface UserActivityResponse {
  data: UserActivity;
}
