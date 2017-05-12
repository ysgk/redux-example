import { Action } from '@ngrx/store';

export const INCREMENT =          '[AsyncCounter] Increment';
export const INCREMENT_SUCCESS =  '[AsyncCounter] Increment Success';
export const INCREMENT_ERROR =    '[AsyncCounter] Increment Error';
export const DECREMENT =          '[AsyncCounter] Decrement';
export const DECREMENT_SUCCESS =  '[AsyncCounter] Decrement Success';
export const DECREMENT_ERROR =    '[AsyncCounter] Decrement Error';
export const RESET =              '[AsyncCounter] Reset';
export const RESET_SUCCESS =      '[AsyncCounter] Reset Success';
export const RESET_ERROR =        '[AsyncCounter] Reset Error';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class IncrementSuccessAction implements Action {
  readonly type = INCREMENT_SUCCESS;
}

export class IncrementErrorAction implements Action {
  readonly type = INCREMENT_ERROR;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class DecrementSuccessAction implements Action {
  readonly type = DECREMENT_SUCCESS;
}

export class DecrementErrorAction implements Action {
  readonly type = DECREMENT_ERROR;
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export class ResetSuccessAction implements Action {
  readonly type = RESET_SUCCESS;
}

export class ResetErrorAction implements Action {
  readonly type = RESET_ERROR;
}

export type Actions
  = IncrementAction
  | IncrementSuccessAction
  | IncrementErrorAction
  | DecrementAction
  | DecrementSuccessAction
  | DecrementErrorAction
  | ResetAction
  | ResetSuccessAction
  | ResetErrorAction
  ;
