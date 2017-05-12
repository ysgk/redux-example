import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as asyncCounter from '../actions/async-counter';
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

  constructor(
    private action$: Actions,
  ) {

  }
}
