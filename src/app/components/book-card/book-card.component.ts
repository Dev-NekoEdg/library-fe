import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor() {
    this.book = this.loadDefaulBook();
  }

  ngOnInit(): void {
  }

  loadDefaulBook(): Book {
    // throw new Error('Method not implemented.');
    return {
      id: '',
      title: '',
      description: '',
      price: 0,
      author: {
        id:'',
        name:'',
        lastName: '',
        academicDegree: '',
      }
    }
  }


}
