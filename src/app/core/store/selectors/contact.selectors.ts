import { createSelector } from '@ngrx/store';
import { AppState, ContactsState } from '../states';

const selectContactsFeature = (state: AppState) => state.contacts;

export const selectContacts = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state?.contacts
);

export const selectTotalContacts = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state?.totalContacts
);

export const selectContact = (id: number) =>
  createSelector(selectContactsFeature, (state: ContactsState) =>
    state.contacts.find((c) => c.id === id)
  );
