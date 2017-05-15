import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as book from '../actions/book.actions';
import { State, getBooks, getLoading } from '../reducers/index';
import { Book } from '../models/book';

@Injectable()
export class BookService {

  constructor(
    private store: Store<State>,
  ) {

  }

  getBooks(): Observable<Book[]> {
    return this.store.select(getBooks);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(getLoading);
  }

  fetch() {
    this.store.dispatch(new book.FetchAction());
  }
}
