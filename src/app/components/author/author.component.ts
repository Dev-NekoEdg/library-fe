import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public listAuthors: Author[] = [];
  constructor(private service: AuthorService) { }

  ngOnInit(): void {

    this.loadAuthor();
  }


  loadAuthor() {
    this.service.getAll().subscribe((res) => {
      console.log({res})
      this.listAuthors = res;
    });

  }
}
