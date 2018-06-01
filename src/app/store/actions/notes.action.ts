import { Action } from '@ngrx/store';
import { Note } from '../../note';

export const LOAD_NOTES = 'Load notes';
export const LOAD_NOTES_FAIL = 'Load notes fail';
export const LOAD_NOTES_SUCCESS = 'Load notes success';

export const CREATE_NOTE = 'Create note';
export const CREATE_NOTE_FAIL = 'Create note fail';
export const CREATE_NOTE_SUCCESS = 'Create note success';

export const DELETE_NOTE = 'Delete note';
export const DELETE_NOTE_FAIL = 'Delete note fail';
export const DELETE_NOTE_SUCCESS = 'Delete note success';

export class LoadNotes implements Action {
  readonly type = LOAD_NOTES;
}

export class LoadNotesFail implements Action {
  readonly type = LOAD_NOTES_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class LoadNotesSuccess implements Action {
  readonly type = LOAD_NOTES_SUCCESS;

  constructor(public payload: Note[]) {
    this.payload = payload;
  }
}

export class CreateNote implements Action {
  readonly type = CREATE_NOTE;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateNoteFail implements Action {
  readonly type = CREATE_NOTE_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class CreateNoteSuccess implements Action {
  readonly type = CREATE_NOTE_SUCCESS;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class DeleteNote implements Action {
  readonly type = DELETE_NOTE;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class DeleteNoteFail implements Action {
  readonly type = DELETE_NOTE_FAIL;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class DeleteNoteSuccess implements Action {
  readonly type = DELETE_NOTE_SUCCESS;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export type NotesActions =
  | LoadNotes
  | LoadNotesFail
  | LoadNotesSuccess
  | CreateNote
  | CreateNoteFail
  | CreateNoteSuccess
  | DeleteNote
  | DeleteNoteFail
  | DeleteNoteSuccess;
