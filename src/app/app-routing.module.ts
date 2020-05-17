import {NgModule} from '@angular/core';
import {Route, RouterModule } from '@angular/router';
import {Page404Component} from './shared/components/page404/page404.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {CanActivateGuard} from './core/guards/can-activate.guard';

const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuard],
    // canLoad: [CanActivateGuard],
    loadChildren: () => import('./flights/flights.module').then(mod => mod.FlightsModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
