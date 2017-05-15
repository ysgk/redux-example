import { Action } from '@ngrx/store';
import { BookCategory } from '../models/book-category';

export const FETCH =          '[BookCategory] Fetch';
export const FETCH_SUCCESS =  '[BookCategory] Fetch Success';
export const FETCH_ERROR =    '[BookCategory] Fetch Error';
export const SELECT =         '[BookCategory] Select';

export class FetchAction implements Action {
  readonly type = FETCH;
}

export class FetchSuccessAction implements Action {
  readonly type = FETCH_SUCCESS;

  payload: {categories: BookCategory[]};

  constructor(
    categories: BookCategory[]
  ) {
    this.payload = {categories: categories};
  }
}

export class FetchErrorAction implements Action {
  readonly type = FETCH_ERROR;
}

export class SelectAction implements Action {
  readonly type = SELECT;

  payload: {category: number};

  constructor(
    category: number,
  ) {
    this.payload = {category: category};
  }
}

export type Actions
  = FetchAction
  | FetchSuccessAction
  | FetchErrorAction
  | SelectAction
  ;
