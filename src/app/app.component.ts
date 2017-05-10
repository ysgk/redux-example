import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter-container></app-counter-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
