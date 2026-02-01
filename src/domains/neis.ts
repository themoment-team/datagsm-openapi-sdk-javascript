import { HttpClient } from '../http/client';
import {
  GetMealsRequest,
  GetMealsResponse,
  GetSchedulesRequest,
  GetSchedulesResponse,
} from '../types/neis';

export class NeisApi {
  constructor(private readonly httpClient: HttpClient) {}

  async getMeals(request: GetMealsRequest = {}): Promise<GetMealsResponse> {
    return this.httpClient.request<GetMealsResponse>({
      method: 'GET',
      path: '/v1/neis/meals',
      query: {
        date: request.date,
        fromDate: request.fromDate,
        toDate: request.toDate,
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
      },
    });
  }
}
