import { AddressDto } from './address.dto';

export interface UpdateContactCommand {
  id: number;
  firstName: string;
  surname: string;
  birthDate: Date;
  address: AddressDto;
  phoneNumber: string;
  iban: string;
}
