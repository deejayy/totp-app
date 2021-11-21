import { ActionReducer } from '@ngrx/store';
import { TokenStoreState } from '@shared/module/token-store/store/token-store.state';

export const initStateFromLocalStorage = (
  reducer: ActionReducer<{ tokenStore: TokenStoreState }>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ActionReducer<any> => {
  return (state: { tokenStore: TokenStoreState }, action) => {
    const newState = { ...reducer(state, action) };

    if (action.type === '@ngrx/effects/init') {
      try {
        const tokens = window.localStorage.getItem('tokens');
        newState.tokenStore.tokens = JSON.parse(tokens as string);
      } catch (error) {
        console.error('[TokenStore] Invalid data in localStorage, ', error);
      }
    }

    return newState;
  };
};
