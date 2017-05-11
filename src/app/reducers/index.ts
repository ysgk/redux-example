import * as counter from './counter';

export interface AppState {
  counter: counter.State;
}

export const reducers = {
  counter: counter.reducer,
};

export const getCounterState = (state: AppState) => state.counter;
export const getCounterValue = (state: AppState) => counter.getValue(getCounterState(state));
