import { ContactModel } from '../models';

export interface ContactsState {
  contacts: ContactModel[];
}

export const initialContactsState: ContactsState = {
  contacts: [],
};
