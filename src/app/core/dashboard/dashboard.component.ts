import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // @ViewChild(RouterOutlet) outlet: RouterOutlet;
  user = this.authService.getUserInfo;

  constructor(public authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  logout() {
    this.authService.logout()
      .then(() => this.router
        .navigate(['/login'])
            .then(() => this.snackBar
              .open('Please come back soon!', null, { panelClass: 'toast-success' }))
      );
  }

  // constructor(private router: Router) {
  //   console.log('DashboardComponent');
  // }

  // For more information look here
  // For named router
  // https://stackoverflow.com/a/55742986
  // ngOnInit(): void {
  //   this.router.events.subscribe(e => {
  //     if (e instanceof ActivationStart && e.snapshot.outlet === 'dashboardRouterOutlet') {
  //         this.outlet.deactivate();
  //     }
  //   });
  // }

}
