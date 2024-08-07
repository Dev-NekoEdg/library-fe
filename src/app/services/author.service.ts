import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseApi}/author`;
  }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl);
  }

}
