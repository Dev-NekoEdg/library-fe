import { Injectable } from '@angular/core';
import { LoggedUser } from '../interfaces/logged-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private defaultUser: LoggedUser;
  private loggedInUser: LoggedUser;
  private loggedInUser$: BehaviorSubject<LoggedUser>;

  constructor() {
    this.defaultUser = {
      isLoggedIn: true,
      email: 'name@example.com',
      lastName: 'testing',
      name: 'test',
      userId: '1234',
      userName: '@test-testing',
      userToken: 'null.null.null'
    }
    this.loggedInUser = this.emptytUser();
    this.loggedInUser$ = new BehaviorSubject<LoggedUser>(this.defaultUser);
  }

  emptytUser() {
    return {
      isLoggedIn: false,
      email: null,
      lastName: null,
      name: null,
      userId: null,
      userName: null,
      userToken: null
    };

  }

  login(email: string, password: string): LoggedUser | undefined {
    // validate with backend.
    if (password !== '1234') {
      localStorage.removeItem(environment.userCookie);
      this.loggedInUser = this.emptytUser();
      return undefined;
    }
    else {
      this.loggedInUser = this.defaultUser;
      return this.loggedInUser;
    }
  }

  logout(){
    console.log('here');
    this.loggedInUser = this.emptytUser();
    localStorage.removeItem(environment.userCookie);
  }

  getLoggedInUser$(): Observable<LoggedUser> {
    const userSaved = localStorage.getItem(environment.userCookie);
    if (userSaved) {
      let user: LoggedUser = JSON.parse(userSaved);
      this.loggedInUser = user;
    } else {
      this.loggedInUser = this.emptytUser();
      localStorage.removeItem(environment.userCookie);
    }

    this.loggedInUser$.next(this.loggedInUser);
    return this.loggedInUser$.asObservable();
  }
}
