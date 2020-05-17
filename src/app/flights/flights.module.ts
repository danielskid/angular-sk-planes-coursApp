import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightsRoutingModule} from './flights-routing.module';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {FlightService} from './flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import {MaterialModule} from '../material/material.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightAddComponent } from './flight-add/flight-add.component';

@NgModule({
  declarations: [
    FlightFormComponent,
    FlightListComponent,
    FlightCardComponent,
    FlightDetailsComponent,
    FlightEditComponent,
    FlightAddComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    FlightService
  ],
  entryComponents: [
    FlightDetailsComponent
  ]
})
export class FlightsModule { }
