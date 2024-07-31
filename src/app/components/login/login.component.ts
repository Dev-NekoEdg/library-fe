import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginServiceService,
    private router: Router
  ) {

    this.loginForm = this.loadForm();
  }



  ngOnInit(): void {
  }
  get getValidEmail() {
    return this.loginForm.controls['email']?.touched && this.loginForm.controls['email'].invalid;
  }
  get getValidPassword() {
    return this.loginForm.controls['password']?.touched && this.loginForm.controls['password'].invalid;
  }

  loadForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const user = this.loginForm.controls['email'].value;
      const pass = this.loginForm.controls['password'].value;

      const registeredUser = this.service.login(user, pass);
      if (registeredUser) {

        localStorage.setItem(environment.userCookie,
          JSON.stringify(registeredUser)
        );
        this.router.navigate(['books']);
      }
    }

  }
}
