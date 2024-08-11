export interface RequestQuery<T> {
  pageSize: number;
  page: number,
  totalRows: number,
  sort: string,
  sortDirection: string,
  filter: string,
  filterValue: FilterParams | undefined,
  pagesQuantity: number,
  data: T[] | null
}

export interface FilterParams {
  property: string,
  value: string
}
