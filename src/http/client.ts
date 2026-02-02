import {
  BadRequestError,
  DataGsmError,
  ForbiddenError,
  NetworkError,
  NotFoundError,
  RateLimitError,
  ServerError,
  UnauthorizedError,
} from '../errors';

export interface HttpClientConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
}

export class HttpClient {
  private readonly config: HttpClientConfig;

  constructor(config: HttpClientConfig) {
    this.config = config;
  }

  async request<T>(options: RequestOptions): Promise<T> {
    const url = this.buildUrl(options.path, options.query);
    const headers = this.buildHeaders(options.headers);

    const controller = new AbortController();
    const timeoutId =
      this.config.timeout !== undefined
        ? setTimeout(() => controller.abort(), this.config.timeout)
        : undefined;

    try {
      const response = await fetch(url, {
        method: options.method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: controller.signal,
      });

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }

      return await this.handleResponse<T>(response);
    } catch (error) {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }

      if (error instanceof DataGsmError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new NetworkError('Request timeout', error);
        }
        throw new NetworkError(`Network request failed: ${error.message}`, error);
      }

      throw new NetworkError('Unknown network error');
    }
  }

  private buildUrl(
    path: string,
    query?: Record<string, string | number | boolean | undefined>,
  ): string {
    const url = new URL(path, this.config.baseUrl);

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  private buildHeaders(additionalHeaders?: Record<string, string>): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'X-API-KEY': this.config.apiKey,
      ...this.config.headers,
      ...additionalHeaders,
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    let responseData: unknown;

    try {
      const text = await response.text();
      responseData = text ? JSON.parse(text) : undefined;
    } catch {
      responseData = undefined;
    }

    if (response.ok) {
      return responseData as T;
    }

    const errorMessage = this.extractErrorMessage(responseData) || response.statusText;

    switch (response.status) {
      case 400:
        throw new BadRequestError(errorMessage, responseData);
      case 401:
        throw new UnauthorizedError(errorMessage, responseData);
      case 403:
        throw new ForbiddenError(errorMessage, responseData);
      case 404:
        throw new NotFoundError(errorMessage, responseData);
      case 429: {
        const retryAfter = response.headers.get('Retry-After');
        const retryAfterSeconds = retryAfter ? parseInt(retryAfter, 10) : undefined;
        throw new RateLimitError(errorMessage, retryAfterSeconds, responseData);
      }
      default:
        if (response.status >= 500) {
          throw new ServerError(errorMessage, response.status, responseData);
        }
        throw new DataGsmError(errorMessage, response.status, responseData);
    }
  }

  private extractErrorMessage(data: unknown): string | undefined {
    if (typeof data === 'object' && data !== null) {
      const errorData = data as Record<string, unknown>;
      if (typeof errorData.message === 'string') {
        return errorData.message;
      }
      if (typeof errorData.error === 'string') {
        return errorData.error;
      }
    }
    return undefined;
  }
}
