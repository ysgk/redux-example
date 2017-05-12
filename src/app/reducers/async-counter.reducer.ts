import * as asyncCounter from '../actions/async-counter.actions';

export interface State {
  value: number;
  loading: boolean;
}

const initialState: State = {
  value: 0,
  loading: false,
};

export function reducer(state = initialState, action: asyncCounter.Actions): State {
  switch (action.type) {
    case asyncCounter.INCREMENT:
    case asyncCounter.DECREMENT:
    case asyncCounter.RESET:
      return {
        value: state.value,
        loading: true,
      };

    case asyncCounter.INCREMENT_ERROR:
    case asyncCounter.DECREMENT_ERROR:
    case asyncCounter.RESET_ERROR:
      return {
        value: state.value,
        loading: false,
      };

    case asyncCounter.INCREMENT_SUCCESS:
      return {
        value: state.value + 1,
        loading: false,
      };

    case asyncCounter.DECREMENT_SUCCESS:
      return {
        value: state.value - 1,
        loading: false,
      };

    case asyncCounter.RESET_SUCCESS:
      return {
        value: 0,
        loading: false,
      };

    default:
      return state;
  }
}

export const getValue = (state: State) => state.value;
export const getLoading = (state: State) => state.loading;
