import * as counter from '../actions/counter.actions';

export interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export function reducer(state = initialState, action: counter.Actions): State {
  switch (action.type) {
    case counter.INCREMENT:
      return { value: state.value + 1 };

    case counter.DECREMENT:
      return { value: state.value - 1 };

    case counter.RESET:
      return { value: 0 };

    default:
      return state;
  }
}

export const getValue = (state: State) => state.value;
