import { AverageSession } from "../activity/AverageSession";

// Abstraction pour USER_AVERAGE_SESSIONS
export interface UserAverageSessions {
  userId: string;
  sessions: AverageSession[];
}
