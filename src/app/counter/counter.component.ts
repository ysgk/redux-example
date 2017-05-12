import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h3>Counter</h3>
      <button (click)="increment.emit()">Increment</button>
      <button (click)="decrement.emit()">Decrement</button>
      <span>{{value}}</span>
      <button (click)="reset.emit()">Reset</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  @Input() value: number;

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
}
