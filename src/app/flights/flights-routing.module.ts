import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {FlightListComponent} from './flight-list/flight-list.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';


const FLIGHTS_ROUTES: Route[] = [
  {
    path: 'flights',
    children: [
      {
        path: ':id',
        children: [
          {
            path: '', pathMatch: 'full',
            component: FlightEditComponent
          }
        ]
      },
      {
        path: '', pathMatch: 'full', component: FlightListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class FlightsRoutingModule { }
