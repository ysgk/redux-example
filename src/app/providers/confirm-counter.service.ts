import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as confirmCounter from '../actions/confirm-counter.actions';
import { State, getConfirmCounterValue } from '../reducers/index';

@Injectable()
export class ConfirmCounterService {

  constructor(
    private store: Store<State>,
  ) {

  }

  getCounter(): Observable<number> {
    return this.store.select(getConfirmCounterValue);
  }

  async increment(): Promise<void> {
    this.store.dispatch(new confirmCounter.IncrementAction());
  }

  async decrement(): Promise<void> {
    this.store.dispatch(new confirmCounter.DecrementAction());
  }

  async reset(): Promise<void> {
    this.store.dispatch(new confirmCounter.ResetConfirmAction());
  }
}
