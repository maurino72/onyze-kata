import { PassengerService } from './services/passenger.service';
import { firstPassengerInfo } from './utils/PassengerData';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Onyze Kata';

  @ViewChild('firstPassenger', { static: true })
  firstPassengerElement: ElementRef | undefined;

  @ViewChild('secondPassenger', { static: true })
  secondPassengerElement: ElementRef | undefined;

  @ViewChild('thirdPassenger', { static: true })
  thirdPassengerElement: ElementRef | undefined;

  constructor(private passengerService: PassengerService) {}

  ngOnInit() {
    if (
      this.firstPassengerElement &&
      this.secondPassengerElement &&
      this.thirdPassengerElement
    ) {
      (this
        .firstPassengerElement as any).passengerInfo = this.passengerService.firstPassenger;
      (this
        .secondPassengerElement as any).passengerInfo = this.passengerService.secondPassenger;
      (this
        .thirdPassengerElement as any).passengerInfo = this.passengerService.thirdPassenger;
    }
  }
}
