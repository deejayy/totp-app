import { Token } from '@feature/tokens/model/token.model';

export interface TokenStoreState {
  tokens: Token[];
}

export const tokenStoreInitialState: TokenStoreState = {
  tokens: [],
};
