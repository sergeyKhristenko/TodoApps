import { Action } from '@ngrx/store';
import { Card } from '../../models';

export const LOAD_CARDS = 'Load cards';
export const LOAD_CARDS_FAIL = 'Load cards fail';
export const LOAD_CARDS_SUCCESS = 'Load cards success';

export const CREATE_CARD = 'Create card';
export const CREATE_CARD_FAIL = 'Create card fail';
export const CREATE_CARD_SUCCESS = 'Create card success';

export const DELETE_CARD = 'Delete card';
export const DELETE_CARD_FAIL = 'Delete card fail';
export const DELETE_CARD_SUCCESS = 'Delete card success';

export const UPDATE_CARD = 'Update card';
export const UPDATE_CARD_FAIL = 'Update card fail';
export const UPDATE_CARD_SUCCESS = 'Update card success';

export class LoadCards implements Action {
  readonly type = LOAD_CARDS;
}

export class LoadCardsFail implements Action {
  readonly type = LOAD_CARDS_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoadCardsSuccess implements Action {
  readonly type = LOAD_CARDS_SUCCESS;

  constructor(public payload: Card[]) {
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

export type CardActions =
  | LoadCards
  | LoadCardsFail
  | LoadCardsSuccess
  | CreateCard
  | CreateCardFail
  | CreateCardSuccess
  | DeleteCard
  | DeleteCardFail
  | DeleteCardSuccess
  | UpdateCard
  | UpdateCardFail
  | UpdateCardSuccess;
