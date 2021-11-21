import { produceOn } from '@core/helper/produce-on';
import { Action, createReducer } from '@ngrx/store';

import { TokenStoreActions } from './token-store.actions';
import { tokenStoreInitialState, TokenStoreState } from './token-store.state';

const reducer = createReducer(
  tokenStoreInitialState,
  produceOn(TokenStoreActions.setTokens, (draft, action) => {
    draft.tokens = action.payload;
  }),
);

export const tokenstoreReducer = (state: TokenStoreState, action: Action): TokenStoreState => {
  return reducer(state, action);
};
