import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'bernard';
  password = 'password';
  errorMessage = '';
  invalidLogin = false;

  submitHandler = () => {
    if (this.username === 'bernard' && this.password === 'password') {
      this.invalidLogin = true;
      this.errorMessage = 'Invalid Credentials!';
    } else {
      this.invalidLogin = false;
    }
  };
}
