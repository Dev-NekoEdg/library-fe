export interface AuthorModel {
  sort: string;
  sortDirection: string,
  filter: string,

  rowsPerPage: number;
  totalRecord: number,
  totalPages: number,
  pages: number[],
  currentPage: number,
  pageNumber: number
}

export const queryFilters = {
  columnName: 'name',
  columnLastName: 'lastName',
  columnAcademicDegree: 'academicDegree',

  asc: 'asc',
  desc: 'desc',
  defaultPage: 1,
  rowsPerPageDefaultValue: 5,
  rowsPerPages: [5, 10, 15, 20]
}
