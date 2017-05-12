import * as confirmCounter from './confirm-counter.actions';

export interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export function reducer(state = initialState, action: confirmCounter.Actions): State {
  switch (action.type) {
    case confirmCounter.INCREMENT:
      return {
        value: state.value + 1,
      };
    case confirmCounter.DECREMENT:
      return {
        value: state.value - 1,
      };
    case confirmCounter.RESET:
      return {
        value: 0,
      };

    default:
      return state;
  }
}

export const getValue = (state: State) => state.value;
