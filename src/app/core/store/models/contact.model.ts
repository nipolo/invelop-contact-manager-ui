import { AddressModel } from './address.model';

export interface ContactModel {
  id: number;
  firstName: string;
  surname: string;
  birthDate: Date;
  address: AddressModel;
  phoneNumber: string;
  iban: string;
}
