import { Action } from '@ngrx/store';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_RESET = 'COUNTER_RESET';

export function counterReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;

    case COUNTER_DECREMENT:
      return state - 1;

    case COUNTER_RESET:
      return 0;

    default:
      return state;
  }
}
