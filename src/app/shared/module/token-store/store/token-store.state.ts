import { Token } from '@shared/model/token.model';

export interface TokenStoreState {
  tokens: Token[];
}

export const tokenStoreInitialState: TokenStoreState = {
  tokens: [],
};
