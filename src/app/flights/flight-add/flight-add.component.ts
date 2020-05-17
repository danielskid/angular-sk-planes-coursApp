import {Component, ViewChild} from '@angular/core';
import {FlightFormComponent} from '../flight-form/flight-form.component';
import {FlightService} from '../flight.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html'
})
export class FlightAddComponent {
  @ViewChild('flightFormRef') flightFormRef: FlightFormComponent;

  constructor(private flightService: FlightService,
              private dialogRef: MatDialogRef<FlightAddComponent>,
              private snackBar: MatSnackBar) {
  }

  createFlight(): void {
    this.flightService.addFlight(
      this.flightFormRef.flightForm.value
    ).then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess() {
    this.snackBar.open('Flight has been successfully created!', null, { panelClass: 'toast-success'});
    this.dialogRef?.close();
  }

  private onCreatingFailure(error) {
    this.snackBar.open('An error occured! Try again later.', null, { panelClass: 'toast-error'});
  }
}
