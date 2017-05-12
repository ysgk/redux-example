import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <app-counter-container></app-counter-container>
      <app-async-counter-container></app-async-counter-container>
    </app-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { }
