import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getShowSidenav, State } from '../reducers/index';
import * as layout from '../actions/layout.actions';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$|async">
        <app-nav-item (activate)="closeSidenav()" routerLink="/" icon="book" hint="View your book collection">
          Home
        </app-nav-item>
      </app-sidenav>
      <app-toolbar (openMenu)="openSidenav()">
        Redux Example
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(getShowSidenav);
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
