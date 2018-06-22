import { Board } from '../../models';
import * as fromBoardActions from '../actions/board.action';
import { boardActions } from '../actions';

export interface BoardState {
  allBoards: Board[];
  currentBoard: Board;
  loading: boolean;
  loaded: boolean;
}

export const initialState: BoardState = {
  allBoards: [],
  currentBoard: {},
  loading: false,
  loaded: false
};

export function getInitialState() {
  return { ...initialState };
}

export function reducer(state = initialState, action: fromBoardActions.BoardActions) {
  switch (action.type) {
    // Load boards
    case fromBoardActions.LOAD_BOARDS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.LOAD_BOARDS_SUCCESS: {
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromBoardActions.LOAD_BOARDS_FAIL: {
      return {
        ...state,
        allBoards: action.payload,
        loading: false,
        loaded: false
      };
    }
    // Load single board
    case fromBoardActions.LOAD_BOARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.LOAD_BOARD_SUCCESS: {
      return {
        ...state,
        currentBoard: action.payload,
        loading: false,
        loaded: true
      };
    }
    case fromBoardActions.LOAD_BOARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Create boards
    case fromBoardActions.CREATE_BOARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.CREATE_BOARD_SUCCESS: {
      return {
        ...state,
        allBoards: [...state.allBoards, action.payload],
        loading: false,
        loaded: true
      };
    }
    case fromBoardActions.CREATE_BOARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Update Board
    case fromBoardActions.UPDATE_BOARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.UPDATE_BOARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromBoardActions.UPDATE_BOARD_SUCCESS: {
      return {
        ...state,
        currentBoard: action.payload,
        loading: false,
        loaded: true
      };
    }
    // Update Column
    case fromBoardActions.UPDATE_COLUMN: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.UPDATE_COLUMN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromBoardActions.UPDATE_COLUMN_SUCCESS: {
      return {
        ...state,
        currentBoard: action.payload,
        loading: false,
        loaded: true
      };
    }
    // Create cards
    case fromBoardActions.CREATE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.CREATE_CARD_SUCCESS: {
      const columnToUpdateIdx = state.currentBoard.columns.findIndex(column => column._id === action.payload.columnId);
      const updatedColumns = [...state.currentBoard.columns];
      updatedColumns[columnToUpdateIdx].cards.push(action.payload);

      return {
        ...state,
        currentBoard: { ...state.currentBoard, columns: updatedColumns },
        loading: false,
        loaded: true
      };
    }
    case fromBoardActions.CREATE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // Delete Cards
    case fromBoardActions.DELETE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromBoardActions.DELETE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromBoardActions.DELETE_CARD_SUCCESS: {
      const columnToUpdateIdx = state.currentBoard.columns.findIndex(column => column._id === action.payload.columnId);
      const updatedColumns = [...state.currentBoard.columns];
      
      updatedColumns[columnToUpdateIdx].cards = updatedColumns[columnToUpdateIdx].cards.filter(card => card._id !== action.payload._id);

      return {
        ...state,
        currentBoard: { ...state.currentBoard, columns: updatedColumns },
        loading: false,
        loaded: true
      };
    }
    // Update card
    case boardActions.UPDATE_CARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case boardActions.UPDATE_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case boardActions.UPDATE_CARD_SUCCESS: {
      const columnToUpdateIdx = state.currentBoard.columns.findIndex(column => column._id === action.payload.columnId);
      const updatedColumns = [...state.currentBoard.columns];
      const cardToUpdateIdx = updatedColumns[columnToUpdateIdx].cards.findIndex(
        card => card._id === action.payload._id
      );
      updatedColumns[columnToUpdateIdx].cards[cardToUpdateIdx] = action.payload;

      return {
        ...state,
        currentBoard: { ...state.currentBoard, columns: updatedColumns },
        loading: false,
        loaded: true
      };
    }
    default:
      return state;
  }
}
