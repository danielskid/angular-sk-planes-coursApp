import {Component, Input} from '@angular/core';
import {CrewMember, Flight} from '../models/flight';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from './custom-validator';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent {
  @Input() editMode = false;
  flight: Flight;

  flightForm: FormGroup;
  jobs = [
    { label: 'Pilot', value: 'pilot' },
    { label: 'Co-Pilot', value: 'co_pilot' },
    { label: 'Stewardess', value: 'stewardess' },
    { label: 'Mechanic', value: 'mechanic' },
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew' },
    { label: 'Alien', value: 'alien' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm(): void {
    this.flightForm = this.formBuilder.group({
      code: ['', [Validators.required, CustomValidator.onlyAlphanumeric, Validators.maxLength(7)]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      additionalInformation: '',
      returnTime: ['', Validators.required],
      departureTime: ['', Validators.required],
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }

  setFlight(flight: Flight) {
    this.flight = flight;
    const {id, crew, ...flightData} = flight;
    this.flightForm.patchValue(flightData);
    (this.flightForm.get('crew') as FormArray).clear();
    flight?.crew?.forEach(x => this.addCrewMember(x));
  }

  buildCrewMember(crewMember: CrewMember = {} as CrewMember): FormGroup  {
    return this.formBuilder.group({
      name: [crewMember.name || '', Validators.required],
      job: [crewMember.job || '', Validators.required]
    });
  }

  addCrewMember(crewMember: CrewMember = { job: '', name: '' }) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  deleteCrewMember(i: number) {
    if (i >= 0) {
      this.crew.removeAt(i);
    }
  }

  get crew(): FormArray {
    return this.flightForm.get('crew') as FormArray;
  }

  onAddCrewMemberBtnClick($event: MouseEvent) {
    $event.preventDefault();
    this.addCrewMember();
  }
}
