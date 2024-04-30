export interface QueryParam {
  [key: string]: string | undefined;
}

export interface Error {
  status?: number;
  message?: string;
}

export interface Pagination<T> {
  data: T[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
