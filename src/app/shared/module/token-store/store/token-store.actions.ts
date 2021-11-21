import { Payload } from '@core/model/payload';
import { Token } from '@feature/tokens/model/token.model';
import { createAction, props } from '@ngrx/store';

export class TokenStoreActions {
  public static setTokens = createAction('[TokenStore] Set tokens', props<Payload<Token[]>>());
  public static moveTokens = createAction('[TokenStore] Move tokens', props<Payload<{ from: number; to: number }>>());
  public static toggleVisibility = createAction('[TokenStore] Toggle visibility', props<Payload<{ key: string }>>());
}
