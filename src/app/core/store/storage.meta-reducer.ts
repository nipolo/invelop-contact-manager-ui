import { ActionReducer, Action, INIT } from '@ngrx/store';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey) || '{}');
}

const localStorageKey = 'optimusTraderState';

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  return function (state: S, action: A): S {
    if (action.type == INIT) {
      const savedState = getSavedState(localStorageKey);
      return savedState;
    }

    const nextState = reducer(state, action);
    setSavedState(nextState, localStorageKey);

    return nextState;
  };
}
