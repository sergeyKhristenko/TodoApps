import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as NotesActions from '../actions/notes.action';
import { NoteService } from '../../note.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class NotesEffects {
  constructor(private actions: Actions, private notesService: NoteService) {}

  @Effect()
  getNotes = this.actions.pipe(
    ofType(NotesActions.LOAD_NOTES),
    mergeMap(action =>
      this.notesService.getNotes().pipe(
        map(data => ({ type: NotesActions.LOAD_NOTES_SUCCESS, payload: data })),
        catchError(() => of({ type: NotesActions.LOAD_NOTES_FAIL }))
      )
    )
  );

  @Effect()
  createNote = this.actions.pipe(
    ofType(NotesActions.CREATE_NOTE),
    map((action: NotesActions.CreateNote) => action.payload),
    mergeMap(noteToCreate =>
      this.notesService.createNote(noteToCreate).pipe(
        map(payload => ({ type: NotesActions.CREATE_NOTE_SUCCESS, payload })),
        catchError(() => of({ type: NotesActions.CREATE_NOTE_FAIL }))
      )
    )
  );

  @Effect()
  deleteNote = this.actions.pipe(
    ofType(NotesActions.DELETE_NOTE),
    map((action: NotesActions.DeleteNote) => action.payload),
    mergeMap(noteToDelete =>
      this.notesService.deleteNote(noteToDelete).pipe(
        map(_ => ({ type: NotesActions.DELETE_NOTE_SUCCESS, payload: noteToDelete })),
        catchError(() => of({ type: NotesActions.DELETE_NOTE_FAIL }))
      )
    )
  );
}
