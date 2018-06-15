import { ActionReducerMap } from '@ngrx/store';

import * as notesReducers from './notes.reducer';
import * as userReducers from './user.reducer';
import * as boardReducers from './board.reducer';

export interface AppState {
  notes: notesReducers.NotesState;
  user: userReducers.UserState;
  board: boardReducers.BoardState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: notesReducers.reducer,
  user: userReducers.reducer,
  board: boardReducers.reducer
};
