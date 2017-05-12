import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-async-counter',
  template: `
    <div class="async-counter">
      <button (click)="increment.emit()">Increment</button>
      <button (click)="decrement.emit()">Decrement</button>
      <span>{{value}}</span>
      <button (click)="reset.emit()">Reset</button>
      <div *ngIf="loading">Loading...</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncCounterComponent {

  @Input() value: number;
  @Input() loading: boolean;

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
}
