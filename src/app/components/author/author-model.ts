export interface AuthorModel{
  sort: string;
  sortDirection: string,
  filter: string,

  totalRecord: number,
  pages: number,
  currentPage: number,
  pageNumber: number
}

export enum NamePropertyFilter{
  Name = 'name',
  LastName = 'lastName',
  AcademicDegree = 'academicDegree',
  Asc = 'asc',
  Desc = 'desc',
  rowsPerPageDefaultValue = 5

}
