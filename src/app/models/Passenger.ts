import { Payment } from './Payment';
import { Travel } from './Travel';

export interface Passenger {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  avatar: String;
  location: String;
  paymentGateway: Payment;
  travelDetails: Travel;
  hideInformation: Boolean;
  interactions: Number;
}
