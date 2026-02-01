export { DataGsmClient } from './client';

export {
  DataGsmError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  ServerError,
  NetworkError,
} from './errors';

export type { PageInfo, PageRequest, PagedResponse } from './types';

export type {
  Student,
  ClubSummary as StudentClubSummary,
  Sex,
  Major,
  Role,
  SortBy as StudentSortBy,
  SortDirection,
  GetStudentsRequest,
  GetStudentsResponse,
} from './types/students';

export type {
  Club,
  ParticipantInfo as ClubParticipantInfo,
  ClubType,
  ClubSortBy,
  GetClubsRequest,
  GetClubsResponse,
} from './types/clubs';

export type {
  Project,
  ClubSummary as ProjectClubSummary,
  ParticipantInfo as ProjectParticipantInfo,
  ProjectSortBy,
  GetProjectsRequest,
  GetProjectsResponse,
} from './types/projects';

export type {
  Meal,
  MealType,
  GetMealsRequest,
  GetMealsResponse,
  Schedule,
  GetSchedulesRequest,
  GetSchedulesResponse,
} from './types/neis';

export type { HealthCheckResponse } from './types/health';
