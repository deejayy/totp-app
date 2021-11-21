import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { DEFAULT_PERIOD, Token } from '@feature/tokens/model/token.model';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import totp from 'totp-generator';

const MSEC_IN_SEC = 1000;
const UDPATE_INTERVAL = 1000;
const UPDATE_EVERY = 5;

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenListComponent {
  @ViewChild('copyInput', { static: true, read: ElementRef }) public copyInput!: ElementRef;

  public refresh$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public paused$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public tokens$: Observable<Token[]> = combineLatest([
    combineLatest([this.tokenService.tokens$, timer(0, UDPATE_INTERVAL), this.paused$]).pipe(
      filter(([, , paused]) => !paused),
      map(([tokens]) => {
        return tokens.map((token) => ({
          ...token,
          timeLeft:
            (token.period || DEFAULT_PERIOD) -
            (Math.round(new Date().getTime() / MSEC_IN_SEC) % (token.period || DEFAULT_PERIOD)),
          code: totp(token.key).toString(),
        }));
      }),
    ),
    this.refresh$,
  ]).pipe(
    filter(([tokens]) => tokens.some((token) => token.timeLeft % UPDATE_EVERY === 0)),
    map(([tokens]) => tokens),
  );

  private interval!: NodeJS.Timeout;

  public updateTokens = (manual: boolean = false) => {
    this.refresh$.next(manual);
  };

  constructor(private tokenService: TokenStoreService) {
    this.start();
  }

  private start() {
    this.paused$.next(false);
    this.updateTokens(true);
  }

  private stop() {
    this.paused$.next(true);
  }

  public drop(event: CdkDragDrop<Token[]>) {
    this.tokenService.moveToken(event.previousIndex, event.currentIndex);
    // moveItemInArray(this.tokens$.getValue(), );
  }

  public unfreeze() {
    this.start();
  }

  public freeze() {
    this.stop();
  }

  public copy(code: string) {
    const copyText = this.copyInput.nativeElement;
    copyText.value = code;
    copyText.select();
    copyText.setSelectionRange(0, code.length);
    navigator.clipboard.writeText(copyText.value as string);
  }
}
