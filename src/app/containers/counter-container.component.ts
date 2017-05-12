import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterService } from '../providers/counter.service';

@Component({
  selector: 'app-counter-container',
  template: `<app-counter
    [value]="counter$|async"
    (increment)="increment()"
    (decrement)="decrement()"
    (reset)="reset()"
  ></app-counter>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterContainerComponent {

  counter$: Observable<number>;

  constructor(
    private service: CounterService,
  ) {
    this.counter$ = this.service.get();
  }

  increment() {
    this.service.increment();
  }

  decrement() {
    this.service.decrement();
  }

  reset() {
    this.service.reset();
  }
}
