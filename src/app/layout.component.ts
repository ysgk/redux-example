import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent { }
