import { Injectable } from '@angular/core';
import { LoggedUser } from '../interfaces/logged-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private defaultUser: LoggedUser ;

  constructor() {
    this.defaultUser = {
      email: 'name@example.com',
      lastName: 'test',
      name: 'test',
      userId: '123456',
      userName: 'TestDefault',
      userToken: 'token.default.test'
    };
  }


  login(email: string, password: string): LoggedUser | undefined {
    // validate with backend.
    if (password !== '1234') {
      return undefined;
    }
    else {
      return this.defaultUser;
    }
  }


}
