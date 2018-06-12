import { Actions } from "@ngrx/effects";
import { cold, hot } from 'jasmine-marbles';
import { of } from "rxjs";
import { NotesEffects } from "./notesEffects";
import { actionTypes } from "../actions";


describe('Notes Effects tests', () => {
  it('loadNotes', () => {
    const notes = [{title: 'title'}];

    const actions = new Actions(cold('-a-|', {a: {type: actionTypes.LOAD_NOTES}}));
    const service = jasmine.createSpyObj('notesService', ['getNotes']);
    service.getNotes.and.returnValue(of({data: notes}));
    const effects = new NotesEffects(actions, service);

    const expectedObservable = hot('-a-|', {a: {type: actionTypes.LOAD_NOTES_SUCCESS, payload: {data: notes}} });
    expect(effects.getNotes).toBeObservable(expectedObservable);
  });

  it('Create Note', () => {
    const note = {title: 'title'};

    const actions = new Actions(cold('-a-|', {a: {type: actionTypes.CREATE_NOTE, payload: note}}));
    const service = jasmine.createSpyObj('notesService', ['createNote']);
    service.createNote.and.returnValue(of({data: note}));
    const effects = new NotesEffects(actions, service);

    const expectedObservable = hot('-a-|', {a: {type: actionTypes.CREATE_NOTE_SUCCESS, payload: {data: note}} });
    expect(effects.createNote).toBeObservable(expectedObservable);
  });

  it('Delete Note', () => {
    const note = {title: 'title'};

    const actions = new Actions(cold('-a-|', {a: {type: actionTypes.DELETE_NOTE, payload: note}}));
    const service = jasmine.createSpyObj('notesService', ['deleteNote']);
    service.deleteNote.and.returnValue(of(true));
    const effects = new NotesEffects(actions, service);

    const expectedObservable = hot('-a-|', {a: {type: actionTypes.DELETE_NOTE_SUCCESS, payload: note} });
    expect(effects.deleteNote).toBeObservable(expectedObservable);
  });
});