import { Injectable } from '@angular/core';
import { Token } from '@shared/model/token.model';
import { TokenStoreFacade } from '@shared/module/token-store/store/token-store.facade';
import { Observable } from 'rxjs';

@Injectable()
export class TokenStoreService {
  public tokens$: Observable<Token[]> = this.tokenStoreFacade.tokens$;

  public tokens: Token[] = [
    {
      key: 'KNCUGUSFKRFUKWJR',
      code: '',
      label: 'amazon',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'JBSWY3DPEHPK3PXP',
      code: '',
      label: 'google',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'GEZDGNBVGY3TQOJK',
      code: '',
      label: 'facebook',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'D6RZI4ROAUQKJNAA',
      code: '',
      label: 'discord',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'QKYPN7W7LNV43GAA',
      code: '',
      label: 'paypal',
      timeLeft: 0,
      visible: false,
    },
  ];

  constructor(private tokenStoreFacade: TokenStoreFacade) {
    // this.setTokens(this.tokens);
  }

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
