import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as NotesActions from '../actions/card.action';
import { CardService } from '../../card.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class CardsEffects {
  constructor(private actions: Actions, private notesService: CardService) {}

  @Effect()
  getCards = this.actions.pipe(
    ofType(NotesActions.LOAD_CARDS),
    mergeMap(action =>
      this.notesService.getCards().pipe(
        map(data => ({ type: NotesActions.LOAD_CARDS_SUCCESS, payload: data })),
        catchError(() => of({ type: NotesActions.LOAD_CARDS_FAIL }))
      )
    )
  );

  @Effect()
  createCard = this.actions.pipe(
    ofType(NotesActions.CREATE_CARD),
    map((action: NotesActions.CreateCard) => action.payload),
    mergeMap(noteToCreate =>
      this.notesService.createCard(noteToCreate).pipe(
        map(payload => ({ type: NotesActions.CREATE_CARD_SUCCESS, payload })),
        catchError(() => of({ type: NotesActions.CREATE_CARD_FAIL }))
      )
    )
  );

  @Effect()
  deleteCard = this.actions.pipe(
    ofType(NotesActions.DELETE_CARD),
    map((action: NotesActions.DeleteCard) => action.payload),
    mergeMap(noteToDelete =>
      this.notesService.deleteCard(noteToDelete).pipe(
        map(_ => ({ type: NotesActions.DELETE_CARD_SUCCESS, payload: noteToDelete })),
        catchError(() => of({ type: NotesActions.DELETE_CARD_FAIL }))
      )
    )
  );
}
