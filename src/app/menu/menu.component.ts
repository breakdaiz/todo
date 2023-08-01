import { Component, OnInit } from '@angular/core';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(
    private hardcodedAuthenticationService: HardecodedAuthenticationService
  ) {}

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
