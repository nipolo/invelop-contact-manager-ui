import { createReducer } from '@ngrx/store';
import { initialRootState } from '../states';

export const rootReducer = createReducer(initialRootState);
