import { Action } from '@ngrx/store';

export const INCREMENT =      '[ConfirmCounter] Increment';
export const DECREMENT =      '[ConfirmCounter] Decrement';
export const RESET =          '[ConfirmCounter] Reset';
export const RESET_CONFIRM =  '[ConfirmCounter] Reset Confirm';
export const RESET_CANCEL =   '[ConfirmCounter] Reset Cancel';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export class ResetConfirmAction implements Action {
  readonly type = RESET_CONFIRM;
}

export class ResetCancelAction implements Action {
  readonly type = RESET_CANCEL;
}

export type Actions
  = IncrementAction
  | DecrementAction
  | ResetAction
  | ResetConfirmAction
  | ResetCancelAction
  ;
