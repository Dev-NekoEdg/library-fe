import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { RequestQuery } from 'src/app/interfaces/requestQuery';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorModel, queryFilters } from './author-model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public listAuthors: Author[] = [];
  public filterParams: AuthorModel;

  public filterActive: string;

  public nameColumn: string = queryFilters.columnName;
  public isSortNameColumn: boolean;

  public lastNameColumn: string = queryFilters.columnLastName;
  public isSortLastNameColumn: boolean;

  public academicDegreeColumn: string = queryFilters.columnAcademicDegree;
  public isSortAcademicDegreeColumn: boolean;

  constructor(private service: AuthorService) {
    this.filterActive = queryFilters.columnName;
    this.filterParams = this.loadFilters();
    this.isSortNameColumn = true;
    this.isSortLastNameColumn = false;
    this.isSortAcademicDegreeColumn = false;
  }

  ngOnInit(): void {
    this.loadAuthor();
  }

  loadAuthor() {

    this.getData();
    // this.service.getAll().subscribe((res)=>{
    //   this.listAuthors = res;
    // });
  }

  changePage(page: number): void {
    this.filterParams.currentPage = page;
    console.log({ page });
    console.log({ 'filterParams': this.filterParams });

    this.getData();
  }

  changePageNextBackButtons(isForward: boolean): void {
    if (isForward) {
      this.filterParams.currentPage = this.filterParams.currentPage + 1;
    } else {
      this.filterParams.currentPage = this.filterParams.currentPage - 1;
    }
    // send filter...
    console.log({ 'filterParams': this.filterParams });
    this.getData();
  }

  changeSortDirection(field: string, isAsc: boolean): void {
    // validation for sortDirection.
    this.isSortNameColumn = !isAsc;

    // switch (field) {
    //   case queryFilters.columnName:
    //     if(this.isSortNameColumn === true){
    //       this.isSortNameColumn = false ;
    //     }else{
    //       this.isSortNameColumn = true;
    //     }
    //     this.isSortLastNameColumn = false;
    //     this.isSortAcademicDegreeColumn = false;
    //     break;
    //   case queryFilters.columnLastName:
    //     if(this.isSortLastNameColumn === true){
    //       this.isSortLastNameColumn = false ;
    //     }else{
    //       this.isSortLastNameColumn = true;
    //     }
    //     this.isSortNameColumn = true;
    //     this.isSortAcademicDegreeColumn = true;
    //     break;
    //   case queryFilters.columnAcademicDegree:
    //     if (this.isSortAcademicDegreeColumn) {
    //        this.isSortAcademicDegreeColumn = false;
    //     }
    //     else{
    //       this.isSortAcademicDegreeColumn = true;
    //     }
    //     this.isSortNameColumn = false;
    //     this.isSortLastNameColumn = false;
    //     break;
    // }
    console.log({
      isSortNameColumn: this.isSortNameColumn,
       isSortLastNameColumn: this.isSortLastNameColumn,
       isSortAcademicDegreeColumn: this.isSortAcademicDegreeColumn,
       field });

    this.filterParams.sort = field;
    this.filterParams.sortDirection = isAsc === true ? queryFilters.asc : queryFilters.desc;
    this.getData();
  }

  changeFilterActive(newFilter: string): void {

    this.filterActive = newFilter;

    switch (newFilter) {
      case queryFilters.columnName:
        this.isSortNameColumn = true;
        this.isSortLastNameColumn = false;
        this.isSortAcademicDegreeColumn = false;
        break;
      case queryFilters.columnLastName:
        this.isSortLastNameColumn = true;
        this.isSortNameColumn = false;
        this.isSortAcademicDegreeColumn = false;
        break;
      case queryFilters.columnAcademicDegree:
        this.isSortAcademicDegreeColumn = true;
        this.isSortNameColumn = false;
        this.isSortLastNameColumn = false;
        break;
    }

  }

  private getData() {
    const filter: RequestQuery<Author> = {
      pageSize: this.filterParams.rowsPerPage,
      page: this.filterParams.currentPage,
      totalRows: 0,
      sort: this.filterParams.sort,
      sortDirection: this.filterParams.sortDirection,
      filter: this.filterParams.filter,
      filterValue: undefined,
      pagesQuantity: 0,
      data: null
    };

    this.service.getPagedData(filter).subscribe((res) => {
      console.log({ res })
      if (res.data == null || res.data == undefined) {
        console.log('no hay data...');
        this.listAuthors = [];
      }
      else {
        this.listAuthors = res.data;
        this.filterParams.pageNumber = res.page;
        this.filterParams.totalPages = res.pagesQuantity;
        this.filterParams.pages = this.createArrayPages(res.pagesQuantity);
        this.filterParams.totalRecord = res.totalRows;
      }
    });
  }

  private createArrayPages(pagesQuantity: number): number[] {
    let result: number[] = [];

    for (let index = 0; index < pagesQuantity; index++) {
      result.push(index + 1);
    }

    return result;
  }

  private loadFilters(): AuthorModel {
    return {
      pages: [1],
      totalPages: 1,
      pageNumber: 1,
      filter: '',
      rowsPerPage: queryFilters.rowsPerPageDefaultValue,
      currentPage: 1,
      sort: queryFilters.columnName,
      sortDirection: queryFilters.asc,
      totalRecord: 0
    }
  }
}
