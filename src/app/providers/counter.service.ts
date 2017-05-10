import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { DECREMENT, INCREMENT, RESET } from '../store/counter';
import { Observable } from 'rxjs/Observable';

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
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
