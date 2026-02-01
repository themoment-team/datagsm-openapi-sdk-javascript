import { HttpClient } from './http/client';
import { StudentsApi } from './domains/students';
import { ClubsApi } from './domains/clubs';
import { ProjectsApi } from './domains/projects';
import { NeisApi } from './domains/neis';
import { HealthApi } from './domains/health';

export interface DataGsmClientConfig {
  apiKey: string;
  baseUrl: string;
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
      baseUrl: config.baseUrl,
      apiKey: config.apiKey,
      timeout: config.timeout,
      headers: config.headers,
    });
  }

  static builder(apiKey: string): DataGsmClientBuilder {
    return new DataGsmClientBuilder(apiKey);
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

export class DataGsmClientBuilder {
  private config: Partial<DataGsmClientConfig>;

  constructor(apiKey: string) {
    this.config = {
      apiKey,
      baseUrl: 'https://openapi.data.hellogsm.kr',
      timeout: 30000,
    };
  }

  baseUrl(url: string): this {
    this.config.baseUrl = url;
    return this;
  }

  timeout(ms: number): this {
    this.config.timeout = ms;
    return this;
  }

  headers(headers: Record<string, string>): this {
    this.config.headers = headers;
    return this;
  }

  build(): DataGsmClient {
    if (!this.config.apiKey) {
      throw new Error('API key is required');
    }
    if (!this.config.baseUrl) {
      throw new Error('Base URL is required');
    }

    return new DataGsmClient(this.config as DataGsmClientConfig);
  }
}
