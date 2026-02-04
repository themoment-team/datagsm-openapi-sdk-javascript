import { HttpClient } from '../http/client';
import { GetStudentsRequest, GetStudentsResponse } from '../types/students';

export class StudentsApi {
  constructor(private readonly httpClient: HttpClient) {}

  async getStudents(request: GetStudentsRequest = {}): Promise<GetStudentsResponse> {
    return this.httpClient.request<GetStudentsResponse>({
      method: 'GET',
      path: '/v1/students',
      query: {
        studentId: request.studentId,
        name: request.name,
        email: request.email,
        grade: request.grade,
        classNum: request.classNum,
        number: request.number,
        sex: request.sex,
        role: request.role,
        dormitoryRoom: request.dormitoryRoom,
        isLeaveSchool: request.isLeaveSchool,
        includeGraduates: request.includeGraduates,
        page: request.page,
        size: request.size,
        sortBy: request.sortBy,
        sortDirection: request.sortDirection,
      },
    });
  }
}
