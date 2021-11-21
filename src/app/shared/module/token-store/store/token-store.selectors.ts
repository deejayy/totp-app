import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TokenStoreState } from './token-store.state';

const getTokenStoreState = createFeatureSelector<TokenStoreState>('tokenStore');

export class TokenStoreSelectors {
  public static getTokens = createSelector(getTokenStoreState, (state: TokenStoreState) => state.tokens);
}
