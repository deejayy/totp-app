import { Injectable } from '@angular/core';
import { Token } from '@shared/model/token.model';
import { TokenStoreFacade } from '@shared/module/token-store/store/token-store.facade';
import { Observable } from 'rxjs';

@Injectable()
export class TokenStoreService {
  public tokens$: Observable<Token[]> = this.tokenStoreFacade.tokens$;

  constructor(private tokenStoreFacade: TokenStoreFacade) {}

  public moveToken(from: number, to: number) {
    this.tokenStoreFacade.moveTokens(from, to);
  }

  public setTokens(tokens: Token[]) {
    this.tokenStoreFacade.setTokens(tokens);
  }

  public updateTokens(tokens: { label: string }[]) {
    this.tokenStoreFacade.updateTokens(tokens);
  }

  public toggleVisibility(key: string) {
    this.tokenStoreFacade.toggleVisibility(key);
  }

  public addToken(token: Partial<Token>) {
    this.tokenStoreFacade.addToken(token);
  }
}
