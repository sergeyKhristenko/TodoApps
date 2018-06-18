import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as BoardActions from '../actions/board.action';
import { BoardService } from '../../board.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class BoardsEffects {
  constructor(private actions: Actions, private boardService: BoardService) {}

  @Effect()
  getBoard = this.actions.pipe(
    ofType(BoardActions.LOAD_BOARD),
    map((action: BoardActions.LoadBoard) => action.payload),
    mergeMap(boardToLoad =>
      this.boardService.getBoard(boardToLoad).pipe(
        map(data => ({ type: BoardActions.LOAD_BOARD_SUCCESS, payload: data })),
        catchError(() => of({ type: BoardActions.LOAD_BOARD_FAIL }))
      )
    )
  );

  @Effect()
  getBoards = this.actions.pipe(
    ofType(BoardActions.LOAD_BOARDS),
    mergeMap(_ =>
      this.boardService.getBoards().pipe(
        map(data => ({ type: BoardActions.LOAD_BOARDS_SUCCESS, payload: data })),
        catchError(() => of({ type: BoardActions.LOAD_BOARDS_FAIL }))
      )
    )
  );

  @Effect()
  createBoard = this.actions.pipe(
    ofType(BoardActions.CREATE_BOARD),
    map((action: BoardActions.CreateBoard) => action.payload),
    mergeMap(boardToCreate =>
      this.boardService.createBoard(boardToCreate).pipe(
        map(payload => ({ type: BoardActions.CREATE_BOARD_SUCCESS, payload })),
        catchError(() => of({ type: BoardActions.CREATE_BOARD_FAIL }))
      )
    )
  );

  @Effect()
  updateBoard = this.actions.pipe(
    ofType(BoardActions.UPDATE_BOARD),
    map((action: BoardActions.UpdateBoard) => action.payload),
    mergeMap(board =>
      this.boardService.updateBoard(board).pipe(
        map(_ => ({ type: BoardActions.UPDATE_BOARD_SUCCESS, payload: board })),
        catchError(() => of({ type: BoardActions.UPDATE_BOARD_FAIL }))
      )
    )
  );

  @Effect()
  updateColumn = this.actions.pipe(
    ofType(BoardActions.UPDATE_COLUMN),
    map((action: BoardActions.UpdateColumn) => action.payload),
    mergeMap(column =>
      this.boardService.updateColumn(column).pipe(
        map(_ => ({ type: BoardActions.UPDATE_COLUMN_SUCCESS, payload: column })),
        catchError(() => of({ type: BoardActions.UPDATE_COLUMN_FAIL }))
      )
    )
  );
}
