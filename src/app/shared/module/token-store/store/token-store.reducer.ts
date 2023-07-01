import { moveItemInArray } from '@angular/cdk/drag-drop';
import { produceOn } from '@shared/helper/produce-on';
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
      visible: true,
    });
  }),
  produceOn(TokenStoreActions.toggleVisibility, (draft, action) => {
    draft.tokens = draft.tokens.map((token) => ({
      ...token,
      visible: token.key === action.payload.key ? !token.visible : token.visible,
    }));
  }),
  produceOn(TokenStoreActions.updateTokens, (draft, action) => {
    draft.tokens = draft.tokens
      .map((token, idx) => {
        token.label = action.payload[idx]?.label ?? '';
        return token;
      })
      .filter((token) => token.label !== null);
  }),
);

export const tokenstoreReducer = (state: TokenStoreState, action: Action): TokenStoreState => {
  return reducer(state, action);
};
