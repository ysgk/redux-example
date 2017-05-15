import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncCounterService } from '../providers/async-counter.service';

@Component({
  selector: 'app-async-counter-container',
  template: `<app-async-counter
    [value]="counter$|async"
    [loading]="loading$|async"
    (increment)="increment()"
    (decrement)="decrement()"
    (reset)="reset()"
  ></app-async-counter>`,
  providers: [AsyncCounterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncCounterContainerComponent {

  counter$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(
    private service: AsyncCounterService,
  ) {
    this.counter$ = this.service.getCounter();
    this.loading$ = this.service.getLoading();
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
