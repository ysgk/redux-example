import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as asyncCounter from './async-counter.actions';
import { State, getAsyncCounterValue, getAsyncCounterLoading } from '../reducers';

function wait(delay = 1000): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

@Injectable()
export class AsyncCounterService {

  constructor(
    private store: Store<State>,
  ) {

  }

  getCounter(): Observable<number> {
    return this.store.select(getAsyncCounterValue);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(getAsyncCounterLoading);
  }

  async increment(): Promise<void> {
    this.store.dispatch(new asyncCounter.IncrementAction());
  }

  async decrement(): Promise<void> {
    this.store.dispatch(new asyncCounter.DecrementAction());
    try {
      await wait();
      this.store.dispatch(new asyncCounter.DecrementSuccessAction());
    } catch (e) {
      this.store.dispatch(new asyncCounter.DecrementErrorAction());
    }
  }

  async reset(): Promise<void> {
    this.store.dispatch(new asyncCounter.ResetAction());
    try {
      await wait();
      this.store.dispatch(new asyncCounter.ResetSuccessAction());
    } catch (e) {
      this.store.dispatch(new asyncCounter.ResetErrorAction());
    }
  }
}
