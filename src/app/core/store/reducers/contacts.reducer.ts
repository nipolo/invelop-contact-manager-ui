import { createFeature, createReducer, on } from '@ngrx/store';
import { loadContactsSuccess } from '../actions';
import { initialContactsState } from '../states';

export const contactsFeature = createFeature({
  name: 'contacts',
  reducer: createReducer(
    initialContactsState,
    on(loadContactsSuccess, (state, { contacts }) => ({
      ...state,
      contacts,
    }))
  ),
});
