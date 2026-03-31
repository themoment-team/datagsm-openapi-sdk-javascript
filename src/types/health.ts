import type { ApiResponse } from './index';

export type HealthCheckResponse = Omit<ApiResponse<never>, 'data'>;
