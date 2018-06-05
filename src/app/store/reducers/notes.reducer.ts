import { Note } from '../../note';
import * as fromNotesActions from '../actions/notes.action';

export interface NotesState {
  data: Note[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: NotesState = {
  data: [],
  loading: false,
  loaded: false
};

export function getInitialState() {
  return { ...initialState };
}

export function reducer(state = initialState, action: fromNotesActions.NotesActions) {
  switch (action.type) {
    // Load notes
    case fromNotesActions.LOAD_NOTES: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromNotesActions.LOAD_NOTES_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromNotesActions.LOAD_NOTES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Create notes
    case fromNotesActions.CREATE_NOTE: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromNotesActions.CREATE_NOTE_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromNotesActions.CREATE_NOTE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Delete Notes
    case fromNotesActions.DELETE_NOTE: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    case fromNotesActions.DELETE_NOTE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
    case fromNotesActions.DELETE_NOTE_SUCCESS: {
      return {
        ...state,
        data: [...state.data].filter(note => note !== action.payload),
        loading: false,
        loaded: true
      }
    }
    default:
      return state;
  }
}

export const getAllNotes = (state: NotesState) => state.data;
export const getNotesLoading = (state: NotesState) => state.loading;
export const getNotesLoaded = (state: NotesState) => state.loaded;
