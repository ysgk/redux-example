import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as book from '../actions/book.actions';
import 'rxjs/add/operator/map';
import { timer } from 'rxjs/observable/timer';
import { Book } from '../models/book';

const BOOKS = [
  new Book(1, 'Book1', 'Author1'),
  new Book(2, 'Book2', 'Author2'),
  new Book(3, 'Book3', 'Author3'),
];

@Injectable()
export class BookEffects {

  @Effect() fetch$ = this.action$
    .ofType(book.FETCH)
    .switchMap(() => {
      const delay = Math.floor(Math.random() * 1000) + 500;

      return timer(delay).map(() => {
        const success = Math.random() < 0.5;
        if (success) {
          return new book.FetchSuccessAction(BOOKS) as book.Actions;
        } else {
          return new book.FetchErrorAction() as book.Actions;
        }
      });
    });

  constructor(
    private action$: Actions,
  ) {

  }
}
