import { ActionReducerMap } from '@ngrx/store';

import * as notesReducers from './notes.reducer';
import * as userReducers from './user.reducer';

export interface AppState {
  notes: notesReducers.NotesState;
  user: userReducers.UserState
}

export const reducers: ActionReducerMap<AppState> = {
  notes: notesReducers.reducer,
  user: userReducers.reducer
};
