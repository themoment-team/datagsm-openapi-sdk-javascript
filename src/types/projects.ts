import type { ApiResponse, ClubSummary, ParticipantInfo, SortDirection } from './index';

export type ProjectSortBy = 'ID' | 'NAME';

export interface Project {
  id: number;
  name: string;
  description: string;
  club?: ClubSummary;
  participants: ParticipantInfo[];
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

export type GetProjectsResponse = ApiResponse<{
  totalPages: number;
  totalElements: number;
  projects: Project[];
}>;
