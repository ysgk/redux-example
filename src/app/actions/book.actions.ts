import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export const FETCH =          '[Book] Fetch';
export const FETCH_SUCCESS =  '[Book] Fetch Success';
export const FETCH_ERROR =    '[Book] Fetch Error';

export class FetchAction implements Action {
  readonly type = FETCH;
}

export class FetchSuccessAction implements Action {
  readonly type = FETCH_SUCCESS;
  payload: {books: Book[]};

  constructor(
    books: Book[]
  ) {
    this.payload = {books: books};
  }
}

export class FetchErrorAction implements Action {
  readonly type = FETCH_ERROR;
}

export type Actions = FetchAction | FetchSuccessAction | FetchErrorAction;
