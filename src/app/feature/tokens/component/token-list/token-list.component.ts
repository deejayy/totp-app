import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenListComponent {
  public tokens$: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>([
    {
      key: 'KNCU GUSF KRFU KWJR',
      code: '123456',
      label: 'amazon',
      timeLeft: 22,
      visible: false,
    },
    {
      key: 'JBSW Y3DP EHPK 3PXP',
      code: '789456',
      label: 'google',
      timeLeft: 2,
      visible: false,
    },
    {
      key: 'GEZD GNBV GY3T QOJK',
      code: '45678911',
      label: 'facebook',
      timeLeft: 0,
      visible: false,
    },
    {
      key: 'D6RZ I4RO AUQK JNAA',
      code: '123978',
      label: 'discord',
      timeLeft: 15,
      visible: false,
    },
    {
      key: 'QKYP N7W7 LNV4 3GAA',
      code: '123978',
      label: 'paypal',
      timeLeft: 30,
      visible: false,
    },
  ]);

  constructor() {
    setInterval(() => {
      this.tokens$.next(
        this.tokens$.getValue().map((token) => ({ ...token, timeLeft: token.timeLeft < 1 ? 30 : token.timeLeft - 1 })),
      );
    }, 1000);
  }
}
