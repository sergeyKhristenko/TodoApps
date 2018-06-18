import * as fromReducers from './card.reducer';
import * as fromActions from '../actions/card.action';
import { Card } from '../../models';

describe('Notes Reducers tests', () => {
  it('return initial state', () => {
    const { initialState } = fromReducers;
    const action = {} as any;
    const state = fromReducers.reducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('LoadNotes success', () => {
    const notes: Card[] = [{title: 'title'}];
    const { initialState } = fromReducers;
    const action = new fromActions.LoadCardsSuccess(notes);
    const state = fromReducers.reducer(initialState, action);

    expect(state.data).toEqual(notes);
  });

  it('Create note', () => {
    const payload: Card = true as Card;
    const { initialState } = fromReducers;
    const action = new fromActions.CreateCard(payload);
    const state = fromReducers.reducer(initialState, action);

    expect(state.loading).toEqual(true);
    expect(state.data).toEqual(initialState.data);
  });

  it('Create_note_success should add note', () => {
    const payload: Card = true as Card;
    const { initialState } = fromReducers;
    const action = new fromActions.CreateCardSuccess(payload);
    const state = fromReducers.reducer(initialState, action);

    expect(state.data).toEqual([payload]);
  });

  it('DeleteNoteSuccess deletes the note', () => {
    const payload: Card = true as Card;
    const { initialState } = fromReducers;
    const action = new fromActions.DeleteCardSuccess(payload);
    const state = fromReducers.reducer({ ...initialState, data: [...initialState.data, payload] }, action);

    expect(state.data).toEqual([]);
  });
});
