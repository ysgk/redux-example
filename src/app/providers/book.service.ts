import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as book from '../actions/book.actions';
import { State, getBooks, getLoading, getBookCategories } from '../reducers/index';
import { Book } from '../models/book';
import { BookCategory } from '../models/book-category';

@Injectable()
export class BookService {

  constructor(
    private store: Store<State>,
  ) {

  }

  getBooks(): Observable<Book[]> {
    return this.store.select(getBooks);
  }

  getCategories(): Observable<BookCategory[]> {
    return this.store.select(getBookCategories);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(getLoading);
  }

  fetch() {
    this.store.dispatch(new book.FetchAction());
  }
}
