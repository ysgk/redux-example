import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export type Actions = IncrementAction | DecrementAction | ResetAction;
