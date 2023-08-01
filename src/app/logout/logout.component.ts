import { Component, OnInit } from '@angular/core';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private authenticator: HardecodedAuthenticationService) {}

  ngOnInit() {
    this.authenticator.logout();
  }
}
