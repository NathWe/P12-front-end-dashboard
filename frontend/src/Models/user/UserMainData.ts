import { UserDataMetrics } from "./UserDataMetrics";
import { UserInfos } from "./UserInfos";

export interface UserMainData {
  todayScore?: number;
  score?: number;
  id: string;
  userInfos: UserInfos;
  keyData: UserDataMetrics;
}

export interface UserMainDataResponse {
  data: UserMainData;
}
