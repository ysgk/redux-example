import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as asyncCounter from './async-counter.actions';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class AsyncCounterEffects {

  @Effect() increment$ = this.action$
    .ofType(asyncCounter.INCREMENT)
    .switchMap(() => {
      const next = this.action$.ofType(asyncCounter.INCREMENT).skip(1);

      return of(new asyncCounter.IncrementSuccessAction()).delay(200).takeUntil(next);
    });

  @Effect() decrement$ = this.action$
    .ofType(asyncCounter.DECREMENT)
    .switchMap(() => {
      const next = this.action$.ofType(asyncCounter.DECREMENT).skip(1);

      return of(new asyncCounter.DecrementSuccessAction()).delay(200).takeUntil(next);
    });

  @Effect() reset$ = this.action$
    .ofType(asyncCounter.RESET)
    .switchMap(() => {
      const next = this.action$.ofType(asyncCounter.RESET).skip(1);

      return of(new asyncCounter.ResetSuccessAction()).delay(200).takeUntil(next);
    });

  constructor(
    private action$: Actions,
  ) {

  }
}
