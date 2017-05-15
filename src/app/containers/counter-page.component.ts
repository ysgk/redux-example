import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  template: `
    <app-counter-container></app-counter-container>
    <app-async-counter-container></app-async-counter-container>
    <app-confirm-counter-container></app-confirm-counter-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
}
