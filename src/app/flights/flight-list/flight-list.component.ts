import { Component } from '@angular/core';
import {FlightService} from '../flight.service';
import {Flight} from '../models/flight';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {FlightDetailsComponent} from '../flight-details/flight-details.component';
import {Router} from '@angular/router';
import {FlightAddComponent} from '../flight-add/flight-add.component';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent  {
  flights$: Observable<Flight[]> = this.flightService.getFlights();

  constructor(private flightService: FlightService,
              private dialog: MatDialog,
              private router: Router) {}

  showFlightDetails(flightData: Flight) {
    const dialogRef = this.dialog.open(
      FlightDetailsComponent,
      { data: flightData }
      );

    this.router.events.subscribe(() => dialogRef.close());
  }

  openAddFlightForm() {
    const dialogRef = this.dialog.open(FlightAddComponent);
  }
}
