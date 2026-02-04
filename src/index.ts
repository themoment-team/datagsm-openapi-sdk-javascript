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

export type {
  PageInfo,
  PageRequest,
  PagedResponse,
  SortDirection,
  Sex,
  Major,
  ClubType,
  ClubSummary,
  ParticipantInfo,
  ApiResponse,
} from './types';

export type {
  Student,
  Role,
  SortBy as StudentSortBy,
  GetStudentsRequest,
  GetStudentsResponse,
} from './types/students';

export type { Club, ClubSortBy, GetClubsRequest, GetClubsResponse } from './types/clubs';

export type {
  Project,
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
