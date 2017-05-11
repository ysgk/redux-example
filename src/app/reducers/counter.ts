import * as counter from '../actions/counter';

export interface State {
  counter: number;
}

export function counterReducer(state: number = 0, action: counter.Actions): number {
  switch (action.type) {
    case counter.INCREMENT:
      return state + 1;

    case counter.DECREMENT:
      return state - 1;

    case counter.RESET:
      return 0;

    default:
      return state;
  }
}
