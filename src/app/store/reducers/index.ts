import { ActionReducerMap } from '@ngrx/store';

import * as userReducers from './user.reducer';
import * as boardReducers from './board.reducer';

export interface AppState {
  user: userReducers.UserState;
  board: boardReducers.BoardState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducers.reducer,
  board: boardReducers.reducer
};
