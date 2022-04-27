import { AddressDto } from './address.dto';

export interface AddContactCommand {
  firstName: string;
  surname: string;
  birthDate: Date;
  address: AddressDto;
  phoneNumber: string;
  iban: string;
}
