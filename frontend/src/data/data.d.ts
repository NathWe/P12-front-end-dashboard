declare module "./data";

// Importer les types nécessaires des autres fichiers de modèle
import { UserMainData } from "../user/UserMainData";
import { UserActivity } from "../user/UserActivity";
import { UserAverageSessions } from "../user/UserAverageSessions";
import { UserPerformance } from "../performances/UserPerformance";

// Exporter les types nécessaires
export const USER_MAIN_DATA: UserMainData[];
export const USER_ACTIVITY: UserActivity[];
export const USER_AVERAGE_SESSIONS: UserAverageSessions[];
export const USER_PERFORMANCE: UserPerformance[];
