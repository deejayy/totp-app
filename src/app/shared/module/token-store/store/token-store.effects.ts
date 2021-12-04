import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TokenStoreState } from '@shared/module/token-store/store/token-store.state';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { TokenStoreActions } from './token-store.actions';
import { TokenStoreSelectors } from './token-store.selectors';

@Injectable()
export class TokenStoreEffects {
  constructor(private actions$: Actions, private store: Store<TokenStoreState>) {}

  public setTokens$: Observable<void> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          TokenStoreActions.setTokens,
          TokenStoreActions.moveTokens,
          TokenStoreActions.toggleVisibility,
          TokenStoreActions.updateTokens,
        ),
        withLatestFrom(this.store.select(TokenStoreSelectors.getTokens)),
        map(([, tokens]) => window.localStorage.setItem('tokens', JSON.stringify(tokens))),
      ),
    { dispatch: false },
  );
}
