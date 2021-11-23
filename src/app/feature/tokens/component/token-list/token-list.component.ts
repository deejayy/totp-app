import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_PERIOD, Token } from '@shared/model/token.model';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';
import { BehaviorSubject, combineLatest, Observable, Subscription, timer } from 'rxjs';
import { filter, map, startWith, switchMap, take } from 'rxjs/operators';
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
export class TokenListComponent implements OnDestroy {
  @ViewChild('copyInput', { static: true, read: ElementRef }) public copyInput!: ElementRef;

  public paused$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public editing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public form: FormGroup = new FormGroup({
    labels: new FormArray([]),
  });

  private subs: Subscription = new Subscription();

  public generateTotp = (key: string): string => {
    let code = '';

    try {
      code = totp(key).toString();
    } catch (e) {
      console.error(e);
    }

    return code;
  };

  public calculateTimeleft = (period?: number): number =>
    (period || DEFAULT_PERIOD) - (Math.round(new Date().getTime() / MSEC_IN_SEC) % (period || DEFAULT_PERIOD));

  public generateCodes = (tokens: Token[]): Token[] => {
    return (
      tokens?.map((token) => {
        return {
          ...token,
          timeLeft: this.calculateTimeleft(token.period),
          code: this.generateTotp(token.key),
        };
      }) || []
    );
  };

  public createFormControls = (tokens: Token[]): Token[] => {
    const cTokens = tokens.map((token) => ({ ...token, control: new FormControl(token.label) }));
    this.form.controls.labels = new FormArray(cTokens.map((token) => token.control as AbstractControl));
    return cTokens;
  };

  public tokens$: Observable<Token[]> = this.getTokens();
  public tokensDisplay$: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>([]);

  constructor(private tokenService: TokenStoreService, private router: Router) {
    this.start();
    this.subs.add(this.tokens$.subscribe((tokens) => this.tokensDisplay$.next(tokens)));
  }

  private getTokens() {
    const tokens$ = combineLatest([this.tokenService.tokens$, timer(0, UDPATE_INTERVAL)]).pipe(
      map(([tokens]) => tokens),
      map(this.generateCodes),
      map(this.createFormControls),
    );

    const tick$ = combineLatest([
      this.tokenService.tokens$.pipe(map(() => true)),
      tokens$.pipe(filter((tokens) => tokens.some((token) => token.timeLeft % UPDATE_EVERY === 0))),
      this.paused$,
    ]).pipe(
      filter(([dataChange, tick, paused]) => (dataChange || tick) && !paused),
      startWith(true),
    );

    return tick$.pipe(
      filter(Boolean),
      switchMap(() => tokens$.pipe(take(1))),
    );
  }

  private start() {
    this.paused$.next(false);
  }

  private stop() {
    this.paused$.next(true);
  }

  public drop(event: CdkDragDrop<Token[]>) {
    this.tokenService.moveToken(event.previousIndex, event.currentIndex);
    moveItemInArray(this.tokensDisplay$.getValue(), event.previousIndex, event.currentIndex);
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

  public edit() {
    console.log(this.form.value);

    this.paused$.next(true);
    this.editing$.next(true);
  }

  public save() {
    console.log(this.form.value);

    this.paused$.next(false);
    this.editing$.next(false);
  }

  public cancelEdit() {
    this.paused$.next(false);
    this.editing$.next(false);
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

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
