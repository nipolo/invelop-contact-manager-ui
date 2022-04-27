import { createSelector } from '@ngrx/store';
import { AppState, ContactsState } from '../states';

const selectContactsFeature = (state: AppState) => state.contacts;

export const selectContacts = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state?.contacts
);
