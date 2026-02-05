import type { Sex, Major, ClubSummary, SortDirection } from './index';

export type Role =
  | 'STUDENT_COUNCIL'
  | 'DORMITORY_MANAGER'
  | 'GENERAL_STUDENT'
  | 'GRADUATE'
  | 'WITHDRAWN';
export type SortBy =
  | 'ID'
  | 'NAME'
  | 'EMAIL'
  | 'STUDENT_NUMBER'
  | 'GRADE'
  | 'CLASS_NUM'
  | 'NUMBER'
  | 'MAJOR'
  | 'ROLE'
  | 'SEX'
  | 'DORMITORY_ROOM';

export interface Student {
  id: number;
  name: string;
  sex: Sex;
  email: string;
  grade: number;
  classNum: number;
  number: number;
  studentNumber: number;
  major: Major;
  role: Role;
  dormitoryFloor: number;
  dormitoryRoom: number;
  majorClub?: ClubSummary;
  jobClub?: ClubSummary;
  autonomousClub?: ClubSummary;
}

export interface GetStudentsRequest {
  studentId?: number;
  name?: string;
  email?: string;
  grade?: number;
  classNum?: number;
  number?: number;
  sex?: Sex;
  role?: Role;
  dormitoryRoom?: number;
  includeGraduates?: boolean;
  page?: number;
  size?: number;
  sortBy?: SortBy;
  sortDirection?: SortDirection;
}

export interface GetStudentsResponse {
  status: string;
  code: number;
  message: string;
  data: {
    totalPages: number;
    totalElements: number;
    students: Student[];
  };
}
