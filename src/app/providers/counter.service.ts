import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { Observable } from 'rxjs/Observable';
import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from '../store/counter';

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
    this.store.dispatch({type: COUNTER_INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: COUNTER_DECREMENT});
  }

  reset() {
    this.store.dispatch({type: COUNTER_RESET});
  }
}
