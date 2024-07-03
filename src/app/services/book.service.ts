import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll(): Book[] {
    const author: Author = {
      id: '1',
      name: 'Gabriel',
      lastName: 'Garcia Marquez',
      academicDegree: 'escritor'
    };

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const books: Book[] = [
      { id: '1', title: '100 años de soledad', description: loremIpsum, price: 23, author: author },
      { id: '2', title: 'El coronel no tiene quien le escriba', description: loremIpsum, price: 20, author: author },
      { id: '3', title: 'Cronicas de una muerte anunciada', description: loremIpsum, price: 12, author: author },
      { id: '4', title: 'memorias de mis putas tristes', description: loremIpsum, price: 28, author: author },
    ];

    return books;
  }
}
