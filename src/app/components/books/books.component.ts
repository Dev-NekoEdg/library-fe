import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { Book } from 'src/app/interfaces/book';
import {BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books:Book[] = [];
  constructor(private service: BookService) {
  }

  ngOnInit(): void {
    this.books = this.loadBooks();
  }

  loadBooks() {
   return this.service.getAll();
  }

}
