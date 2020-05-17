import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {CanActivateGuard} from './guards/can-activate.guard';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class CoreModule {}
