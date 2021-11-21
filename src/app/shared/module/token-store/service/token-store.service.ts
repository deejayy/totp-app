import { Injectable } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStoreService {
  public tokens$: Observable<Token[]> = of([
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
  ]);

  public moveToken(from: number, to: number) {
    console.log('moving', { from, to });
  }
}
