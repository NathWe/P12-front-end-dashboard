import { PerformanceData } from "./PerformanceData";

// Abstraction pour USER_PERFORMANCE
export interface UserPerformance {
  userId: string;
  kind: { [key: number]: string };
  data: PerformanceData[];
}
