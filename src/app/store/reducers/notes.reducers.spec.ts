import * as fromReducers from './notes.reducer';
import * as fromActions from '../actions/notes.action';
import { Note } from '../../models';

describe('Notes Reducers tests', () => {
  it('return initial state', () => {
    const { initialState } = fromReducers;
    const action = {} as any;
    const state = fromReducers.reducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('LoadNotes success', () => {
    const notes: Note[] = [{title: 'title'}];
    const { initialState } = fromReducers;
    const action = new fromActions.LoadNotesSuccess(notes);
    const state = fromReducers.reducer(initialState, action);

    expect(state.data).toEqual(notes);
  });

  it('Create note', () => {
    const payload: Note = true as Note;
    const { initialState } = fromReducers;
    const action = new fromActions.CreateNote(payload);
    const state = fromReducers.reducer(initialState, action);

    expect(state.loading).toEqual(true);
    expect(state.data).toEqual(initialState.data);
  });

  it('Create_note_success should add note', () => {
    const payload: Note = true as Note;
    const { initialState } = fromReducers;
    const action = new fromActions.CreateNoteSuccess(payload);
    const state = fromReducers.reducer(initialState, action);

    expect(state.data).toEqual([payload]);
  });

  it('DeleteNoteSuccess deletes the note', () => {
    const payload: Note = true as Note;
    const { initialState } = fromReducers;
    const action = new fromActions.DeleteNoteSuccess(payload);
    const state = fromReducers.reducer({ ...initialState, data: [...initialState.data, payload] }, action);

    expect(state.data).toEqual([]);
  });
});
