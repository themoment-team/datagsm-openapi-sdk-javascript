import { HttpClient } from '../http/client';
import { GetClubsRequest, GetClubsResponse } from '../types/clubs';

export class ClubsApi {
  constructor(private readonly httpClient: HttpClient) {}

  async getClubs(request: GetClubsRequest = {}): Promise<GetClubsResponse> {
    return this.httpClient.request<GetClubsResponse>({
      method: 'GET',
      path: '/v1/clubs',
      query: {
        clubId: request.clubId,
        clubName: request.clubName,
        clubType: request.clubType,
        page: request.page,
        size: request.size,
        includeLeaderInParticipants: request.includeLeaderInParticipants,
        sortBy: request.sortBy,
        sortDirection: request.sortDirection,
      },
    });
  }
}
