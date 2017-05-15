import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmCounterService } from '../providers/confirm-counter.service';

@Component({
  selector: 'app-confirm-counter-container',
  template: `<app-confirm-counter
    [value]="counter$|async"
    (increment)="increment()"
    (decrement)="decrement()"
    (reset)="reset()"
  ></app-confirm-counter>`,
  providers: [ConfirmCounterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmCounterContainerComponent {

  counter$: Observable<number>;

  constructor(
    private service: ConfirmCounterService,
  ) {
    this.counter$ = this.service.getCounter();
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
