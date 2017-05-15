import * as book from '../actions/book.actions';
import * as category from '../actions/book-category.actions';
import { Book } from '../models/book';
import { BookCategory } from '../models/book-category';

export interface State {
  books: Book[];
  categories: BookCategory[];
  selectedCategory: number;
  loading: boolean;
}

const initialState: State = {
  books: [],
  categories: [],
  selectedCategory: null,
  loading: false,
};

export function reducer(state = initialState, action: book.Actions|category.Actions): State {
  switch (action.type) {
    case book.FETCH:
      return Object.assign({}, state, { loading: true });

    case book.FETCH_SUCCESS:
      return Object.assign({}, state, { loading: false, books: (action as book.FetchSuccessAction).payload.books });

    case book.FETCH_ERROR:
      return Object.assign({}, state, { loading: false });

    case category.FETCH:
      return Object.assign({}, state, { loading: true });

    case category.FETCH_SUCCESS:
      return Object.assign({}, state, { loading: false, categories: (action as category.FetchSuccessAction).payload.categories });

    case category.FETCH_ERROR:
      return Object.assign({}, state, { loading: false });

    default:
      return state;
  }
}

export const getBooks = (state: State) => state.books;
export const getCategories = (state: State) => state.categories;
export const getLoading = (state: State) => state.loading;
