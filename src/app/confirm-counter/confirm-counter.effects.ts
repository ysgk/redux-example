import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as confirmCounter from './confirm-counter.actions';
import 'rxjs/add/operator/map';

function confirm(): boolean {
  return window.confirm('reset?');
}

@Injectable()
export class ConfirmCounterEffects {

  @Effect() reset$ = this.action$
    .ofType(confirmCounter.RESET_CONFIRM)
    .map(() => {
      if (confirm()) {
        return new confirmCounter.ResetAction() as confirmCounter.Actions;
      } else {
        return new confirmCounter.ResetCancelAction() as confirmCounter.Actions;
      }
    });

  constructor(
    private action$: Actions,
  ) {

  }
}
