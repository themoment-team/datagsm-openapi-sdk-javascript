import type { ClubType, ParticipantInfo, SortDirection } from './index';

export type ClubSortBy = 'ID' | 'NAME' | 'TYPE';

export interface Club {
  id: number;
  name: string;
  type: ClubType;
  leader: ParticipantInfo;
  participants: ParticipantInfo[];
}

export interface GetClubsRequest {
  clubId?: number;
  clubName?: string;
  clubType?: ClubType;
  page?: number;
  size?: number;
  includeLeaderInParticipants?: boolean;
  sortBy?: ClubSortBy;
  sortDirection?: SortDirection;
}

export interface GetClubsResponse {
  status: string;
  code: number;
  message: string;
  data: {
    totalPages: number;
    totalElements: number;
    clubs: Club[];
  };
}
