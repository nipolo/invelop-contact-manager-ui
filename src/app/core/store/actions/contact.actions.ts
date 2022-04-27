import { createAction, props } from '@ngrx/store';
import { ContactModel } from '../models';

export const loadContacts = createAction('[Contacts] Load Contacts');

export const loadContactsSuccess = createAction(
  '[Contacts] Load Contacts Success',
  props<{ contacts: ContactModel[] }>()
);

export const loadContactsFailure = createAction(
  '[Contacts] Load Contacts Failure',
  props<{ error: any }>()
);
