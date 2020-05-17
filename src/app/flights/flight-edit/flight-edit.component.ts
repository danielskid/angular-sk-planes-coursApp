import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Flight} from '../models/flight';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightService} from '../flight.service';
import {FlightFormComponent} from '../flight-form/flight-form.component';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements AfterViewInit {
  @ViewChild('flightFormRef') flightFormComponent: FlightFormComponent;
  flight: Flight;

  constructor(private flightService: FlightService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngAfterViewInit() {
    this.loadFlight();
  }

  loadFlight(): void {
    this.flightService.getFlight(this.getFlightId())
      .pipe(tap(x => this.flightFormComponent.setFlight(x)))
        .subscribe(f => this.flight = f);
  }

  saveFlight() {
    this.flightService
      .updateFlight(this.getFlightId(), this.flightFormComponent.flightForm.value)
      .then(this.onFlightUpdateSuccess.bind(this), this.onFlightUpdateError.bind(this));
  }

  private getFlightId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  private onFlightUpdateSuccess() {
    this.snackBar.open(
      'Flight has been successfully updated!',
      null,
      { panelClass: 'toast-success'});
  }

  private onFlightUpdateError() {
    this.snackBar.open(
      'Sorry! An error occurred during flight update! Please try again!',
      null,
      { panelClass: 'toast-error' });
  }

  deleteFlight() {
    const confirmStatus = window.confirm('Do you really want to delete this flight?');
    if (confirmStatus) {
      this.flightService
        .deleteFlight(this.getFlightId())
        .then(() => {
          this.router.navigate(['/dashboard/flights'])
            .then(() => {
              this.snackBar.open('Flight has been successfully removed!', '', { panelClass: 'toast-success'});
            });
        }, this.onFlightUpdateError.bind(this));
    }
  }
}
