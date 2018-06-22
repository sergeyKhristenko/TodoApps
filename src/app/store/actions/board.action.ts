import { Action } from '@ngrx/store';
import { Board, Column, Card } from '../../models';

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

export const UPDATE_COLUMN = 'Update column';
export const UPDATE_COLUMN_FAIL = 'Update column fail';
export const UPDATE_COLUMN_SUCCESS = 'Update column success';

export const CREATE_CARD = 'Create card';
export const CREATE_CARD_FAIL = 'Create card fail';
export const CREATE_CARD_SUCCESS = 'Create card success';

export const DELETE_CARD = 'Delete card';
export const DELETE_CARD_FAIL = 'Delete card fail';
export const DELETE_CARD_SUCCESS = 'Delete card success';

export const UPDATE_CARD = 'Update card';
export const UPDATE_CARD_FAIL = 'Update card fail';
export const UPDATE_CARD_SUCCESS = 'Update card success';

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

  constructor(public payload: Board) {
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

  constructor(public payload: Board) {
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

  constructor(public payload: Board) {
    this.payload = payload;
  }
}

export class UpdateBoardFail implements Action {
  readonly type = UPDATE_BOARD_FAIL;

  constructor(public payload: Board) {
    this.payload = payload;
  }
}

export class UpdateBoardSuccess implements Action {
  readonly type = UPDATE_BOARD_SUCCESS;

  constructor(public payload: Board) {
    this.payload = payload;
  }
}

export class UpdateColumn implements Action {
  readonly type = UPDATE_COLUMN;

  constructor(public payload: Column) {
    this.payload = payload;
  }
}

export class UpdateColumnFail implements Action {
  readonly type = UPDATE_COLUMN_FAIL;

  constructor(public payload: Column) {
    this.payload = payload;
  }
}

export class UpdateColumnSuccess implements Action {
  readonly type = UPDATE_COLUMN_SUCCESS;

  constructor(public payload: Column) {
    this.payload = payload;
  }
}

export class CreateCard implements Action {
  readonly type = CREATE_CARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateCardFail implements Action {
  readonly type = CREATE_CARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateCardSuccess implements Action {
  readonly type = CREATE_CARD_SUCCESS;

  constructor(public payload: Card) {
    this.payload = payload;
  }
}

export class DeleteCard implements Action {
  readonly type = DELETE_CARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class DeleteCardFail implements Action {
  readonly type = DELETE_CARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class DeleteCardSuccess implements Action {
  readonly type = DELETE_CARD_SUCCESS;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class UpdateCard implements Action {
  readonly type = UPDATE_CARD;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class UpdateCardFail implements Action {
  readonly type = UPDATE_CARD_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class UpdateCardSuccess implements Action {
  readonly type = UPDATE_CARD_SUCCESS;

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
  | UpdateBoardSuccess
  | UpdateColumn
  | UpdateColumnFail
  | UpdateColumnSuccess
  | CreateCard
  | CreateCardFail
  | CreateCardSuccess
  | DeleteCard
  | DeleteCardFail
  | DeleteCardSuccess
  | UpdateCard
  | UpdateCardFail
  | UpdateCardSuccess;
