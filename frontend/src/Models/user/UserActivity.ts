import { ActivitySession } from "../activity/ActivitySession";

export interface UserActivity {
  userId: string;
  sessions: ActivitySession[];
}
