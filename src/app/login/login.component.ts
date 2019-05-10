import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const loginCred = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value
    }
    console.log(loginCred);
  }
}
