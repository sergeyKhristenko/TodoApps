import { Note, User } from '../../models';
import * as fromUserActions from '../actions/user.action';
import {AppState} from './';

export interface UserState {
  isAuthenticated: boolean;
  user: User;
  errorMessage: string;
}

export const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  errorMessage: ''
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
      }
    }
    case fromUserActions.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload
        },
        errorMessage: null
      }
    }
    case fromUserActions.LOGIN_USER_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
        user: null
      }
    }
    default:
      return state;
  }
}
