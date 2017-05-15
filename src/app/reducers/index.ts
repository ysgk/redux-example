import * as counter from './counter.reducer';
import * as asyncCounter from './async-counter.reducer';
import * as confirmCounter from './confirm-counter.reducer';
import * as book from './book.reducer';

export interface State {
  counter: counter.State;
  asyncCounter: asyncCounter.State;
  confirmCounter: confirmCounter.State;
  book: book.State,
}

export const reducers = {
  counter: counter.reducer,
  asyncCounter: asyncCounter.reducer,
  confirmCounter: confirmCounter.reducer,
  book: book.reducer,
};

export const getCounterState = (state: State) => state.counter;
export const getCounterValue = (state: State) => counter.getValue(getCounterState(state));

export const getAsyncCounterState = (state: State) => state.asyncCounter;
export const getAsyncCounterValue = (state: State) => asyncCounter.getValue(getAsyncCounterState(state));
export const getAsyncCounterLoading = (state: State) => asyncCounter.getLoading(getAsyncCounterState(state));

export const getConfirmCounterState = (state: State) => state.confirmCounter;
export const getConfirmCounterValue = (state: State) => confirmCounter.getValue(getConfirmCounterState(state));

export const getBookState = (state: State) => state.book;
export const getBooks = (state: State) => book.getBooks(getBookState(state));
export const getBookCategories = (state: State) => book.getCategories(getBookState(state));
export const getLoading = (state: State) => book.getLoading(getBookState(state));
