import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {Flight} from './models/flight';

@Injectable()
export class FlightService {
  flights: Observable<Flight[]>;
  private TABLE_PATH = '/flights';

  constructor(private firestore: AngularFireDatabase ) {
    this.flights = firestore
      .list<Flight>(this.TABLE_PATH)
      .snapshotChanges()
      .pipe(
        map(response => response.map(
          flight => this.assignKey(flight)
        )));
  }

  private assignKey(flight) {
    return {
      id: flight.key,
      ...flight.payload.val()
    };
  }

  getFlights(): Observable<Flight[]> {
    return this.flights;
  }

  getFlight(id: string): Observable<Flight> {
    return this.firestore.object<Flight>(`${this.TABLE_PATH}/${id}`)
      .snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)));
  }

  addFlight(flight: Flight) {
    return this.firestore.list(this.TABLE_PATH).push(flight);
  }

  updateFlight(id: string, flight: Flight) {
    return this.firestore
      .object<Flight>(`${this.TABLE_PATH}/${id}`)
      .update(flight);
  }

  deleteFlight(id: string) {
    return this.firestore
      .object<Flight>(`${this.TABLE_PATH}/${id}`)
      .remove();
  }
}
