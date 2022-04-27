import { ContactDto } from './contact.dto';

export interface AllContactsDto {
  contacts: ContactDto[];
  totalContacts: number;
}
