import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as counter from '../actions/counter';
import { AppState } from '../reducers';

@Injectable()
export class CounterService {

  constructor(
    private store: Store<AppState>,
  ) {

  }

  get(): Observable<number> {
    return this.store.select('counter');
  }

  increment() {
    this.store.dispatch(new counter.IncrementAction());
  }

  decrement() {
    this.store.dispatch(new counter.DecrementAction());
  }

  reset() {
    this.store.dispatch(new counter.ResetAction());
  }
}
