import { UserDataMetrics } from "./UserDataMetrics";
import { UserInfos } from "./UserInfos";

// Abstraction pour USER_MAIN_DATA
export interface UserMainData {
  id: string;
  userInfos: UserInfos;
  keyData: UserDataMetrics;
}
