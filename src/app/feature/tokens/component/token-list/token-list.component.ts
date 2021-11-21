import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DEFAULT_PERIOD, Token } from '@feature/tokens/model/token.model';
import { BehaviorSubject } from 'rxjs';
import totp from 'totp-generator';

const MSEC_IN_SEC = 1000;
const UDPATE_INTERVAL = 1000;

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

  private interval!: NodeJS.Timeout;

  constructor() {
    this.start();
  }

  private start() {
    this.interval = setInterval(() => {
      this.tokens$.next(
        this.tokens$.getValue().map((token) => ({
          ...token,
          timeLeft:
            (token.period || DEFAULT_PERIOD) -
            (Math.round(new Date().getTime() / MSEC_IN_SEC) % (token.period || DEFAULT_PERIOD)),
          code: totp(token.key).toString(),
        })),
      );
    }, UDPATE_INTERVAL);
  }

  private stop() {
    clearInterval(this.interval);
  }

  public drop(event: CdkDragDrop<Token[]>) {
    moveItemInArray(this.tokens$.getValue(), event.previousIndex, event.currentIndex);
  }

  public unfreeze() {
    this.start();
  }

  public freeze() {
    this.stop();
  }
}
