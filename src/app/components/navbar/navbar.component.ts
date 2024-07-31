import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/interfaces/logged-user';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  public loggedUser: LoggedUser;
  constructor(private router: Router) {
    this.loggedUser = this.emptyLoggedUser();
  }

  ngOnInit(): void {
    this.verifyUserCookie();
  }

  verifyUserCookie() {
    try {

      const userSaved = localStorage.getItem(environment.userCookie);
      if (userSaved) {
        let user: LoggedUser = JSON.parse(userSaved);
        this.loggedUser = user;
        this.isLogged = true;
      }
      else {
        this.loggedUser = this.emptyLoggedUser();
        localStorage.removeItem(environment.userCookie);
        this.isLogged = false;
      }
    } catch {
      localStorage.removeItem(environment.userCookie);
      this.isLogged = false;
    }
  }

  loginredirect(){
    this.router.navigate(['/login']);
  }

  emptyLoggedUser(): LoggedUser {
    return {
      userId: '',
      name: '',
      lastName: '',
      userName: '',
      email: '',
      userToken: ''
    };
  }

}
