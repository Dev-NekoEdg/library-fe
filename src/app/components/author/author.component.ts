import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { RequestQuery } from 'src/app/interfaces/requestquery';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorModel, NamePropertyFilter } from './author-model';

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
    const filter: RequestQuery<Author> = {
      pagaSize: 10,
      page: 1,
      totalRows: 0,
      sort: 'name',
      sortDirection: 'ASC',
      filter: '',
      filterValue: undefined,
      pagesQuantity: 0,
      data: null
    };

    this.service.getPagedData(filter).subscribe((res) => {
      console.log({ res })
      if (res.data == null || res.data == undefined) {

        this.listAuthors = [];
      }
      else {
        this.listAuthors = res.data;
      }
    });

  }

  private loadFilters(): AuthorModel {
    return {
      pages: 0,
      pageNumber: 0,
      filter: '',
      currentPage: 1,
      sort: '',
      sortDirection: '',
      totalRecord: 0
    }
  }
}
