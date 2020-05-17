import { Component } from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email: 'danielski@d.pl', password: 'danielski' };

  constructor(private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  formSubmit(e: Event): void {
    e.preventDefault();
    console.log('Form submit');
  }

  login(e: Event): void {
    e.preventDefault();

    this.auth.login(this.credentials)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailure.bind(this));
  }

  private onLoginSuccess() {
    this.router
      .navigate(['/'])
      .then();
  }

  private onLoginFailure(error) {
    this.snackBar.open('Error! ' + error?.message, '', { panelClass: 'toast-error' });
  }

  register(e: Event): void {
    e.preventDefault();

    this.auth.register(this.credentials)
      .then(this.onRegisterSuccess.bind(this))
      .catch(this.onRegisterFailure.bind(this));
  }

  private onRegisterSuccess() {
    this.router
      .navigate(['/dashboard'])
      .then(() => this.snackBar.open('Welcome', null, { panelClass: 'toast-success' }));
  }

  private onRegisterFailure(error) {
    this.snackBar.open('Error! ' + error?.message, null, { panelClass: 'toast-error' });
  }
}
