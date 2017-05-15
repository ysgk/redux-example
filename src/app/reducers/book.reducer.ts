import * as book from '../actions/book.actions';
import { Book } from '../models/book';

export interface State {
  books: Book[];
  loading: boolean;
}

const initialState: State = {
  books: [],
  loading: false,
};

export function reducer(state = initialState, action: book.Actions): State {
  switch (action.type) {
    case book.FETCH:
      return Object.assign({}, state, { loading: true });

    case book.FETCH_SUCCESS:
      return Object.assign({}, state, { loading: false, books: (action as book.FetchSuccessAction).payload.books});

    case book.FETCH_ERROR:
      return Object.assign({}, state, { loading: false, books: []});

    default:
      return state;
  }
}

export const getBooks = (state: State) => state.books;
export const getLoading = (state: State) => state.loading;
