import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'bernard';
  password = 'password';
  errorMessage = 'Invalid Credentials!';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardecodedAuthenticationService
  ) {
    // ...
  }

  // Router

  submitHandler = () => {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    // if (this.username === 'bernard' && this.password === 'password') {
    //   this.router.navigate(['welcome', this.username]);
    //   this.invalidLogin = false;
    // } else {
    //   this.invalidLogin = true;
    //   // this.errorMessage = 'Invalid Credentials!';
    // }
  };
}
