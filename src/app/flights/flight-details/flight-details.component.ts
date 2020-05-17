import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Flight} from '../models/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html'
})
export class FlightDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA)public flight: Flight) {
  }
}
