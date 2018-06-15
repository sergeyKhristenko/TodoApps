import { Action } from '@ngrx/store';
import { Board } from '../../models';

export const LOAD_BOARDS = 'Load boards';
export const LOAD_BOARDS_FAIL = 'Load boards fail';
export const LOAD_BOARDS_SUCCESS = 'Load boards success';

export const LOAD_BOARD = 'Load board';
export const LOAD_BOARD_FAIL = 'Load board fail';
export const LOAD_BOARD_SUCCESS = 'Load board success';

export const CREATE_BOARD = 'Create board';
export const CREATE_BOARD_FAIL = 'Create board fail';
export const CREATE_BOARD_SUCCESS = 'Create board success';

export const UPDATE_BOARD = 'Update board';
export const UPDATE_BOARD_FAIL = 'Update board fail';
export const UPDATE_BOARD_SUCCESS = 'Update board success';

export class LoadBoards implements Action {
  readonly type = LOAD_BOARDS;
}

export class LoadBoardsFail implements Action {
  readonly type = LOAD_BOARDS_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoadBoardsSuccess implements Action {
  readonly type = LOAD_BOARDS_SUCCESS;

  constructor(public payload: Board[]) {
    this.payload = payload;
  }
}

export class LoadBoard implements Action {
  readonly type = LOAD_BOARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoadBoardFail implements Action {
  readonly type = LOAD_BOARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoadBoardSuccess implements Action {
  readonly type = LOAD_BOARD_SUCCESS;

  constructor(public payload: Board[]) {
    this.payload = payload;
  }
}

export class CreateBoard implements Action {
  readonly type = CREATE_BOARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateBoardFail implements Action {
  readonly type = CREATE_BOARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateBoardSuccess implements Action {
  readonly type = CREATE_BOARD_SUCCESS;

  constructor(public payload: Board) {
    this.payload = payload;
  }
}

export class UpdateBoard implements Action {
  readonly type = UPDATE_BOARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class UpdateBoardFail implements Action {
  readonly type = UPDATE_BOARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class UpdateBoardSuccess implements Action {
  readonly type = UPDATE_BOARD_SUCCESS;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export type BoardActions =
  | LoadBoards
  | LoadBoardsFail
  | LoadBoardsSuccess
  | LoadBoard
  | LoadBoardFail
  | LoadBoardSuccess
  | CreateBoard
  | CreateBoardFail
  | CreateBoardSuccess
  | UpdateBoard
  | UpdateBoardFail
  | UpdateBoardSuccess;
