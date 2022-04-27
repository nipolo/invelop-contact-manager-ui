import { AddressDto } from './address.dto';

export interface ContactDto {
  id: number;
  name: string;
  firstName: string;
  surname: string;
  birthDate: Date;
  address: AddressDto;
  phoneNumber: string;
  iban: string;
}
