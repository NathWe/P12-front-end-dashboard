import { UserDataMetrics } from "./UserDataMetrics";
import { UserInfos } from "./UserInfos";

// Abstraction pour USER_MAIN_DATA
export interface UserMainData {
  todayScore: number;
  id: string;
  userInfos: UserInfos;
  keyData: UserDataMetrics;
}
