import { AddressModel } from './address.model';

export interface ContactModel {
  id: number;
  name: string;
  firstName: string;
  surname: string;
  birthDate: Date;
  address: AddressModel;
  phoneNumber: string;
  iban: string;
}
