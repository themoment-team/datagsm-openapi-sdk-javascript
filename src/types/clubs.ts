export type ClubType = 'MAJOR_CLUB' | 'JOB_CLUB' | 'AUTONOMOUS_CLUB';
export type Major = 'SW_DEVELOPMENT' | 'AI_DEVELOPMENT' | 'SMART_IOT_DEVELOPMENT';
export type Sex = 'MAN' | 'WOMAN';
export type ClubSortBy = 'ID' | 'NAME' | 'TYPE';
export type SortDirection = 'ASC' | 'DESC';

export interface ParticipantInfo {
  id: number;
  name: string;
  email: string;
  studentNumber: number;
  major: Major;
  sex: Sex;
}

export interface Club {
  id: number;
  name: string;
  type: ClubType;
  leader?: ParticipantInfo;
  participants?: ParticipantInfo[];
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
