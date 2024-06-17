// Abstraction pour une session d'activité

/**
 * @interface ActivitySession
 * @description Represents a session of activity with day, kilogram, and calories.
 */
export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}
