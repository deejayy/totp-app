import { moveItemInArray } from '@angular/cdk/drag-drop';
import { produceOn } from '@core/helper/produce-on';
import { Action, createReducer } from '@ngrx/store';

import { TokenStoreActions } from './token-store.actions';
import { tokenStoreInitialState, TokenStoreState } from './token-store.state';

const reducer = createReducer(
  tokenStoreInitialState,
  produceOn(TokenStoreActions.setTokens, (draft, action) => {
    draft.tokens = action.payload;
  }),
  produceOn(TokenStoreActions.moveTokens, (draft, action) => {
    moveItemInArray(draft.tokens, action.payload.from, action.payload.to);
  }),
  produceOn(TokenStoreActions.addToken, (draft, action) => {
    draft.tokens = draft.tokens || [];
    draft.tokens.push({
      key: action.payload.key || '',
      label: action.payload.label || '',
      timeLeft: 0,
    });
  }),
  produceOn(TokenStoreActions.toggleVisibility, (draft, action) => {
    draft.tokens = draft.tokens.map((token) => ({
      ...token,
      visible: token.key === action.payload.key ? !token.visible : token.visible,
    }));
  }),
);

export const tokenstoreReducer = (state: TokenStoreState, action: Action): TokenStoreState => {
  return reducer(state, action);
};
