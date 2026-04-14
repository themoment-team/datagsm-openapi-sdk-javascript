import { HttpClient } from '../http/client';
import {
  GetMealsRequest,
  GetMealsResponse,
  GetSchedulesRequest,
  GetSchedulesResponse,
  GetTimetablesRequest,
  GetTimetablesResponse,
} from '../types/neis';

export class NeisApi {
  constructor(private readonly httpClient: HttpClient) {}

  async getTimetables(request: GetTimetablesRequest = {}): Promise<GetTimetablesResponse> {
    return this.httpClient.request<GetTimetablesResponse>({
      method: 'GET',
      path: '/v1/neis/timetables',
      query: {
        grade: request.grade,
        classNum: request.classNum,
        date: request.date,
        fromDate: request.fromDate,
        toDate: request.toDate,
        isValidDateCombination: request.isValidDateCombination,
        isValidDateRange: request.isValidDateRange,
        isValidDateRangePeriod: request.isValidDateRangePeriod,
        isDateRequired: request.isDateRequired,
      },
    });
  }

  async getMeals(request: GetMealsRequest = {}): Promise<GetMealsResponse> {
    return this.httpClient.request<GetMealsResponse>({
      method: 'GET',
      path: '/v1/neis/meals',
      query: {
        date: request.date,
        fromDate: request.fromDate,
        toDate: request.toDate,
        isValidDateCombination: request.isValidDateCombination,
        isValidDateRange: request.isValidDateRange,
        isValidDateRangePeriod: request.isValidDateRangePeriod,
      },
    });
  }

  async getSchedules(request: GetSchedulesRequest = {}): Promise<GetSchedulesResponse> {
    return this.httpClient.request<GetSchedulesResponse>({
      method: 'GET',
      path: '/v1/neis/schedules',
      query: {
        date: request.date,
        fromDate: request.fromDate,
        toDate: request.toDate,
        isValidDateCombination: request.isValidDateCombination,
        isValidDateRange: request.isValidDateRange,
        isValidDateRangePeriod: request.isValidDateRangePeriod,
      },
    });
  }
}
