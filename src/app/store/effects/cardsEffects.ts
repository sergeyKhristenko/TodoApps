import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as BoardActions from '../actions/board.action';
import { CardService } from '../../card.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { boardActions } from '../actions';
import { AppState } from '..';

@Injectable()
export class CardsEffects {
  constructor(private actions: Actions, private cardsService: CardService) {}

  // TODO remove this effect
  // @Effect()
  // getCards = this.actions.pipe(
  //   ofType(BoardActions.LOAD_CARDS),
  //   mergeMap(action =>
  //     this.cardsService.getCards().pipe(
  //       map(data => ({ type: BoardActions.LOAD_CARDS_SUCCESS, payload: data })),
  //       catchError(() => of({ type: BoardActions.LOAD_CARDS_FAIL }))
  //     )
  //   )
  // );

  @Effect()
  createCard = this.actions.pipe(
    ofType(BoardActions.CREATE_CARD),
    map((action: BoardActions.CreateCard) => action.payload),
    mergeMap(noteToCreate =>
      this.cardsService.createCard(noteToCreate).pipe(
        map(payload => ({ type: BoardActions.CREATE_CARD_SUCCESS, payload })),
        catchError(() => of({ type: BoardActions.CREATE_CARD_FAIL }))
      )
    )
  );

  @Effect()
  deleteCard = this.actions.pipe(
    ofType(BoardActions.DELETE_CARD),
    map((action: BoardActions.DeleteCard) => action.payload),
    mergeMap(noteToDelete =>
      this.cardsService.deleteCard(noteToDelete).pipe(
        map(_ => ({ type: BoardActions.DELETE_CARD_SUCCESS, payload: noteToDelete })),
        catchError(() => of({ type: BoardActions.DELETE_CARD_FAIL }))
      )
    )
  );

  @Effect()
  updateCard = this.actions.pipe(
    ofType(BoardActions.UPDATE_CARD),
    map((action: BoardActions.UpdateCard) => action.payload),
    mergeMap(card =>
      this.cardsService.updateCard(card).pipe(
        map(_ => ({ type: BoardActions.UPDATE_CARD_SUCCESS, payload: card })),
        catchError(() => of({ type: BoardActions.UPDATE_CARD_FAIL }))
      )
    )
  );
}
