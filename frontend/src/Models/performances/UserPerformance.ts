// src/Models/performances/UserPerformance.ts
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
