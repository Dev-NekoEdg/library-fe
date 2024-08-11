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
  constructor(private service: AuthorService) {
    this.filterParams = this.loadFilters();

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

  private getData(){
    const filter: RequestQuery<Author> = {
      pageSize: this.filterParams.rowsPerPage,
      page: this.filterParams.currentPage,
      totalRows: 0,
      sort: this.filterParams.sort,
      sortDirection: queryFilters.asc,
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
