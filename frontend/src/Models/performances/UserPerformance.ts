// src/Models/performances/UserPerformance.ts
import { PerformanceData } from "./PerformanceData";

export interface UserPerformance {
  userId: number;
  kind: { [key: number]: string };
  data: PerformanceData[];
}
