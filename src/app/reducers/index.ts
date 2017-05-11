import * as counter from './counter';

export interface AppState {
  counter: counter.State;
}

export const reducers = {
  counter: counter.reducer,
};
