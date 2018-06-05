import { actionTypes } from '.';
import { Note } from '../../note';

describe('Notes actions tests', () => {
  it('LoadNotes', () => {
    const action = new actionTypes.LoadNotes();

    expect({ ...action }).toEqual({ type: actionTypes.LOAD_NOTES });
  });

  it('LoadNotesFail', () => {
    const payload = true;
    const action = new actionTypes.LoadNotesFail(payload);

    expect({ ...action }).toEqual({ type: actionTypes.LOAD_NOTES_FAIL, payload });
  });

  it('LoadNotesSuccess', () => {
    const payload = 'true' as Note;
    const action = new actionTypes.LoadNotesSuccess([payload]);

    expect({ ...action }).toEqual({ type: actionTypes.LOAD_NOTES_SUCCESS, payload: [payload] });
  });

  it('CreateNote', () => {
    const payload = true;
    const action = new actionTypes.CreateNote(payload);

    expect({ ...action }).toEqual({ type: actionTypes.CREATE_NOTE, payload });
  });

  it('CreateNoteFail', () => {
    const payload = true;
    const action = new actionTypes.CreateNoteFail(payload);

    expect({ ...action }).toEqual({ type: actionTypes.CREATE_NOTE_FAIL, payload });
  });

  it('CreateNoteSuccess', () => {
    const payload = true as Note;
    const action = new actionTypes.CreateNoteSuccess(payload);

    expect({ ...action }).toEqual({ type: actionTypes.CREATE_NOTE_SUCCESS, payload });
  });

  it('DeleteNote', () => {
    const payload = true;
    const action = new actionTypes.DeleteNote(payload);

    expect({ ...action }).toEqual({ type: actionTypes.DELETE_NOTE, payload });
  });

  it('DeleteNoteFail', () => {
    const payload = true;
    const action = new actionTypes.DeleteNoteFail(payload);

    expect({ ...action }).toEqual({ type: actionTypes.DELETE_NOTE_FAIL, payload });
  });

  it('DeleteNoteSuccess', () => {
    const payload = true;
    const action = new actionTypes.DeleteNoteSuccess(payload);

    expect({ ...action }).toEqual({ type: actionTypes.DELETE_NOTE_SUCCESS, payload });
  });
});
