import { Card, User } from '../../models';
import * as fromUserActions from '../actions/user.action';
import { AppState } from './';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserState {
  isAuthenticated: boolean;
  user: User;
  errorMessage: HttpErrorResponse;
}

export const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function getInitialState() {
  return { ...initialState };
}

export function reducer(state = initialState, action: fromUserActions.NotesActions) {
  switch (action.type) {
    // Login User
    case fromUserActions.LOGIN_USER: {
      return {
        ...state
      };
    }
    case fromUserActions.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
        errorMessage: null
      };
    }
    case fromUserActions.LOGIN_USER_FAIL: {
      return {
        isAuthenticated: false,
        errorMessage: action.payload,
        user: null
      };
    }
    default:
      return state;
  }
}
