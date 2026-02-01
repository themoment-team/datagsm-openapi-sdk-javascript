export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface PageRequest {
  page?: number;
  size?: number;
}

export interface PagedResponse<T> {
  content: T[];
  pageInfo: PageInfo;
}
