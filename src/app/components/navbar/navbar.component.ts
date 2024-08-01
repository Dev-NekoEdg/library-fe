import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/interfaces/logged-user';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedUser: LoggedUser;
  constructor(private router: Router,
    private loginService: LoginServiceService
  ) {
    this.loggedUser = this.emptyUser();
  }

  ngOnInit(): void {
    this.verifyUserCookie();
  }

  verifyUserCookie():void {
    this.loginService.getLoggedInUser$()
      .subscribe(user => {
        this.loggedUser = user;
      });
  }

  loginredirect() {
    this.router.navigate(['/login']);
  }

  logout(): void {
    console.log('aca');
    this.loginService.logout();
  }

  verifyLoggedUser(): void {
    this.loginService.getLoggedInUser$()
      .subscribe(user => {
        this.loggedUser = user;
      });
  }
  private emptyUser(): LoggedUser {
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
}
