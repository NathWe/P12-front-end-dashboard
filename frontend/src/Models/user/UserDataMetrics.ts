/**
 * @interface UserDataMetrics
 * @description Represents the key data metrics of a user.
 * @property {number} calorieCount - The calorie count.
 * @property {number} proteinCount - The protein count.
 * @property {number} carbohydrateCount - The carbohydrate count.
 * @property {number} lipidCount - The lipid count.
 */
export interface UserDataMetrics {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}
