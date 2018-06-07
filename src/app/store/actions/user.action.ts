import { Action } from '@ngrx/store';
import { User } from '../../models';

export const LOGIN_USER = 'Login user';
export const LOGIN_USER_FAIL = 'Login user fail';
export const LOGIN_USER_SUCCESS = 'Login user success';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export type NotesActions = LoginUser | LoginUserFail | LoginUserSuccess;
