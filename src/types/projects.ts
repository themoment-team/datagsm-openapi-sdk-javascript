import type { ClubSummary, ParticipantInfo, SortDirection } from './index';

export type ProjectSortBy = 'ID' | 'NAME';

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
