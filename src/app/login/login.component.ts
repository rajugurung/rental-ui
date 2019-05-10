import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
