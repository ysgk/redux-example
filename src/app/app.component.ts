import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-container></app-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
