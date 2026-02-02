import { HttpClient } from './http/client';
import { StudentsApi } from './domains/students';
import { ClubsApi } from './domains/clubs';
import { ProjectsApi } from './domains/projects';
import { NeisApi } from './domains/neis';
import { HealthApi } from './domains/health';

export interface DataGsmClientConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class DataGsmClient {
  private readonly httpClient: HttpClient;
  private _studentsApi?: StudentsApi;
  private _clubsApi?: ClubsApi;
  private _projectsApi?: ProjectsApi;
  private _neisApi?: NeisApi;
  private _healthApi?: HealthApi;

  constructor(config: DataGsmClientConfig) {
    this.httpClient = new HttpClient({
      baseUrl: config.baseUrl || 'https://openapi.data.hellogsm.kr',
      apiKey: config.apiKey,
      timeout: config.timeout ?? 30000,
      headers: config.headers,
    });
  }

  students(): StudentsApi {
    if (!this._studentsApi) {
      this._studentsApi = new StudentsApi(this.httpClient);
    }
    return this._studentsApi;
  }

  clubs(): ClubsApi {
    if (!this._clubsApi) {
      this._clubsApi = new ClubsApi(this.httpClient);
    }
    return this._clubsApi;
  }

  projects(): ProjectsApi {
    if (!this._projectsApi) {
      this._projectsApi = new ProjectsApi(this.httpClient);
    }
    return this._projectsApi;
  }

  neis(): NeisApi {
    if (!this._neisApi) {
      this._neisApi = new NeisApi(this.httpClient);
    }
    return this._neisApi;
  }

  health(): HealthApi {
    if (!this._healthApi) {
      this._healthApi = new HealthApi(this.httpClient);
    }
    return this._healthApi;
  }
}
