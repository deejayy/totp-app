import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensComponent {}
