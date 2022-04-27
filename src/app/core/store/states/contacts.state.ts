import { ContactModel } from '../models';

export interface ContactsState {
  contacts: ContactModel[];
  totalContacts: number;
}

export const initialContactsState: ContactsState = {
  contacts: [],
  totalContacts: 0,
};
