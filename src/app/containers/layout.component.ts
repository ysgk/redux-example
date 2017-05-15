import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <md-sidenav-container fullscreen>

      <ng-content></ng-content>

    </md-sidenav-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent { }
