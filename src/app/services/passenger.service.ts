import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Passenger } from '../models/passenger';
import {
  firstPassengerInfo,
  secondPassengerInfo,
  thirdPassengerInfo,
} from '../utils/PassengerData';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  firstPassenger: Passenger = firstPassengerInfo;
  secondPassenger: Passenger = secondPassengerInfo;
  thirdPassenger: Passenger = thirdPassengerInfo;

  firstPassenger$: BehaviorSubject<Passenger> = new BehaviorSubject<Passenger>(
    this.firstPassenger
  );
  secondPassenger$: BehaviorSubject<Passenger> = new BehaviorSubject<Passenger>(
    this.secondPassenger
  );
  thirdPassenger$: BehaviorSubject<Passenger> = new BehaviorSubject<Passenger>(
    this.thirdPassenger
  );

  constructor() {}
}
