import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { PassengerComponent } from './passenger.component';
import { PaymentGatewayComponent } from './../payment-gateway/payment-gateway.component';

@NgModule({
  declarations: [PassengerComponent, PaymentGatewayComponent],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [PassengerComponent],
})
export class PassengerModule {}
