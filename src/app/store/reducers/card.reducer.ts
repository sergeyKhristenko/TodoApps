import { Card } from '../../models';
import * as fromCardsActions from '../actions/card.action';

export interface CardsState {
  data: Card[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: CardsState = {
  data: [],
  loading: false,
  loaded: false
};

export function getInitialState() {
  return { ...initialState };
}

export function reducer(state = initialState, action: fromCardsActions.CardActions) {
  switch (action.type) {
    // Load cards
    case fromCardsActions.LOAD_CARDS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromCardsActions.LOAD_CARDS_SUCCESS: {
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromCardsActions.LOAD_CARDS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Create cards
    case fromCardsActions.CREATE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromCardsActions.CREATE_CARD_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromCardsActions.CREATE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Delete Cards
    case fromCardsActions.DELETE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    case fromCardsActions.DELETE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
    case fromCardsActions.DELETE_CARD_SUCCESS: {
      return {
        ...state,
        data: [...state.data].filter(card => card !== action.payload),
        loading: false,
        loaded: true
      }
    }
    // Update card
    case fromCardsActions.UPDATE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    case fromCardsActions.UPDATE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
    case fromCardsActions.UPDATE_CARD_SUCCESS: {
      const card = action.payload;
      const updatedData = [...state.data];
      updatedData[updatedData.indexOf(card)] = card;
      
      return {
        ...state,
        data: updatedData,
        loading: false,
        loaded: true
      }
    }
    default:
      return state;
  }
}

export const getAllCards = (state: CardsState) => state.data;
export const getCardsLoading = (state: CardsState) => state.loading;
export const getCardsLoaded = (state: CardsState) => state.loaded;
