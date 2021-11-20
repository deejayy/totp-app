import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenListComponent {}
