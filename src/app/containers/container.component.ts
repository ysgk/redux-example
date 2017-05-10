import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../store/counter';
import { AppState } from '../store/state';

@Component({
  selector: 'app-container',
  template: `<app-counter
    [value]="counter$|async"
    (increment)="increment()"
    (decrement)="decrement()"
    (reset)="reset()"
  ></app-counter>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {

  counter$: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.counter$ = this.store.select('counter');
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
