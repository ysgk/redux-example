import * as counter from './counter';
import * as asyncCounter from './async-counter';

export interface State {
  counter: counter.State;
  asyncCounter: asyncCounter.State;
}

export const reducers = {
  counter: counter.reducer,
  asyncCounter: asyncCounter.reducer,
};

export const getCounterState = (state: State) => state.counter;
export const getCounterValue = (state: State) => counter.getValue(getCounterState(state));

export const getAsyncCounterState = (state: State) => state.asyncCounter;
export const getAsyncCounterValue = (state: State) => asyncCounter.getValue(getAsyncCounterState(state));
export const getAsyncCounterLoading = (state: State) => asyncCounter.getLoading(getAsyncCounterState(state));
