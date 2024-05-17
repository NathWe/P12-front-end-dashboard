import { ActivitySession } from "../activity/ActivitySession";

// Abstraction pour USER_ACTIVITY
export interface UserActivity {
  userId: string;
  sessions: ActivitySession[];
}
