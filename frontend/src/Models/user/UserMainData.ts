import { UserDataMetrics } from "./UserDataMetrics";
import { UserInfos } from "./UserInfos";

/**
 * @interface UserMainData
 * @description Represents the main data of a user.
 * @property {number} todayScore - The score of the user for today.
 * @property {string} id - The ID of the user.
 * @property {UserInfos} userInfos - The information of the user.
 * @property {UserDataMetrics} keyData - The key data metrics of the user.
 */

export interface UserMainData {
  todayScore: number;
  id: string;
  userInfos: UserInfos;
  keyData: UserDataMetrics;
}

/**
 * @interface UserMainDataResponse
 * @description Represents the response containing the main data of a user.
 * @property {UserMainData} data - The main data of the user.
 */
export interface UserMainDataResponse {
  data: UserMainData;
}
