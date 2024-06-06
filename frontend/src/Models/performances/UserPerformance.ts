// src/Models/performances/UserPerformance.ts
import { PerformanceData } from "./PerformanceData";

export interface Performance {
  userId: number;
  kind: { [key: number]: string };
  data: PerformanceData[];
}
