import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_PERIOD, Token } from '@shared/model/token.model';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';
import { BehaviorSubject, combineLatest, merge, Observable, timer } from 'rxjs';
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

  public paused$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private tick$ = timer(0, UDPATE_INTERVAL);

  public tokens$: Observable<Token[]> = combineLatest([
    combineLatest([this.tokenService.tokens$, this.tick$, this.paused$]).pipe(
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
    merge(this.tokenService.tokens$, this.tick$),
  ]).pipe(
    filter(([tokens, tick]) => tokens.some((token) => Array.isArray(tick) || token.timeLeft % UPDATE_EVERY === 0)),
    map(([tokens]) => tokens),
  );

  constructor(private tokenService: TokenStoreService, private router: Router) {
    this.start();
  }

  private start() {
    this.paused$.next(false);
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

  public add() {
    this.router.navigateByUrl('/token-edit');
  }

  public toggle(key: string) {
    this.tokenService.toggleVisibility(key);
  }

  public copy(code: string) {
    const copyText = this.copyInput.nativeElement;
    copyText.value = code;
    copyText.select();
    copyText.setSelectionRange(0, code.length);
    navigator.clipboard.writeText(copyText.value as string);
  }
}
