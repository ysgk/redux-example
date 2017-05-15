import { Action } from '@ngrx/store';

export const FETCH =          '[BookCategory] Fetch';
export const FETCH_SUCCESS =  '[BookCategory] Fetch Success';
export const FETCH_ERROR =    '[BookCategory] Fetch Error';

export class FetchAction implements Action {
  readonly type = FETCH;
}

export class FetchSuccessAction implements Action {
  readonly type = FETCH_SUCCESS;
}

export class FetchErrorAction implements Action {
  readonly type = FETCH_ERROR;
}

export type Actions = FetchAction | FetchSuccessAction | FetchErrorAction;
