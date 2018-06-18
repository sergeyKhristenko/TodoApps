import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as CardsActions from '../actions/card.action';
import { CardService } from '../../card.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { boardActions } from '../actions';
import { AppState } from '..';

@Injectable()
export class CardsEffects {
  constructor(private actions: Actions, private cardsService: CardService) {}

  @Effect()
  getCards = this.actions.pipe(
    ofType(CardsActions.LOAD_CARDS),
    mergeMap(action =>
      this.cardsService.getCards().pipe(
        map(data => ({ type: CardsActions.LOAD_CARDS_SUCCESS, payload: data })),
        catchError(() => of({ type: CardsActions.LOAD_CARDS_FAIL }))
      )
    )
  );

  @Effect()
  createCard = this.actions.pipe(
    ofType(CardsActions.CREATE_CARD),
    map((action: CardsActions.CreateCard) => action.payload),
    mergeMap(noteToCreate =>
      this.cardsService.createCard(noteToCreate).pipe(
        map(payload => ({ type: CardsActions.CREATE_CARD_SUCCESS, payload })),
        catchError(() => of({ type: CardsActions.CREATE_CARD_FAIL }))
      )
    )
  );

  @Effect()
  deleteCard = this.actions.pipe(
    ofType(CardsActions.DELETE_CARD),
    map((action: CardsActions.DeleteCard) => action.payload),
    mergeMap(noteToDelete =>
      this.cardsService.deleteCard(noteToDelete).pipe(
        map(_ => ({ type: CardsActions.DELETE_CARD_SUCCESS, payload: noteToDelete })),
        catchError(() => of({ type: CardsActions.DELETE_CARD_FAIL }))
      )
    )
  );

  @Effect()
  updateCard = this.actions.pipe(
    ofType(CardsActions.UPDATE_CARD),
    map((action: CardsActions.UpdateCard) => action.payload),
    mergeMap(card =>
      this.cardsService.updateCard(card).pipe(
        map(_ => ({ type: CardsActions.UPDATE_CARD_SUCCESS, payload: card })),
        catchError(() => of({ type: CardsActions.UPDATE_CARD_FAIL }))
      )
    )
  );
}
