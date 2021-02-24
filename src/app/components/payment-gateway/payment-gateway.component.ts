import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/Payment';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss'],
})
export class PaymentGatewayComponent implements OnInit {
  paymentOptions = [];
  activePayment;
  constructor() {}

  ngOnInit(): void {
    Object.keys(Payment).map((key) => {
      this.paymentOptions.push(key.toLowerCase());
    });
  }
}
