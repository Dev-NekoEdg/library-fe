import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books:Book[] = [];
  constructor() {
    this.books = this.loadBooks();
  }

  ngOnInit(): void {
  }

  loadBooks() {
    const author: Author = {
      id: '1',
      name: 'Gabriel',
      lastName: 'Garcia Marquez',
      academicDegree: 'escritor'
    };

    const books: Book[] = [
      { id: '1', title: '100 años de soledad', description: '', price: 20, author: author },
      { id: '2', title: 'El coronel no tiene quien le escriba', description: '', price: 20, author: author },
      { id: '3', title: 'Cronicas de una muerte anunciada', description: '', price: 20, author: author },
      { id: '4', title: 'memorias de mis putas tristes', description: '', price: 20, author: author },
    ];

    return books;
  }

}
