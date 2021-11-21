import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';
import { BehaviorSubject } from 'rxjs';

import totp from 'totp-generator';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenListComponent {
  public tokens$: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>([
    {
      key: 'KNCUGUSFKRFUKWJR',
      code: '123456',
      label: 'amazon',
      timeLeft: 22,
      visible: false,
    },
    {
      key: 'JBSWY3DPEHPK3PXP',
      code: '789456',
      label: 'google',
      timeLeft: 2,
      visible: false,
    },
    {
      key: 'GEZDGNBVGY3TQOJK',
      code: '45678911',
      label: 'facebook',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'D6RZI4ROAUQKJNAA',
      code: '123978',
      label: 'discord',
      timeLeft: 15,
      visible: false,
    },
    {
      key: 'QKYPN7W7LNV43GAA',
      code: '123978',
      label: 'paypal',
      timeLeft: 30,
      visible: false,
    },
  ]);

  constructor() {
    setInterval(() => {
      this.tokens$.next(
        this.tokens$.getValue().map((token) => ({
          ...token,
          timeLeft: 30 - Math.round(new Date().getTime() / 1000) % 30,
          code: totp(token.key).toString(),
        })),
      );
    }, 1000);
  }
}
