import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false; // ONLY FOR TESTING PURPOSE
  }
  get userLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
