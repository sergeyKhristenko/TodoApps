import { ActionReducerMap } from '@ngrx/store';

import * as fromReducers from './notes.reducer';

export interface AppState {
  notes: fromReducers.NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromReducers.reducer
};
