import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenListComponent {
  public tokens: Token[] = [
    {
      key: 'KNCU GUSF KRFU KWJR',
      code: '123456',
      label: 'amazon',
      timeLeft: 20,
      visible: false,
    },
    {
      key: 'JBSW Y3DP EHPK 3PXP',
      code: '789456',
      label: 'google',
      timeLeft: 20,
      visible: false,
    },
    {
      key: 'GEZD GNBV GY3T QOJK',
      code: '45678911',
      label: 'facebook',
      timeLeft: 20,
      visible: false,
    },
    {
      key: 'D6RZ I4RO AUQK JNAA',
      code: '123978',
      label: 'discord',
      timeLeft: 20,
      visible: false,
    },
    {
      key: 'QKYP N7W7 LNV4 3GAA',
      code: '123978',
      label: 'paypal',
      timeLeft: 20,
      visible: false,
    },
  ];
}
