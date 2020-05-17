export interface Flight {
  'id': string;
  'additionalInformation': string;
  'code': string;
  'crew': CrewMember[];
  'departureTime': string;
  'destination': string;
  'origin': string;
  'returnTime': string;
  'withSKPlanesDiscount': boolean;
}

export class CrewMember {
  job: string;
  name: string;
}
