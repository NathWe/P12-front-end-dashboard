import { PerformanceData } from "./PerformanceData";

/**
 * @interface UserPerformance
 * @description Represents the performance data of a user.
 * @property {number} userId - The ID of the user.
 * @property {Object} kind - An object mapping performance kind IDs to their string descriptions.
 * @property {PerformanceData[]} data - An array of performance data.
 */
export interface UserPerformance {
  userId: number;
  kind: { [key: number]: string };
  data: PerformanceData[];
}

/**
 * @interface UserPerformanceResponse
 * @description Represents the response containing the performance data of a user.
 * @property {UserPerformance} data - The performance data of the user.
 */
export interface UserPerformanceResponse {
  data: UserPerformance;
}
