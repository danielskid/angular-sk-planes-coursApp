import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth.authState$.pipe(map(
      authstate => {
        if (state != null) {
          return true;
        }

        this.router
          .navigate(['/login'])
          .then(() => this.snackBar
            .open('Please login first!', '', { panelClass: 'toast-error' }));
      }
    ));
  }
}
