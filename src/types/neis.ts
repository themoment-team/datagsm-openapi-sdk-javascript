import type { ApiResponse } from './index';

export interface Timetable {
  timetableId: string;
  schoolCode: string;
  schoolName: string;
  officeCode: string;
  officeName: string;
  timetableDate: string;
  academicYear: string;
  semester?: string;
  grade: number;
  classNum: number;
  period: number;
  subject?: string;
}

export interface GetTimetablesRequest {
  grade?: number;
  classNum?: number;
  date?: string;
  fromDate?: string;
  toDate?: string;
  isValidDateCombination?: boolean;
  isValidDateRange?: boolean;
  isValidDateRangePeriod?: boolean;
  isDateRequired?: boolean;
}

export type GetTimetablesResponse = ApiResponse<{
  timetables: Timetable[];
}>;

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
  isValidDateCombination?: boolean;
  isValidDateRange?: boolean;
  isValidDateRangePeriod?: boolean;
}

export type GetMealsResponse = ApiResponse<{
  meals: Meal[];
}>;

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
  isValidDateCombination?: boolean;
  isValidDateRange?: boolean;
  isValidDateRangePeriod?: boolean;
}

export type GetSchedulesResponse = ApiResponse<{
  schedules: Schedule[];
}>;
