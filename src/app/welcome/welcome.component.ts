import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  // ActivateRoute
  name = '';

  constructor(private router: ActivatedRoute) {
    // ...
  }

  ngOnInit() {
    this.name = this.router.snapshot.params['name'];
  }
}
