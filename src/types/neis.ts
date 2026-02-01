export type MealType = 'BREAKFAST' | 'LUNCH' | 'DINNER';

export interface Meal {
  mealId: string;
  schoolCode: string;
  schoolName: string;
  officeCode: string;
  officeName: string;
  mealDate: string;
  mealType: MealType;
  mealMenu: string[];
  mealAllergyInfo: string[];
  mealCalories: string;
  originInfo: string;
  nutritionInfo: string;
  mealServeCount: number;
}

export interface GetMealsRequest {
  date?: string;
  fromDate?: string;
  toDate?: string;
}

export interface GetMealsResponse {
  status: string;
  code: number;
  message: string;
  data: Meal[];
}

export interface Schedule {
  scheduleId: string;
  schoolCode: string;
  schoolName: string;
  officeCode: string;
  officeName: string;
  scheduleDate: string;
  academicYear: string;
  eventName: string;
  eventContent: string;
  dayCategory: string;
  schoolCourseType: string;
  dayNightType: string;
  targetGrades: number[];
}

export interface GetSchedulesRequest {
  date?: string;
  fromDate?: string;
  toDate?: string;
}

export interface GetSchedulesResponse {
  status: string;
  code: number;
  message: string;
  data: Schedule[];
}
