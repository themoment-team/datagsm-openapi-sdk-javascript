import { HttpClient } from '../http/client';
import { HealthCheckResponse } from '../types/health';

export class HealthApi {
  constructor(private readonly httpClient: HttpClient) {}

  async check(): Promise<HealthCheckResponse> {
    return this.httpClient.request<HealthCheckResponse>({
      method: 'GET',
      path: '/v1/health',
    });
  }
}
