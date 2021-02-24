import { Component, OnInit } from '@angular/core';
import { Passenger } from './../../models/Passenger';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {
  passengerInfo: Passenger;

  constructor() {}

  ngOnInit(): void {}
}
