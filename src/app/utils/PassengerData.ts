import { Passenger } from '../models/Passenger';
import { Payment } from '../models/Payment';
import {
  travelDetailsPassengerOne,
  travelDetailsPassengerTwo,
  travelDetailsPassengerThree,
} from './TravelData';

export const firstPassengerInfo: Passenger = {
  firstName: 'Bruno',
  lastName: 'Maurino',
  hideInformation: false,
  email: 'brunomaurino@test.com',
  phoneNumber: '+54 9 (234)-234234',
  location: 'Córdoba, Córdoba, Argentina',
  paymentGateway: Payment.Visa,
  avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
  travelDetails: travelDetailsPassengerOne,
  interactions: 5,
};

export const secondPassengerInfo: Passenger = {
  firstName: 'Fernanda',
  lastName: 'Zaniboni',
  hideInformation: false,
  email: 'ferzaniboni@test.com',
  phoneNumber: '+54 9 (234)-234234',
  location: 'Córdoba, Córdoba, Argentina',
  paymentGateway: Payment.Visa,
  avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
  travelDetails: travelDetailsPassengerTwo,
  interactions: 6,
};

export const thirdPassengerInfo: Passenger = {
  firstName: 'Some New',
  lastName: 'Person',
  hideInformation: false,
  email: 'someperson@test.com',
  phoneNumber: '+54 9 (234)-234234',
  location: 'Córdoba, Córdoba, Argentina',
  paymentGateway: Payment.Visa,
  avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
  travelDetails: travelDetailsPassengerThree,
  interactions: 3,
};
