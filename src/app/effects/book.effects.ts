import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as book from '../actions/book.actions';
import * as category from '../actions/book-category.actions';
import 'rxjs/add/operator/map';
import { timer } from 'rxjs/observable/timer';
import { Book } from '../models/book';
import { BookCategory } from '../models/book-category';

const BOOKS = [
  new Book(1, 'Book1', 'Author1', 1),
  new Book(2, 'Book2', 'Author2', 1),
  new Book(3, 'Book3', 'Author3', 2),
];

const CATEGORIES = [
  new BookCategory(1, 'Category1'),
  new BookCategory(2, 'Category2'),
];

function random(): number {
  return Math.random();
}

function floor(n: number): number {
  return Math.floor(n);
}

@Injectable()
export class BookEffects {

  @Effect() fetchBooks$ = this.action$
    .ofType(book.FETCH)
    .switchMap(() => {
      const delay = floor(random() * 1000) + 500;

      return timer(delay).map(() => {
        const success = random() < 0.5;
        if (success) {
          return new book.FetchSuccessAction(BOOKS);
        } else {
          return new book.FetchErrorAction();
        }
      });
    });

  @Effect() fetchCategories$ = this.action$
    .ofType(category.FETCH)
    .switchMap(() => {
      const delay = floor(random() * 1000) + 500;

      return timer(delay).map(() => {
        const success = random() < 0.5;
        if (success) {
          return new category.FetchSuccessAction(CATEGORIES);
        } else {
          return new category.FetchErrorAction();
        }
      });
    });

  constructor(
    private action$: Actions,
  ) {

  }
}
