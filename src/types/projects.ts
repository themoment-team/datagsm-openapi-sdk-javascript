export type ClubType = 'MAJOR_CLUB' | 'JOB_CLUB' | 'AUTONOMOUS_CLUB';
export type Major = 'SW_DEVELOPMENT' | 'AI_DEVELOPMENT' | 'SMART_IOT_DEVELOPMENT';
export type Sex = 'MAN' | 'WOMAN';
export type ProjectSortBy = 'ID' | 'NAME';
export type SortDirection = 'ASC' | 'DESC';

export interface ClubSummary {
  id: number;
  name: string;
  type: ClubType;
}

export interface ParticipantInfo {
  id: number;
  name: string;
  email: string;
  studentNumber: number;
  major: Major;
  sex: Sex;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  club?: ClubSummary;
  participants?: ParticipantInfo[];
}

export interface GetProjectsRequest {
  projectId?: number;
  projectName?: string;
  clubId?: number;
  page?: number;
  size?: number;
  sortBy?: ProjectSortBy;
  sortDirection?: SortDirection;
}

export interface GetProjectsResponse {
  status: string;
  code: number;
  message: string;
  data: {
    totalPages: number;
    totalElements: number;
    projects: Project[];
  };
}
