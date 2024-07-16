import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.loadForm();
  }

  ngOnInit(): void {

  }

  // getters:
  get nameValid() {
    return this.myForm.get('name')?.invalid && this.myForm.get('name')?.touched;
  }

  loadForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      userName: ['', Validators.required],
      password: ['', [Validators.required]],
      validatePass: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.myForm);
  }

}
