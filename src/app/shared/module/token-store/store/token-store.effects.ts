import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStoreActions } from './token-store.actions';

@Injectable()
export class TokenStoreEffects {
  constructor(private actions$: Actions) {}

  public setTokens$: Observable<void> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TokenStoreActions.setTokens),
        map((payload) => window.localStorage.setItem('tokens', JSON.stringify(payload.payload))),
      ),
    { dispatch: false },
  );
}
