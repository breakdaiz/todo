import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardecodedAuthenticationService {
  constructor() {}

  authenticate(username: any, password: any) {
    if (username === 'bernard' && password === 'password') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
